/*!
 *
 * detectIncognito v1.3.7
 *
 * https://github.com/Joe12387/detectIncognito
 *
 * MIT License
 *
 * Copyright (c) 2021 - 2025 Joe Rutkowski <Joe@dreggle.com>
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
 **/var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{A:()=>a,k:()=>r});var n=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function c(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}))},o=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function r(){return n(this,void 0,Promise,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){var n,o="Unknown";function r(t){e({isPrivate:t,browserName:o})}function a(){var e=0,t=parseInt("-1");try{t.toFixed(t)}catch(t){e=t.message.length}return e}function i(){return void 0!==navigator.msSaveBlob&&39===eval.toString().length}function c(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(t){var n,o,a=null===(n=t.target)||void 0===n?void 0:n.result;try{a.createObjectStore("test",{autoIncrement:!0}).put(new Blob)}catch(e){var i=e;if(e instanceof Error&&(i=null!==(o=e.message)&&void 0!==o?o:e),"string"!=typeof i)return void r(!1);i.includes("BlobURLs are not yet supported")&&r(!0)}finally{a.close(),window.indexedDB.deleteDatabase(e),function(){var e;(null===(e=navigator.storage)||void 0===e?void 0:e.estimate)?navigator.storage.estimate().then((function(e){e.usage;var t=e.quota;r(!!(t&&t<2e9))})).catch((function(){r(!1)})):r(!1)}()}}}catch(e){r(!1)}}function u(){void 0!==navigator.maxTouchPoints?c():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return void r(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return void r(!0)}r(!1)}()}function l(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;r(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function s(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?l():(0,window.webkitRequestFileSystem)(0,1,(function(){r(!1)}),(function(){r(!0)}))}44===a()?(o="Safari",u()):51===a()?(n=navigator.userAgent,o=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",s()):25===a()?(o="Firefox",r(void 0===navigator.serviceWorker)):i()?(o="Internet Explorer",r(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser"))}))];case 1:return[2,e.sent()]}}))}))}"undefined"!=typeof window&&(window.detectIncognito=r);const a=r;var i=t.A,c=t.k;export{i as default,c as detectIncognito};