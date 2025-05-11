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
                        function assertEvalToString(value) {
                            try {
                                return value === eval.toString().length;
                            }
                            catch (e) {
                                return false;
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
                            return feid() === 44;
                        }
                        function isChrome() {
                            return feid() === 51;
                        }
                        function isFirefox() {
                            return feid() === 25;
                        }
                        function isMSIE() {
                            return (navigator.msSaveBlob !== undefined && assertEvalToString(39));
                        }
                        /**
                         * Safari (Safari for iOS & macOS)
                         **/
                        function currentSafariTest() {
                            var _a;
                            return __awaiter(this, void 0, void 0, function () {
                                var e_1, message, matchesExpectedError;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, navigator.storage.getDirectory()];
                                        case 1:
                                            _b.sent();
                                            __callback(false);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_1 = _b.sent();
                                            message = e_1;
                                            if (e_1 instanceof Error) {
                                                message = (_a = e_1.message) !== null && _a !== void 0 ? _a : e_1;
                                            }
                                            if (typeof message !== 'string') {
                                                __callback(false);
                                                return [2 /*return*/];
                                            }
                                            matchesExpectedError = message.includes('unknown transient reason');
                                            if (matchesExpectedError) {
                                                __callback(true);
                                            }
                                            else {
                                                __callback(false);
                                            }
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
                                        var msg = err.message || '';
                                        if (msg.includes('are not yet supported'))
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
                                            if (!(((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.getDirectory) !== undefined)) return [3 /*break*/, 2];
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
                        function getQuotaLimit() {
                            var w = window;
                            if (w.performance !== undefined &&
                                w.performance.memory !== undefined &&
                                w.performance.memory.jsHeapSizeLimit !== undefined) {
                                return performance.memory.jsHeapSizeLimit;
                            }
                            return 1073741824;
                        }
                        // >= 76
                        function storageQuotaChromePrivateTest() {
                            navigator.webkitTemporaryStorage.queryUsageAndQuota(function (_, quota) {
                                var quotaInMib = Math.round(quota / (1024 * 1024));
                                var quotaLimitInMib = Math.round(getQuotaLimit() / (1024 * 1024)) * 2;
                                __callback(quotaInMib < quotaLimitInMib);
                            }, function (e) {
                                reject(new Error('detectIncognito somehow failed to query storage quota: ' +
                                    e.message));
                            });
                        }
                        // 50 to 75
                        function oldChromePrivateTest() {
                            var fs = window.webkitRequestFileSystem;
                            var success = function () {
                                __callback(false);
                            };
                            var error = function () {
                                __callback(true);
                            };
                            fs(0, 1, success, error);
                        }
                        function chromePrivateTest() {
                            if (self.Promise !== undefined && self.Promise.allSettled !== undefined) {
                                storageQuotaChromePrivateTest();
                            }
                            else {
                                oldChromePrivateTest();
                            }
                        }
                        /**
                         * Firefox
                         **/
                        function firefoxPrivateTest() {
                            __callback(navigator.serviceWorker === undefined);
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
                                            return [3 /*break*/, 3];
                                        case 2:
                                            if (isChrome()) {
                                                browserName = identifyChromium();
                                                chromePrivateTest();
                                            }
                                            else if (isFirefox()) {
                                                browserName = 'Firefox';
                                                firefoxPrivateTest();
                                            }
                                            else if (isMSIE()) {
                                                browserName = 'Internet Explorer';
                                                msiePrivateTest();
                                            }
                                            else {
                                                reject(new Error('detectIncognito cannot determine the browser'));
                                            }
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
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
