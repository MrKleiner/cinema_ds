// 
// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
// █░░░░░░░░░░░░░░██░░░░░░░░░░██░░░░░░██████████░░░░░░██░░░░░░░░░░░░░░██░░░░░░██████████░░░░░░██░░░░░░░░░░░░░░██░░░░░░░░░░░░████░░░░░░░░░░░░░░█
// █░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀▄▀▄▀░░██░░▄▀░░░░░░░░░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░░░░░░░░░░░░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀▄▀▄▀▄▀░░░░██░░▄▀▄▀▄▀▄▀▄▀░░█
// █░░▄▀░░░░░░░░░░██░░░░▄▀░░░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░██░░▄▀░░░░░░░░░░██░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░░░░░▄▀░░██░░▄▀░░░░▄▀▄▀░░██░░▄▀░░░░░░░░░░█
// █░░▄▀░░████████████░░▄▀░░████░░▄▀░░░░░░▄▀░░██░░▄▀░░██░░▄▀░░██████████░░▄▀░░░░░░▄▀░░░░░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░█████████
// █░░▄▀░░████████████░░▄▀░░████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░░░░░░░░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░░░░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░░░░░░░░░█
// █░░▄▀░░████████████░░▄▀░░████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░█
// █░░▄▀░░████████████░░▄▀░░████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░░░░░░░░░██░░▄▀░░██░░░░░░██░░▄▀░░██░░▄▀░░░░░░▄▀░░██░░▄▀░░██░░▄▀░░██░░░░░░░░░░▄▀░░█
// █░░▄▀░░████████████░░▄▀░░████░░▄▀░░██░░▄▀░░░░░░▄▀░░██░░▄▀░░██████████░░▄▀░░██████████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░██████████░░▄▀░░█
// █░░▄▀░░░░░░░░░░██░░░░▄▀░░░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░░░░░░░░░██░░▄▀░░██████████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀░░░░▄▀▄▀░░██░░░░░░░░░░▄▀░░█
// █░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀▄▀▄▀░░██░░▄▀░░██░░░░░░░░░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░██████████░░▄▀░░██░░▄▀░░██░░▄▀░░██░░▄▀▄▀▄▀▄▀░░░░██░░▄▀▄▀▄▀▄▀▄▀░░█
// █░░░░░░░░░░░░░░██░░░░░░░░░░██░░░░░░██████████░░░░░░██░░░░░░░░░░░░░░██░░░░░░██████████░░░░░░██░░░░░░██░░░░░░██░░░░░░░░░░░░████░░░░░░░░░░░░░░█
// ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████



















// ==UserScript==
// @name         cinema_ds
// @namespace    http://tampermonkey.net/
// @version      0.17
// @description  A Discord addon which transforms server/dm, channels into image strips 
// @author       Barney
// @match        https://discord.com/*
// @match        https://discord.gg/*
// @icon         https://images.techhive.com/images/article/2016/10/firefox-logo-100690302-large.jpg?auto=webp&quality=85,70
// @connect      *
// @connect      self
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        window.onurlchange
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==


// ======================================================================
// Discord unbinds local storage methods to make the token inaccessible
// ======================================================================

// simply make the Tampermonkey script launch BEFORE discord...

// actually, this is not accessible from console
// and therefore it shouldn't be too big of a security problem
// just make sure that Tampermonkey keeps this entire thing sandboxed
// todo: does it actually has to be in the very top of the stuff ?
const ds_token = window.localStorage['token'].replaceAll('"', '');
// window.padlock = userToken.replaceAll('"', '');



















// 
// ──────────────────────────────────────────────────────────────
// ─██████──────────██████████──██████████████────██████████████─
// ─██░░██──────────██░░░░░░██──██░░░░░░░░░░██────██░░░░░░░░░░██─
// ─██░░██──────────████░░████──██░░██████░░██────██░░██████████─
// ─██░░██────────────██░░██────██░░██──██░░██────██░░██─────────
// ─██░░██────────────██░░██────██░░██████░░████──██░░██████████─
// ─██░░██────────────██░░██────██░░░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██░░██────────────██░░██────██░░████████░░██──██████████░░██─
// ─██░░██────────────██░░██────██░░██────██░░██──────────██░░██─
// ─██░░██████████──████░░████──██░░████████░░██──██████████░░██─
// ─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██████████████──██████████──████████████████──██████████████─
// ──────────────────────────────────────────────────────────────









//       ::::::::::           :::        :::    :::       :::::::::: 
//      :+:                :+: :+:      :+:   :+:        :+:         
//     +:+               +:+   +:+     +:+  +:+         +:+          
//    :#::+::#         +#++:++#++:    +#++:++          +#++:++#      
//   +#+              +#+     +#+    +#+  +#+         +#+            
//  #+#              #+#     #+#    #+#   #+#        #+#             
// ###              ###     ###    ###    ###       ##########       
// 












