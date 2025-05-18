"use strict";(self["webpackChunkpwa"]=self["webpackChunkpwa"]||[]).push([[504],{33:(e,t,n)=>{
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:()=>p,$H:()=>U,BH:()=>K,BX:()=>ne,Bm:()=>w,C4:()=>X,CE:()=>g,CP:()=>l,DY:()=>j,Gv:()=>I,J$:()=>Q,Kg:()=>b,MZ:()=>i,Mp:()=>c,NO:()=>a,Oj:()=>s,PT:()=>N,Qd:()=>k,Ro:()=>V,SU:()=>P,TF:()=>h,Tg:()=>x,Tn:()=>_,Tr:()=>z,We:()=>H,X$:()=>u,Y2:()=>ee,ZH:()=>L,Zf:()=>C,bB:()=>$,cy:()=>f,gd:()=>y,pD:()=>r,rU:()=>M,tE:()=>o,u3:()=>re,vM:()=>m,v_:()=>se,yI:()=>O,yL:()=>E,yQ:()=>F});const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),_=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,I=e=>null!==e&&"object"===typeof e,E=e=>(I(e)||_(e))&&_(e.then)&&_(e.catch),T=Object.prototype.toString,S=e=>T.call(e),C=e=>S(e).slice(8,-1),k=e=>"[object Object]"===S(e),O=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,P=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},A=/-(\w)/g,N=R((e=>e.replace(A,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,x=R((e=>e.replace(D,"-$1").toLowerCase())),L=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=R((e=>{const t=e?`on${L(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const H=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const B="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",K=r(B);function z(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?J(r):z(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||I(e))return e}const G=/;(?![^(]*\))/g,q=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function J(e){const t={};return e.replace(Z,"").split(G).forEach((e=>{if(e){const n=e.split(q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(I(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(Y);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return!(!n||!r)&&te(e,t);if(n=I(e),r=I(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>b(e)?e:null==e?"":f(e)||I(e)&&(e.toString===T||!_(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:w(t)?ae(t):!I(t)||f(t)||k(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},72:(e,t,n)=>{n.d(t,{cY:()=>_,FA:()=>R,g:()=>P,u:()=>u,Uj:()=>l,tD:()=>F,bD:()=>x,hp:()=>j,T9:()=>v,Tj:()=>m,XA:()=>y,Ku:()=>H,ZQ:()=>b,sr:()=>E,c1:()=>I,Im:()=>D,lT:()=>S,zW:()=>C,jZ:()=>w,lV:()=>T,Am:()=>M,I9:()=>U,eX:()=>k});const r=()=>{},i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const c=i<e.length,l=c?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==h)throw new a;const d=t<<2|o>>4;if(r.push(d),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){const t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>h().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/pwa/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return r()||d()||p()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function w(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function E(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function A(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},125:(e,t,n)=>{n.d(t,{h1:()=>l,uA:()=>i});var r=n(72);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},220:(e,t,n)=>{n.d(t,{LA:()=>ce,aE:()=>it,lq:()=>at,rd:()=>ot});var r=n(641),i=n(953);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&o(e.default)}const c=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=h(i)?i.map(e):e(i)}return n}const u=()=>{},h=Array.isArray;const d=/#/g,p=/&/g,f=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,_=/%5D/g,b=/%5E/g,w=/%60/g,I=/%7B/g,E=/%7C/g,T=/%7D/g,S=/%20/g;function C(e){return encodeURI(""+e).replace(E,"|").replace(y,"[").replace(_,"]")}function k(e){return C(e).replace(I,"{").replace(T,"}").replace(b,"^")}function O(e){return C(e).replace(v,"%2B").replace(S,"+").replace(d,"%23").replace(p,"%26").replace(w,"`").replace(I,"{").replace(T,"}").replace(b,"^")}function P(e){return O(e).replace(g,"%3D")}function R(e){return C(e).replace(d,"%23").replace(m,"%3F")}function A(e){return null==e?"":R(e).replace(f,"%2F")}function N(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const D=/\/$/,x=e=>e.replace(D,"");function L(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=H(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function U(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(t.matched[r],n.matched[i])&&$(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!V(e[n],t[n]))return!1;return!0}function V(e,t){return h(e)?W(e,t):h(t)?W(t,e):e===t}function W(e,t){return h(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function H(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var K,z;(function(e){e["pop"]="pop",e["push"]="push"})(K||(K={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(z||(z={}));function G(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),x(e)}const q=/^[^#]+#/;function Z(e,t){return e.replace(q,"#")+t}function J(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=J(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ie(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),U(n,"")}const o=U(n,e);return o+r+i}function se(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=ie(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:K.pop,direction:u?u>0?z.forward:z.back:z.unknown})}))};function l(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:X()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function oe(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function ae(e){const{history:t,location:n}=window,r={value:ie(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=c({},t.state,oe(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=c({},i.value,t.state,{forward:e,scroll:X()});s(o.current,o,!0);const a=c({},oe(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ce(e){e=G(e);const t=ae(e),n=se(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=c({location:"",base:e,go:r,createHref:Z.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function pe(e,t){return c(new Error,{type:e,[he]:!0},t)}function fe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},me,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ve,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;s.push({name:e,repeatable:n,optional:a});const h=l||ge;if(h!==ge){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(h(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=h(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function _e(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=_e(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ie={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[Ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ee.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function Se(e,t,n){const r=ye(Te(e.path),n);const i=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=Oe(e);a.aliasOf=r&&r.record;const h=Ne(t,e),d=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Oe(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let p,f;for(const t of d){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(p=Se(t,n,h),r?r.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),i&&e.name&&!Re(p)&&o(e.name)),Le(p)&&l(p),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],p,r&&r.children[t])}r=r||p}return f?()=>{o(f)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){const t=De(e,n);n.splice(t,0,e),e.record.name&&!Re(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw pe(1,{location:e});0,o=i.record.name,a=c(ke(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&ke(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw pe(1,{location:e,currentLocation:t});o=i.record.name,a=c({},t.params,e.params),s=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:l,meta:Ae(l)}}function d(){n.length=0,r.clear()}return t=Ne({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:i}}function ke(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Oe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Re(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ae(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=be(e,t[i]);s<0?r=i:n=i+1}const i=xe(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function xe(e){let t=e;while(t=t.parent)if(Le(t)&&0===be(e,t))return t}function Le({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(v," "),n=e.indexOf("="),s=N(n<0?e:e.slice(0,n)),o=n<0?null:N(e.slice(n+1));if(s in t){let e=t[s];h(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=P(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=h(r)?r.map((e=>e&&O(e))):[r&&O(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=h(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),$e=Symbol(""),Ve=Symbol(""),We=Symbol(""),He=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ke(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(pe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(pe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},u=s((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function ze(e,t,n,r,i=e=>e()){const s=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(o(l)){const o=l.__vccOpts||l,a=o[t];a&&s.push(Ke(a,n,r,c,e,i))}else{let o=l();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[e]=s,c.components[e]=o;const l=o.__vccOpts||o,u=l[t];return u&&Ke(u,n,r,c,e,i)()}))))}}}return s}function Ge(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)(We);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(F.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&$(n.params,s.value.params)));function l(n={}){if(Xe(n)){const n=t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}function qe(e){return 1===e.length?e[0]:e}const Ze=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.Kh)(Ge(e)),{options:s}=(0,r.WQ)(Ve),o=(0,r.EW)((()=>({[et(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&qe(t.default(n));return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Je=Ze;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(He),o=(0,r.EW)((()=>e.route||s.value)),a=(0,r.WQ)($e,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>o.value.matched[l.value]));(0,r.Gt)($e,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Fe,u),(0,r.Gt)(He,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&F(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,a=u.value,l=a&&a.components[s];if(!l)return nt(n.default,{Component:l,route:i});const d=a.props[s],p=d?!0===d?i.params:"function"===typeof d?d(i):d:null,f=e=>{e.component.isUnmounted&&(a.instances[s]=null)},g=(0,r.h)(l,c({},p,t,{onVnodeUnmounted:f,ref:h}));return nt(n.default,{Component:g,route:i})||g}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const rt=tt;function it(e){const t=Ce(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||Ue,a=e.history;const d=Be(),p=Be(),f=Be(),g=(0,i.IJ)(B);let m=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=l.bind(null,(e=>""+e)),y=l.bind(null,A),_=l.bind(null,N);function b(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function E(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=c({},r||g.value),"string"===typeof e){const i=L(n,e,r.path),s=t.resolve({path:i.path},r),o=a.createHref(i.fullPath);return c(i,s,{params:_(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=c({},e,{path:L(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];i=c({},e,{params:y(t)}),r.params=y(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=v(_(s.params));const u=M(o,c({},e,{hash:k(l),path:s.path})),h=a.createHref(u);return c({fullPath:u,hash:l,query:o===Ue?je(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function S(e){return"string"===typeof e?L(n,e,g.value.path):c({},e)}function C(e,t){if(m!==e)return pe(8,{from:t,to:e})}function O(e){return D(e)}function P(e){return O(c(S(e),{replace:!0}))}function R(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function D(e,t){const n=m=T(e),r=g.value,i=e.state,s=e.force,a=!0===e.replace,l=R(n);if(l)return D(c(S(l),{state:"object"===typeof l?c({},i,l.state):i,force:s,replace:a}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&j(o,r,n)&&(h=pe(16,{to:u,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):F(u,r)).catch((e=>fe(e)?fe(e,2)?e:ee(e):Z(e,u,r))).then((e=>{if(e){if(fe(e,2))return D(c({replace:a},S(e.to),{state:"object"===typeof e.to?c({},i,e.to.state):i,force:s}),t||u)}else e=V(u,r,!0,a,i);return $(u,r,e),e}))}function x(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function F(e,t){let n;const[r,i,s]=st(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Ke(r,e,t))}));const o=x.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const r of d.list())n.push(Ke(r,e,t));return n.push(o),ce(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Ke(r,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ke(i,e,t));else n.push(Ke(r.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t,U),n.push(o),ce(n)))).then((()=>{n=[];for(const r of p.list())n.push(Ke(r,e,t));return n.push(o),ce(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function $(e,t,n){f.list().forEach((r=>U((()=>r(e,t,n)))))}function V(e,t,n,r,i){const o=C(e,t);if(o)return o;const l=t===B,u=s?history.state:{};n&&(r||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(e.fullPath,i)),g.value=e,re(e,t,n,l),ee()}let W;function H(){W||(W=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=T(e),i=R(r);if(i)return void D(c(i,{replace:!0,force:!0}),r).catch(u);m=r;const o=g.value;s&&te(Q(o.fullPath,n.delta),X()),F(r,o).catch((e=>fe(e,12)?e:fe(e,2)?(D(c(S(e.to),{force:!0}),r).then((e=>{fe(e,20)&&!n.delta&&n.type===K.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||V(r,o,!1),e&&(n.delta&&!fe(e,8)?a.go(-n.delta,!1):n.type===K.pop&&fe(e,20)&&a.go(-1,!1)),$(r,o,e)})).catch(u)})))}let z,G=Be(),q=Be();function Z(e,t,n){ee(e);const r=q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(){return z&&g.value!==B?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function ee(e){return z||(z=!e,H(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ne(Q(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Y(e))).catch((e=>Z(e,t,n)))}const ie=e=>a.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:b,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:E,getRoutes:I,resolve:T,options:e,push:O,replace:P,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:q.add,isReady:J,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!se&&g.value===B&&(se=!0,O(a.location).catch((e=>{0})));const n={};for(const i in B)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(Ve,t),e.provide(We,(0,i.Gc)(n)),e.provide(He,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=B,W&&W(),W=null,g.value=B,se=!1,z=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return ae}function st(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>F(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>F(e,a)))||i.push(a))}return[n,r,i]}function ot(){return(0,r.WQ)(Ve)}function at(e){return(0,r.WQ)(We)}},223:(e,t,n)=>{n.d(t,{Wp:()=>r.Wp});var r=n(928),i="firebase",s="11.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},424:(e,t,n)=>{n.d(t,{$b:()=>i,Vy:()=>l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},501:(e,t,n)=>{n.d(t,{HF:()=>Ct,xI:()=>Jr,df:()=>$n});var r=n(928),i=n(72),s=n(424);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function p(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function g(e,...t){return _(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function b(e,t,...n){if(!e)throw _(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function I(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],D=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,r,s={}){return M(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},s);return(0,i.c1)()||(l.referrerPolicy="no-referrer"),R.fetch()(await j(e,e.config.apiHost,n,a),l)}))}async function M(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new $(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof i.g)throw s;f(e,"network-request-failed",{message:String(s)})}}async function U(e,t,n,r,i={}){const s=await L(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function j(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`;if(N.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){const e=s._getPersistence();return e._getFinalTarget(o).toString()}return o}function F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),D.get())}))}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return void 0!==e&&void 0!==e.enterprise}class H{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return L(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=J(r);b(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Z(s.auth_time)),issuedAtTime:G(Z(s.iat)),expirationTime:G(Z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Z(e){return 1e3*Number(e)}function J(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(s){return p("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=J(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Y(e,z(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function re(e){const t=(0,i.Ku)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function se(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await M(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=await j(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ae(e,t){return L(e,"POST","/v2/accounts:revokeToken",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(b("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return re(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await Y(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:I,stsTokenManager:E}=t;b(y&&E,e,"internal-error");const T=ce.fromJSON(this.name,E);b("string"===typeof y,e,"internal-error"),le(u,e.name),le(h,e.name),b("boolean"===typeof _,e,"internal-error"),b("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(p,e.name),le(f,e.name),le(g,e.name),le(m,e.name),le(v,e.name);const S=new ue({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?se(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new ce;o.updateFromIdToken(n);const a=new ue({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new te(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Map;function de(e){I(e instanceof Function,"Expected a class definition");let t=he.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,he.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pe.type="NONE";const fe=pe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ge(this.userKey,r.apiKey,i),this.fullPersistenceKey=ge("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await z(this.auth,{idToken:e}).catch((()=>{}));return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(de(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||de(fe);const s=ge(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){let n;if("string"===typeof t){const r=await z(e,{idToken:t}).catch((()=>{}));if(!r)break;n=await ue._fromGetAccountInfoResponse(e,r,t)}else n=ue._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ee(t))return"Blackberry";if(Te(t))return"Webos";if(_e(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(Ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function _e(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function Ie(e=(0,i.ZQ)()){return/android/i.test(e)}function Ee(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Te(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,i.lT)()&&10===document.documentMode}function Oe(e=(0,i.ZQ)()){return Se(e)||Ie(e)||Te(e)||Ee(e)||/windows phone/i.test(e)||we(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,t=[]){let n;switch(e){case"Browser":n=ve((0,i.ZQ)());break;case"Worker":n=`${ve((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t={}){return L(e,"GET","/v2/passwordPolicy",x(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=6;class De{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Ne,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=de(t)),this._initializationPromise=this.queue((async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await z(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(de(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ae(this),t=new De(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ae(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&de(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[de(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,i.Ku)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function je(e){Ue=e}function Fe(e){return Ue.loadJS(e)}function $e(){return Ue.recaptchaEnterpriseScript}function Ve(){return Ue.gapiScript}function We(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.enterprise=new Be}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Be{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ke="recaptcha-enterprise",ze="NO_RECAPTCHA";class Ge{constructor(e){this.type=Ke,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new H(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;W(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ze)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new He;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&W(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=$e();0!==t.length&&(t+=n),Fe(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function qe(e,t,n,r=!1,i=!1){const s=new Ge(e);let o;if(i)o=ze;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ze(e,t,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await qe(e,t,n);return r(e,i).catch((async i=>{var s;if("AUDIT"===(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await qe(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)}))}{const i=await qe(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Je(e){const t=Le(e),n=await B(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new H(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new Ge(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ye(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Le(e);b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),o=et(t),{host:a,port:c}=tt(t),l=null===c?"":`:${c}`,u={url:`${o}//${a}${l}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void b((0,i.bD)(u,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,s||rt()}function et(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tt(e){const t=et(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:nt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:nt(t)}}}function nt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function rt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t){return L(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function ct(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends it{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new lt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new lt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,t,"signInWithPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,n,"signUpPassword",st,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ct(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="http://localhost";class dt extends it{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new dt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ut(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:ht,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function ft(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function gt(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const mt={["USER_NOT_FOUND"]:"user-not-found"};async function vt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),mt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends it{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ft(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return vt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new yt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class wt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=_t(null!==(r=c["mode"])&&void 0!==r?r:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["lang"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=bt(e);try{return new wt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(){this.providerId=It.PROVIDER_ID}static credential(e,t){return lt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wt.parseLink(t);return b(n,"argument-error"),lt._fromEmailAndCode(e,n.code,n.tenantId)}}It.PROVIDER_ID="password",It.EMAIL_PASSWORD_SIGN_IN_METHOD="password",It.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Tt{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch(t){return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends Tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends Tt{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends Tt{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ot.credential(t,n)}catch(r){return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com",Ot.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=Rt(n),o=new Pt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Rt(n);return new Pt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Rt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function Nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await Y(e,Nt(i,s,t,e),n);b(r.idToken,i,"internal-error");const o=J(r.idToken);b(o,i,"internal-error");const{sub:a}=o;return b(e.uid===a,i,"user-mismatch"),Pt._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",s=await Nt(e,i,t),o=await Pt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}function Mt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Ut(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function $t(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Vt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const Wt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wt,"1"),this.storage.removeItem(Wt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=1e3,Kt=10;class zt extends Ht{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zt.type="LOCAL";const Gt=zt,qt=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){var t,n;const r=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return null!==(n=null===(t=document.cookie.match(i))||void 0===t?void 0:t[1])&&void 0!==n?n:null}function Jt(e){const t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class Xt{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Jt(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return null===e||void 0===e?void 0:e.value}return Zt(t)}async _remove(e){if(!this._isAvailable())return;const t=await this._get(e);if(!t)return;const n=Jt(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch((()=>{}))}_addListener(e,t){if(!this._isAvailable())return;const n=Jt(e);if(window.cookieStore){const e=e=>{const r=e.changed.find((e=>e.name===n));r&&t(r.value);const i=e.deleted.find((e=>e.name===n));i&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=Zt(n);const i=setInterval((()=>{const e=Zt(n);e!==r&&(t(e),r=e)}),qt),s=()=>clearInterval(i);this.listenerUnsubscribes.set(t,s)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Xt.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Ht{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yt.type="SESSION";const Qt=Yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await en(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function on(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function un(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="firebaseLocalStorageDb",dn=1,pn="firebaseLocalStorage",fn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([pn],t?"readwrite":"readonly").objectStore(pn)}function vn(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function yn(){const e=indexedDB.open(hn,dn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(pn,{keyPath:fn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(pn)?t(n):(n.close(),await vn(),t(await yn()))}))}))}async function _n(e,t,n){const r=mn(e,!0).put({[fn]:t,value:n});return new gn(r).toPromise()}async function bn(e,t){const n=mn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function wn(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const In=800,En=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>En)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await _n(e,Wt,"1"),await wn(e,Wt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>_n(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>bn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),In)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const Sn=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function kn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function On(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="recaptcha";async function Rn(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Je(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await An(e,t,n);return jt(e,r)}return jt(e,t)},o=Ze(e,r,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const s=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(s,e,"missing-multi-factor-info");const o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await An(e,t,n);return Cn(e,r)}return Cn(e,t)},c=Ze(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),l=await c.catch((e=>Promise.reject(e)));return l.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===ze){b((null===n||void 0===n?void 0:n.type)===Pn,e,"argument-error");const r=await An(e,t,n);return pt(e,r)}return pt(e,t)},s=Ze(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),o=await s.catch((e=>Promise.reject(e)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function An(e,t,n){b(n.type===Pn,e,"argument-error");const r=await n.verify();b("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.providerId=Nn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Rn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return yt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Nn.credentialFromTaggedObject(t)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?yt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(e,t){return t?de(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.PROVIDER_ID="phone",Nn.PHONE_SIGN_IN_METHOD="phone";class xn extends it{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Lt(e.auth,new xn(e),e.bypassAuthState)}function Mn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),xt(n,new xn(e),e.bypassAuthState)}async function Un(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Dt(n,new xn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Un;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:f(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new O(2e3,1e4);async function $n(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));const i=Le(e);y(e,t,Et);const s=Dn(i,n),o=new Vn(i,"signInViaPopup",t,s);return o.executeNotNull()}class Vn extends jn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fn.get())};e()}}Vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn="pendingRedirect",Hn=new Map;class Bn extends jn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hn.get(this.auth._key());if(!e){try{const t=await Kn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hn.set(this.auth._key(),e)}return this.bypassAuthState||Hn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kn(e,t){const n=qn(t),r=Gn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function zn(e,t){Hn.set(e._key(),t)}function Gn(e){return de(e._redirectPersistence)}function qn(e){return ge(Wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Le(e),s=Dn(i,t),o=new Bn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=6e5;class Xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!er(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yn(e))}saveEventToCache(e){this.cachedEventUids.add(Yn(e)),this.lastProcessedEventTime=Date.now()}}function Yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Qn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function er(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rr=/^https?/;async function ir(e){if(e.config.emulator)return;const{authorizedDomains:t}=await tr(e);for(const r of t)try{if(sr(r))return}catch(n){}f(e,"unauthorized-domain")}function sr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!rr.test(n))return!1;if(nr.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new O(3e4,6e4);function ar(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function cr(e){return new Promise(((t,n)=>{var r,i,s;function o(){ar(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ar(),n(g(e,"network-request-failed"))},timeout:or.get()})}if(null===(i=null===(r=sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=We("iframefcb");return sn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Fe(`${Ve()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw lr=null,e}))}let lr=null;function ur(e){return lr=lr||cr(e),lr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new O(5e3,15e3),dr="__/auth/iframe",pr="emulator/auth/iframe",fr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,pr):`https://${e.config.authDomain}/${dr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=gr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function vr(e){const t=await ur(e),n=sn().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:mr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=sn().setTimeout((()=>{r(i)}),hr.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_r=500,br=600,wr="_blank",Ir="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tr(e,t,n,r=_r,s=br){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},yr),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=be(u)?wr:n),ye(u)&&(t=t||Ir,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(u)&&"_self"!==c)return Sr(t||"",c),new Er(null);const d=window.open(t||"",c,h);b(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Er(d)}function Sr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="__/auth/handler",kr="emulator/auth/handler",Or=encodeURIComponent("fac");async function Pr(e,t,n,s,o,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof Et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${Or}=${encodeURIComponent(u)}`:"";return`${Rr(e)}?${(0,i.Am)(l).slice(1)}${h}`}function Rr({config:e}){return e.emulator?P(e,kr):`https://${e.authDomain}/${Cr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="webStorageSupport";class Nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qt,this._completeRedirectFn=Zn,this._overrideRedirectResult=zn}async _openPopup(e,t,n,r){var i;I(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Pr(e,t,n,E(),r);return Tr(e,s,nn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Pr(e,t,n,E(),r);return on(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await vr(e),n=new Xn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ar,{type:Ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ar];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ir(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||_e()||Se()}}const Dr=Nr;class xr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Lr extends xr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lr(e)}_finalizeEnroll(e,t,n){return Ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Mr{constructor(){}static assertion(e){return Lr._fromCredential(e)}}Mr.FACTOR_ID="phone";class Ur{static assertionForEnrollment(e,t){return jr._fromSecret(e,t)}static assertionForSignIn(e,t){return jr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await $t(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Fr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Ur.FACTOR_ID="totp";class jr extends xr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new jr(t,void 0,e)}static _fromEnrollmentId(e,t){return new jr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Vt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return On(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Fr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Fr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return($r(e)||$r(t))&&(r=!0),r&&($r(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),$r(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function $r(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Vr="@firebase/auth",Wr="1.10.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pe(e)},l=new xe(r,i,s,c);return Ye(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Hr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Vr,Wr,Br(e)),(0,r.KO)(Vr,Wr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=300,Gr=(0,i.XA)("authIdTokenMaxAge")||zr;let qr=null;const Zr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gr)return;const i=null===n||void 0===n?void 0:n.token;qr!==i&&(qr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Xe(e,{popupRedirectResolver:Dr,persistence:[Sn,Gt,Qt]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Zr(e.toString());Ut(n,t,(()=>t(n.currentUser))),Mt(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Qe(n,`http://${o}`),n}function Xr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}je({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Kr("Browser")},641:(e,t,n)=>{n.d(t,{$u:()=>se,CE:()=>qt,Df:()=>V,EW:()=>Mn,FK:()=>Ut,Fv:()=>an,Gt:()=>We,Gy:()=>L,K9:()=>ut,Lk:()=>en,MZ:()=>$,OW:()=>F,Q3:()=>cn,QP:()=>U,WQ:()=>He,Wv:()=>Zt,bF:()=>tn,bo:()=>P,dY:()=>m,eW:()=>on,g2:()=>pe,h:()=>Un,k6:()=>O,nI:()=>yn,pI:()=>ve,pM:()=>W,qL:()=>o,sV:()=>re,uX:()=>Ht,wB:()=>wt});var r=n(953),i=n(33);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(l)return(0,r.C4)(),s(l,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const l=[];let u=-1;const h=[];let d=null,p=0;const f=Promise.resolve();let g=null;function m(e){const t=g||f;return e?t.then(this?e.bind(this):e):t}function v(e){let t=u+1,n=l.length;while(t<n){const r=t+n>>>1,i=l[r],s=E(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=E(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=E(n)?l.push(e):l.splice(v(t),0,e),e.flags|=1,_()}}function _(){g||(g=f.then(T))}function b(e){(0,i.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(p+1,0,e):1&e.flags||(h.push(e),e.flags|=1),_()}function w(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function I(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>E(e)-E(t)));if(h.length=0,d)return void d.push(...e);for(d=e,p=0;p<d.length;p++){const e=d[p];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,p=0}}const E=e=>null==e.id?2&e.flags?-1:1/0:e.id;function T(e){i.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,I(e),g=null,(l.length||h.length)&&T(e)}}let S=null,C=null;function k(e){const t=S;return S=e,C=e&&e.type.__scopeId||null,t}function O(e,t=S,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const i=k(t);let s;try{s=e(...n)}finally{k(i),r._d&&zt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function P(e,t){if(null===S)return e;const n=Dn(S),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,l=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function R(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),o(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const A=Symbol("_vte"),N=e=>e.__isTeleport;const D=Symbol("_leaveCb"),x=Symbol("_enterCb");function L(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return re((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const M=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function j(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function F(e,t,n,r,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:f,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:b,onAppearCancelled:w}=t,I=String(e.key),E=j(n,e),T=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:c,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!a)return;r=y||u}t[D]&&t[D](!0);const i=E[I];i&&Xt(e,i)&&i.el[D]&&i.el[D](),T(r,[t])},enter(e){let t=h,r=d,i=p;if(!n.isMounted){if(!a)return;t=_||h,r=b||d,i=w||p}let s=!1;const o=e[x]=t=>{s||(s=!0,T(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e[x]=void 0)};t?S(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[x]&&t[x](!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t[D]=n=>{s||(s=!0,r(),T(n?v:m,[t]),t[D]=void 0,E[i]===e&&delete E[i])};E[i]=e,g?S(g,[t,o]):o()},clone(e){const i=F(e,t,n,r,s);return s&&s(i),i}};return C}function $(e,t){6&e.shapeFlag&&e.component?(e.transition=t,$(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function V(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ut?(128&o.patchFlag&&i++,r=r.concat(V(o.children,t,a))):(t||o.type!==Ft)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function W(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function H(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function B(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>B(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(K(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&B(e,t,n,o.component.subTree));const c=4&o.shapeFlag?Dn(o.component):o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===i.MZ?u.refs={}:u.refs,f=u.setupState,g=(0,r.ux)(f),m=f===i.MZ?()=>!1:e=>(0,i.$3)(g,e);if(null!=d&&d!==h&&((0,i.Kg)(d)?(p[d]=null,m(d)&&(f[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,u,12,[l,p]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?m(h)?f[h]:p[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(p[h]=[c],m(h)&&(f[h]=p[h])):(h.value=[c],e.k&&(p[e.k]=h.value))}else t?(p[h]=l,m(h)&&(f[h]=l)):s&&(h.value=l,e.k&&(p[e.k]=l))};l?(r.id=-1,lt(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const K=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function G(e,t){return(0,i.cy)(e)?e.some((e=>G(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function q(e,t){J(e,"a",t)}function Z(e,t){J(e,"da",t)}function J(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,r,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&X(r,t,n,e),e=e.parent}}function X(e,t,n,r){const s=ee(t,e,r,!0);ae((()=>{(0,i.TF)(r[t],s)}),n)}function Y(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Q(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=vn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=wn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const te=e=>(t,n=vn)=>{Cn&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),re=te("m"),ie=te("bu"),se=te("u"),oe=te("bum"),ae=te("um"),ce=te("sp"),le=te("rtg"),ue=te("rtc");function he(e,t=vn){ee("ec",e,t)}const de="components";function pe(e,t){return ge(de,e,!0,t)||e}const fe=Symbol.for("v-ndc");function ge(e,t,n=!0,r=!1){const s=S||vn;if(s){const n=s.type;if(e===de){const e=xn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=me(s[e]||n[e],t)||me(s.appContext[e],t);return!o&&r?n:o}}function me(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ve(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=t(i?(0,r.lJ)(e[s]):e[s],s,void 0,a&&a[s])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const ye=e=>e?En(e)?Dn(e):ye(e.parent):null,_e=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ye(e.parent),$root:e=>ye(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oe(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>Et.bind(e)}),be=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),we={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(be(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ee&&(c[t]=0)}}const d=_e[t];let p,f;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(f=u.config.globalProperties,(0,i.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return be(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||be(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(_e,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ie(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ee=!0;function Te(e){const t=Oe(e),n=e.proxy,s=e.ctx;Ee=!1,t.beforeCreate&&Ce(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:C,serverPrefetch:k,expose:O,inheritAttrs:P,components:R,directives:A,filters:N}=t,D=null;if(h&&Se(h,s,D),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ee=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Mn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)ke(l[r],s,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{We(t,e[t])}))}function x(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ce(d,e,"c"),x(ne,p),x(re,f),x(ie,g),x(se,m),x(q,v),x(Z,y),x(he,C),x(ue,T),x(le,S),x(oe,b),x(ae,I),x(ce,k),(0,i.cy)(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.tE&&(e.render=E),null!=P&&(e.inheritAttrs=P),R&&(e.components=R),A&&(e.directives=A),k&&H(e)}function Se(e,t,n=i.tE){(0,i.cy)(e)&&(e=De(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?He(n.from||s,n.default,!0):He(n.from||s):He(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ce(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ke(e,t,n,r){let s=r.includes(".")?Tt(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&wt(s,n)}else if((0,i.Tn)(e))wt(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>ke(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&wt(s,r,e)}else 0}function Oe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach((e=>Pe(l,e,a,!0))),Pe(l,t,a)):l=t,(0,i.Gv)(t)&&o.set(t,l),l}function Pe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Pe(e,s,n,!0),i&&i.forEach((t=>Pe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Re[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Re={data:Ae,props:Me,emits:Me,methods:Le,computed:Le,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Le,directives:Le,watch:Ue,provide:Ae,inject:Ne};function Ae(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Ne(e,t){return Le(De(e),De(t))}function De(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Le(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Me(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ie(e),Ie(null!=t?t:{})):t}function Ue(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function je(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fe=0;function $e(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=je(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:Fe++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(i,o,a){if(!l){0;const c=u._ceVNode||tn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Dn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=Ve;Ve=u;try{return e()}finally{Ve=t}}};return u}}let Ve=null;function We(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function He(e,t,n=!1){const r=vn||S;if(r||Ve){const s=Ve?Ve._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const Be={},Ke=()=>Object.create(Be),ze=e=>Object.getPrototypeOf(e)===Be;function Ge(e,t,n,i=!1){const s={},o=Ke();e.propsDefaults=Object.create(null),Ze(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function qe(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ze(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Je(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Ot(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=Je(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Ze(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Ot(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Je(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return l}function Je(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=wn(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Xe=new WeakMap;function Ye(e,t,n=!1){const r=n?Xe:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=Ye(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);Qe(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(Qe(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let l=!1,u=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function Qe(e){return"$"!==e[0]&&!(0,i.SU)(e)}const et=e=>"_"===e[0]||"$stable"===e,tt=e=>(0,i.cy)(e)?e.map(ln):[ln(e)],nt=(e,t,n)=>{if(t._n)return t;const r=O(((...e)=>tt(t(...e))),n);return r._c=!1,r},rt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(et(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=nt(s,n,r);else if(null!=n){0;const e=tt(n);t[s]=()=>e}}},it=(e,t)=>{const n=tt(t);e.slots.default=()=>n},st=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},ot=(e,t,n)=>{const r=e.slots=Ke();if(32&e.vnode.shapeFlag){const e=t._;e?(st(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):rt(t,r)}else t&&it(e,t)},at=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:st(s,t,n):(o=!t.$stable,rt(t,s)),a=t}else t&&(it(e,t),a={default:1});if(o)for(const i in s)et(i)||null!=a[i]||delete s[i]};function ct(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const lt=Mt;function ut(e){return ht(e)}function ht(e,t){ct();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xt(e,t)&&(r=Q(e),q(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case jt:_(e,t,n,r);break;case Ft:b(e,t,n,r);break;case $t:null==e&&E(t,n,r,o);break;case Ut:L(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ne)}null!=u&&i&&B(u,e&&e.ref,s,t||e,!t)},_=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=f(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,o,l,u,h)=>{let p,f;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(p=e.el=c(e.type,l,g&&g.is,g),8&m?d(p,e.children):16&m&&P(e.children,p,null,r,o,dt(e,l),u,h),y&&R(e,null,r,"created"),O(p,e,e.scopeId,u,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(p,e,null,g[e],l,r);"value"in g&&a(p,"value",null,g.value,l),(f=g.onVnodeBeforeMount)&&pn(f,r,e)}y&&R(e,null,r,"beforeMount");const _=ft(o,v);_&&v.beforeEnter(p),s(p,t,n),((f=g&&g.onVnodeMounted)||_||y)&&lt((()=>{f&&pn(f,r,e),_&&v.enter(p),y&&R(e,null,r,"mounted")}),o)},O=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n||Lt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?un(e[l]):ln(e[l]);v(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&pt(n,!1),(m=g.onVnodeBeforeUpdate)&&pn(m,n,t,e),p&&R(t,e,n,"beforeUpdate"),n&&pt(n,!0),(f.innerHTML&&null==g.innerHTML||f.textContent&&null==g.textContent)&&d(l,""),h?D(e.dynamicChildren,h,l,n,r,dt(t,s),o):c||V(e,t,l,null,n,r,dt(t,s),o,!1),u>0){if(16&u)x(l,f,g,n,s);else if(2&u&&f.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",f.style,g.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=f[r],o=g[r];o===i&&"value"!==r||a(l,r,i,o,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,f,g,n,s);((m=g.onVnodeUpdated)||p)&&lt((()=>{m&&pn(m,n,t,e),p&&R(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Ut||!Xt(c,l)||70&c.shapeFlag)?p(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},x=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},L=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),P(t.children||[],n,d,i,o,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(D(e.dynamicChildren,f,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&gt(e,t,!0)):V(e,t,n,d,i,o,a,c,u)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):j(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(z(e)&&(a.ctx.renderer=ne),kn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,F,o),!e.el){const e=a.subTree=tn(Ft);b(null,e,t,n)}}else F(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(Nt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:u}=e;{const n=vt(e);if(n)return t&&(t.el=u.el,$(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,pt(e,!1),t?(t.el=u.el,$(e,t,c)):t=u,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&pn(h,s,t,u),pt(e,!0);const f=Pt(e);0;const g=e.subTree;e.subTree=f,v(g,f,p(g.el),Q(g),e,o,a),t.el=f.el,null===d&&xt(e,f.el),r&&lt(r,o),(h=t.props&&t.props.onVnodeUpdated)&&lt((()=>pn(h,s,t,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:p,type:f}=e,g=K(t);if(pt(e,!1),u&&(0,i.DY)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&pn(r,d,t),pt(e,!0),c&&ie){const t=()=>{e.subTree=Pt(e),ie(c,e.subTree,e,o,null)};g&&f.__asyncHydrate?f.__asyncHydrate(c,e,t):t()}else{p.ce&&p.ce._injectChildStyle(f);const r=e.subTree=Pt(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&lt(h,o),!g&&(r=l&&l.onVnodeMounted)){const e=t;lt((()=>pn(r,d,e)),o)}(256&t.shapeFlag||d&&K(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&lt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>y(d),pt(e,!0),h()},$=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,qe(e,t.props,i,n),at(e,t.children,n),(0,r.C4)(),w(e),(0,r.bl)()},V=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void H(l,h,n,r,i,s,o,a,c);if(256&p)return void W(l,h,n,r,i,s,o,a,c)}8&f?(16&u&&Y(l,i,s),h!==l&&d(n,h)):16&u?16&f?H(l,h,n,r,i,s,o,a,c):Y(l,i,s,!0):(8&u&&d(n,""),16&f&&P(h,n,r,i,s,o,a,c))},W=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const r=t[p]=l?un(t[p]):ln(t[p]);v(e[p],r,n,null,s,o,a,c,l)}u>h?Y(e,s,o,!0,!1,d):P(t,n,r,s,o,a,c,l,d)},H=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const r=e[u],i=t[u]=l?un(t[u]):ln(t[u]);if(!Xt(r,i))break;v(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=p){const r=e[d],i=t[p]=l?un(t[p]):ln(t[p]);if(!Xt(r,i))break;v(r,i,n,null,s,o,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,i=e<h?t[e].el:r;while(u<=p)v(null,t[u]=l?un(t[u]):ln(t[u]),n,i,s,o,a,c,l),u++}}else if(u>p)while(u<=d)q(e[u],s,o,!0),u++;else{const f=u,g=u,m=new Map;for(u=g;u<=p;u++){const e=t[u]=l?un(t[u]):ln(t[u]);null!=e.key&&m.set(e.key,u)}let y,_=0;const b=p-g+1;let w=!1,I=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=f;u<=d;u++){const r=e[u];if(_>=b){q(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=p;y++)if(0===E[y-g]&&Xt(r,t[y])){i=y;break}void 0===i?q(r,s,o,!0):(E[i-g]=u+1,i>=I?I=i:w=!0,v(r,t[i],n,null,s,o,a,c,l),_++)}const T=w?mt(E):i.Oj;for(y=T.length-1,u=b-1;u>=0;u--){const e=g+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?v(null,i,n,d,s,o,a,c,l):w&&(y<0||u!==T[y]?G(i,n,d,2):y--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Ut){s(o,t,n);for(let e=0;e<l.length;e++)G(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===$t)return void T(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),lt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:p}=e;if(-2===h&&(i=!1),null!=a&&B(a,null,n,e,!0),null!=p&&(t.renderCache[p]=void 0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,g=!K(e);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&pn(m,t,e),6&u)X(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&R(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(s!==Ut||h>0&&64&h)?Y(l,t,n,!1,!0):(s===Ut&&384&h||!i&&16&u)&&Y(c,t,n),r&&Z(e)}(g&&(m=o&&o.onVnodeUnmounted)||f)&&lt((()=>{m&&pn(m,t,e),f&&R(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ut)return void J(n,r);if(t===$t)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;yt(l),yt(u),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,q(a,e,t,n)),c&&lt(c,t),lt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)q(e[o],t,n,r,i)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=f(e.anchor||e.el),n=t&&t[A];return n?f(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,w(),I(),ee=!1)},ne={p:v,um:q,m:G,r:Z,mt:U,mc:P,pc:V,pbc:D,n:Q,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:$e(te,re)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=un(s[i]),t.el=e.el),n||-2===t.patchFlag||gt(e,t)),t.type===jt&&(t.el=e.el)}}function mt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function vt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vt(t)}function yt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _t=Symbol.for("v-scx"),bt=()=>{{const e=He(_t);return e}};function wt(e,t,n){return It(e,t,n)}function It(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(Cn)if("sync"===c){const e=bt();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const p=vn;u.call=(e,t,n)=>o(e,p,t,n);let f=!1;"post"===c?u.scheduler=e=>{lt(e,p&&p.suspense)}:"sync"!==c&&(f=!0,u.scheduler=(e,t)=>{t?e():y(e)}),u.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};const g=(0,r.wB)(e,t,u);return Cn&&(d?d.push(g):h&&g()),g}function Et(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Tt(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=wn(this),c=It(s,o.bind(r),n);return a(),c}function Tt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const St=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Ct(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&St(r,t.slice(7));let l;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function kt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=kt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Ot(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Pt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:p,data:f,setupState:g,ctx:m,inheritAttrs:v}=e,y=k(e);let _,b;try{if(4&n.shapeFlag){const e=s||r,t=e;_=ln(h.call(t,e,d,p,g,f,m)),b=l}else{const e=t;0,_=ln(e.length>1?e(p,{attrs:l,slots:c,emit:u}):e(p,null)),b=t.props?l:Rt(l)}}catch(I){Vt.length=0,a(I,e,1),_=tn(Ft)}let w=_;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(o&&e.some(i.CP)&&(b=At(b,o)),w=sn(w,b,!1,!0))}return n.dirs&&(w=sn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&$(w,n.transition),_=w,k(y),_}const Rt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},At=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Nt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Dt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Dt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ot(l,n))return!0}}return!1}function Dt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ot(n,s))return!0}return!1}function xt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Lt=e=>e.__isSuspense;function Mt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):b(e)}const Ut=Symbol.for("v-fgt"),jt=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),Vt=[];let Wt=null;function Ht(e=!1){Vt.push(Wt=e?null:[])}function Bt(){Vt.pop(),Wt=Vt[Vt.length-1]||null}let Kt=1;function zt(e,t=!1){Kt+=e,e<0&&Wt&&t&&(Wt.hasOnce=!0)}function Gt(e){return e.dynamicChildren=Kt>0?Wt||i.Oj:null,Bt(),Kt>0&&Wt&&Wt.push(e),e}function qt(e,t,n,r,i,s){return Gt(en(e,t,n,r,i,s,!0))}function Zt(e,t,n,r,i){return Gt(tn(e,t,n,r,i,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Yt=({key:e})=>null!=e?e:null,Qt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:S,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,r=0,s=null,o=(e===Ut?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yt(t),ref:t&&Qt(t),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(hn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Kt>0&&!a&&Wt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Wt.push(l),l}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==fe||(e=Ft),Jt(e)){const r=sn(e,t,!0);return n&&hn(r,n),Kt>0&&!a&&Wt&&(6&r.shapeFlag?Wt[Wt.indexOf(e)]=r:Wt.push(r)),r.patchFlag=-2,r}if(Ln(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Lt(e)?128:N(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,r.ju)(e)||ze(e)?(0,i.X$)({},e):e:null}function sn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?dn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Yt(u),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(Qt(t)):[o,Qt(t)]:Qt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ut?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&$(h,l.clone(h)),h}function on(e=" ",t=0){return tn(jt,null,e,t)}function an(e,t){const n=tn($t,null,e);return n.staticCount=t,n}function cn(e="",t=!1){return t?(Ht(),Zt(Ft,null,e)):tn(Ft,null,e)}function ln(e){return null==e||"boolean"===typeof e?tn(Ft):(0,i.cy)(e)?tn(Ut,null,e.slice()):Jt(e)?un(e):tn(jt,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ze(t)?3===r&&S&&(1===S.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=S}}else(0,i.Tn)(t)?(t={default:t,_ctx:S},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function pn(e,t,n,r=null){o(e,t,7,[n,r])}const fn=je();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||fn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ye(s,o),emitsOptions:kt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ct.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||S;let _n,bn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};_n=t("__VUE_INSTANCE_SETTERS__",(e=>vn=e)),bn=t("__VUE_SSR_SETTERS__",(e=>Cn=e))}const wn=e=>{const t=vn;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},In=()=>{vn&&vn.scope.off(),_n(null)};function En(e){return 4&e.vnode.shapeFlag}let Tn,Sn,Cn=!1;function kn(e,t=!1,n=!1){t&&bn(t);const{props:r,children:i}=e.vnode,s=En(e);Ge(e,r,s,t),ot(e,i,n);const o=s?On(e,t):void 0;return t&&bn(!1),o}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,we);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?Nn(e):null,c=wn(e),l=s(o,e,0,[e.props,n]),u=(0,i.yL)(l);if((0,r.bl)(),c(),!u&&!e.sp||K(e)||H(e),u){if(l.then(In,In),t)return l.then((n=>{Pn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Pn(e,l,t)}else Rn(e,t)}function Pn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Rn(e,n)}function Rn(e,t,n){const s=e.type;if(!e.render){if(!t&&Tn&&!s.render){const t=s.template||Oe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Tn(t,c)}}e.render=s.render||i.tE,Sn&&Sn(e)}{const t=wn(e);(0,r.C4)();try{Te(e)}finally{(0,r.bl)(),t()}}}const An={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Nn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,An),slots:e.slots,emit:e.emit,expose:t}}function Dn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in _e?_e[n](e):void 0},has(e,t){return t in e||t in _e}})):e.proxy}function xn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Ln(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Mn=(e,t)=>{const n=(0,r.EW)(e,t,Cn);return n};function Un(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Jt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jt(n)&&(n=[n]),tn(e,t,n))}const jn="3.5.13"},751:(e,t,n)=>{n.d(t,{D$:()=>ne,Ef:()=>oe,Jo:()=>G,lH:()=>q,u1:()=>J});var r=n(641),i=n(33);n(953);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(le){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p=Symbol("_vtc"),f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(e,t,n){const r=e[p];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const _=/(^|;)\s*display\s*:/;function b(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&I(r,t,"")}else for(const e in t)null==n[e]&&I(r,e,"");for(const e in n)"display"===e&&(o=!0),I(r,e,n[e])}else if(s){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,o=_.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?r.display:"",e[v]&&(r.display="none"))}const w=/\s*!important$/;function I(e,t,n){if((0,i.cy)(n))n.forEach((n=>I(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=S(e,t);w.test(n)?e.setProperty((0,i.Tg)(r),n.replace(w,""),"important"):e[r]=n}}const E=["Webkit","Moz","ms"],T={};function S(e,t){const n=T[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return T[t]=r;r=(0,i.ZH)(r);for(let i=0;i<E.length;i++){const n=E[i]+r;if(n in e)return T[t]=n}return t}const C="http://www.w3.org/1999/xlink";function k(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(C,t.slice(6,t.length)):e.setAttributeNS(C,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function O(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(le){0}c&&e.removeAttribute(s||t)}function P(e,t,n,r){e.addEventListener(t,n,r)}function R(e,t,n,r){e.removeEventListener(t,n,r)}const A=Symbol("_vei");function N(e,t,n,r,i=null){const s=e[A]||(e[A]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=x(t);if(r){const o=s[t]=j(r,i);P(e,n,o,a)}else o&&(R(e,n,o,a),s[t]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function x(e){let t;if(D.test(e)){let n;t={};while(n=e.match(D))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),U=()=>L||(M.then((()=>L=0)),L=Date.now());function j(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(F(e,n.value),t,5,[e])};return n.value=e,n.attached=U(),n}function F(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const $=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,V=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?g(e,r,a):"style"===t?b(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||N(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):W(e,t,r,a))?(O(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||k(e,t,r,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),k(e,t,r,a)):O(e,(0,i.PT)(t),r,o,t)};function W(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&$(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const H=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function B(e){e.target.composing=!0}function K(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const z=Symbol("_assign"),G={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[z]=H(s);const o=r||s.props&&"number"===s.props.type;P(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[z](r)})),n&&P(e,"change",(()=>{e.value=e.value.trim()})),t||(P(e,"compositionstart",B),P(e,"compositionend",K),P(e,"change",K))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[z]=H(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}}},q={deep:!0,created(e,t,n){e[z]=H(n),P(e,"change",(()=>{const t=e._modelValue,n=Y(e),r=e.checked,s=e[z];if((0,i.cy)(t)){const e=(0,i.u3)(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,i.vM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(Q(e,r))}))},mounted:Z,beforeUpdate(e,t,n){e[z]=H(n),Z(e,t,n)}};function Z(e,{value:t,oldValue:n},r){let s;if(e._modelValue=t,(0,i.cy)(t))s=(0,i.u3)(t,r.props.value)>-1;else if((0,i.vM)(t))s=t.has(r.props.value);else{if(t===n)return;s=(0,i.BX)(t,Q(e,!0))}e.checked!==s&&(e.checked=s)}const J={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);P(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(Y(e)):Y(e)));e[z](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[z]=H(s)},mounted(e,{value:t}){X(e,t)},beforeUpdate(e,t,n){e[z]=H(n)},updated(e,{value:t}){e._assigning||X(e,t)}};function X(e,t){const n=e.multiple,r=(0,i.cy)(t);if(!n||r||(0,i.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=Y(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,i.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,i.BX)(Y(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Y(e){return"_value"in e?e._value:e.value}function Q(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ee=["ctrl","shift","alt","meta"],te={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ee.some((n=>e[`${n}Key`]&&!t.includes(n)))},ne=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=te[t[e]];if(r&&r(n,t))return}return e(n,...r)})},re=(0,i.X$)({patchProp:V},d);let ie;function se(){return ie||(ie=(0,r.K9)(re))}const oe=(...e)=>{const t=se().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ce(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,ae(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function ae(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ce(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},928:(e,t,n)=>{n.d(t,{MF:()=>_e,j6:()=>fe,xZ:()=>ge,om:()=>pe,Sx:()=>we,Wp:()=>be,KO:()=>Ie});var r=n(125),i=n(424),s=n(72);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return p.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,l())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(f.has(e))return f.get(e);const t=w(e);return t!==e&&(f.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}_((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",N="0.11.5",D=new i.Vy("@firebase/app"),x="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",W="@firebase/data-connect",H="@firebase/database-compat",B="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",q="@firebase/messaging",Z="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/vertexai",ie="@firebase/firestore-compat",se="firebase",oe="11.6.1",ae="[DEFAULT]",ce={[A]:"fire-core",[x]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[W]:"fire-data-connect",[H]:"fire-rtdb-compat",[B]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[q]:"fire-fcm",[Z]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[se]:"fire-js-all"},le=new Map,ue=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pe(e){const t=e.name;if(he.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of le.values())de(n,e);for(const n of ue.values())de(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ge(e){return null!==e&&void 0!==e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ve=new s.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=oe;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ve.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ve.create("no-options");const a=le.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw ve.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of he.values())c.addComponent(r);const l=new ye(n,i,c);return le.set(o,l),l}function we(e=ae){const t=le.get(e);if(!t&&e===ae&&(0,s.T9)())return be();if(!t)throw ve.create("no-app",{appName:e});return t}function Ie(e,t,n){var i;let s=null!==(i=ce[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}pe(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="firebase-heartbeat-database",Te=1,Se="firebase-heartbeat-store";let Ce=null;function ke(){return Ce||(Ce=T(Ee,Te,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Se)}catch(n){console.warn(n)}}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Oe(e){try{const t=await ke(),n=t.transaction(Se),r=await n.objectStore(Se).get(Re(e));return await n.done,r}catch(t){if(t instanceof s.g)D.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Pe(e,t){try{const n=await ke(),r=n.transaction(Se,"readwrite"),i=r.objectStore(Se);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,Ne=30;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=xe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Ne){const e=je(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=xe(),{heartbeatsToSend:n,unsentEntries:r}=Le(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Le(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Oe(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}function je(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){pe(new r.uA("platform-logger",(e=>new P(e)),"PRIVATE")),pe(new r.uA("heartbeat",(e=>new De(e)),"PRIVATE")),Ie(A,N,e),Ie(A,N,"esm2017"),Ie("fire-js","")}Fe("")},953:(e,t,n)=>{n.d(t,{C4:()=>T,EW:()=>Ue,Gc:()=>ve,IG:()=>Se,IJ:()=>Re,KR:()=>Pe,Kh:()=>me,Pr:()=>Le,R1:()=>De,X2:()=>l,bl:()=>S,fE:()=>Ie,g8:()=>be,hV:()=>He,hZ:()=>M,i9:()=>Oe,ju:()=>Ee,lJ:()=>Ce,qA:()=>j,u4:()=>L,ux:()=>Te,wB:()=>We,yC:()=>o});var r=n(33);
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||p(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,C(this),m(this);const e=s,t=I;s=this,I=!0;try{return this.fn()}finally{0,v(this),s=e,I=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,C(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let u,h,d=0;function p(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=u,u=e}function f(){d++}function g(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),b(r),w(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===k)return;e.globalVersion=k;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=s,i=I;s=e,I=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,I=i,v(e),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let I=!0;const E=[];function T(){E.push(I),I=!1}function S(){const e=E.pop();I=void 0===e||e}function C(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let k=0;class O{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class P{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!I||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new O(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,R(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,k++,this.notify(e)}notify(e){f();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function R(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)R(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const A=new WeakMap,N=Symbol(""),D=Symbol(""),x=Symbol("");function L(e,t,n){if(I&&s){let t=A.get(e);t||A.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new P),r.map=t,r.key=n),r.track()}}function M(e,t,n,i,s,o){const a=A.get(e);if(!a)return void k++;const c=e=>{e&&e.trigger()};if(f(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===x||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(x)),t){case"add":s?o&&c(a.get("length")):(c(a.get(N)),(0,r.CE)(e)&&c(a.get(D)));break;case"delete":s||(c(a.get(N)),(0,r.CE)(e)&&c(a.get(D)));break;case"set":(0,r.CE)(e)&&c(a.get(N));break}}g()}function U(e){const t=Te(e);return t===e?t:(L(t,"iterate",x),Ie(e)?t:t.map(Ce))}function j(e){return L(e=Te(e),"iterate",x),e}const F={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,Ce)},concat(...e){return U(this).concat(...e.map((e=>(0,r.cy)(e)?U(e):e)))},entries(){return $(this,"entries",(e=>(e[1]=Ce(e[1]),e)))},every(e,t){return W(this,"every",e,t,void 0,arguments)},filter(e,t){return W(this,"filter",e,t,(e=>e.map(Ce)),arguments)},find(e,t){return W(this,"find",e,t,Ce,arguments)},findIndex(e,t){return W(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return W(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return W(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return W(this,"forEach",e,t,void 0,arguments)},includes(...e){return B(this,"includes",e)},indexOf(...e){return B(this,"indexOf",e)},join(e){return U(this).join(e)},lastIndexOf(...e){return B(this,"lastIndexOf",e)},map(e,t){return W(this,"map",e,t,void 0,arguments)},pop(){return K(this,"pop")},push(...e){return K(this,"push",e)},reduce(e,...t){return H(this,"reduce",e,t)},reduceRight(e,...t){return H(this,"reduceRight",e,t)},shift(){return K(this,"shift")},some(e,t){return W(this,"some",e,t,void 0,arguments)},splice(...e){return K(this,"splice",e)},toReversed(){return U(this).toReversed()},toSorted(e){return U(this).toSorted(e)},toSpliced(...e){return U(this).toSpliced(...e)},unshift(...e){return K(this,"unshift",e)},values(){return $(this,"values",Ce)}};function $(e,t,n){const r=j(e),i=r[t]();return r===e||Ie(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const V=Array.prototype;function W(e,t,n,r,i,s){const o=j(e),a=o!==e&&!Ie(e),c=o[t];if(c!==V[t]){const t=c.apply(e,s);return a?Ce(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,Ce(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function H(e,t,n,r){const i=j(e);let s=n;return i!==e&&(Ie(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,Ce(r),i,e)}),i[t](s,...r)}function B(e,t,n){const r=Te(e);L(r,"iterate",x);const i=r[t](...n);return-1!==i&&!1!==i||!Ee(n[0])?i:(n[0]=Te(n[0]),r[t](...n))}function K(e,t,n=[]){T(),f();const r=Te(e)[t].apply(e,n);return g(),S(),r}const z=(0,r.pD)("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function q(e){(0,r.Bm)(e)||(e=String(e));const t=Te(this);return L(t,"has",e),t.hasOwnProperty(e)}class Z{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?pe:de:s?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=F[t]))return e;if("hasOwnProperty"===t)return q}const a=Reflect.get(e,t,Oe(e)?e:n);return((0,r.Bm)(t)?G.has(t):z(t))?a:(i||L(e,"get",t),s?a:Oe(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):me(a):a)}}class J extends Z{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=we(s);if(Ie(n)||we(n)||(s=Te(s),n=Te(n)),!(0,r.cy)(e)&&Oe(s)&&!Oe(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Oe(e)?e:i);return e===Te(i)&&(o?(0,r.$H)(n,s)&&M(e,"set",t,n,s):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&M(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&G.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":N),Reflect.ownKeys(e)}}class X extends Z{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y=new J,Q=new X,ee=new J(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Te(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?te:t?ke:Ce;return!t&&L(o,"iterate",l?D:N),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const i=this["__v_raw"],s=Te(i),o=Te(n);e||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ne(s),c=t?te:e?ke:Ce;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Te(t),"iterate",N),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Te(n),s=Te(t);return e||((0,r.$H)(t,s)&&L(i,"has",t),L(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Te(s),a=t?te:e?ke:Ce;return!e&&L(o,"iterate",N),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Ie(e)||we(e)||(e=Te(e));const n=Te(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Ie(n)||we(n)||(n=Te(n));const i=Te(this),{has:s,get:o}=ne(i);let a=s.call(i,e);a||(e=Te(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&M(i,"set",e,n,c):M(i,"add",e,n),this},delete(e){const t=Te(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Te(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&M(t,"delete",e,void 0,s),o},clear(){const e=Te(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function oe(e,t){const n=se(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ae={get:oe(!1,!1)},ce={get:oe(!1,!0)},le={get:oe(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,r.Zf)(e))}function me(e){return we(e)?e:_e(e,!1,Y,ae,ue)}function ve(e){return _e(e,!1,ee,ce,he)}function ye(e){return _e(e,!0,Q,le,de)}function _e(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ge(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function be(e){return we(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return!!e&&!!e["__v_raw"]}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Se(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ce=e=>(0,r.Gv)(e)?me(e):e,ke=e=>(0,r.Gv)(e)?ye(e):e;function Oe(e){return!!e&&!0===e["__v_isRef"]}function Pe(e){return Ae(e,!1)}function Re(e){return Ae(e,!0)}function Ae(e,t){return Oe(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.dep=new P,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Te(e),this._value=t?e:Ce(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ie(e)||we(e);e=n?e:Te(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ce(e),this.dep.trigger())}}function De(e){return Oe(e)?e.value:e}const xe={get:(e,t,n)=>"__v_raw"===t?e:De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return be(e)?e:new Proxy(e,xe)}class Me{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new P(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return p(this,!0),!0}get value(){const e=this.dep.track();return _(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ue(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Me(i,s,n);return o}const je={},Fe=new WeakMap;let $e;function Ve(e,t=!1,n=$e){if(n){let t=Fe.get(n);t||Fe.set(n,t=[]),t.push(e)}else 0}function We(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:u,call:h}=n,d=e=>s?e:Ie(e)||!1===s||0===s?He(e,1):He(e);let p,f,g,m,v=!1,y=!1;if(Oe(e)?(f=()=>e.value,v=Ie(e)):be(e)?(f=()=>d(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>be(e)||Ie(e))),f=()=>e.map((e=>Oe(e)?e.value:be(e)?d(e):(0,r.Tn)(e)?h?h(e,2):e():void 0))):f=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){T();try{g()}finally{S()}}const t=$e;$e=p;try{return h?h(e,3,[m]):e(m)}finally{$e=t}}:r.tE,t&&s){const e=f,t=!0===s?1/0:s;f=()=>He(e(),t)}const _=a(),b=()=>{p.stop(),_&&_.active&&(0,r.TF)(_.effects,p)};if(o&&t){const e=t;t=(...t)=>{e(...t),b()}}let w=y?new Array(e.length).fill(je):je;const I=e=>{if(1&p.flags&&(p.dirty||e))if(t){const e=p.run();if(s||v||(y?e.some(((e,t)=>(0,r.$H)(e,w[t]))):(0,r.$H)(e,w))){g&&g();const n=$e;$e=p;try{const n=[e,w===je?void 0:y&&w[0]===je?[]:w,m];h?h(t,3,n):t(...n),w=e}finally{$e=n}}}else p.run()};return u&&u(I),p=new l(f),p.scheduler=c?()=>c(I,!1):I,m=e=>Ve(e,!1,p),g=p.onStop=()=>{const e=Fe.get(p);if(e){if(h)h(e,4);else for(const t of e)t();Fe.delete(p)}},t?i?I(!0):w=p.run():c?c(I.bind(null,!0),!0):p.run(),b.pause=p.pause.bind(p),b.resume=p.resume.bind(p),b.stop=b,b}function He(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Oe(e))He(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)He(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{He(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)He(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&He(e[r],t,n)}return e}}}]);
//# sourceMappingURL=chunk-vendors.4363a45b.js.map