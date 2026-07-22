"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.detectIncognito = void 0;
function detectIncognito() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        var browserName = 'Unknown';
                        var callbackSettled = false;
                        function __callback(isPrivate) {
                            if (callbackSettled) {
                                return;
                            }
                            callbackSettled = true;
                            resolve({
                                isPrivate: isPrivate,
                                browserName: browserName
                            });
                        }
                        function identifyChromium() {
                            var ua = navigator.userAgent;
                            if (ua.match(/Chrome/)) {
                                if (navigator.brave !== undefined) {
                                    return 'Brave';
                                }
                                else if (ua.match(/Edg/)) {
                                    return 'Edge';
                                }
                                else if (ua.match(/OPR/)) {
                                    return 'Opera';
                                }
                                return 'Chrome';
                            }
                            else {
                                return 'Chromium';
                            }
                        }
                        function feid() {
                            var toFixedEngineID = 0;
                            var neg = parseInt("-1");
                            try {
                                neg.toFixed(neg);
                            }
                            catch (e) {
                                toFixedEngineID = e.message.length;
                            }
                            return toFixedEngineID;
                        }
                        function isSafari() {
                            return feid() === 44 || feid() === 43;
                        }
                        function isChrome() {
                            return feid() === 51;
                        }
                        function isFirefox() {
                            return feid() === 25;
                        }
                        function isMSIE() {
                            return navigator.msSaveBlob !== undefined;
                        }
                        /**
                         * Safari (Safari for iOS & macOS)
                         **/
                        function currentSafariTest() {
                            return __awaiter(this, void 0, void 0, function () {
                                var e_1, message, matchesExpectedError;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, navigator.storage.getDirectory()];
                                        case 1:
                                            _a.sent();
                                            __callback(false);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_1 = _a.sent();
                                            message = (e_1 instanceof Error && typeof e_1.message === 'string') ? e_1.message : String(e_1);
                                            matchesExpectedError = message.includes('unknown transient reason');
                                            __callback(matchesExpectedError);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        function safari13to18Test() {
                            var tmp = String(Math.random());
                            try {
                                var dbReq = indexedDB.open(tmp, 1);
                                dbReq.onupgradeneeded = function (ev) {
                                    var db = ev.target.result;
                                    var finish = function (priv) { __callback(priv); };
                                    try {
                                        db.createObjectStore('t', { autoIncrement: true }).put(new Blob());
                                        finish(false);
                                    }
                                    catch (err) {
                                        var message = (err instanceof Error && typeof err.message === 'string') ? err.message : String(err);
                                        if (message.includes('are not yet supported'))
                                            finish(true);
                                        else
                                            finish(false);
                                    }
                                    finally {
                                        db.close();
                                        indexedDB.deleteDatabase(tmp);
                                    }
                                };
                                dbReq.onerror = function () { return __callback(false); };
                            }
                            catch (_a) {
                                __callback(false);
                            }
                        }
                        function oldSafariTest() {
                            var openDB = window.openDatabase;
                            var storage = window.localStorage;
                            try {
                                openDB(null, null, null, null);
                            }
                            catch (e) {
                                __callback(true);
                                return;
                            }
                            try {
                                storage.setItem('test', '1');
                                storage.removeItem('test');
                            }
                            catch (e) {
                                __callback(true);
                                return;
                            }
                            __callback(false);
                        }
                        function safariPrivateTest() {
                            var _a;
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(typeof ((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.getDirectory) === 'function')) return [3 /*break*/, 2];
                                            return [4 /*yield*/, currentSafariTest()];
                                        case 1:
                                            _b.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            if (navigator.maxTouchPoints !== undefined) {
                                                safari13to18Test();
                                            }
                                            else {
                                                oldSafariTest();
                                            }
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
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
                        function chromePrivateTest() {
                            var _this = this;
                            var PAYLOAD = 16384;
                            var WRITES = 15;
                            var ROUNDS = 15; // max rounds
                            var MIN_ROUNDS = 7; // always run at least this many before the cap can stop us
                            var CAP_MS = 1000; // soft wall-clock budget; slow devices stop early (but >= MIN_ROUNDS)
                            var THRESHOLD = 1.30;
                            var dbName = '__di_' + Math.random().toString(36).slice(2);
                            var payload = new Uint8Array(PAYLOAD);
                            var req = indexedDB.open(dbName, 1);
                            req.onupgradeneeded = function () { req.result.createObjectStore('s'); };
                            req.onerror = function () { indexedDB.deleteDatabase(dbName); __callback(false); };
                            req.onsuccess = function () {
                                var db = req.result;
                                // Bail out if the durability hint is not honored (older engines) — the strict vs
                                // relaxed split would be a no-op and the test meaningless. Abstain => not private.
                                var honored = false;
                                try {
                                    var t = db.transaction('s', 'readwrite', { durability: 'strict' });
                                    honored = t.durability === 'strict';
                                    t.abort();
                                }
                                catch ( /* durability option unsupported */_a) { /* durability option unsupported */ }
                                if (!honored) {
                                    db.close();
                                    indexedDB.deleteDatabase(dbName);
                                    __callback(false);
                                    return;
                                }
                                // Time WRITES sequential single-put commits at a given durability. Sequential
                                // (await each commit) so leveldb group-commit can't amortize the strict fsync
                                // across the batch.
                                var block = function (durability) {
                                    return new Promise(function (resolve, reject) {
                                        var t0 = performance.now();
                                        var i = 0;
                                        var step = function () {
                                            if (i === WRITES) {
                                                resolve(performance.now() - t0);
                                                return;
                                            }
                                            var tx = db.transaction('s', 'readwrite', { durability: durability });
                                            tx.objectStore('s').put(payload, i);
                                            i++;
                                            tx.oncomplete = step;
                                            tx.onerror = tx.onabort = function () { return reject(tx.error); };
                                        };
                                        step();
                                    });
                                };
                                void (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var start, ratios, r, rel, str;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                start = performance.now();
                                                return [4 /*yield*/, block('relaxed')];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, block('strict')]; // warm-up, discarded
                                            case 2:
                                                _a.sent(); // warm-up, discarded
                                                ratios = [];
                                                r = 0;
                                                _a.label = 3;
                                            case 3:
                                                if (!(r < ROUNDS)) return [3 /*break*/, 7];
                                                return [4 /*yield*/, block('relaxed')];
                                            case 4:
                                                rel = _a.sent();
                                                return [4 /*yield*/, block('strict')];
                                            case 5:
                                                str = _a.sent();
                                                ratios.push(rel > 0 ? str / rel : Infinity); // median-of-rounds tames the tail
                                                // Bound wall-clock: once past MIN_ROUNDS, stop when the budget is spent. The
                                                // devices that hit this are the high-margin slow ones, so accuracy is preserved.
                                                if (ratios.length >= MIN_ROUNDS && performance.now() - start >= CAP_MS)
                                                    return [3 /*break*/, 7];
                                                _a.label = 6;
                                            case 6:
                                                r++;
                                                return [3 /*break*/, 3];
                                            case 7:
                                                ratios.sort(function (a, b) { return a - b; });
                                                db.close();
                                                indexedDB.deleteDatabase(dbName);
                                                __callback(ratios[ratios.length >> 1] < THRESHOLD); // ~1.0 = incognito; disk >> 1.30
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })()["catch"](function () { db.close(); indexedDB.deleteDatabase(dbName); __callback(false); });
                            };
                        }
                        /**
                         * Firefox
                         **/
                        function firefoxPrivateTest() {
                            var _a;
                            return __awaiter(this, void 0, void 0, function () {
                                var e_2, message, matchesExpectedError, request_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(typeof ((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.getDirectory) === 'function')) return [3 /*break*/, 5];
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, navigator.storage.getDirectory()];
                                        case 2:
                                            _b.sent();
                                            __callback(false);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_2 = _b.sent();
                                            message = (e_2 instanceof Error && typeof e_2.message === 'string') ? e_2.message : String(e_2);
                                            matchesExpectedError = message.includes('Security error');
                                            __callback(matchesExpectedError);
                                            return [2 /*return*/];
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            request_1 = indexedDB.open('inPrivate');
                                            request_1.onerror = function (event) {
                                                if (request_1.error && request_1.error.name === 'InvalidStateError') {
                                                    event.preventDefault();
                                                }
                                                __callback(true);
                                            };
                                            request_1.onsuccess = function () {
                                                indexedDB.deleteDatabase('inPrivate');
                                                __callback(false);
                                            };
                                            _b.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        /**
                         * MSIE
                         **/
                        function msiePrivateTest() {
                            __callback(window.indexedDB === undefined);
                        }
                        function main() {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!isSafari()) return [3 /*break*/, 2];
                                            browserName = 'Safari';
                                            return [4 /*yield*/, safariPrivateTest()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 2:
                                            if (!isChrome()) return [3 /*break*/, 3];
                                            browserName = identifyChromium();
                                            chromePrivateTest();
                                            return [3 /*break*/, 6];
                                        case 3:
                                            if (!isFirefox()) return [3 /*break*/, 5];
                                            browserName = 'Firefox';
                                            return [4 /*yield*/, firefoxPrivateTest()];
                                        case 4:
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 5:
                                            if (isMSIE()) {
                                                browserName = 'Internet Explorer';
                                                msiePrivateTest();
                                            }
                                            else {
                                                reject(new Error('detectIncognito cannot determine the browser'));
                                            }
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        main()["catch"](reject);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.detectIncognito = detectIncognito;
if (typeof window !== 'undefined') {
    window.detectIncognito = detectIncognito;
}
exports["default"] = detectIncognito;
