# detectIncognito.js
detectIncognito.js can be used to detect private browsing modes on most modern browsers, as of November 2021.

 * Detects Incognito mode on Google Chrome
 * Detects Private Windows on Safari for macOS
 * Detects Private Tabs on Safari for iOS
 * Detects InPrivate Windows on Microsoft Edge
 * Detects InPrivate Windows on Microsoft Internet Explorer
 * Detects Private Windows in Brave

DEMO: https://detectincognito.com/

# Supported Browsers
 * Safari for iOS - 8 to 15
 * Safari for macOS <= 15
 * Chrome/Chromium - 50 to 96 Dev
 * Edge - 15 to 18; 79 to 96 Dev
 * Firefox - 44 to 94 Beta
 * MSIE >= 10
 * Brave <= 1.31

Please note that although this script works on almost all modern browsers, detecting private modes in browsers is very much an arms race. As such, I cannot guarantee that this script will continue to work into the future. However, I will continue to actively maintain this script to support as many browsers as is possible.

If you are aware of any modern browsers this script does not work with, please let me know by creating an issue.

# Notes
 * This script does not detect Container Tabs on Firefox as they work differently compared to private mode.
 * An error will be thrown if the browser cannot be identified.
 * The script only works remotely (i.e. on a web server). Running the script locally may produce a false result, or not run at all.