//       :::        :::::::::::       :::::::::           :::        :::::::::       ::::::::: 
//      :+:            :+:                :+:          :+: :+:      :+:    :+:      :+:    :+: 
//     +:+            +:+               +:+          +:+   +:+     +:+    +:+      +:+    +:+  
//    +#+            +#+              +#+          +#++:++#++:    +#++:++#:       +#+    +:+   
//   +#+            +#+             +#+           +#+     +#+    +#+    +#+      +#+    +#+    
//  #+#            #+#            #+#            #+#     #+#    #+#    #+#      #+#    #+#     
// ########## ###########       #########       ###     ###    ###    ###      #########       
// 


/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /gh/MrKleiner/liz3_toybox_webtools@master/sex_toys/shared/toolbox.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
class iguana{constructor(){this.gigastorage={},this.gigastorage.waiters={},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.lower=function(){return this.toLowerCase()},String.prototype.upper=function(){return this.toUpperCase()},String.prototype.zfill=function(t=1,e="0"){var r=void 0!==e?e:"0",n=new Array(1+t).join(r);return(n+this).slice(-n.length)},String.prototype.rstrip=function(t=""){for(var e=this.length-1;t.indexOf(this[e])>=0;)e-=1;return this.substr(0,e+1)},String.prototype.lstrip=function(t=""){for(var e=0;t.indexOf(x[e])>=0;)e+=1;x.length;return x.substr(e)},String.prototype.strip=function(t=""){for(var e=0;t.indexOf(this[e])>=0;)e+=1;for(var r=this.length-1;t.indexOf(this[r])>=0;)r-=1;return this.substr(e,r-e+1)},Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const t=window.URL?"URL":"webkitURL";class e extends(window.URL||window.webkitURL){get target(){return{name:this.pathname.split("/").at(-1),suffix:this.pathname.split("/").at(-1).split(".").at(-1)}}}function r(t){try{return t.toString()}catch(e){return""+t}}window[t]=e,window.str=r,window.int=function(t){return parseInt(t)},window.float=function(t){return parseFloat(t)},window.range=function*(t=0,e=null,r=1){null==e&&(e=t,t=0);try{t=parseInt(t),e=parseInt(e),r=parseInt(r)}catch(t){return[]}for(;;){if(t>=e)return;yield t,t+=r}},window.localStorage.__proto__.getObject=function(t){const e=window.localStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}},window.localStorage.__proto__.setObject=function(t,e){try{window.localStorage.setItem(t,JSON.stringify(e))}catch(r){window.localStorage.setItem(t,e)}}}get info(){return"Lizard's toybox. Version 0.37"}find_objects(t,e,r){var n=[];for(var o in t)t.hasOwnProperty(o)&&("object"==typeof t[o]?n=n.concat(this.find_objects(t[o],e,r)):(o==e&&t[o]==r||o==e&&""==r||t[o]==r&&""==e&&-1==n.lastIndexOf(t))&&n.push(t));return n}find_values(t,e){var r=[];for(var n in t)t.hasOwnProperty(n)&&("object"==typeof t[n]?r=r.concat(this.find_values(t[n],e)):n==e&&r.push(t[n]));return r}find_keys(t,e){var r=[];for(var n in t)t.hasOwnProperty(n)&&("object"==typeof t[n]?r=r.concat(this.find_keys(t[n],e)):t[n]==e&&r.push(n));return r}rndwave(t=8,e="def",r="",n=!0){var o="",i=r.toString().replaceAll(" ","");switch(e){case"flac":var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-()=+*#/!&?<>$~"+i;break;case"num":a="1234567890"+i;break;case"def":a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"+i;break;default:a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"+i}var s=a.length;if(1==n)var c=window.crypto.getRandomValues(new Uint32Array(t+1));for(var u=0;u<t;u++)o+=1==n?a.charAt(c[u]%s):a.charAt(Math.floor(Math.random()*s));return o}cookie_set(t,e,r){if(void 0===t||"undefined"==e||"undefined"==r)return void console.log("lizard's biscuits lack chocolate!");const n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);let o="expires="+n.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"}cookie_get(t){let e=t+"=",r=document.cookie.split(";");for(let t=0;t<r.length;t++){let n=r[t];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}imtext(t){for(var e=t,r="",n=0;n<e.childNodes.length;++n)e.childNodes[n].nodeType===Node.TEXT_NODE&&(r+=e.childNodes[n].textContent);return r}copytext(t){var e=$('<input style="opacity: 0;position: absolute;">');$("body").append(e),e.val(t).select(),document.execCommand("copy"),e.remove()}rgb2hex(t){function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+e((t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+e(t[2])+e(t[3])}clamp(t=3,e=0,r=5){return t<=e?e:t>=r?r:t}textdl(t="lizard.txt",e="iguana"){var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),r.setAttribute("download",t),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}b64ToUint6(t){return t>64&&t<91?t-65:t>96&&t<123?t-71:t>47&&t<58?t+4:43===t?62:47===t?63:0}base64DecToArr(t,e){for(var r,n,o=t.replace(/[^A-Za-z0-9\+\/]/g,""),i=o.length,a=e?Math.ceil((3*i+1>>2)/e)*e:3*i+1>>2,s=new Uint8Array(a),c=0,u=0,l=0;l<i;l++)if(n=3&l,c|=this.b64ToUint6(o.charCodeAt(l))<<6*(3-n),3===n||i-l==1){for(r=0;r<3&&u<a;r++,u++)s[u]=c>>>(16>>>r&24)&255;c=0}return s}uint6ToB64(t){return t<26?t+65:t<52?t+71:t<62?t-4:62===t?43:63===t?47:65}base64EncArr(t){for(var e=2,r="",n=t.length,o=0,i=0;i<n;i++)e=i%3,i>0&&4*i/3%76==0&&(r+=""),o|=t[i]<<(16>>>e&24),2!==e&&t.length-i!=1||(r+=String.fromCodePoint(this.uint6ToB64(o>>>18&63),this.uint6ToB64(o>>>12&63),this.uint6ToB64(o>>>6&63),this.uint6ToB64(63&o)),o=0);return r.substr(0,r.length-2+e)+(2===e?"":1===e?"=":"==")}UTF8ArrToStr(t){for(var e,r="",n=t.length,o=0;o<n;o++)e=t[o],r+=String.fromCodePoint(e>251&&e<254&&o+5<n?1073741824*(e-252)+(t[++o]-128<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>247&&e<252&&o+4<n?(e-248<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>239&&e<248&&o+3<n?(e-240<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>223&&e<240&&o+2<n?(e-224<<12)+(t[++o]-128<<6)+t[++o]-128:e>191&&e<224&&o+1<n?(e-192<<6)+t[++o]-128:e);return r}strToUTF8Arr(t){for(var e,r,n=t.length,o=0,i=0;i<n;i++)(r=t.codePointAt(i))>65536&&i++,o+=r<128?1:r<2048?2:r<65536?3:r<2097152?4:r<67108864?5:6;e=new Uint8Array(o);for(var a=0,s=0;a<o;s++)(r=t.codePointAt(s))<128?e[a++]=r:r<2048?(e[a++]=192+(r>>>6),e[a++]=128+(63&r)):r<65536?(e[a++]=224+(r>>>12),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r)):r<2097152?(e[a++]=240+(r>>>18),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++):r<67108864?(e[a++]=248+(r>>>24),e[a++]=128+(r>>>18&63),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++):(e[a++]=252+(r>>>30),e[a++]=128+(r>>>24&63),e[a++]=128+(r>>>18&63),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++);return e}btoa(t=""){return""==t?"":base64EncArr(this.strToUTF8Arr(t))}atob(t=""){return""==t?"":UTF8ArrToStr(this.base64DecToArr(t))}u8btoa(t){return btoa(unescape(encodeURIComponent(t)))}u8atob(t){return decodeURIComponent(escape(atob(t)))}rmdupli(t){return Array.from(new Set(t))}ehtml(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]}wait_elem(t=null,e=null){if(null==t)return!1;var r=this;const n=t;var o=e||this.rndwave(32,"def").replaceAll("-","").replaceAll("_","");return{name:o,wait:function(){return new Promise((function(t,e){const i=n;var a=new MutationObserver(((e,r)=>{var n=document.querySelector(i);null!=n&&(r.disconnect(),t(n))}));a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),r.gigastorage.waiters[o]=a}))},abort:function(){r.gigastorage.waiters[o].disconnect()}}}delnthchar(t,e,r){if(""==t.toString())return"";if(Array.isArray(t))var n=t;else n=t.toString().split("");var o=1,i=[];for(var a in n)if(r)if(o!=e)o+=1;else{i.push(n[a]);o=1}else if(o!=e)i.push(n[a]),o+=1;else o=1;return i.join("")}array_is_same(t=[],e=[],r=!1){var n=t.filter((t=>!e.includes(t)));return 1==r?n:n.length>0}b64toimg(t="",e="*"){if(""==t)return null;var r=this.base64DecToArr(t),n=new Blob([r],{type:`image/${e}`});return(window.URL||window.webkitURL).createObjectURL(n)}}window.lizard=new iguana;
//# sourceMappingURL=/sm/41147738f644494f5814158babe9b3f45911ed14b3fe2e01cf008ac08b3d484c.map



















class btg_sys
{
	constructor() {
		this.gigastorage = {}
		this.gigastorage.waiters = {}
	};

