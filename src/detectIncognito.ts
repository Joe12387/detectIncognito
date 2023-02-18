/**
 *
 * detectIncognito v1.3.0 - (c) 2022 Joe Rutkowski <Joe@dreggle.com> (https://github.com/Joe12387/detectIncognito)
 *
 **/
export const detectIncognito = function (): Promise<{
  isPrivate: boolean;
  browserName: string;
}> {
  return new Promise(function (resolve, reject) {
    let browserName = "Unknown";

    function __callback(isPrivate: any): void {
      resolve({
        isPrivate: isPrivate,
        browserName: browserName,
      });
    }

    function identifyChromium(): string {
      const ua = navigator.userAgent;
      if (ua.match(/Chrome/)) {
        if ((navigator as any).brave !== undefined) {
          return "Brave";
        } else if (ua.match(/Edg/)) {
          return "Edge";
        } else if (ua.match(/OPR/)) {
          return "Opera";
        }
        return "Chrome";
      } else {
        return "Chromium";
      }
    }

    function assertEvalToString(value: any): boolean {
      return value === eval.toString().length;
    }

    function isSafari(): boolean {
      const v = navigator.vendor;
      return (
        v !== undefined && v.indexOf("Apple") === 0 && assertEvalToString(37)
      );
    }

    function isChrome(): boolean {
      const v = navigator.vendor;
      return (
        v !== undefined && v.indexOf("Google") === 0 && assertEvalToString(33)
      );
    }

    function isFirefox(): boolean {
      return (
        document.documentElement !== undefined &&
        (document as any).documentElement.style.MozAppearance !== undefined &&
        assertEvalToString(37)
      );
    }

    function isMSIE(): boolean {
      return (
        (navigator as any).msSaveBlob !== undefined && assertEvalToString(39)
      );
    }

    /**
     * Safari (Safari for iOS & macOS)
     **/

    function newSafariTest(): void {
      const tmp_name = String(Math.random());

      try {
        const db = window.indexedDB.open(tmp_name, 1);

        db.onupgradeneeded = function (i) {
          const res = i.target?.result;

          try {
            res.createObjectStore("test", {
              autoIncrement: true,
            }).put(new Blob);

            __callback(false);
          } catch (e) {
            let message = e;

            if (e instanceof Error) {
              message = e.message ?? e;
            }

            if (typeof message !== 'string') {
              return __callback(false);
            }

            const matchesExpectedError = /BlobURLs are not yet supported/.test(message);

            return __callback(matchesExpectedError);
          } finally {
            res.close();
            window.indexedDB.deleteDatabase(tmp_name);
          }
        }
      } catch (e) {
        return __callback(false);
      }
    }

    function oldSafariTest(): void {
      const openDB = (window as any).openDatabase;
      const storage = window.localStorage;
      try {
        openDB(null, null, null, null);
      } catch (e) {
        return __callback(true);
      }
      try {
        storage.setItem("test", "1");
        storage.removeItem("test");
      } catch (e) {
        return __callback(true);
      }
      return __callback(false);
    }

    function safariPrivateTest(): void {
      if (navigator.maxTouchPoints !== undefined) {
        newSafariTest();
      } else {
        oldSafariTest();
      }
    }

    /**
     * Chrome
     **/

    function getQuotaLimit(): number {
      const w = window as any;
      if (
        w.performance !== undefined &&
        w.performance.memory !== undefined &&
        w.performance.memory.jsHeapSizeLimit !== undefined
      ) {
        return (performance as any).memory.jsHeapSizeLimit;
      }
      return 1073741824;
    }

    // >= 76
    function storageQuotaChromePrivateTest(): void {
      (navigator as any).webkitTemporaryStorage.queryUsageAndQuota(
        function (_: number, quota: number) {
          const quotaInMib = Math.round(quota / (1024 * 1024));
          const quotaLimitInMib = Math.round(getQuotaLimit() / (1024 * 1024)) * 2;

          __callback(quotaInMib < quotaLimitInMib);
        },
        function (e: any) {
          reject(
            new Error(
              "detectIncognito somehow failed to query storage quota: " +
                e.message
            )
          );
        }
      );
    }

    // 50 to 75
    function oldChromePrivateTest(): void {
      const fs = (window as any).webkitRequestFileSystem;
      const success = function () {
        __callback(false);
      };
      const error = function () {
        __callback(true);
      };
      fs(0, 1, success, error);
    }

    function chromePrivateTest(): void {
      if (self.Promise !== undefined && (self.Promise as any).allSettled !== undefined) {
        storageQuotaChromePrivateTest();
      } else {
        oldChromePrivateTest();
      }
    }

    /**
     * Firefox
     **/

    function firefoxPrivateTest(): void {
      __callback(navigator.serviceWorker === undefined);
    }

    /**
     * MSIE
     **/

    function msiePrivateTest(): void {
      __callback(window.indexedDB === undefined);
    }

    function main(): void {
      if (isSafari()) {
        browserName = 'Safari';
        safariPrivateTest();
      } else if (isChrome()) {
        browserName = identifyChromium();
        chromePrivateTest();
      } else if (isFirefox()) {
        browserName = "Firefox";
        firefoxPrivateTest();
      } else if (isMSIE()) {
        browserName = "Internet Explorer";
        msiePrivateTest();
      } else {
        reject(new Error("detectIncognito cannot determine the browser"));
      }
    }

    main();
  });
};
