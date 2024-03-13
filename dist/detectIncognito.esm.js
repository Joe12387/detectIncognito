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
 **/var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{A:()=>i,k:()=>r});var t=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((o=o.apply(e,n||[])).next())}))},o=function(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function r(){return t(this,void 0,Promise,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,n){var t,o,r="Unknown";function i(n){e({isPrivate:n,browserName:r})}function a(e){return e===eval.toString().length}function c(){void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(n){var t,o,r=null===(t=n.target)||void 0===t?void 0:t.result;try{r.createObjectStore("test",{autoIncrement:!0}).put(new Blob),i(!1)}catch(e){var a=e;return e instanceof Error&&(a=null!==(o=e.message)&&void 0!==o?o:e),"string"!=typeof a?void i(!1):void i(a.includes("BlobURLs are not yet supported"))}finally{r.close(),window.indexedDB.deleteDatabase(e)}}}catch(e){i(!1)}}():function(){var e=window.openDatabase,n=window.localStorage;try{e(null,null,null,null)}catch(e){return void i(!0)}try{n.setItem("test","1"),n.removeItem("test")}catch(e){return void i(!0)}i(!1)}()}function u(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,n){var t;i(Math.round(n/1048576)<2*Math.round((void 0!==(t=window).performance&&void 0!==t.performance.memory&&void 0!==t.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){n(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function l(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?u():(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))}void 0!==(o=navigator.vendor)&&0===o.indexOf("Apple")&&a(37)?(r="Safari",c()):function(){var e=navigator.vendor;return void 0!==e&&0===e.indexOf("Google")&&a(33)}()?(t=navigator.userAgent,r=t.match(/Chrome/)?void 0!==navigator.brave?"Brave":t.match(/Edg/)?"Edge":t.match(/OPR/)?"Opera":"Chrome":"Chromium",l()):void 0!==document.documentElement&&void 0!==document.documentElement.style.MozAppearance&&a(37)?(r="Firefox",i(void 0===navigator.serviceWorker)):void 0!==navigator.msSaveBlob&&a(39)?(r="Internet Explorer",i(void 0===window.indexedDB)):n(new Error("detectIncognito cannot determine the browser"))}))];case 1:return[2,e.sent()]}}))}))}"undefined"!=typeof window&&(window.detectIncognito=r);const i=r;var a=n.A,c=n.k;export{a as default,c as detectIncognito};