	/*\
	|*|
	|*|  Base64 / binary data / UTF-8 strings utilities
	|*|
	|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
	|*|
	\*/

	/* Array of bytes to Base64 string decoding */

	b64ToUint6 (nChr) {

	  return nChr > 64 && nChr < 91 ?
		  nChr - 65
		: nChr > 96 && nChr < 123 ?
		  nChr - 71
		: nChr > 47 && nChr < 58 ?
		  nChr + 4
		: nChr === 43 ?
		  62
		: nChr === 47 ?
		  63
		:
		  0;

	}

	base64DecToArr (sBase64, nBlocksSize) {

	  var
		sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
		nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);

	  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
		nMod4 = nInIdx & 3;
		nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 6 * (3 - nMod4);
		if (nMod4 === 3 || nInLen - nInIdx === 1) {
		  for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
			taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
		  }
		  nUint24 = 0;

		}
	  }

	  return taBytes;
	}

	/* Base64 string to array encoding */

	uint6ToB64 (nUint6) {

	  return nUint6 < 26 ?
		  nUint6 + 65
		: nUint6 < 52 ?
		  nUint6 + 71
		: nUint6 < 62 ?
		  nUint6 - 4
		: nUint6 === 62 ?
		  43
		: nUint6 === 63 ?
		  47
		:
		  65;

	}

	base64EncArr (aBytes) {

	  var nMod3 = 2, sB64Enc = "";

	  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
		nMod3 = nIdx % 3;
		// REVERT TO THIS IF NOW BROKEN
		// if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
		if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += ""; }
		nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
		if (nMod3 === 2 || aBytes.length - nIdx === 1) {
		  sB64Enc += String.fromCodePoint(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
		  nUint24 = 0;
		}
	  }

	  return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

	}

	/* UTF-8 array to JS string and vice versa */

	UTF8ArrToStr (aBytes) {

	  var sView = "";

	  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
		nPart = aBytes[nIdx];
		sView += String.fromCodePoint(
		  nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
			/* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
			(nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
		  : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
			(nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
		  : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
			(nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
		  : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
			(nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
		  : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
			(nPart - 192 << 6) + aBytes[++nIdx] - 128
		  : /* nPart < 127 ? */ /* one byte */
			nPart
		);
	  }

	  return sView;

	}

	strToUTF8Arr (sDOMStr) {

	  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

	  /* mapping... */

	  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
		nChr = sDOMStr.codePointAt(nMapIdx);

		if (nChr > 65536) {
		  nMapIdx++;
		}

		nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
	  }

	  aBytes = new Uint8Array(nArrLen);

	  /* transcription... */

	  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
		nChr = sDOMStr.codePointAt(nChrIdx);
		if (nChr < 128) {
		  /* one byte */
		  aBytes[nIdx++] = nChr;
		} else if (nChr < 0x800) {
		  /* two bytes */
		  aBytes[nIdx++] = 192 + (nChr >>> 6);
		  aBytes[nIdx++] = 128 + (nChr & 63);
		} else if (nChr < 0x10000) {
		  /* three bytes */
		  aBytes[nIdx++] = 224 + (nChr >>> 12);
		  aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
		  aBytes[nIdx++] = 128 + (nChr & 63);
		} else if (nChr < 0x200000) {
		  /* four bytes */
		  aBytes[nIdx++] = 240 + (nChr >>> 18);
		  aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
		  aBytes[nIdx++] = 128 + (nChr & 63);
		  nChrIdx++;
		} else if (nChr < 0x4000000) {
		  /* five bytes */
		  aBytes[nIdx++] = 248 + (nChr >>> 24);
		  aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
		  aBytes[nIdx++] = 128 + (nChr & 63);
		  nChrIdx++;
		} else /* if (nChr <= 0x7fffffff) */ {
		  /* six bytes */
		  aBytes[nIdx++] = 252 + (nChr >>> 30);
		  aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
		  aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
		  aBytes[nIdx++] = 128 + (nChr & 63);
		  nChrIdx++;
		}
	  }

	  return aBytes;

	}

	btoa(st=''){
		if (st==''){return ''}
		return base64EncArr(this.strToUTF8Arr(st))
	}

	atob(st=''){
		if (st==''){return ''}
		return UTF8ArrToStr(this.base64DecToArr(st))
	}


	// quick string encoding
	u8btoa(st) {
	    return btoa(unescape(encodeURIComponent(st)));
	}
	// decode
	u8atob(st) {
	    return decodeURIComponent(escape(atob(st)));
	}


}
window.bootlegger_sys_funcs = new btg_sys();



















