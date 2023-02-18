Note: The npm package is now [detectincognitojs](https://www.npmjs.com/package/detectincognitojs "detectincognitojs").

<img src="./detectIncognito.svg"  width="150"  />

# detectIncognito.js

detectIncognito.js can be used to detect incognito mode & other private browsing modes on most modern browsers as of 2023.

- Detects Incognito mode on Google Chrome
- Detects Private Windows on Safari for macOS
- Detects Private Tabs on Safari for iOS
- Detects Private Windows in Firefox
- Detects InPrivate Windows on Microsoft Edge
- Detects InPrivate Windows on Microsoft Internet Explorer
- Detects Private Windows in Brave
- Detects Private Windows in Opera

## Demo

https://detectincognito.com/

## Usage

Get script from CDN

```html
<script src="https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@v1.3.0/dist/es5/detectIncognito.min.js"></script>
```

Or install from NPM

```
npm i detectincognitojs
```

```javascript
import { detectIncognito } from "detectincognitojs";
```

Run the detect function

```javascript
detectIncognito().then((result) => {
  console.log(result.browserName, result.isPrivate);
});
```

## Supported Browsers

| Browser         | Platform(s) |      Versions       | Notes                     |
| --------------- | :---------- | :-----------------: | :------------------------ |
| Safari          | iOS         |       8 to 16       |                           |
| Safari          | macOS       |        ≤ 16         |                           |
| Chrome/Chromium | All         |      50 to 109      |                           |
| Edge            | All         | 15 to 18; 79 to 109 |                           |
| Firefox         | All         |      44 to 109      |                           |
| Brave           | All         |       ≤ 1.47        |                           |
| MSIE            | All         |         11          | Promise polyfill required |

Please note that although this script works on almost all modern browsers, detecting private modes in browsers is very much an arms race. As such, I cannot guarantee that this script will continue to work into the future. However, I will continue to actively maintain this script to support as many browsers as is possible.

If you are aware of any modern browsers this script does not work with, please let me know by creating an issue.

## Notes

- There will be a false positive in certain browser configurations, as well as in Chrome's Guest mode. ([Issue #21](https://github.com/Joe12387/detectIncognito/issues/21)).
- This script does not detect Container Tabs on Firefox as they work differently compared to private mode.
- An error will be thrown if the browser cannot be identified.
- The script only works remotely on a web server using HTTPS. Running the script locally or with HTTP may produce a false result, or it may not run at all.

## Similar Projects

- [Overpowered Browser Fingerprinting Script](https://github.com/Joe12387/OP-Fingerprinting-Script "Overpowered Browser Fingerprinting Script")

## License

Copyright (c) 2023 Joe Rutkowski

Released under [MIT License](https://opensource.org/license/mit-0/)
