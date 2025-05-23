/*!
 *
 * detectIncognito v1.5.0
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
 **/var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{A:()=>a,k:()=>o});var n=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},r=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};function o(){return n(this,void 0,Promise,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){var o="Unknown",a=!1;function i(t){a||(a=!0,e({isPrivate:t,browserName:o}))}function c(){var e=0,t=parseInt("-1");try{t.toFixed(t)}catch(t){e=t.message.length}return e}function u(){return void 0!==navigator.msSaveBlob&&function(e){try{return e===eval.toString().length}catch(e){return!1}}(39)}function s(){var e;return n(this,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,navigator.storage.getDirectory()];case 1:return r.sent(),i(!1),[3,3];case 2:return t=r.sent(),n=t,t instanceof Error&&(n=null!==(e=t.message)&&void 0!==e?e:t),"string"!=typeof n?(i(!1),[2]):(i(!!n.includes("unknown transient reason")),[3,3]);case 3:return[2]}}))}))}function l(){var e;return n(this,void 0,Promise,(function(){return r(this,(function(t){switch(t.label){case 0:return void 0===(null===(e=navigator.storage)||void 0===e?void 0:e.getDirectory)?[3,2]:[4,s()];case 1:return t.sent(),[3,3];case 2:void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{var t=indexedDB.open(e,1);t.onupgradeneeded=function(t){var n=t.target.result,r=function(e){i(e)};try{n.createObjectStore("t",{autoIncrement:!0}).put(new Blob),r(!1)}catch(e){(e.message||"").includes("are not yet supported")?r(!0):r(!1)}finally{n.close(),indexedDB.deleteDatabase(e)}},t.onerror=function(){return i(!1)}}catch(e){i(!1)}}():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return void i(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return void i(!0)}i(!1)}(),t.label=3;case 3:return[2]}}))}))}function f(){navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;i(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))}))}function d(){void 0!==self.Promise&&void 0!==self.Promise.allSettled?f():(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))}(function(){return n(this,void 0,Promise,(function(){return r(this,(function(e){switch(e.label){case 0:return 44!==c()?[3,2]:(o="Safari",[4,l()]);case 1:return e.sent(),[3,3];case 2:51===c()?(n=navigator.userAgent,o=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",d()):25===c()?(o="Firefox",i(void 0===navigator.serviceWorker)):u()?(o="Internet Explorer",i(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser")),e.label=3;case 3:return[2]}var n}))}))})().catch(t)}))];case 1:return[2,e.sent()]}}))}))}"undefined"!=typeof window&&(window.detectIncognito=o);const a=o,i=t.A,c=t.k;export{i as default,c as detectIncognito};