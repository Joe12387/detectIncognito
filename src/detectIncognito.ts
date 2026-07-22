/*!
 *
 * detectIncognito v1.7.0
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * MIT License
 *
 * Copyright (c) 2021 - 2026 Joe Rutkowski <Joe@dreggle.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Please keep this comment intact in order to properly abide by the MIT License.
 *
 **/
declare global {
  interface Window {
    detectIncognito: typeof detectIncognito;
  }
}

export async function detectIncognito(): Promise<{ isPrivate: boolean; browserName: string }> {
  return await new Promise(function (resolve, reject) {
    let browserName = 'Unknown'

    let callbackSettled = false
    function __callback(isPrivate: boolean): void {
      if (callbackSettled) {
        return
      }
      callbackSettled = true
      resolve({
        isPrivate,
        browserName
      })
    }

    function identifyChromium(): string {
      const ua = navigator.userAgent
      if (ua.match(/Chrome/)) {
        if ((navigator as any).brave !== undefined) {
          return 'Brave'
        } else if (ua.match(/Edg/)) {
          return 'Edge'
        } else if (ua.match(/OPR/)) {
          return 'Opera'
        }
        return 'Chrome'
      } else {
        return 'Chromium'
      }
    }

    function feid(): number {
      let toFixedEngineID = 0
      let neg = parseInt("-1")
      try {
        neg.toFixed(neg)
      } catch (e) {
        toFixedEngineID = (e as Error).message.length
      }
      return toFixedEngineID
    }

    function isSafari(): boolean {
      return feid() === 44 || feid() === 43
    }

    function isChrome(): boolean {
      return feid() === 51
    }

    function isFirefox(): boolean {
      return feid() === 25
    }

    function isMSIE(): boolean {
      return (navigator as any).msSaveBlob !== undefined
    }

    /**
     * Safari (Safari for iOS & macOS)
     **/

    async function currentSafariTest() {
      try {
        await navigator.storage.getDirectory();
        __callback(false)
      } catch (e) {
        let message = (e instanceof Error && typeof e.message === 'string') ? e.message : String(e)

        const matchesExpectedError = message.includes('unknown transient reason')

        __callback(matchesExpectedError)
      }
    }

    function safari13to18Test(): void {
      const tmp = String(Math.random());

      try {
        const dbReq = indexedDB.open(tmp, 1);

        dbReq.onupgradeneeded = (ev) => {
          const db = (ev.target as IDBOpenDBRequest).result;

          const finish = (priv: boolean) => { __callback(priv); };

          try {
            db.createObjectStore('t', { autoIncrement: true }).put(new Blob());
            finish(false)
          } catch (err) {
            const message = (err instanceof Error && typeof err.message === 'string') ? err.message : String(err);
            if (message.includes('are not yet supported')) finish(true);
            else finish(false);
          } finally {
            db.close();
            indexedDB.deleteDatabase(tmp);
          }
        };

        dbReq.onerror = () => __callback(false)
      } catch {
        __callback(false)
      }
    }

    function oldSafariTest(): void {
      const openDB = (window as any).openDatabase
      const storage = window.localStorage
      try {
        openDB(null, null, null, null)
      } catch (e) {
        __callback(true); return
      }
      try {
        storage.setItem('test', '1')
        storage.removeItem('test')
      } catch (e) {
        __callback(true); return
      }
      __callback(false)
    }

    async function safariPrivateTest(): Promise<void> {
      if (typeof navigator.storage?.getDirectory === 'function') {
        await currentSafariTest()
      } else if (navigator.maxTouchPoints !== undefined) {
        safari13to18Test()
      } else {
        oldSafariTest()
      }
    }

    /**
     * Chrome
     **/

    // Incognito IndexedDB is in-memory (leveldb memenv): a durability:"strict" commit's
    // fsync is a no-op, same cost as "relaxed" => ratio ~1. On disk, strict fsyncs =>
    // ratio > 1. The ratio is self-normalizing, so it holds across hardware where the old
    // absolute OPFS-flush threshold false-positived on Android (issue #65). Runs on the
    // main thread — no Worker/CSP dependency. Calibrated on 18 real Android devices + real
    // desktop incognito: 16 KB payload, threshold 1.30, median of up to ROUNDS readings
    // (at least MIN_ROUNDS), bounded by a ~1s wall-clock cap so slow phones don't hang.
    // Premise is the LevelDB memenv backend; re-validate if the IndexedDB SQLite backend
    // (IdbSqliteBackingStore) ever Finch-rolls to default.
    function chromePrivateTest(): void {
      const PAYLOAD = 16384
      const WRITES = 15
      const ROUNDS = 15      // max rounds
      const MIN_ROUNDS = 7   // always run at least this many before the cap can stop us
      const CAP_MS = 1000    // soft wall-clock budget; slow devices stop early (but >= MIN_ROUNDS)
      const THRESHOLD = 1.30

      const dbName = '__di_' + Math.random().toString(36).slice(2)
      const payload = new Uint8Array(PAYLOAD)
      const req = indexedDB.open(dbName, 1)
      req.onupgradeneeded = () => { req.result.createObjectStore('s') }
      req.onerror = () => { indexedDB.deleteDatabase(dbName); __callback(false) }
      req.onsuccess = () => {
        const db = req.result

        // Bail out if the durability hint is not honored (older engines) — the strict vs
        // relaxed split would be a no-op and the test meaningless. Abstain => not private.
        let honored = false
        try {
          const t = db.transaction('s', 'readwrite', { durability: 'strict' })
          honored = t.durability === 'strict'
          t.abort()
        } catch { /* durability option unsupported */ }
        if (!honored) { db.close(); indexedDB.deleteDatabase(dbName); __callback(false); return }

        // Time WRITES sequential single-put commits at a given durability. Sequential
        // (await each commit) so leveldb group-commit can't amortize the strict fsync
        // across the batch.
        const block = (durability: 'strict' | 'relaxed'): Promise<number> =>
          new Promise((resolve, reject) => {
            const t0 = performance.now()
            let i = 0
            const step = (): void => {
              if (i === WRITES) { resolve(performance.now() - t0); return }
              const tx = db.transaction('s', 'readwrite', { durability })
              tx.objectStore('s').put(payload, i)
              i++
              tx.oncomplete = step
              tx.onerror = tx.onabort = () => reject(tx.error)
            }
            step()
          })

        void (async () => {
          const start = performance.now()
          await block('relaxed'); await block('strict') // warm-up, discarded
          const ratios: number[] = []
          for (let r = 0; r < ROUNDS; r++) {
            const rel = await block('relaxed')
            const str = await block('strict')
            ratios.push(rel > 0 ? str / rel : Infinity) // median-of-rounds tames the tail
            // Bound wall-clock: once past MIN_ROUNDS, stop when the budget is spent. The
            // devices that hit this are the high-margin slow ones, so accuracy is preserved.
            if (ratios.length >= MIN_ROUNDS && performance.now() - start >= CAP_MS) break
          }
          ratios.sort((a, b) => a - b)
          db.close(); indexedDB.deleteDatabase(dbName)
          __callback(ratios[ratios.length >> 1] < THRESHOLD) // ~1.0 = incognito; disk >> 1.30
        })().catch(() => { db.close(); indexedDB.deleteDatabase(dbName); __callback(false) })
      }
    }

    /**
     * Firefox
     **/

    async function firefoxPrivateTest(): Promise<void> {
      if (typeof navigator.storage?.getDirectory === 'function') {
        try {
          await navigator.storage.getDirectory()
          __callback(false)
        } catch (e) {
          let message = (e instanceof Error && typeof e.message === 'string') ? e.message : String(e)

          const matchesExpectedError = message.includes('Security error')

          __callback(matchesExpectedError); return
        }
      }
      else {
        const request = indexedDB.open('inPrivate');

        request.onerror = (event) => {
          if (request.error && request.error.name === 'InvalidStateError') {
            event.preventDefault();
          }
          __callback(true);
        };

        request.onsuccess = () => {
          indexedDB.deleteDatabase('inPrivate');
          __callback(false);
        };
      }
    }

    /**
     * MSIE
     **/

    function msiePrivateTest(): void {
      __callback(window.indexedDB === undefined)
    }

    async function main(): Promise<void> {
      if (isSafari()) {
        browserName = 'Safari'
        await safariPrivateTest()
      } else if (isChrome()) {
        browserName = identifyChromium()
        chromePrivateTest()
      } else if (isFirefox()) {
        browserName = 'Firefox'
        await firefoxPrivateTest()
      } else if (isMSIE()) {
        browserName = 'Internet Explorer'
        msiePrivateTest()
      } else {
        reject(new Error('detectIncognito cannot determine the browser'))
      }
    }

    main().catch(reject)
  })
}

if (typeof window !== 'undefined') {
  window.detectIncognito = detectIncognito;
}

export default detectIncognito;
