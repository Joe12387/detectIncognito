# detectIncognito.js

detectIncognito.js can be used to detect incognito mode & other private browsing modes on most modern browsers as of 2022.

- Detects Incognito mode on Google Chrome
- Detects Private Windows on Safari for macOS
- Detects Private Tabs on Safari for iOS
- Detects Private Windows in Firefox
- Detects InPrivate Windows on Microsoft Edge
- Detects InPrivate Windows on Microsoft Internet Explorer
- Detects Private Windows in Brave
- Detects Private Windows in Opera

DEMO: https://detectincognito.com/

# Usage

Get script from CDN

```html
<script src="https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@main/detectIncognito.min.js"></script>
```

Or install from NPM

```
npm i detect-incognito
```

```javascript
import { detectIncognito } from "detect-incognito";
```

Run the detect function

```javascript
detectIncognito().then((result) => {
  console.log(result.browserName, result.isPrivate);
});
```

# Supported Browsers

- Safari for iOS - 8 to 15
- Safari for macOS <= 15
- Chrome/Chromium - 50 to 102
- Edge - 15 to 18; 79 to 102
- Firefox - 44 to 101
- Brave <= 1.39
- MSIE == 11 (Promise polyfill required)

Please note that although this script works on almost all modern browsers, detecting private modes in browsers is very much an arms race. As such, I cannot guarantee that this script will continue to work into the future. However, I will continue to actively maintain this script to support as many browsers as is possible.

If you are aware of any modern browsers this script does not work with, please let me know by creating an issue.

# Notes

- This script does not detect Container Tabs on Firefox as they work differently compared to private mode.
- An error will be thrown if the browser cannot be identified.
- The script only works remotely (i.e. on a web server). Running the script locally may produce a false result, or not run at all.

# Similar Projects
- [Overprowered Browser Fingerprinting Script](https://github.com/Joe12387/OP-Fingerprinting-Script "Overprowered Browser Fingerprinting Script")