// 
// ────────────────────────────────────────────────────────────────────────────────────────
// ─██████████████──██████████████──██████──────────██████──██████████████──██████████████─
// ─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██░░██████████──██░░██████░░██──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██████████─
// ─██░░██──────────██░░██──██░░██──██░░██████░░██──██░░██──────██░░██──────██░░██─────────
// ─██░░██████████──██░░██──██░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██████████─
// ─██░░░░░░░░░░██──██░░██──██░░██──██░░██──██░░██──██░░██──────██░░██──────██░░░░░░░░░░██─
// ─██░░██████████──██░░██──██░░██──██░░██──██░░██──██░░██──────██░░██──────██████████░░██─
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██████░░██──────██░░██──────────────██░░██─
// ─██░░██──────────██░░██████░░██──██░░██──██░░░░░░░░░░██──────██░░██──────██████████░░██─
// ─██░░██──────────██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██─
// ─██████──────────██████████████──██████──────────██████──────██████──────██████████████─
// ────────────────────────────────────────────────────────────────────────────────────────




(function() {
	var fnt_pool = []
	var compiled_fonts = [];
	for (var font of fnt_pool)
	{
		compiled_fonts.push(`
	@font-face
	{
		font-family: '${font.family}';
		font-weight: ${font.weight};
		font-style: ${font.ftype};
		src: url('${(window.URL || window.webkitURL).createObjectURL(new Blob([window.bootlegger_sys_funcs.base64DecToArr(font.bt)]))}');
	}
			`.trim());
	}
	var st = document.createElement('style');
	st.id = 'bootlegger_fonts';
	st.textContent = compiled_fonts.join('\n\n');
	document.body.append(st);
	// reset vars to free up memory
	compiled_fonts = null;
	fnt_pool = null;
})();









