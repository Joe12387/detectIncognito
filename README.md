# detectIncognito.js

[![npm version](https://img.shields.io/npm/v/detectincognitojs)](https://www.npmjs.com/package/detectincognitojs)
[![Downloads](https://img.shields.io/npm/dm/detectincognitojs)](https://npmcharts.com/compare/detectincognitojs)
[![License](https://img.shields.io/npm/l/detectincognitojs)](https://opensource.org/licenses/MIT)

**Efficiently detect Incognito mode & other private browsing modes across most modern browsers.**

<img src="./detectIncognito.svg" width="150" />

**Shameless plug:** [Looking for a powerful user tracking and bot detection solution?](https://overpoweredjs.com/)

---

## Features

- ✅ Incognito detection on Google Chrome
- ✅ Private Window detection on Safari (macOS)
- ✅ Private Tab detection on Safari (iOS)
- ✅ Private Window detection in Firefox
- ✅ InPrivate Window detection on Microsoft Edge
- ✅ InPrivate Window detection on Microsoft Internet Explorer
- ✅ Private Window detection in Brave (see notes)
- ✅ Private Window detection in Opera

## Demo

Check out the [live demo](https://detectincognito.com/).

## Usage

Get the script from CDN (may be blocked by adblockers—see notes):

```html
<script src="https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@main/dist/es5/detectIncognito.min.js"></script>
```

Or install via NPM:

```bash
npm i detectincognitojs
```

```javascript
import { detectIncognito } from "detectincognitojs";

detectIncognito().then((result) => {
  console.log(result.browserName, result.isPrivate);
});
```

## Supported Browsers

| Browser         | Platform(s) | Versions            | Notes                                                                                         |
|-----------------|-------------|---------------------|-----------------------------------------------------------------------------------------------|
| Safari          | All         | ≤ 18.4              |                                                                                               |
| Chromium | All         | 50 to 137 Beta      | Detection broken by `predictable-reported-quota` flag ([Issue #49](https://github.com/Joe12387/detectIncognito/issues/49)) |
| Firefox         | All         | 44 to 138           |                                                                                               |
| MSIE            | Windows     | 11                  | Requires Promise polyfill                                                                     |

## Notes

- False positives can occur in certain browser setups or Chrome Guest mode ([Issue #21](https://github.com/Joe12387/detectIncognito/issues/21)).
- Firefox Container Tabs aren't detected by this.
- The script must run over HTTPS—running locally or via HTTP might fail.
- Brave and uBlock Origin block the CDN; hosting the script yourself avoids this issue.
- An error is thrown if the browser can't be identified.

## Similar Projects

- [OverpoweredJS](https://overpoweredjs.com/) – An advanced browser fingerprinting & bot detection solution.

## License

Copyright © 2025 Joe Rutkowski  
Distributed under the [MIT License](https://opensource.org/license/mit-0/).
