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
// @description  A Discord addon which transforms server/dm channels into image strips 
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
// Discord unbinds local storage methods to make the token unaccessible
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









//       ::::::::::       :::::::::::       :::        ::::::::::       ::::::::           :::     :::     :::       ::::::::::       ::::::::: 
//      :+:                  :+:           :+:        :+:             :+:    :+:        :+: :+:   :+:     :+:       :+:              :+:    :+: 
//     +:+                  +:+           +:+        +:+             +:+              +:+   +:+  +:+     +:+       +:+              +:+    +:+  
//    :#::+::#             +#+           +#+        +#++:++#        +#++:++#++      +#++:++#++: +#+     +:+       +#++:++#         +#++:++#:    
//   +#+                  +#+           +#+        +#+                    +#+      +#+     +#+  +#+   +#+        +#+              +#+    +#+    
//  #+#                  #+#           #+#        #+#             #+#    #+#      #+#     #+#   #+#+#+#         #+#              #+#    #+#     
// ###              ###########       ########## ##########       ########       ###     ###     ###           ##########       ###    ###      
// 


/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
  ? window : typeof self === 'object' && self.self === self
  ? self : typeof global === 'object' && global.global === global
  ? global
  : this

function bom (blob, opts) {
  if (typeof opts === 'undefined') opts = { autoBom: false }
  else if (typeof opts !== 'object') {
    console.warn('Deprecated: Expected third argument to be a object')
    opts = { autoBom: !opts }
  }

  // prepend BOM for UTF-8 XML and text/* types (including HTML)
  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
  }
  return blob
}