// 
// ────────────────────────────────────────────────
// ─██████████████──██████████████──██████████████─
// ─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██░░██████████──██░░██████████──██░░██████████─
// ─██░░██──────────██░░██──────────██░░██─────────
// ─██░░██──────────██░░██████████──██░░██████████─
// ─██░░██──────────██░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██░░██──────────██████████░░██──██████████░░██─
// ─██░░██──────────────────██░░██──────────██░░██─
// ─██░░██████████──██████████░░██──██████████░░██─
// ─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██─
// ─██████████████──██████████████──██████████████─
// ────────────────────────────────────────────────




(function() {
	var cssb64 = `LyogY3lyaWxsaWMtZXh0ICovCkBmb250LWZhY2UgewogIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubyc7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgZm9udC1kaXNwbGF5OiBzd2FwOwogIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pYm1wbGV4bW9uby92MTIvLUY2M2ZqcHRBZ3Q1Vk0ta1ZrcWR5VThuMWlJcTEyOWsud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsKfQovKiBjeXJpbGxpYyAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpc3ExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7Cn0KLyogdmlldG5hbWVzZSAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpQXExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjsKfQovKiBsYXRpbi1leHQgKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaUVxMTI5ay53b2ZmMikgZm9ybWF0KCd3b2ZmMicpOwogIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7Cn0KLyogbGF0aW4gKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaThxMXcud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOwp9CmJvZHkgI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7CglkaXNwbGF5OiBub25lOwp9CgoKYm9keVtjbmRzX3Nob3duPSd5ZXMnXSAuY2hhdC0yWmZqb0kgLmNvbnRlbnQtMWpReTJsCnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKCmJvZHlbY25kc19zaG93bj0neWVzJ10gI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7Cglwb3NpdGlvbjogYWJzb2x1dGU7CglkaXNwbGF5OiBmbGV4OwoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDEwMCU7CgliYWNrZ3JvdW5kOiAjMzYzOTNmOwoJei1pbmRleDogNjU1MzU7Cn0KCmJvZHlbY25kc19zaG93bj0neWVzJ10gI2NpbmVtYV9kc19tYWluX3dpbmRvdzo6YmVmb3JlCnsKCWNvbnRlbnQ6ICcnOwoJcG9zaXRpb246IGFic29sdXRlOwoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDJweDsKCXRvcDogMHB4OwoJYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSAxMDAlKTsKCWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7CgliYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSAxMDAlKTsKfQoKCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3N0YXRzCnsKCWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7Cglwb3NpdGlvbjogYWJzb2x1dGU7Cgl3aWR0aDogMTAwJTsKCWhlaWdodDogMjBweDsKCWZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubycsIG1vbm9zcGFjZTsKICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtZW5kOyAqLwogICAgZGlzcGxheTogZmxleDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgICAvKiB0ZXh0LWFsaWduOiBlbmQ7ICovCiAgICAvKiBwYWRkaW5nLWxlZnQ6IDMzNnB4OyAqLwogICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqLwogICAgd2lkdGg6IDk1JTsKfQoKCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX21lZGlhX3Bvb2wKewoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CglmbGV4LWdyb3c6IDE7CglvdmVyZmxvdy15OiBzY3JvbGw7Cn0KCiNjaW5lbWFkc19tZWRpYV9wb29sIC5jaW5lbWFfZHNfdmlkZW9fZW50cnksICNjaW5lbWFkc19tZWRpYV9wb29sIC5jaW5lbWFfZHNfaW1nX2VudHJ5CnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKCW9iamVjdC1maXQ6IGNvbnRhaW47CgloZWlnaHQ6IDYwJTsKCXdpZHRoOiBmaXQtY29udGVudDsKCW1heC13aWR0aDogODAlOwoJbWFyZ2luOiAyMHB4Owp9CgoKCgoKCgo=`;
	var pepcss = document.createElement('style');
	pepcss.id = 'bootlegger_css';
	pepcss.textContent = window.bootlegger_sys_funcs.UTF8ArrToStr(
		window.bootlegger_sys_funcs.base64DecToArr(cssb64)
	);
	document.body.append(pepcss);
	cssb64 = null;
})();









