/**
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * (c) 2021 Joe Rutkowski <Joe@dreggle.com>
 *
 * Incognito & Private Browsing detection
 *
 * Support: Safari for iOS   -- 8 to 14
 *          Safari for macOS <= 14
 *          Chrome/Chromium  -- 50 to 94 Dev
 *          Edge             -- 15 - 18; 79 to 94 Dev
 *          Firefox          -- 44 to 92 Beta
 *          MSIE             >= 10
 *
 **/

var detectIncognito = function(callback) {
  function isSafari() {
    var v = navigator.vendor;
    return v !== undefined && v.indexOf("Apple") === 0;
  }

  function isChrome() {
    var v = navigator.vendor;
    return v !== undefined && v.indexOf("Google") === 0;
  }

  function isFirefox() {
    return document.documentElement !== undefined && document.documentElement.style !== undefined && document.documentElement.style.MozAppearance !== undefined;
  }

  function isMSIE() {
    return navigator.msSaveBlob !== undefined;
  }

  function isBrave() {
    if (!isChrome()) {
      return false;
    }

    if (window.navigator.brave !== undefined) {
      if (window.navigator.brave.isBrave.name === "isBrave") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * Safari (Safari for iOS & macOS v8.0 - v14.1)
   **/

  function macOS_safari14() {
    try {
      window.safari.pushNotification.requestPermission("https://example.com", "private", {}, (function() {}));
    } catch (e) {
      return callback(!new RegExp("gesture").test(e));
    }
    return callback(false);
  }

  function iOS_safari14() {
    var tripped = false;
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.contentWindow.applicationCache.addEventListener("error", function() {
      tripped = true;
      return callback(true);
    });

    setTimeout(function() {
      if (!tripped) {
        callback(false);
      }
    }, 100);
  }

  function oldSafariTest() {
    var openDB = window.openDatabase;
    var storage = window.localStorage;
    try {
      openDB(null, null, null, null);
    } catch (e) {
      return callback(true);
    }
    try {
      storage.setItem("test", "1");
      storage.removeItem("test");
    } catch (e) {
      return callback(true);
    }
    return callback(false);
  }

  function safariPrivateTest() {
    var w = window;
    if (navigator.maxTouchPoints !== undefined) {
      if (w.safari !== undefined && w.DeviceMotionEvent === undefined) {
        macOS_safari14();
      } else {
        iOS_safari14();
      }
    } else {
      oldSafariTest();
    }
  }

  /**
   * Chrome
   **/

  function getQuotaLimit() {
    var w = window;
    if (w.performance !== undefined && w.performance.memory !== undefined && w.performance.memory.jsHeapSizeLimit !== undefined) {
      return performance.memory.jsHeapSizeLimit;
    }
    return 1073741824;
  }

  function storageEstimateWrapper() {
    var n = navigator;
    if (n.storage !== undefined && n.storage.estimate !== undefined) {
      return n.storage.estimate();
    }

    if (n.webkitTemporaryStorage !== undefined && n.webkitTemporaryStorage.queryUsageAndQuota !== undefined) {
      return new Promise(function(resolve, reject) {
        n.webkitTemporaryStorage.queryUsageAndQuota(
          function(usage, quota) {
            resolve({
              "quota": quota,
              "usage": usage
            });
          },
          reject
        );
      });
    }

    return Promise.resolve({
      quota: NaN,
      usage: NaN
    });
  }

  // >= 76
  function storageQuotaChromePrivateTest() {
    storageEstimateWrapper().then(function(response) {
      callback(response.quota < getQuotaLimit());
    });
  }

  // 50 to 75
  function oldChromePrivateTest() {
    var fs = window.webkitRequestFileSystem;
    var success = function() {
      callback(false);
    };
    var error = function() {
      callback(true);
    };
    fs(0, 1, success, error);
  }

  function chromePrivateTest() {
    if (Promise !== undefined && Promise.allSettled !== undefined) {
      storageQuotaChromePrivateTest();
    } else {
      oldChromePrivateTest();
    }
  }

  /**
   * Firefox
   **/

  function firefoxPrivateTest() {
    callback(!navigator.serviceWorker);
  }

  /**
   * MSIE
   **/

  function msiePrivateTest() {
    callback(!window.indexedDB);
  }

  function main() {
    if (isSafari()) {
      safariPrivateTest();
    } else if (isBrave()) {
      callback(false);
    } else if (isChrome()) {
      chromePrivateTest();
    } else if (isFirefox()) {
      firefoxPrivateTest();
    } else if (isMSIE()) {
      msiePrivateTest();
    } else {
      throw "detectIncognito cannot determine the browser";
    }
  }

  main();
};