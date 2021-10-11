# detectIncognito.js
JS detection of Incognito & other private browsing modes on Chrome, Edge, Safari, Firefox, Brave and MSIE.

# Supported Browsers
 * Safari for iOS - 8 to 15
 * Safari for macOS <= 15
 * Chrome/Chromium - 50 to 95 Dev
 * Edge - 15 to 18; 79 to 95 Dev
 * Firefox - 44 to 93 Beta
 * MSIE >= 10
 * Brave >= 1.30

Please note that although this script works on almost all modern browsers, detecting private modes in browsers is very much an arms race. As such, I cannot guarantee that this script will continue to work into the future. However, I will continue to actively maintain this script to support as many browsers as is possible.

If you are aware of any modern browsers this script does not work with, please let me know by creating an issue.

# Notes
 * This script does not detect Container Tabs on Firefox as they work differently compared to private mode.
 * An error will be thrown if the browser cannot be identified.