// 
// ────────────────────────────────────────────────────────────────────
// ─██████──██████──██████████████──████████████████────██████████████─
// ─██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██────██░░░░░░░░░░██─
// ─██░░██──██░░██──██░░██████░░██──██░░████████░░██────██░░██████████─
// ─██░░██──██░░██──██░░██──██░░██──██░░██────██░░██────██░░██─────────
// ─██░░██──██░░██──██░░██████░░██──██░░████████░░██────██░░██████████─
// ─██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██────██░░░░░░░░░░██─
// ─██░░██──██░░██──██░░██████░░██──██░░██████░░████────██████████░░██─
// ─██░░░░██░░░░██──██░░██──██░░██──██░░██──██░░██──────────────██░░██─
// ─████░░░░░░████──██░░██──██░░██──██░░██──██░░██████──██████████░░██─
// ───████░░████────██░░██──██░░██──██░░██──██░░░░░░██──██░░░░░░░░░░██─
// ─────██████──────██████──██████──██████──██████████──██████████████─
// ────────────────────────────────────────────────────────────────────




const btg = {};

window.bootlegger = {};




btg.main_window = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PGRpdiBpZD0iY2luZW1hX2RzX21haW5fd2luZG93Ij4NCgk8ZGl2IGlkPSJjaW5lbWFkc19zdGF0cyI+U3RhdHM8L2Rpdj4NCgk8ZGl2IGlkPSJjaW5lbWFkc19tZWRpYV9wb29sIj48L2Rpdj4NCjwvZGl2Pg=='));

















// 
// ────────────────────────────────────────────────────────────────
// ─██████████████──██████████████──████████████────██████████████─
// ─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░████──██░░░░░░░░░░██─
// ─██░░██████████──██░░██████░░██──██░░████░░░░██──██░░██████████─
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██─────────
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████─
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██─
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████─
// ─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██─────────
// ─██░░██████████──██░░██████░░██──██░░████░░░░██──██░░██████████─
// ─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░████──██░░░░░░░░░░██─
// ─██████████████──██████████████──████████████────██████████████─
// ────────────────────────────────────────────────────────────────









document.addEventListener('keydown', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('body')){window.bootlegger.main.open_pool_via_keybind(tr_event)}


});


document.addEventListener('scroll', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('#cinema_ds_main_window #cinemads_media_pool')){window.bootlegger.main.scroll_watcher(event.target.closest('#cinema_ds_main_window #cinemads_media_pool'))}


});








if (!window.bootlegger.core){window.bootlegger.core={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.core){window.bootlegger.core={}};





window.print = console.log;
const obj_url = (window.URL || window.webkitURL); 


const media_types = {
	'image': [
		'image',
		'image/png',
		'image/jpeg',
		'image/webp',
		'image/gif',
		'image/x-ms-bmp'
	],
	'video': [
		'gifv',
		'video',
		'video/mp4',
		'video/quicktime'
	]
}





window.bootlegger.core.fetch = function(params)
{
	const func_prms = {
		'url': params.url,
		'method': params.method || 'GET',
		'load_as': params.load_as || 'text',
		'headers': params.headers || {},
		'add_cookie': params.add_cookie || true,
		'url_params': params.url_params || {},
		'bin': params.bin || ''
	}

	const mk_url_params = new URLSearchParams(func_prms.url_params);
	const request_url = func_prms.url + ((func_prms.url_params != {}) ? `?${mk_url_params.toString()}` : '')

	const default_headers = {
		'Accept': '*/*',
		'User-Agent': window.navigator.userAgent
	}
	const mkheader = Object.assign({}, default_headers, func_prms.headers)



	if (func_prms.method.lower() == 'get'){
		return new Promise(function(resolve, reject){
			const rqprms = {
				method: 'GET',
				url: request_url,
				headers: mkheader,
				nocache: true,
				responseType: 'arraybuffer',

				onload: function(response) {


					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						print('current URK is', request_url)
						const fuckoff = (new URL(request_url)).pathname.split('/').at(-1).split('.').at(-1)
						print(fuckoff)
						const blb = new Blob([response.response], {type: `image/${fuckoff}`});
						resolve(obj_url.createObjectURL(blb))
					}
					if (func_prms.load_as == 'text'){
						const shite = response.responseText
						print('tampermonkey', shite)
						resolve(shite)
					}
					if (func_prms.load_as == 'json'){
						resolve(JSON.parse(response.responseText))
					}
					if (func_prms.load_as == 'buffer'){
						const u8a = new Uint8Array(response.response)
						resolve(u8a)
					}
					if (func_prms.load_as == 'buffer_raw'){
						resolve(response.response)
					}
				}
			}
			if (func_prms.add_cookie){
				rqprms['cookie'] = document.cookie
			}

			GM_xmlhttpRequest(rqprms)
		});
	}


	if (func_prms.method.lower() == 'post'){
		return new Promise(async function(resolve, reject){
			const toblob = new Blob([func_prms.bin], {});
			const payload_buffer = await toblob.arrayBuffer()

			const rqprms = {
				method: 'POST',
				url: request_url,
				headers: mkheader,
				nocache: true,
				responseType: 'arraybuffer',

				binary: true,
				data: payload_buffer,

				onload: function(response) {

					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						const blb = new Blob([response.response], {});
						resolve(obj_url.createObjectURL(blb))
					}
					if (func_prms.load_as == 'text'){
						const shite = response.responseText
						print('tampermonkey', shite)
						resolve(shite)
					}
					if (func_prms.load_as == 'json'){
						resolve(JSON.parse(response.responseText))
					}
					if (func_prms.load_as == 'buffer'){
						const u8a = new Uint8Array(response.response)
						resolve(u8a)
					}
					if (func_prms.load_as == 'buffer_raw'){
						resolve(response.response)
					}
				}
			}
			if (func_prms.add_cookie){
				rqprms['cookie'] = document.cookie
			}

			GM_xmlhttpRequest(rqprms)
		});
	}

}

