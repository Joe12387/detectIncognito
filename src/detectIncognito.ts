/**
 *
 * detectIncognito v1.0.0 - (c) 2022 Joe Rutkowski <Joe@dreggle.com> (https://github.com/Joe12387/detectIncognito)
 *
 **/
export const detectIncognito = function (): Promise<{
  isPrivate: boolean;
  browserName: string;
}> {
  return new Promise(function (resolve, reject) {
    var browserName = "Unknown";

    function __callback(isPrivate: any) {
      resolve({
        isPrivate: isPrivate,
        browserName: browserName,
      });
    }

    function identifyChromium() {
      var ua = navigator.userAgent;
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

    function assertEvalToString(value: any) {
      return value === eval.toString().length;
    }

    function isSafari() {
      var v = navigator.vendor;
      return (
        v !== undefined && v.indexOf("Apple") === 0 && assertEvalToString(37)
      );
    }

    function isChrome() {
      var v = navigator.vendor;
      return (
        v !== undefined && v.indexOf("Google") === 0 && assertEvalToString(33)
      );
    }

    function isFirefox() {
      return (
        document.documentElement !== undefined &&
        (document as any).documentElement.style.MozAppearance !== undefined &&
        assertEvalToString(37)
      );
    }

    function isMSIE() {
      return (
        (navigator as any).msSaveBlob !== undefined && assertEvalToString(39)
      );
    }

    /**
     * Safari (Safari for iOS & macOS)
     **/

    function macOS_safari14() {
      try {
        (window as any).safari.pushNotification.requestPermission(
          "https://example.com",
          "private",
          {},
          function () {}
        );
      } catch (e: any) {
        return __callback(!new RegExp("gesture").test(e));
      }
      return __callback(false);
    }

    function iOS_safari14() {
      var tripped = false;
      var iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      (iframe as any).contentWindow.applicationCache.addEventListener(
        "error",
        function () {
          tripped = true;
          return __callback(true);
        }
      );

      setTimeout(function () {
        if (!tripped) {
          __callback(false);
        }
      }, 100);
    }

    function oldSafariTest() {
      var openDB = (window as any).openDatabase;
      var storage = window.localStorage;
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

    function safariPrivateTest() {
      var w = window as any;
      if (navigator.maxTouchPoints !== undefined) {
        if (w.safari !== undefined && w.DeviceMotionEvent === undefined) {
          browserName = "Safari for macOS";
          macOS_safari14();
        } else if (w.DeviceMotionEvent !== undefined) {
          browserName = "Safari for iOS";
          iOS_safari14();
        } else {
          reject(
            new Error(
              "detectIncognito Could not identify this version of Safari"
            )
          );
        }
      } else {
        browserName = "Safari";
        oldSafariTest();
      }
    }

    /**
     * Chrome
     **/

    function getQuotaLimit() {
      var w = window as any;
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
    function storageQuotaChromePrivateTest() {
      (navigator as any).webkitTemporaryStorage.queryUsageAndQuota(
        function (usage: any, quota: any) {
          __callback(quota < getQuotaLimit());
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
    function oldChromePrivateTest() {
      var fs = (window as any).webkitRequestFileSystem;
      var success = function () {
        __callback(false);
      };
      var error = function () {
        __callback(true);
      };
      fs(0, 1, success, error);
    }

    function chromePrivateTest() {
      if (Promise !== undefined && (Promise as any).allSettled !== undefined) {
        storageQuotaChromePrivateTest();
      } else {
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
      if (isSafari()) {
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
