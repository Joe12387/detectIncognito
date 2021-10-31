/**
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * (c) 2021 Joe Rutkowski <Joe@dreggle.com>
 *
 * Incognito & Private Browsing detection
 *
 * Support: Safari for iOS   -- 8 to 15
 *          Safari for macOS <= 15
 *          Chrome/Chromium  -- 50 to 96 Dev
 *          Edge             -- 15 - 18; 79 to 96 Dev
 *          Firefox          -- 44 to 94 Beta
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
    return document.documentElement !== undefined && document.documentElement.style.MozAppearance !== undefined;
  }

  function isMSIE() {
    return navigator.msSaveBlob !== undefined;
  }

  /**
   * Safari (Safari for iOS & macOS)
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

  // >= 76
  function storageQuotaChromePrivateTest() {
    navigator.webkitTemporaryStorage.queryUsageAndQuota(
      function(quota, usage) {
        callback(quota < getQuotaLimit());
      },
      function(e) {
        throw new Error("detectIncognito somehow failed to query storage quota");
      }
    );

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
    callback(navigator.serviceWorker === undefined);
  }

  /**
   * MSIE
   **/

  function msiePrivateTest() {
    callback(window.indexedDB === undefined);
  }

  function main() {
    if (isSafari()) {
      safariPrivateTest();
    } else if (isChrome()) {
      chromePrivateTest();
    } else if (isFirefox()) {
      firefoxPrivateTest();
    } else if (isMSIE()) {
      msiePrivateTest();
    } else {
      throw new Error("detectIncognito cannot determine the browser");
    }
  }

  main();
};