window.bootlegger.core.fetch('https://discord.com')

const localStorage = {}
localStorage.setItem = function(item, value)
{
	GM_setValue(item, value)
}

localStorage.getItem = function(item)
{
	GM_getValue(item, null)
}


window.addEventListener('urlchange', (info) => window.bootlegger.main.url_switch());

if (!window.bootlegger.main){window.bootlegger.main={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.main){window.bootlegger.main={}};

window.bootlegger.main.toggle_main_window_vis = function(state='toggle')
{
	if (state == false){
		print('toggle pool vis:', state)
		document.body.setAttribute('cnds_shown', 'no')
	}
	if (state == true){
		print('toggle pool vis:', state)
		document.body.setAttribute('cnds_shown', 'yes')
	}
	if (state == 'toggle'){
		(document.body.getAttribute('cnds_shown') == 'yes') ? document.body.setAttribute('cnds_shown', 'no') : document.body.setAttribute('cnds_shown', 'yes')
	}
}


window.bootlegger.main.open_pool_via_keybind = function(evt)
{
	if (evt.altKey && evt.keyCode == 65){
		print('Opening Pool via keybind...')
		const cotainer_exists = window.bootlegger.main.ensure_container_exists(true)
		print('Ensuring that container exists:', cotainer_exists)
		window.bootlegger.main.toggle_main_window_vis('toggle')
		!cotainer_exists ? window.bootlegger.main.traverse_more_messages() : null
	}
}


window.bootlegger.main.ensure_container_exists = function(silent=false)
{
	const target_place = $('.chat-2ZfjoI .content-1jQy2l')
	if ($('#cinema_ds_main_window').length <= 0){
		print('Pool wasnt found, creating a new one...')
		target_place.prepend(btg.main_window)
		document.querySelector('#cinema_ds_main_window #cinemads_media_pool').addEventListener('scroll', function(event)
		{
			window.bootlegger.main.scroll_watcher(event.target)
		});
		print('Ensure type (silent/non silent)', silent)
		silent ? null : window.bootlegger.main.toggle_main_window_vis(true)
		return false
	}
	print('Pool existed, skipping and returning true')
	return true
}


window.bootlegger.main.media_processor = {}

window.bootlegger.main.media_queue = {}


window.bootlegger.main.media_queue.items = [];
window.bootlegger.main.media_queue_active = false;
window.bootlegger.main.message_offset = 0;
window.bootlegger.main.last_msg_id = null;
window.bootlegger.main.total_channel_msgs = 0;
window.bootlegger.main.total_found_msgs = 0;



window.bootlegger.main.media_processor.video = async function(msg, as_embed=false, looped_mute=false)
{
	print('Spawning a video...', msg, as_embed, looped_mute)
	if (as_embed == true){
		var media_url = msg.video.url
	}else{
		var media_url = msg.url
	}

	const media_bytes = await window.bootlegger.core.fetch({
		'url': media_url,
		'method': 'GET',
		'load_as': 'blob_url'
	})

	print('Got video Blob URL', media_bytes)

	return $(`
		<video 
			class="cinema_ds_video_entry"
			${looped_mute ? 'loop muted autoplay' : 'controls'}
			src="${media_bytes}"
			download="${(new URL(media_url)).pathname.split('/').at(-1)}"
		></video>
	`);
}

window.bootlegger.main.media_processor.image = async function(msg, as_url=false)
{
	print('Spawning an image:', msg, as_url)
	const media_bytes = await window.bootlegger.core.fetch({
		'url': as_url ? msg : msg.url,
		'method': 'GET',
		'load_as': 'blob_url'
	})

	print('Got image Blob URL:', media_bytes)

	return $(`
		<img 
			class="cinema_ds_img_entry"
			src="${media_bytes}"
			draggable="false"
		>
	`);
}









window.bootlegger.main.media_queue.processor = async function(worker)
{
	print('Launched a processor, worker:', worker)
	window.bootlegger.main.media_queue_active = true;

	while (worker.alive){
		var current_msg = window.bootlegger.main.media_queue.items[0];
		print('Processing a message...', current_msg);
		if (!current_msg){break}

		var as_emb = current_msg.lizard_type == 'embed'
		var media_type_key = as_emb ? 'type' : 'content_type'

		print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);


		if (media_types.image.includes(current_msg[media_type_key])){
			var elem = await window.bootlegger.main.media_processor.image(current_msg)
		}
		if (media_types.video.includes(current_msg[media_type_key])){
			var elem = await window.bootlegger.main.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
		}
		if (current_msg[media_type_key] == 'article' && current_msg.thumbnail){
			print('found article:', current_msg)
			var elem = await window.bootlegger.main.media_processor.image(current_msg.thumbnail.url, true)
		}



		if (worker.alive != true){break}

		if (elem){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(elem)
		}

		window.bootlegger.main.media_queue.items.shift()
		window.bootlegger.main.dump_stats()
		print('Current queue length', window.bootlegger.main.media_queue.items.length)
	}

	print('Done iterating over the queue', 'worker status:', worker.alive, 'queue', window.bootlegger.main.media_queue.items);

	window.bootlegger.main.media_queue_active = false;

	worker.alive = false;
}



