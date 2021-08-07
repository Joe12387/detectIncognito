/**
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * (c) 2021 Joe Rutkowski <Joe@dreggledotcom>
 * 
 * Incognito & Private Browsing detection
 *
 * Support: Safari for iOS   -- 8 to 14
 *          Safari for macOS <= 14
 *          Chrome/Chromium  <= 94 Dev
 *          Edge             <= 93 Dev
 *          Firefox          <= 91 Beta
 *          MSIE             >= 10
 *
 **/

var detectIncognito = function(callback) {
  function isSafari() {
    var v = navigator.vendor;
    return v && v.indexOf("Apple") === 0;
  }

  function isSafari13OrHigher() {
    return navigator.maxTouchPoints !== undefined;
  }

  function isMacOSSafari() {
    return window.safari !== undefined && window.DeviceMotionEvent === undefined;
  }

  function isChrome() {
    var v = navigator.vendor;
    return v && v.indexOf("Google") === 0;
  }

  function isFirefox() {
    return document.documentElement !== undefined && document.documentElement.style.MozAppearance !== undefined;
  }
  
  function isMSIE() {
    return !!navigator.msSaveBlob;
  }
  
  function returnResult(returnResult) {
    callback(returnResult);
  }
  
  /**
   * Safari (Safari for iOS & macOS v8.0 - v14.1)
   **/

  function macOS_safari14() {
    if (!window.safari) return returnResult(false);
    try {
      window.safari.pushNotification.requestPermission('https://example.com', 'private', {}, (function() {}));
    } catch (e) {
      return returnResult(!new RegExp("gesture").test(e));
    }
    return returnResult(false);
  }

  function oldSafariTest() {
    var openDB = window.openDatabase;
    var storage = window.localStorage;
    try {
      openDB(null, null, null, null);
    } catch (e) {
      return returnResult(true);
    }
    try {
      storage.setItem("test", "1");
      storage.removeItem("test");
      return returnResult(false);
    } catch (e) {
      return returnResult(true);
    }
  }
  
  function iOS_safari14() {
    var tripped = false;
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  
    iframe.contentWindow.applicationCache.addEventListener("error", function() {
      tripped = true;
      return returnResult(true);
    });
    
    setTimeout(function() {
      if (!tripped) returnResult(false);
    }, 100);
  }
  
  function safariPrivateTest() {
    if (isSafari13OrHigher()) {
      if (isMacOSSafari()) {
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
              usage: usage,
              quota: quota
            })
          },
          reject
        );
      });
    }

    return Promise.resolve({
      usage: NaN,
      quota: NaN
    });
  }

  function chromePrivateTest() {
    storageEstimateWrapper().then(function(response){
      returnResult(response.quota < getQuotaLimit());
    });
  }
  
  /**
   * Firefox
   **/
  
  function firefoxPrivateTest() {
    returnResult(!navigator.serviceWorker);
  }

  /**
   * MSIE
   **/
  
  function MSIEPrivateTest() {
    returnResult(!window.indexedDB && (window.PointerEvent || window.MSPointerEvent));
  }

  function main() {
    if (isSafari()) {
      safariPrivateTest();
    } else if (isChrome()) {
      chromePrivateTest();
    } else if (isFirefox()) {
      firefoxPrivateTest();
    } else if (isMSIE()) {
      MSIEPrivateTest();
    } else {
      throw "detectIncognito cannot determine the browser";
    }
  }
  
  main();
};