function download (url, name, opts) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    saveAs(xhr.response, name, opts)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function corsEnabled (url) {
  var xhr = new XMLHttpRequest()
  // use sync to avoid popup blocker
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
                          20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

var saveAs = _global.saveAs || (
  // probably in some web worker
  (typeof window !== 'object' || window !== _global)
    ? function saveAs () { /* noop */ }

  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
  : ('download' in HTMLAnchorElement.prototype && !isMacOSWebView)
  ? function saveAs (blob, name, opts) {
    var URL = _global.URL || _global.webkitURL
    // Namespace is used to prevent conflict w/ Chrome Poper Blocker extension (Issue #561)
    var a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    name = name || blob.name || 'download'

    a.download = name
    a.rel = 'noopener' // tabnabbing

    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob
      if (a.origin !== location.origin) {
        corsEnabled(a.href)
          ? download(blob, name, opts)
          : click(a, a.target = '_blank')
      } else {
        click(a)
      }
    } else {
      // Support blobs
      a.href = URL.createObjectURL(blob)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
      setTimeout(function () { click(a) }, 0)
    }
  }

  // Use msSaveOrOpenBlob as a second approach
  : 'msSaveOrOpenBlob' in navigator
  ? function saveAs (blob, name, opts) {
    name = name || blob.name || 'download'

    if (typeof blob === 'string') {
      if (corsEnabled(blob)) {
        download(blob, name, opts)
      } else {
        var a = document.createElement('a')
        a.href = blob
        a.target = '_blank'
        setTimeout(function () { click(a) })
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name)
    }
  }

  // Fallback to using FileReader and a popup
  : function saveAs (blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank')
    if (popup) {
      popup.document.title =
      popup.document.body.innerText = 'downloading...'
    }

    if (typeof blob === 'string') return download(blob, name, opts)

    var force = blob.type === 'application/octet-stream'
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

    if ((isChromeIOS || (force && isSafari) || isMacOSWebView) && typeof FileReader !== 'undefined') {
      // Safari doesn't allow downloading of blob URLs
      var reader = new FileReader()
      reader.onloadend = function () {
        var url = reader.result
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
        if (popup) popup.location.href = url
        else location = url
        popup = null // reverse-tabnabbing #460
      }
      reader.readAsDataURL(blob)
    } else {
      var URL = _global.URL || _global.webkitURL
      var url = URL.createObjectURL(blob)
      if (popup) popup.location = url
      else location.href = url
      popup = null // reverse-tabnabbing #460
      setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
    }
  }
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
  module.exports = saveAs;
}









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
class iguana{constructor(){this.gigastorage={},this.gigastorage.waiters={},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.lower=function(){return this.toLowerCase()},String.prototype.upper=function(){return this.toUpperCase()},String.prototype.zfill=function(t=1,e="0"){var r=void 0!==e?e:"0",n=new Array(1+t).join(r);return(n+this).slice(-n.length)},String.prototype.rstrip=function(t=""){for(var e=this.length-1;t.indexOf(this[e])>=0;)e-=1;return this.substr(0,e+1)},String.prototype.lstrip=function(t=""){for(var e=0;t.indexOf(x[e])>=0;)e+=1;x.length;return x.substr(e)},String.prototype.strip=function(t=""){for(var e=0;t.indexOf(this[e])>=0;)e+=1;for(var r=this.length-1;t.indexOf(this[r])>=0;)r-=1;return this.substr(e,r-e+1)},Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const t=window.URL?"URL":"webkitURL";class e extends(window.URL||window.webkitURL){get target(){const t=this.pathname.split("/");return{name:t.at(-1)||null,suffix:t.at(-1).split(".").at(-1)||null,stem:t.at(-1).split(".").pop()||null,stem_raw:t.at(-1).split(".")[0]||null}}}function r(t){try{return t.toString()}catch(e){return""+t}}window[t]=e,window.str=r,window.int=function(t){return parseInt(t)},window.float=function(t){return parseFloat(t)},window.range=function*(t=0,e=null,r=1){null==e&&(e=t,t=0);try{t=parseInt(t),e=parseInt(e),r=parseInt(r)}catch(t){return[]}for(;;){if(t>=e)return;yield t,t+=r}},window.localStorage.__proto__.getObject=function(t){const e=window.localStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}},window.localStorage.__proto__.setObject=function(t,e){try{window.localStorage.setItem(t,JSON.stringify(e))}catch(r){window.localStorage.setItem(t,e)}}}get info(){return"Lizard's toybox. Version 0.37"}find_objects(t,e,r){var n=[];for(var o in t)t.hasOwnProperty(o)&&("object"==typeof t[o]?n=n.concat(this.find_objects(t[o],e,r)):(o==e&&t[o]==r||o==e&&""==r||t[o]==r&&""==e&&-1==n.lastIndexOf(t))&&n.push(t));return n}find_values(t,e){var r=[];for(var n in t)t.hasOwnProperty(n)&&("object"==typeof t[n]?r=r.concat(this.find_values(t[n],e)):n==e&&r.push(t[n]));return r}find_keys(t,e){var r=[];for(var n in t)t.hasOwnProperty(n)&&("object"==typeof t[n]?r=r.concat(this.find_keys(t[n],e)):t[n]==e&&r.push(n));return r}rndwave(t=8,e="def",r="",n=!0){var o="",i=r.toString().replaceAll(" ","");switch(e){case"flac":var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-()=+*#/!&?<>$~"+i;break;case"num":a="1234567890"+i;break;case"def":a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"+i;break;default:a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"+i}var s=a.length;if(1==n)var u=window.crypto.getRandomValues(new Uint32Array(t+1));for(var c=0;c<t;c++)o+=1==n?a.charAt(u[c]%s):a.charAt(Math.floor(Math.random()*s));return o}cookie_set(t,e,r){if(void 0===t||"undefined"==e||"undefined"==r)return void console.log("lizard's biscuits lack chocolate!");const n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);let o="expires="+n.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"}cookie_get(t){let e=t+"=",r=document.cookie.split(";");for(let t=0;t<r.length;t++){let n=r[t];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}imtext(t){for(var e=t,r="",n=0;n<e.childNodes.length;++n)e.childNodes[n].nodeType===Node.TEXT_NODE&&(r+=e.childNodes[n].textContent);return r}copytext(t){var e=$('<input style="opacity: 0;position: absolute;">');$("body").append(e),e.val(t).select(),document.execCommand("copy"),e.remove()}rgb2hex(t){function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+e((t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+e(t[2])+e(t[3])}clamp(t=3,e=0,r=5){return t<=e?e:t>=r?r:t}textdl(t="lizard.txt",e="iguana"){var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),r.setAttribute("download",t),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}b64ToUint6(t){return t>64&&t<91?t-65:t>96&&t<123?t-71:t>47&&t<58?t+4:43===t?62:47===t?63:0}base64DecToArr(t,e){for(var r,n,o=t.replace(/[^A-Za-z0-9\+\/]/g,""),i=o.length,a=e?Math.ceil((3*i+1>>2)/e)*e:3*i+1>>2,s=new Uint8Array(a),u=0,c=0,l=0;l<i;l++)if(n=3&l,u|=this.b64ToUint6(o.charCodeAt(l))<<6*(3-n),3===n||i-l==1){for(r=0;r<3&&c<a;r++,c++)s[c]=u>>>(16>>>r&24)&255;u=0}return s}uint6ToB64(t){return t<26?t+65:t<52?t+71:t<62?t-4:62===t?43:63===t?47:65}base64EncArr(t){for(var e=2,r="",n=t.length,o=0,i=0;i<n;i++)e=i%3,i>0&&4*i/3%76==0&&(r+=""),o|=t[i]<<(16>>>e&24),2!==e&&t.length-i!=1||(r+=String.fromCodePoint(this.uint6ToB64(o>>>18&63),this.uint6ToB64(o>>>12&63),this.uint6ToB64(o>>>6&63),this.uint6ToB64(63&o)),o=0);return r.substr(0,r.length-2+e)+(2===e?"":1===e?"=":"==")}UTF8ArrToStr(t){for(var e,r="",n=t.length,o=0;o<n;o++)e=t[o],r+=String.fromCodePoint(e>251&&e<254&&o+5<n?1073741824*(e-252)+(t[++o]-128<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>247&&e<252&&o+4<n?(e-248<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>239&&e<248&&o+3<n?(e-240<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>223&&e<240&&o+2<n?(e-224<<12)+(t[++o]-128<<6)+t[++o]-128:e>191&&e<224&&o+1<n?(e-192<<6)+t[++o]-128:e);return r}strToUTF8Arr(t){for(var e,r,n=t.length,o=0,i=0;i<n;i++)(r=t.codePointAt(i))>65536&&i++,o+=r<128?1:r<2048?2:r<65536?3:r<2097152?4:r<67108864?5:6;e=new Uint8Array(o);for(var a=0,s=0;a<o;s++)(r=t.codePointAt(s))<128?e[a++]=r:r<2048?(e[a++]=192+(r>>>6),e[a++]=128+(63&r)):r<65536?(e[a++]=224+(r>>>12),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r)):r<2097152?(e[a++]=240+(r>>>18),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++):r<67108864?(e[a++]=248+(r>>>24),e[a++]=128+(r>>>18&63),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++):(e[a++]=252+(r>>>30),e[a++]=128+(r>>>24&63),e[a++]=128+(r>>>18&63),e[a++]=128+(r>>>12&63),e[a++]=128+(r>>>6&63),e[a++]=128+(63&r),s++);return e}btoa(t=""){return""==t?"":base64EncArr(this.strToUTF8Arr(t))}atob(t=""){return""==t?"":UTF8ArrToStr(this.base64DecToArr(t))}u8btoa(t){return btoa(unescape(encodeURIComponent(t)))}u8atob(t){return decodeURIComponent(escape(atob(t)))}rmdupli(t){return Array.from(new Set(t))}ehtml(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]}wait_elem(t=null,e=null){if(null==t)return!1;var r=this;const n=t;var o=e||this.rndwave(32,"def").replaceAll("-","").replaceAll("_","");return{name:o,wait:function(){return new Promise((function(t,e){const i=n;var a=new MutationObserver(((e,r)=>{var n=document.querySelector(i);null!=n&&(r.disconnect(),t(n))}));a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),r.gigastorage.waiters[o]=a}))},abort:function(){r.gigastorage.waiters[o].disconnect()}}}delnthchar(t,e,r){if(""==t.toString())return"";if(Array.isArray(t))var n=t;else n=t.toString().split("");var o=1,i=[];for(var a in n)if(r)if(o!=e)o+=1;else{i.push(n[a]);o=1}else if(o!=e)i.push(n[a]),o+=1;else o=1;return i.join("")}array_is_same(t=[],e=[],r=!1){var n=t.filter((t=>!e.includes(t)));return 1==r?n:n.length>0}b64toimg(t="",e="*"){if(""==t)return null;var r=this.base64DecToArr(t),n=new Blob([r],{type:`image/${e}`});return(window.URL||window.webkitURL).createObjectURL(n)}}window.lizard=new iguana;
//# sourceMappingURL=/sm/03cc2ed1b200f74302c3e23b199206a7028397f88da46ffaa94f21479768d851.map



















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
	var cssb64 = `LyogY3lyaWxsaWMtZXh0ICovCkBmb250LWZhY2UgewogIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubyc7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgZm9udC1kaXNwbGF5OiBzd2FwOwogIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pYm1wbGV4bW9uby92MTIvLUY2M2ZqcHRBZ3Q1Vk0ta1ZrcWR5VThuMWlJcTEyOWsud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsKfQovKiBjeXJpbGxpYyAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpc3ExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7Cn0KLyogdmlldG5hbWVzZSAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpQXExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjsKfQovKiBsYXRpbi1leHQgKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaUVxMTI5ay53b2ZmMikgZm9ybWF0KCd3b2ZmMicpOwogIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7Cn0KLyogbGF0aW4gKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaThxMXcud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOwp9CmJvZHkgI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7CglkaXNwbGF5OiBub25lOwp9CgoKYm9keVtjbmRzX3Nob3duPSd5ZXMnXSAuY2hhdC0yWmZqb0kgLmNvbnRlbnQtMWpReTJsCnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKCmJvZHlbY25kc19zaG93bj0neWVzJ10gI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7Cglwb3NpdGlvbjogYWJzb2x1dGU7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJYmFja2dyb3VuZDogIzM2MzkzZjsKCXotaW5kZXg6IDY1NTM1Owp9Cgpib2R5W2NuZHNfc2hvd249J3llcyddICNjaW5lbWFfZHNfbWFpbl93aW5kb3c6OmJlZm9yZQp7Cgljb250ZW50OiAnJzsKCXBvc2l0aW9uOiBhYnNvbHV0ZTsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAycHg7Cgl0b3A6IDBweDsKCWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7CgliYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDEwMCUpOwoJYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19zdGF0cwp7Cgljb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOwoJcG9zaXRpb246IGFic29sdXRlOwoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDIwcHg7Cglmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7CiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgKi8KICAgIGRpc3BsYXk6IGZsZXg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwogICAgLyogdGV4dC1hbGlnbjogZW5kOyAqLwogICAgLyogcGFkZGluZy1sZWZ0OiAzMzZweDsgKi8KICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi8KICAgIHdpZHRoOiA5NSU7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19tZWRpYV9wb29sCnsKCWRpc3BsYXk6IGJsb2NrOwoJLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovCgkvKmZsZXgtZ3JvdzogMTsqLwoJb3ZlcmZsb3cteTogc2Nyb2xsOwoJaGVpZ2h0OiBpbmhlcml0OwoKCn0KCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzCnsKCXVzZXItc2VsZWN0OiBub25lOwoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiByb3c7CglhbGlnbi1pdGVtczogY2VudGVyOwoJanVzdGlmeS1jb250ZW50OiBjZW50ZXI7CglwYWRkaW5nOiAxMHB4OwoJY29sb3I6IHdoaXRlOwp9CgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAuY2luZW1hZHNfcGFnZSwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfcHJldiwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfbmV4dAp7CglwYWRkaW5nOiA1cHg7Cn0KCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzIC5jaW5lbWFkc19wYWdlOmhvdmVyLAojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAjY2luZW1hZHNfcGFnZV9wcmV2OmhvdmVyLAojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAjY2luZW1hZHNfcGFnZV9uZXh0OmhvdmVyCnsKCWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTsKfQoKCiNjaW5lbWFkc19tZWRpYV9wb29sIC5jaW5lbWFfZHNfdmlkZW9fZW50cnksICNjaW5lbWFkc19tZWRpYV9wb29sIC5jaW5lbWFfZHNfaW1nX2VudHJ5CnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKCW9iamVjdC1maXQ6IGNvbnRhaW47CgkvKmhlaWdodDogNjAlOyovCgkvKndpZHRoOiBmaXQtY29udGVudDsqLwoJLyptYXgtd2lkdGg6IDgwJTsqLwoJd2lkdGg6IDE1NHB4OwoJbWF4LWhlaWdodDogMTByZW07CgltYXJnaW46IDIwcHg7Cgl2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7Cn0KCiNjaW5lbWFfZHNfZnVsbHNjcmVlbgp7Cglwb3NpdGlvbjogZml4ZWQ7Cgl3aWR0aDogMTAwJTsKCWhlaWdodDogMTAwJTsKCXotaW5kZXg6IDIxNDc0ODM2NDsKCW9iamVjdC1maXQ6IGNvbnRhaW47CglvYmplY3QtcG9zaXRpb246IGNlbnRlcjsKCWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTsKCWJhY2tkcm9wLWZpbHRlcjogYmx1cig5cHgpOwp9CgoKCgoK`;
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




btg.main_window = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PGRpdiBpZD0iY2luZW1hX2RzX21haW5fd2luZG93Ij4NCgk8ZGl2IGlkPSJjaW5lbWFkc19zdGF0cyI+U3RhdHM8L2Rpdj4NCgk8ZGl2IGlkPSJjaW5lbWFkc19tZWRpYV9wb29sIj48L2Rpdj4NCgk8ZGl2IGlkPSJjaW5lbWFkc19wYWdlcyI+PC9kaXY+DQo8L2Rpdj4='));

















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









document.addEventListener('click', tr_event => {


	// ==========================================
	// 	grid grid
	// ==========================================

	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_next')){window.bootlegger.grid.load_next_page()}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry')){window.bootlegger.grid.maximize_image(event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry'))}
	if (event.target.closest('#cinema_ds_fullscreen')){$('body #cinema_ds_fullscreen').remove()}


});


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



if (!window.bootlegger.grid){window.bootlegger.grid={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.grid){window.bootlegger.grid={}};

window.bootlegger.grid.current_page_index = 0

class gridmaker
{
	constructor(){
		window.bootlegger.main.ensure_container_exists(true)
		this.alive = true;
		this.worker_alive = {alive: true};
		this.traversing = false;
		this.working = false;
		this.msg_offset = null;
		this.chan_id = (new URL(window.location.href)).target.name
		this.qitems = []

		this.pages = []

		print('initialized gridder')

	}

	async load_page(msg_offs=null){
		if (this.alive != true || this.working == true){print('Page loader cant do shit:', 'class alive:', this.alive, 'working:', this.working);return}

		$('#cinema_ds_main_window #cinemads_pages').html(this.eval_pages(window.bootlegger.grid.current_page_index).join('\n'))
		$('#cinema_ds_main_window #cinemads_media_pool').empty()
		this.traversing = true;
		const msgs = await window.bootlegger.main.msg_traverser(this.chan_id, this.worker_alive, msg_offs, 56)
		this.qitems = msgs.media_units;
		this.traversing = false;


		this.pages.push({
			'offs': msgs.last_id,
			'media': msgs.media_units
		})

		this.working = true;
		await window.bootlegger.main.media_queue_processor(this, this.worker_alive)
		this.working = false;

		return true
	}

	eval_pages(active_page_index=null){

		const amt = 9
		const list = (amt % 2) ? (amt + 1) : amt

		const sides = Math.floor(list / 2)

		var result = []

		const pg_len = this.pages.length

		result.push(`
			<div id="cinemads_page_prev">Prev</div>
		`)

		if (active_page_index >= sides){
			result.push(`
				<div page_index="0" class="cinemads_page">1</div>
				<div class="cinemads_page_between">...</div>
			`)
		}
		print('Left side:', (active_page_index - sides).clamp(0, 65535), active_page_index)
		for (var pgl of range((active_page_index - sides).clamp(0, 65535), active_page_index)){
			if (!this.pages[pgl]){break}
			result.push(`
				<div page_index="${pgl}" class="cinemads_page">${pgl}</div>
			`)
		}
		result.push(`
			<div class="cinemads_page pg_active">${active_page_index}</div>
		`)
		print('Right side:', active_page_index, active_page_index + sides)
		for (var pgr of range(active_page_index, active_page_index + sides)){
			if (!this.pages[pgr]){break}
			result.push(`
				<div page_index="${pgr}" class="cinemads_page">${pgr}</div>
			`)
		}
		if ((pg_len - active_page_index) > sides){
			result.push(`
				<div class="cinemads_page_between">...</div>
				<div page_index="0" class="cinemads_page">${pg_len}</div>
			`)
		}
		result.push(`
			<div id="cinemads_page_next">Next</div>
		`)
		return result
	}

	page_switch(pg_index=0){
		if (!this.pages[pg_index]){return}

		this.abort()

		this.load_page(this.pages[pg_index].offs)
	}

	next_page(initial=0){
		this.abort()

		window.bootlegger.grid.current_page_index += 1
		print('New page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'WHAT??', window.bootlegger.grid.current_page_index - 1)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	kill(){
		this.alive = false;
		this.worker_alive.alive = false;

		this.traversing = true;
		this.working = true;

	}

	abort(){
		this.worker_alive.alive = false;
		this.worker_alive = {alive: true};
		this.working = false;
	}
}

window.bootlegger.grid.grid = null

window.bootlegger.grid.init = function(){
	if (!window.bootlegger.grid.grid){
		window.bootlegger.grid.grid = new gridmaker()
		print('created new grid')
		window.bootlegger.grid.grid.load_page(0)
	}
}

window.bootlegger.grid.reset = function(){
	window.bootlegger.grid.grid.kill()
	window.bootlegger.grid.current_page_index = 0
	window.bootlegger.grid.grid = new gridmaker()
}


window.bootlegger.grid.load_next_page = function(){
	window.bootlegger.grid.grid.next_page()
}

window.bootlegger.grid.maximize_image = function(tgt){
	$('body #cinema_ds_fullscreen').remove()
	$('body').append(`<img id="cinema_ds_fullscreen" src="${tgt.src}">`)
}






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
		const cotainer_exists = window.bootlegger.main.ensure_container_exists()
		print('Ensuring that container exists:', cotainer_exists)
		window.bootlegger.grid.init()
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


window.bootlegger.main.scroll_watcher = function(mpool)
{
	if (mpool.scrollTop == 0 && window.bootlegger.main.media_queue_active != true){
		print('Reached the top of the media pool, loading more messages')
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


window.bootlegger.main.msg_traverser = async function(chain_id=null, break_signal={}, msg_offs=null, limit=50)
{
	print('Traversing messages for', chain_id)
	if (break_signal.alive != true){print('traverser is dead from the start');return []}
	const current_chan_id = chain_id
	var total_msgs_scanned = 0

	var found_msgs = []

	var last_msg_id = msg_offs;

	print('Traversing info:', current_chan_id)

	while (break_signal.alive && found_msgs.length <= limit){
		print('Getting 100 messages...')
		var messages = await window.bootlegger.main.get_messages(current_chan_id, last_msg_id)
		if (messages.length <= 0){break}
		print('Got 100<= messages...', messages)
		var last_msg_id = messages.at(-1).id
		for (var msg of messages){
			total_msgs_scanned += 1
			if (msg.attachments.length <= 0 && msg.embeds.length <= 0){continue}

			msg.attachments = msg.attachments.map(function sex(m){
				m.lizard_type = 'attachment'
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				return m
			})

			for (var embed of msg.attachments.concat(msg.embeds)){
				found_msgs.push(embed)
				print('found embed', embed)
			}
		}
	}

	return {'media_units': found_msgs, 'last_id': last_msg_id}
}


window.bootlegger.main.media_queue_processor = async function(media_queue, break_signal)
{
	print('Processing media queue', media_queue.qitems)
	if (break_signal.alive != true){return false}

	while (break_signal.alive){
		var current_msg = media_queue.qitems[0];
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


		if (break_signal.alive != true){break}

		if (elem){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(elem)
		}

		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue');

	return true
}