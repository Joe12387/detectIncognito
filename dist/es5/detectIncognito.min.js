/*!
 *
 * detectIncognito v1.3.5
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * MIT License
 *
 * Copyright (c) 2021 - 2024 Joe Rutkowski <Joe@dreggle.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Please keep this comment intact in order to properly abide by the MIT License.
 *
 **/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.detectIncognito=t():e.detectIncognito=t()}(this,(function(){return function(){"use strict";var e={};return{598:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function r(){return n(this,void 0,Promise,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){var n,o,r="Unknown";function i(t){e({isPrivate:t,browserName:r})}function a(e){return e===eval.toString().length}function c(){void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(t){var n,o,r=null===(n=t.target)||void 0===n?void 0:n.result;try{r.createObjectStore("test",{autoIncrement:!0}).put(new Blob),i(!1)}catch(e){var a=e;return e instanceof Error&&(a=null!==(o=e.message)&&void 0!==o?o:e),"string"!=typeof a?void i(!1):void i(a.includes("BlobURLs are not yet supported"))}finally{r.close(),window.indexedDB.deleteDatabase(e)}}}catch(e){i(!1)}}():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return void i(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return void i(!0)}i(!1)}()}function u(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;i(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function d(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?u():(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))}void 0!==(o=navigator.vendor)&&0===o.indexOf("Apple")&&a(37)?(r="Safari",c()):function(){var e=navigator.vendor;return void 0!==e&&0===e.indexOf("Google")&&a(33)}()?(n=navigator.userAgent,r=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",d()):void 0!==document.documentElement&&void 0!==document.documentElement.style.MozAppearance&&a(37)?(r="Firefox",i(void 0===navigator.serviceWorker)):void 0!==navigator.msSaveBlob&&a(39)?(r="Internet Explorer",i(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser"))}))];case 1:return[2,e.sent()]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.detectIncognito=void 0,t.detectIncognito=r,"undefined"!=typeof window&&(window.detectIncognito=r),t.default=r}}[598](0,e),e=e.default}()}));