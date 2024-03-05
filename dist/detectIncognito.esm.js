/*!
 *
 * detectIncognito v1.3.1
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
 **/var e={598:function(e,t,n){var o,r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,o=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(6===u[0]&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],o=0}finally{n=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};function a(){return r(this,void 0,Promise,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){var n,o,r="Unknown";function i(t){e({isPrivate:t,browserName:r})}function a(e){return e===eval.toString().length}function u(){void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(t){var n,o,r=null===(n=t.target)||void 0===n?void 0:n.result;try{r.createObjectStore("test",{autoIncrement:!0}).put(new Blob),i(!1)}catch(e){var a=e;return e instanceof Error&&(a=null!==(o=e.message)&&void 0!==o?o:e),"string"!=typeof a?void i(!1):void i(a.includes("BlobURLs are not yet supported"))}finally{r.close(),window.indexedDB.deleteDatabase(e)}}}catch(e){i(!1)}}():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return void i(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return void i(!0)}i(!1)}()}function c(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;i(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function l(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?c():(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))}void 0!==(o=navigator.vendor)&&0===o.indexOf("Apple")&&a(37)?(r="Safari",u()):function(){var e=navigator.vendor;return void 0!==e&&0===e.indexOf("Google")&&a(33)}()?(n=navigator.userAgent,r=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",l()):void 0!==document.documentElement&&void 0!==document.documentElement.style.MozAppearance&&a(37)?(r="Firefox",i(void 0===navigator.serviceWorker)):void 0!==navigator.msSaveBlob&&a(39)?(r="Internet Explorer",i(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser"))}))];case 1:return[2,e.sent()]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),e.exports&&(e.exports=a),void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o),"undefined"!=typeof window&&(window.detectIncognito=a),t.default=a}},t={};(function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports})(598);