window.bootlegger.main.media_queue.ctrl_src = function()
{
	return {
		start: function(){
			if (this.alive){
				print('Tried to launch an already running worker')
				return
			}
			print('Launched media queue worker')

			this.alive = true
			window.bootlegger.main.media_queue.processor(this)
		},
		kill: function(){
			print('Killing a wroker...', 'current state:', this.alive)
			this.alive = false
		}
	}
}

window.bootlegger.main.media_queue.ctrl = window.bootlegger.main.media_queue.ctrl_src()

window.bootlegger.main.media_queue.flush = function()
{
	print('Flushing Media Queue...')
	window.bootlegger.main.media_queue.ctrl.kill()
	window.bootlegger.main.media_queue_active = false;
	window.bootlegger.main.media_queue.items = [];
	window.bootlegger.main.media_queue.ctrl = window.bootlegger.main.media_queue.ctrl_src()
}

window.bootlegger.main.media_queue.ensure = function()
{
	print('Ensuring that the queue is running, if possible')
	window.bootlegger.main.media_queue.ctrl.start()
}





window.bootlegger.main.get_messages = async function(chan_id, before=null)
{
	return new Promise(function(resolve, reject){
		var input_prms = {
			'limit': 100
		}
		if (before){
			input_prms['before'] = before
		}
		const urlParams = new URLSearchParams(input_prms);
		fetch(`https://discord.com/api/v9/channels/${chan_id}/messages?${urlParams.toString()}`, {
			'headers': {
				'accept': '*/*',
				'cache-control': 'no-cache',
				'pragma': 'no-cache',
				'authorization': ds_token
			},
			'method': 'GET',
			'mode': 'cors',
			'credentials': 'omit'
		})
		.then(async function(response) {
			const msgs = await response.json()
			resolve(msgs)
		});
	});
}





window.bootlegger.main.dump_stats = function()
{
	document.querySelector('#cinema_ds_main_window #cinemads_stats')
	.innerText = `Total: ${str(window.bootlegger.main.total_channel_msgs).padStart(5, '0')}, Queued: ${window.bootlegger.main.media_queue.items.length}`;
}

window.bootlegger.main.traverse_lock = false

window.bootlegger.main.traverse_more_messages = async function()
{
	print('Traversing messages...')
	if (window.bootlegger.main.traverse_lock != false){print('Traversing is locked...');return}
	window.bootlegger.main.traverse_lock = true;
	const current_loc = window.location.pathname.strip('/').split('/')
	const current_chan_id = current_loc.at(-1)
	var found_msgs = 0

	print('Traversing info:', current_chan_id)

	while (true){
		if (found_msgs >= 50){break}
		print('Getting 100 messages...')
		var messages = await window.bootlegger.main.get_messages(current_chan_id, window.bootlegger.main.last_msg_id)
		if (messages.length <= 0){break}
		print('Got 100<= messages...', messages)
		window.bootlegger.main.last_msg_id = messages.at(-1).id
		for (var msg of messages){
			window.bootlegger.main.total_channel_msgs += 1
			if (msg.attachments.length <= 0 && msg.embeds.length <= 0){continue}
			found_msgs += 1
			window.bootlegger.main.total_found_msgs += 1;

			msg.attachments = msg.attachments.map(function sex(m){
				m.lizard_type = 'attachment'
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				return m
			})

			for (var embed of msg.attachments.concat(msg.embeds)){
				window.bootlegger.main.media_queue.items.push(embed)
				print('found embed', embed)
			}

			window.bootlegger.main.dump_stats()
		}
	}

	window.bootlegger.main.traverse_lock = false;

	window.bootlegger.main.media_queue.ensure()
}


window.bootlegger.main.scroll_watcher = function(mpool)
{
	if (mpool.scrollTop == 0 && window.bootlegger.main.media_queue_active != true){
		window.bootlegger.main.media_queue.ensure()
		print('Reached the top of the media pool, loading more messages')
		window.bootlegger.main.traverse_more_messages()
	}
}

window.bootlegger.main.url_switch = function()
{
	print('URL switch detected...')
	window.bootlegger.main.media_queue.flush()
	window.bootlegger.main.last_msg_id = null;
	$('#cinema_ds_main_window #cinemads_media_pool').empty();
	window.bootlegger.main.ensure_container_exists(true)
	window.bootlegger.main.total_channel_msgs = 0
	if (document.body.getAttribute('cnds_shown') == 'yes'){
		window.bootlegger.main.media_queue.ensure()
	}
	
}







