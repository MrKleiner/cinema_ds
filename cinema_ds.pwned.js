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
// @namespace    https://github.com/MrKleiner/cinema_ds
// @version      0.37
// @description  A Discord addon which transforms server/dm channels into image strips 
// @author       Barney
// @homepage     https://github.com/MrKleiner/cinema_ds
// @supportURL   https://github.com/MrKleiner/cinema_ds/issues
//
// @compatible   firefox
// @compatible   opera
// @compatible   chrome
// @compatible   edge
// @compatible   brave
//
// @icon         https://images.techhive.com/images/article/2016/10/firefox-logo-100690302-large.jpg?auto=webp&quality=85,70
// @connect      *
// @connect      self
//
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require      https://unpkg.com/dexie@latest/dist/dexie.js
//
// @match        https://discord.com/*
// @match        https://discord.gg/*
//
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        window.onurlchange
// @grant        unsafeWindow
//
// @license 	 MIT
// @run-at       document-start
// @noframes
// ==/UserScript==


// ======================================================================
// Discord unbinds local storage methods to make the token unaccessible
// ======================================================================

// That's a wise decision. Let it be.

// But the token is still needed, so
// simply make the Tampermonkey script launch BEFORE discord...

// actually, this is not accessible from console
// and therefore it shouldn't be too big of a security problem
// just make sure that Tampermonkey keeps this entire thing sandboxed or whatever
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






class iguana
{
	// constructor(height, width) {
	constructor() {

		this.gigastorage = {}
		this.gigastorage.waiters = {}

		//
		//	Python things
		//


		// capitalize string
		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1);
		}
		String.prototype.lower = function() {
			return this.toLowerCase()
		}
		String.prototype.upper = function() {
			return this.toUpperCase()
		}

		String.prototype.zfill = function(amt=1, char='0') {
			var pad_char = typeof char !== 'undefined' ? char : '0';
			var pad = new Array(1 + amt).join(pad_char);
			return (pad + this).slice(-pad.length);
		}

		String.prototype.rstrip = function(chars='') {
			var start = 0;
			var end = this.length - 1;
			while (chars.indexOf(this[end]) >= 0) {
				end -= 1;
			}
			return this.substr(0, end + 1);
		}

		String.prototype.lstrip = function(chars='') {
			var start = 0;
			while (chars.indexOf(x[start]) >= 0) {
				start += 1;
			}
			var end = x.length - 1;
			return x.substr(start);
		}

		String.prototype.strip = function(chars='') {
			var start = 0;
			var trimmerd = this.trim()
			while (chars.indexOf(trimmerd[start]) >= 0) {
				start += 1;
			}
			var end = trimmerd.length - 1;
			while (chars.indexOf(trimmerd[end]) >= 0) {
				end -= 1;
			}
			return trimmerd.substr(start, end - start + 1);
		}

		//
		// Other improvements
		//

		// clamp a number to min/max
		Number.prototype.clamp = function(min, max) {
			return Math.min(Math.max(this, min), max);
		};

		Math.isEven = function(numb){
			return ((numb % 2) == 0)
		};
		Math.isOdd = function(numb){
			return ((numb % 2) != 0)
		};

		// extend url
		// (window.URL || window.webkitURL).prototype.target = function(first_argument) {

		// };


		const identifier = window.URL ? 'URL' : 'webkitURL'
		class more_url extends (window.URL || window.webkitURL){
			get target(){
				const base = this.pathname.split('/')
				var stem = base.at(-1).split('.')
				stem.pop()
				const sex = {
					'name': base.at(-1) || null,
					'suffix': base.at(-1).split('.').at(-1) || null,
					'stem': stem.join('.') || null,
					'stem_raw': base.at(-1).split('.')[0] || null
				}
				return sex
			}
			get no_search(){
				return this.origin + this.pathname
			}
		}

		window[identifier] = more_url


		// python things

		function str(inp){
			// return inp.toString()
			try {
				let shite = inp.toString();
				return shite
			} catch (error) {
				return '' + inp
			}
		}
		window.str = str

		function int(inp){
			return parseInt(inp)
		}
		window.int = int

		function float(inp){
			return parseFloat(inp)
		}
		window.float = float

		function len(inp){
			try {
				if (this.isDict(inp)){
					return Object.keys(inp).length
				}
			} catch (error) {}
			try {
				return inp.length
			} catch (error) {
				return str(inp).length
			}
		}
		window.len = len

		// python-like range()
		function* range(start=0, stop=null, step=1)
		{
			if (stop == null){
				stop = start
				start = 0
			}
			try {
				start = parseInt(start)
				stop = parseInt(stop)
				step = parseInt(step)
			} catch (error) {
				return []
			}
			
			// var tgt_result = []
			// var eligible = true
			while (true) {
				if (start >= stop){
					return
					break
				}
				// tgt_result.push(start)
				yield start
				start += step
			}
		}
		window.range = range


		//
		// Other useful extensions
		//

		window.localStorage.__proto__.getObject = function(itemname){
			const got_item = window.localStorage.getItem(itemname)
			try {
				return JSON.parse(got_item)
			} catch (error) {
				return got_item
			}
		}
		window.localStorage.__proto__.setObject = function(itemname, itemval){
			try {
				window.localStorage.setItem(itemname, JSON.stringify(itemval))
			} catch (error) {
				window.localStorage.setItem(itemname, itemval)
			}
		}


		function compare_buffers(buff2){
			if (this.byteLength != buf2.byteLength) return false;
			var dv1 = new Int8Array(this);
			var dv2 = new Int8Array(buf2);
			for (var i = 0 ; i != this.byteLength ; i++){
				if (dv1[i] != dv2[i]) return false;
			}
			return true;
		}

		ArrayBuffer.sameAs = compare_buffers;
		Uint8Array.sameAs = compare_buffers;
		Uint16Array.sameAs = compare_buffers;
		Uint32Array.sameAs = compare_buffers;
		Uint8ClampedArray.sameAs = compare_buffers;
		BigUint64Array.sameAs = compare_buffers;
		Int8Array.sameAs = compare_buffers;
		Int16Array.sameAs = compare_buffers;
		Float32Array.sameAs = compare_buffers;
		Float64Array.sameAs = compare_buffers;
		BigInt64Array.sameAs = compare_buffers;


	};

	get info() {
		return `Lizard's toybox. Version 0.38`
	};


	isDict(v) {
		return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
	}



















	// ============================================================
	// ============================================================
	//                         JSON Lookup
	// ============================================================
	// ============================================================

	// goes through the entirety of a json object and returns whatever it found

	// sadly, recursive




	/*
	var json = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","ID":"44","str":"SGML","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';

	var js = JSON.parse(json);

	//example of grabbing objects that match some key and value in JSON
	console.log(find_objects(js,'ID','SGML'));
	//returns 1 object where a key names ID has the value SGML

	//example of grabbing objects that match some key in JSON
	console.log(find_objects(js,'ID',''));
	//returns 2 objects since keys with name ID are found in 2 objects

	//example of grabbing obejcts that match some value in JSON
	console.log(find_objects(js,'','SGML'));
	//returns 2 object since 2 obects have keys with the value SGML

	//example of grabbing objects that match some key in JSON
	console.log(find_objects(js,'ID',''));
	//returns 2 objects since keys with name ID are found in 2 objects

	//example of grabbing values from any key passed in JSON
	console.log(find_values(js,'ID'));
	//returns array ["SGML", "44"] 

	//example of grabbing keys by searching via values in JSON
	console.log(find_keys(js,'SGML'));
	//returns array ["ID", "SortAs", "Acronym", "str"] 

	*/

	// From github. Json/object searcher
	find_objects(obj, key, val) {
		  var objects = [];
		  for (var i in obj) {
			  if (!obj.hasOwnProperty(i)) continue;
			  if (typeof obj[i] == 'object') {
				  objects = objects.concat(this.find_objects(obj[i], key, val));    
			  } else 
			  //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
			  if (i == key && obj[i] == val || i == key && val == '') { //
				  objects.push(obj);
			  } else if (obj[i] == val && key == ''){
				  //only add if the object is not already in the array
				  if (objects.lastIndexOf(obj) == -1){
					  objects.push(obj);
				  }
			  }
		  }
		  return objects;
	  }


	  // return an array of values that match on a certain key
	  find_values(obj, key) {
		  var objects = [];
		  for (var i in obj) {
			  if (!obj.hasOwnProperty(i)) continue;
			  if (typeof obj[i] == 'object') {
				  objects = objects.concat(this.find_values(obj[i], key));
			  } else if (i == key) {
				  objects.push(obj[i]);
			  }
		  }
		  return objects;
	  }


	  // return an array of keys that match on a certain value
	  find_keys(obj, val) {
		  var objects = [];
		  for (var i in obj) {
			  if (!obj.hasOwnProperty(i)) continue;
			  if (typeof obj[i] == 'object') {
				  objects = objects.concat(this.find_keys(obj[i], val));
			  } else if (obj[i] == val) {
				  objects.push(i);
			  }
		  }
		  return objects;
	  }
























	// ============================================================
	// ============================================================
	//                      random shit generator
	// ============================================================
	// ============================================================

	// it's actually extremely fucking bad from technical point of view
	// but it's fast enough to generate very long strings
	// and then generate hash out of them

	// proper random shit
	// methods: 
	// "flac" - adv
	// "num" - number
	// [default] - simple
	// def - default
	// '' - default
	// todo: Current implementation is irrational.
	// Possible way of making it better:
	/*
		specify every parameter as a key=value pair.
		have defaults for them.
		if overwritten - use what is being told to.
		have many true/false statements.
		half-obligatory rnd method selection: Default+addon, Adv+addon, Numeric, rnd number from range, custom dict.
		if string then: Numbers TRUE/FALSE
		if numeric - Zero in the beginning? TRUE/FALSE
	*/


	rndwave(len=8, method='def', addchars='', crypto=true) {
		var result = '';

		var addon_chars = addchars.toString().replaceAll(' ', '');
		
		switch (method) {
			case 'flac':
				var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-()=+*#/!&?<>$~' + addon_chars;
				break;

			case 'num':
				var characters = '1234567890' + addon_chars;
				break;

			case 'def':
				var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-' + addon_chars;
				break;

			default:
				var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-' + addon_chars;
				// console.log(`Sorry, we are out of ${expr}.`);
				break;
		}
		
		var charactersLength = characters.length;
        if (crypto == true){
            var cryptonums = window.crypto.getRandomValues(new Uint32Array(len + 1))
        }
		for ( var i = 0; i < len; i++ ) {
            if (crypto == true){
                result += characters.charAt(cryptonums[i] % charactersLength);
            }else{
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
		}
		return result;
	}
























	// ============================================================
	// ============================================================
	//                         Biscuits
	// ============================================================
	// ============================================================

	// set cookies. from https://www.w3schools.com/js/js_cookies.asp

	cookie_set(cname, cvalue, exdays) {
		if ( typeof cname == 'undefined' || cvalue == 'undefined' || exdays == 'undefined' ) {
			console.log(`lizard's biscuits lack chocolate!`)
			return
		}
		const d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = 'expires='+d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

	cookie_get(cname) {
		let name = cname + '=';
		let ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}


















	// ============================================================
	// ============================================================
	//                          text getter
	// ============================================================
	// ============================================================

	// smart recursive text getter

	imtext(nd) {
		var element = nd, text = '';
		for (var i = 0; i < element.childNodes.length; ++i){
			if (element.childNodes[i].nodeType === Node.TEXT_NODE){
				text += element.childNodes[i].textContent;
			}
		}
		return text
	}





















	// ============================================================
	// ============================================================
	//                         Text to buffer
	// ============================================================
	// ============================================================

	// copy smth to ctrl+c
	copytext(l3text){
		var $temp = $('<input style="opacity: 0;position: absolute;">');
		$('body').append($temp);
		$temp.val(l3text).select();
		document.execCommand('copy');
		$temp.remove();
	}




















	// ============================================================
	// ============================================================
	//                            RGB to HEX
	// ============================================================
	// ============================================================

	// convert rgb to hex
	rgb2hex(rgb) {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		function hex(x) {
			return ('0' + parseInt(x).toString(16)).slice(-2);
		}
		return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}




















	// ============================================================
	// ============================================================
	//                         Download text
	// ============================================================
	// ============================================================


	// generate a file download
	// simple, but way too simple sometimes
	// there are some BLOB approaches...
	// although this does work without any problems for 10+ mb files
	textdl(filename='lizard.txt', text='iguana') {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}















	// ============================================================
	// ============================================================
	//                    Smart encode/decode
	// ============================================================
	// ============================================================


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
		return this.base64EncArr(this.strToUTF8Arr(st))
	}

	atob(st=''){
		if (st==''){return ''}
		return this.UTF8ArrToStr(this.base64DecToArr(st))
	}


	// quick string encoding
	u8btoa(st) {
	    return btoa(unescape(encodeURIComponent(st)));
	}
	// decode
	u8atob(st) {
	    return decodeURIComponent(escape(atob(st)));
	}






















	// ============================================================
	// ============================================================
	//              remove duplicates from an array
	// ============================================================
	// ============================================================

	/*
	https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
	*/
	// deletes duplicates from given array
	rmdupli(a) {
	   return Array.from(new Set(a));
	}


















	// ============================================================
	// ============================================================
	//       evaluate html. Should be a little faster than jQuery
	// ============================================================
	// ============================================================

	ehtml(s)
	{
		var shit = document.createElement('div');
		shit.innerHTML = s
		return shit.children[0]
	}












	// ============================================================
	// ============================================================
	//       		await for an element on a page...
	// ============================================================
	// ============================================================

	// takes selector as an input
	// and a name
	wait_elem(sel=null, identify=null)
	{
		if (!sel){return false}
		var thy = this;
		const save_sel = sel;
		var me = identify || this.rndwave(32, 'def').replaceAll('-', '').replaceAll('_', '')

		var waiter = {
			'name': me,
			wait: function(){
				return new Promise(function(resolve, reject){
					const mysel = save_sel;
					let config = { attributes: true, childList: true, subtree: true };
					let callback = (mutationList, observer) => {
						var try_search = document.querySelector(mysel)
						if (try_search != null){
							observer.disconnect()
							resolve(try_search)
						}
					};

					var obsr = new MutationObserver(callback);
					obsr.observe(document.body, config);

					thy.gigastorage.waiters[me] = obsr
				});
			},
			abort: function(){
				thy.gigastorage.waiters[me].disconnect();
			}
		}

		return waiter
	}






























	// ============================================================
	// ============================================================
	// 	          Delete every nth character from a string
	// ============================================================
	// ============================================================

	// st - input string OR array
	// nth - every n character
	// use - if set to true, will return every n character
	// if set to false or not set, will return a string with every n character deleted
	// smartass: Works with arrays too
	delnthchar(st, nth, use=false)
	{
		if (st.toString() == ''){ return ''}

		if (Array.isArray(st)){
			var todel = st;
		}else{
			var todel = st.toString().split('');
		}

		var nthc = 1
		var delres = []
		for (var count in todel)
		{
			if (use){
				if (nthc != nth){
					nthc += 1
				}else{
					delres.push(todel[count])
					var nthc = 1
				}
			}else{
				if (nthc != nth){
					delres.push(todel[count])
					nthc += 1
				}else{
					var nthc = 1
				}
			}
		}
		return delres.join('')
	}


















	// ============================================================
	// ============================================================
	//            Check if arrays have identical elements
	// ============================================================
	// ============================================================

	// returns true if an array contains any element which is not present in another array
	// inwhat - array to check against
	// what - input array
	array_is_same(what=[], inwhat=[], return_elems=false) {
	    var magix = what.filter(f => !inwhat.includes(f));
	    if (return_elems == true){
	    	return magix
	    }else{
	    	return magix.length > 0
	    }
	}





























	// ============================================================
	// ============================================================
	//                   base64 to image blob
	// ============================================================
	// ============================================================

	// takes raw base64 string and converts it to imageurl
	b64toimg(b64='', imgtype='*'){
		if (b64 == ''){return null}
		var bytes = this.base64DecToArr(b64)
		var blob = new Blob([bytes], {type: `image/${imgtype}`});
		var imageUrl = (window.URL || window.webkitURL).createObjectURL(blob);
		return imageUrl
	}



}
window.lizard = new iguana();











//       :::::::::       ::::::::::       :::    :::       :::::::::::       :::::::::: 
//      :+:    :+:      :+:              :+:    :+:           :+:           :+:         
//     +:+    +:+      +:+               +:+  +:+            +:+           +:+          
//    +#+    +:+      +#++:++#           +#++:+             +#+           +#++:++#      
//   +#+    +#+      +#+               +#+  +#+            +#+           +#+            
//  #+#    #+#      #+#              #+#    #+#           #+#           #+#             
// #########       ##########       ###    ###       ###########       ##########       
// 


/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.2.2, Wed Apr 27 2022
 *
 * https://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dexie = factory());
})(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var _global = typeof globalThis !== 'undefined' ? globalThis :
        typeof self !== 'undefined' ? self :
            typeof window !== 'undefined' ? window :
                global;

    var keys = Object.keys;
    var isArray = Array.isArray;
    if (typeof Promise !== 'undefined' && !_global.Promise) {
        _global.Promise = Promise;
    }
    function extend(obj, extension) {
        if (typeof extension !== 'object')
            return obj;
        keys(extension).forEach(function (key) {
            obj[key] = extension[key];
        });
        return obj;
    }
    var getProto = Object.getPrototypeOf;
    var _hasOwn = {}.hasOwnProperty;
    function hasOwn(obj, prop) {
        return _hasOwn.call(obj, prop);
    }
    function props(proto, extension) {
        if (typeof extension === 'function')
            extension = extension(getProto(proto));
        (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function (key) {
            setProp(proto, key, extension[key]);
        });
    }
    var defineProperty = Object.defineProperty;
    function setProp(obj, prop, functionOrGetSet, options) {
        defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
            { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
            { value: functionOrGetSet, configurable: true, writable: true }, options));
    }
    function derive(Child) {
        return {
            from: function (Parent) {
                Child.prototype = Object.create(Parent.prototype);
                setProp(Child.prototype, "constructor", Child);
                return {
                    extend: props.bind(null, Child.prototype)
                };
            }
        };
    }
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    function getPropertyDescriptor(obj, prop) {
        var pd = getOwnPropertyDescriptor(obj, prop);
        var proto;
        return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
    }
    var _slice = [].slice;
    function slice(args, start, end) {
        return _slice.call(args, start, end);
    }
    function override(origFunc, overridedFactory) {
        return overridedFactory(origFunc);
    }
    function assert(b) {
        if (!b)
            throw new Error("Assertion Failed");
    }
    function asap$1(fn) {
        if (_global.setImmediate)
            setImmediate(fn);
        else
            setTimeout(fn, 0);
    }
    function arrayToObject(array, extractor) {
        return array.reduce(function (result, item, i) {
            var nameAndValue = extractor(item, i);
            if (nameAndValue)
                result[nameAndValue[0]] = nameAndValue[1];
            return result;
        }, {});
    }
    function tryCatch(fn, onerror, args) {
        try {
            fn.apply(null, args);
        }
        catch (ex) {
            onerror && onerror(ex);
        }
    }
    function getByKeyPath(obj, keyPath) {
        if (hasOwn(obj, keyPath))
            return obj[keyPath];
        if (!keyPath)
            return obj;
        if (typeof keyPath !== 'string') {
            var rv = [];
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                var val = getByKeyPath(obj, keyPath[i]);
                rv.push(val);
            }
            return rv;
        }
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
        }
        return undefined;
    }
    function setByKeyPath(obj, keyPath, value) {
        if (!obj || keyPath === undefined)
            return;
        if ('isFrozen' in Object && Object.isFrozen(obj))
            return;
        if (typeof keyPath !== 'string' && 'length' in keyPath) {
            assert(typeof value !== 'string' && 'length' in value);
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                setByKeyPath(obj, keyPath[i], value[i]);
            }
        }
        else {
            var period = keyPath.indexOf('.');
            if (period !== -1) {
                var currentKeyPath = keyPath.substr(0, period);
                var remainingKeyPath = keyPath.substr(period + 1);
                if (remainingKeyPath === "")
                    if (value === undefined) {
                        if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                            obj.splice(currentKeyPath, 1);
                        else
                            delete obj[currentKeyPath];
                    }
                    else
                        obj[currentKeyPath] = value;
                else {
                    var innerObj = obj[currentKeyPath];
                    if (!innerObj || !hasOwn(obj, currentKeyPath))
                        innerObj = (obj[currentKeyPath] = {});
                    setByKeyPath(innerObj, remainingKeyPath, value);
                }
            }
            else {
                if (value === undefined) {
                    if (isArray(obj) && !isNaN(parseInt(keyPath)))
                        obj.splice(keyPath, 1);
                    else
                        delete obj[keyPath];
                }
                else
                    obj[keyPath] = value;
            }
        }
    }
    function delByKeyPath(obj, keyPath) {
        if (typeof keyPath === 'string')
            setByKeyPath(obj, keyPath, undefined);
        else if ('length' in keyPath)
            [].map.call(keyPath, function (kp) {
                setByKeyPath(obj, kp, undefined);
            });
    }
    function shallowClone(obj) {
        var rv = {};
        for (var m in obj) {
            if (hasOwn(obj, m))
                rv[m] = obj[m];
        }
        return rv;
    }
    var concat = [].concat;
    function flatten(a) {
        return concat.apply([], a);
    }
    var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
        .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; });
    var intrinsicTypes = intrinsicTypeNames.map(function (t) { return _global[t]; });
    arrayToObject(intrinsicTypeNames, function (x) { return [x, true]; });
    var circularRefs = null;
    function deepClone(any) {
        circularRefs = typeof WeakMap !== 'undefined' && new WeakMap();
        var rv = innerDeepClone(any);
        circularRefs = null;
        return rv;
    }
    function innerDeepClone(any) {
        if (!any || typeof any !== 'object')
            return any;
        var rv = circularRefs && circularRefs.get(any);
        if (rv)
            return rv;
        if (isArray(any)) {
            rv = [];
            circularRefs && circularRefs.set(any, rv);
            for (var i = 0, l = any.length; i < l; ++i) {
                rv.push(innerDeepClone(any[i]));
            }
        }
        else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
            rv = any;
        }
        else {
            var proto = getProto(any);
            rv = proto === Object.prototype ? {} : Object.create(proto);
            circularRefs && circularRefs.set(any, rv);
            for (var prop in any) {
                if (hasOwn(any, prop)) {
                    rv[prop] = innerDeepClone(any[prop]);
                }
            }
        }
        return rv;
    }
    var toString = {}.toString;
    function toStringTag(o) {
        return toString.call(o).slice(8, -1);
    }
    var iteratorSymbol = typeof Symbol !== 'undefined' ?
        Symbol.iterator :
        '@@iterator';
    var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
        var i;
        return x != null && (i = x[iteratorSymbol]) && i.apply(x);
    } : function () { return null; };
    var NO_CHAR_ARRAY = {};
    function getArrayOf(arrayLike) {
        var i, a, x, it;
        if (arguments.length === 1) {
            if (isArray(arrayLike))
                return arrayLike.slice();
            if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
                return [arrayLike];
            if ((it = getIteratorOf(arrayLike))) {
                a = [];
                while ((x = it.next()), !x.done)
                    a.push(x.value);
                return a;
            }
            if (arrayLike == null)
                return [arrayLike];
            i = arrayLike.length;
            if (typeof i === 'number') {
                a = new Array(i);
                while (i--)
                    a[i] = arrayLike[i];
                return a;
            }
            return [arrayLike];
        }
        i = arguments.length;
        a = new Array(i);
        while (i--)
            a[i] = arguments[i];
        return a;
    }
    var isAsyncFunction = typeof Symbol !== 'undefined'
        ? function (fn) { return fn[Symbol.toStringTag] === 'AsyncFunction'; }
        : function () { return false; };

    var debug = typeof location !== 'undefined' &&
        /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function setDebug(value, filter) {
        debug = value;
        libraryFilter = filter;
    }
    var libraryFilter = function () { return true; };
    var NEEDS_THROW_FOR_STACK = !new Error("").stack;
    function getErrorWithStack() {
        if (NEEDS_THROW_FOR_STACK)
            try {
                getErrorWithStack.arguments;
                throw new Error();
            }
            catch (e) {
                return e;
            }
        return new Error();
    }
    function prettyStack(exception, numIgnoredFrames) {
        var stack = exception.stack;
        if (!stack)
            return "";
        numIgnoredFrames = (numIgnoredFrames || 0);
        if (stack.indexOf(exception.name) === 0)
            numIgnoredFrames += (exception.name + exception.message).split('\n').length;
        return stack.split('\n')
            .slice(numIgnoredFrames)
            .filter(libraryFilter)
            .map(function (frame) { return "\n" + frame; })
            .join('');
    }

    var dexieErrorNames = [
        'Modify',
        'Bulk',
        'OpenFailed',
        'VersionChange',
        'Schema',
        'Upgrade',
        'InvalidTable',
        'MissingAPI',
        'NoSuchDatabase',
        'InvalidArgument',
        'SubTransaction',
        'Unsupported',
        'Internal',
        'DatabaseClosed',
        'PrematureCommit',
        'ForeignAwait'
    ];
    var idbDomErrorNames = [
        'Unknown',
        'Constraint',
        'Data',
        'TransactionInactive',
        'ReadOnly',
        'Version',
        'NotFound',
        'InvalidState',
        'InvalidAccess',
        'Abort',
        'Timeout',
        'QuotaExceeded',
        'Syntax',
        'DataClone'
    ];
    var errorList = dexieErrorNames.concat(idbDomErrorNames);
    var defaultTexts = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
    };
    function DexieError(name, msg) {
        this._e = getErrorWithStack();
        this.name = name;
        this.message = msg;
    }
    derive(DexieError).from(Error).extend({
        stack: {
            get: function () {
                return this._stack ||
                    (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
            }
        },
        toString: function () { return this.name + ": " + this.message; }
    });
    function getMultiErrorMessage(msg, failures) {
        return msg + ". Errors: " + Object.keys(failures)
            .map(function (key) { return failures[key].toString(); })
            .filter(function (v, i, s) { return s.indexOf(v) === i; })
            .join('\n');
    }
    function ModifyError(msg, failures, successCount, failedKeys) {
        this._e = getErrorWithStack();
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        this.message = getMultiErrorMessage(msg, failures);
    }
    derive(ModifyError).from(DexieError);
    function BulkError(msg, failures) {
        this._e = getErrorWithStack();
        this.name = "BulkError";
        this.failures = Object.keys(failures).map(function (pos) { return failures[pos]; });
        this.failuresByPos = failures;
        this.message = getMultiErrorMessage(msg, failures);
    }
    derive(BulkError).from(DexieError);
    var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
    var BaseException = DexieError;
    var exceptions = errorList.reduce(function (obj, name) {
        var fullName = name + "Error";
        function DexieError(msgOrInner, inner) {
            this._e = getErrorWithStack();
            this.name = fullName;
            if (!msgOrInner) {
                this.message = defaultTexts[name] || fullName;
                this.inner = null;
            }
            else if (typeof msgOrInner === 'string') {
                this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
                this.inner = inner || null;
            }
            else if (typeof msgOrInner === 'object') {
                this.message = msgOrInner.name + " " + msgOrInner.message;
                this.inner = msgOrInner;
            }
        }
        derive(DexieError).from(BaseException);
        obj[name] = DexieError;
        return obj;
    }, {});
    exceptions.Syntax = SyntaxError;
    exceptions.Type = TypeError;
    exceptions.Range = RangeError;
    var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
        obj[name + "Error"] = exceptions[name];
        return obj;
    }, {});
    function mapError(domError, message) {
        if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
            return domError;
        var rv = new exceptionMap[domError.name](message || domError.message, domError);
        if ("stack" in domError) {
            setProp(rv, "stack", { get: function () {
                    return this.inner.stack;
                } });
        }
        return rv;
    }
    var fullNameExceptions = errorList.reduce(function (obj, name) {
        if (["Syntax", "Type", "Range"].indexOf(name) === -1)
            obj[name + "Error"] = exceptions[name];
        return obj;
    }, {});
    fullNameExceptions.ModifyError = ModifyError;
    fullNameExceptions.DexieError = DexieError;
    fullNameExceptions.BulkError = BulkError;

    function nop() { }
    function mirror(val) { return val; }
    function pureFunctionChain(f1, f2) {
        if (f1 == null || f1 === mirror)
            return f2;
        return function (val) {
            return f2(f1(val));
        };
    }
    function callBoth(on1, on2) {
        return function () {
            on1.apply(this, arguments);
            on2.apply(this, arguments);
        };
    }
    function hookCreatingChain(f1, f2) {
        if (f1 === nop)
            return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res !== undefined)
                arguments[0] = res;
            var onsuccess = this.onsuccess,
            onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
                this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
                this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res2 !== undefined ? res2 : res;
        };
    }
    function hookDeletingChain(f1, f2) {
        if (f1 === nop)
            return f2;
        return function () {
            f1.apply(this, arguments);
            var onsuccess = this.onsuccess,
            onerror = this.onerror;
            this.onsuccess = this.onerror = null;
            f2.apply(this, arguments);
            if (onsuccess)
                this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
                this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        };
    }
    function hookUpdatingChain(f1, f2) {
        if (f1 === nop)
            return f2;
        return function (modifications) {
            var res = f1.apply(this, arguments);
            extend(modifications, res);
            var onsuccess = this.onsuccess,
            onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
                this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
                this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res === undefined ?
                (res2 === undefined ? undefined : res2) :
                (extend(res, res2));
        };
    }
    function reverseStoppableEventChain(f1, f2) {
        if (f1 === nop)
            return f2;
        return function () {
            if (f2.apply(this, arguments) === false)
                return false;
            return f1.apply(this, arguments);
        };
    }
    function promisableChain(f1, f2) {
        if (f1 === nop)
            return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then === 'function') {
                var thiz = this, i = arguments.length, args = new Array(i);
                while (i--)
                    args[i] = arguments[i];
                return res.then(function () {
                    return f2.apply(thiz, args);
                });
            }
            return f2.apply(this, arguments);
        };
    }

    var INTERNAL = {};
    var LONG_STACKS_CLIP_LIMIT = 100,
    MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === 'undefined' ?
        [] :
        (function () {
            var globalP = Promise.resolve();
            if (typeof crypto === 'undefined' || !crypto.subtle)
                return [globalP, getProto(globalP), globalP];
            var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [
                nativeP,
                getProto(nativeP),
                globalP
            ];
        })(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
    var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
    var patchGlobalPromise = !!resolvedGlobalPromise;
    var stack_being_generated = false;
    var schedulePhysicalTick = resolvedGlobalPromise ?
        function () { resolvedGlobalPromise.then(physicalTick); }
        :
            _global.setImmediate ?
                setImmediate.bind(null, physicalTick) :
                _global.MutationObserver ?
                    function () {
                        var hiddenDiv = document.createElement("div");
                        (new MutationObserver(function () {
                            physicalTick();
                            hiddenDiv = null;
                        })).observe(hiddenDiv, { attributes: true });
                        hiddenDiv.setAttribute('i', '1');
                    } :
                    function () { setTimeout(physicalTick, 0); };
    var asap = function (callback, args) {
        microtickQueue.push([callback, args]);
        if (needsNewPhysicalTick) {
            schedulePhysicalTick();
            needsNewPhysicalTick = false;
        }
    };
    var isOutsideMicroTick = true,
    needsNewPhysicalTick = true,
    unhandledErrors = [],
    rejectingErrors = [],
    currentFulfiller = null, rejectionMapper = mirror;
    var globalPSD = {
        id: 'global',
        global: true,
        ref: 0,
        unhandleds: [],
        onunhandled: globalError,
        pgp: false,
        env: {},
        finalize: function () {
            this.unhandleds.forEach(function (uh) {
                try {
                    globalError(uh[0], uh[1]);
                }
                catch (e) { }
            });
        }
    };
    var PSD = globalPSD;
    var microtickQueue = [];
    var numScheduledCalls = 0;
    var tickFinalizers = [];
    function DexiePromise(fn) {
        if (typeof this !== 'object')
            throw new TypeError('Promises must be constructed via new');
        this._listeners = [];
        this.onuncatched = nop;
        this._lib = false;
        var psd = (this._PSD = PSD);
        if (debug) {
            this._stackHolder = getErrorWithStack();
            this._prev = null;
            this._numPrev = 0;
        }
        if (typeof fn !== 'function') {
            if (fn !== INTERNAL)
                throw new TypeError('Not a function');
            this._state = arguments[1];
            this._value = arguments[2];
            if (this._state === false)
                handleRejection(this, this._value);
            return;
        }
        this._state = null;
        this._value = null;
        ++psd.ref;
        executePromiseTask(this, fn);
    }
    var thenProp = {
        get: function () {
            var psd = PSD, microTaskId = totalEchoes;
            function then(onFulfilled, onRejected) {
                var _this = this;
                var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
                var cleanup = possibleAwait && !decrementExpectedAwaits();
                var rv = new DexiePromise(function (resolve, reject) {
                    propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
                });
                debug && linkToPreviousPromise(rv, this);
                return rv;
            }
            then.prototype = INTERNAL;
            return then;
        },
        set: function (value) {
            setProp(this, 'then', value && value.prototype === INTERNAL ?
                thenProp :
                {
                    get: function () {
                        return value;
                    },
                    set: thenProp.set
                });
        }
    };
    props(DexiePromise.prototype, {
        then: thenProp,
        _then: function (onFulfilled, onRejected) {
            propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
        },
        catch: function (onRejected) {
            if (arguments.length === 1)
                return this.then(null, onRejected);
            var type = arguments[0], handler = arguments[1];
            return typeof type === 'function' ? this.then(null, function (err) {
                return err instanceof type ? handler(err) : PromiseReject(err);
            })
                : this.then(null, function (err) {
                    return err && err.name === type ? handler(err) : PromiseReject(err);
                });
        },
        finally: function (onFinally) {
            return this.then(function (value) {
                onFinally();
                return value;
            }, function (err) {
                onFinally();
                return PromiseReject(err);
            });
        },
        stack: {
            get: function () {
                if (this._stack)
                    return this._stack;
                try {
                    stack_being_generated = true;
                    var stacks = getStack(this, [], MAX_LONG_STACKS);
                    var stack = stacks.join("\nFrom previous: ");
                    if (this._state !== null)
                        this._stack = stack;
                    return stack;
                }
                finally {
                    stack_being_generated = false;
                }
            }
        },
        timeout: function (ms, msg) {
            var _this = this;
            return ms < Infinity ?
                new DexiePromise(function (resolve, reject) {
                    var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                    _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
                }) : this;
        }
    });
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
        setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
    globalPSD.env = snapShot();
    function Listener(onFulfilled, onRejected, resolve, reject, zone) {
        this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
        this.onRejected = typeof onRejected === 'function' ? onRejected : null;
        this.resolve = resolve;
        this.reject = reject;
        this.psd = zone;
    }
    props(DexiePromise, {
        all: function () {
            var values = getArrayOf.apply(null, arguments)
                .map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve, reject) {
                if (values.length === 0)
                    resolve([]);
                var remaining = values.length;
                values.forEach(function (a, i) { return DexiePromise.resolve(a).then(function (x) {
                    values[i] = x;
                    if (!--remaining)
                        resolve(values);
                }, reject); });
            });
        },
        resolve: function (value) {
            if (value instanceof DexiePromise)
                return value;
            if (value && typeof value.then === 'function')
                return new DexiePromise(function (resolve, reject) {
                    value.then(resolve, reject);
                });
            var rv = new DexiePromise(INTERNAL, true, value);
            linkToPreviousPromise(rv, currentFulfiller);
            return rv;
        },
        reject: PromiseReject,
        race: function () {
            var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve, reject) {
                values.map(function (value) { return DexiePromise.resolve(value).then(resolve, reject); });
            });
        },
        PSD: {
            get: function () { return PSD; },
            set: function (value) { return PSD = value; }
        },
        totalEchoes: { get: function () { return totalEchoes; } },
        newPSD: newScope,
        usePSD: usePSD,
        scheduler: {
            get: function () { return asap; },
            set: function (value) { asap = value; }
        },
        rejectionMapper: {
            get: function () { return rejectionMapper; },
            set: function (value) { rejectionMapper = value; }
        },
        follow: function (fn, zoneProps) {
            return new DexiePromise(function (resolve, reject) {
                return newScope(function (resolve, reject) {
                    var psd = PSD;
                    psd.unhandleds = [];
                    psd.onunhandled = reject;
                    psd.finalize = callBoth(function () {
                        var _this = this;
                        run_at_end_of_this_or_next_physical_tick(function () {
                            _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                        });
                    }, psd.finalize);
                    fn();
                }, zoneProps, resolve, reject);
            });
        }
    });
    if (NativePromise) {
        if (NativePromise.allSettled)
            setProp(DexiePromise, "allSettled", function () {
                var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
                return new DexiePromise(function (resolve) {
                    if (possiblePromises.length === 0)
                        resolve([]);
                    var remaining = possiblePromises.length;
                    var results = new Array(remaining);
                    possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return results[i] = { status: "fulfilled", value: value }; }, function (reason) { return results[i] = { status: "rejected", reason: reason }; })
                        .then(function () { return --remaining || resolve(results); }); });
                });
            });
        if (NativePromise.any && typeof AggregateError !== 'undefined')
            setProp(DexiePromise, "any", function () {
                var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
                return new DexiePromise(function (resolve, reject) {
                    if (possiblePromises.length === 0)
                        reject(new AggregateError([]));
                    var remaining = possiblePromises.length;
                    var failures = new Array(remaining);
                    possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return resolve(value); }, function (failure) {
                        failures[i] = failure;
                        if (!--remaining)
                            reject(new AggregateError(failures));
                    }); });
                });
            });
    }
    function executePromiseTask(promise, fn) {
        try {
            fn(function (value) {
                if (promise._state !== null)
                    return;
                if (value === promise)
                    throw new TypeError('A promise cannot be resolved with itself.');
                var shouldExecuteTick = promise._lib && beginMicroTickScope();
                if (value && typeof value.then === 'function') {
                    executePromiseTask(promise, function (resolve, reject) {
                        value instanceof DexiePromise ?
                            value._then(resolve, reject) :
                            value.then(resolve, reject);
                    });
                }
                else {
                    promise._state = true;
                    promise._value = value;
                    propagateAllListeners(promise);
                }
                if (shouldExecuteTick)
                    endMicroTickScope();
            }, handleRejection.bind(null, promise));
        }
        catch (ex) {
            handleRejection(promise, ex);
        }
    }
    function handleRejection(promise, reason) {
        rejectingErrors.push(reason);
        if (promise._state !== null)
            return;
        var shouldExecuteTick = promise._lib && beginMicroTickScope();
        reason = rejectionMapper(reason);
        promise._state = false;
        promise._value = reason;
        debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
            var origProp = getPropertyDescriptor(reason, "stack");
            reason._promise = promise;
            setProp(reason, "stack", {
                get: function () {
                    return stack_being_generated ?
                        origProp && (origProp.get ?
                            origProp.get.apply(reason) :
                            origProp.value) :
                        promise.stack;
                }
            });
        });
        addPossiblyUnhandledError(promise);
        propagateAllListeners(promise);
        if (shouldExecuteTick)
            endMicroTickScope();
    }
    function propagateAllListeners(promise) {
        var listeners = promise._listeners;
        promise._listeners = [];
        for (var i = 0, len = listeners.length; i < len; ++i) {
            propagateToListener(promise, listeners[i]);
        }
        var psd = promise._PSD;
        --psd.ref || psd.finalize();
        if (numScheduledCalls === 0) {
            ++numScheduledCalls;
            asap(function () {
                if (--numScheduledCalls === 0)
                    finalizePhysicalTick();
            }, []);
        }
    }
    function propagateToListener(promise, listener) {
        if (promise._state === null) {
            promise._listeners.push(listener);
            return;
        }
        var cb = promise._state ? listener.onFulfilled : listener.onRejected;
        if (cb === null) {
            return (promise._state ? listener.resolve : listener.reject)(promise._value);
        }
        ++listener.psd.ref;
        ++numScheduledCalls;
        asap(callListener, [cb, promise, listener]);
    }
    function callListener(cb, promise, listener) {
        try {
            currentFulfiller = promise;
            var ret, value = promise._value;
            if (promise._state) {
                ret = cb(value);
            }
            else {
                if (rejectingErrors.length)
                    rejectingErrors = [];
                ret = cb(value);
                if (rejectingErrors.indexOf(value) === -1)
                    markErrorAsHandled(promise);
            }
            listener.resolve(ret);
        }
        catch (e) {
            listener.reject(e);
        }
        finally {
            currentFulfiller = null;
            if (--numScheduledCalls === 0)
                finalizePhysicalTick();
            --listener.psd.ref || listener.psd.finalize();
        }
    }
    function getStack(promise, stacks, limit) {
        if (stacks.length === limit)
            return stacks;
        var stack = "";
        if (promise._state === false) {
            var failure = promise._value, errorName, message;
            if (failure != null) {
                errorName = failure.name || "Error";
                message = failure.message || failure;
                stack = prettyStack(failure, 0);
            }
            else {
                errorName = failure;
                message = "";
            }
            stacks.push(errorName + (message ? ": " + message : "") + stack);
        }
        if (debug) {
            stack = prettyStack(promise._stackHolder, 2);
            if (stack && stacks.indexOf(stack) === -1)
                stacks.push(stack);
            if (promise._prev)
                getStack(promise._prev, stacks, limit);
        }
        return stacks;
    }
    function linkToPreviousPromise(promise, prev) {
        var numPrev = prev ? prev._numPrev + 1 : 0;
        if (numPrev < LONG_STACKS_CLIP_LIMIT) {
            promise._prev = prev;
            promise._numPrev = numPrev;
        }
    }
    function physicalTick() {
        beginMicroTickScope() && endMicroTickScope();
    }
    function beginMicroTickScope() {
        var wasRootExec = isOutsideMicroTick;
        isOutsideMicroTick = false;
        needsNewPhysicalTick = false;
        return wasRootExec;
    }
    function endMicroTickScope() {
        var callbacks, i, l;
        do {
            while (microtickQueue.length > 0) {
                callbacks = microtickQueue;
                microtickQueue = [];
                l = callbacks.length;
                for (i = 0; i < l; ++i) {
                    var item = callbacks[i];
                    item[0].apply(null, item[1]);
                }
            }
        } while (microtickQueue.length > 0);
        isOutsideMicroTick = true;
        needsNewPhysicalTick = true;
    }
    function finalizePhysicalTick() {
        var unhandledErrs = unhandledErrors;
        unhandledErrors = [];
        unhandledErrs.forEach(function (p) {
            p._PSD.onunhandled.call(null, p._value, p);
        });
        var finalizers = tickFinalizers.slice(0);
        var i = finalizers.length;
        while (i)
            finalizers[--i]();
    }
    function run_at_end_of_this_or_next_physical_tick(fn) {
        function finalizer() {
            fn();
            tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
        }
        tickFinalizers.push(finalizer);
        ++numScheduledCalls;
        asap(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick();
        }, []);
    }
    function addPossiblyUnhandledError(promise) {
        if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
            unhandledErrors.push(promise);
    }
    function markErrorAsHandled(promise) {
        var i = unhandledErrors.length;
        while (i)
            if (unhandledErrors[--i]._value === promise._value) {
                unhandledErrors.splice(i, 1);
                return;
            }
    }
    function PromiseReject(reason) {
        return new DexiePromise(INTERNAL, false, reason);
    }
    function wrap(fn, errorCatcher) {
        var psd = PSD;
        return function () {
            var wasRootExec = beginMicroTickScope(), outerScope = PSD;
            try {
                switchToZone(psd, true);
                return fn.apply(this, arguments);
            }
            catch (e) {
                errorCatcher && errorCatcher(e);
            }
            finally {
                switchToZone(outerScope, false);
                if (wasRootExec)
                    endMicroTickScope();
            }
        };
    }
    var task = { awaits: 0, echoes: 0, id: 0 };
    var taskCounter = 0;
    var zoneStack = [];
    var zoneEchoes = 0;
    var totalEchoes = 0;
    var zone_id_counter = 0;
    function newScope(fn, props, a1, a2) {
        var parent = PSD, psd = Object.create(parent);
        psd.parent = parent;
        psd.ref = 0;
        psd.global = false;
        psd.id = ++zone_id_counter;
        var globalEnv = globalPSD.env;
        psd.env = patchGlobalPromise ? {
            Promise: DexiePromise,
            PromiseProp: { value: DexiePromise, configurable: true, writable: true },
            all: DexiePromise.all,
            race: DexiePromise.race,
            allSettled: DexiePromise.allSettled,
            any: DexiePromise.any,
            resolve: DexiePromise.resolve,
            reject: DexiePromise.reject,
            nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
            gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
        } : {};
        if (props)
            extend(psd, props);
        ++parent.ref;
        psd.finalize = function () {
            --this.parent.ref || this.parent.finalize();
        };
        var rv = usePSD(psd, fn, a1, a2);
        if (psd.ref === 0)
            psd.finalize();
        return rv;
    }
    function incrementExpectedAwaits() {
        if (!task.id)
            task.id = ++taskCounter;
        ++task.awaits;
        task.echoes += ZONE_ECHO_LIMIT;
        return task.id;
    }
    function decrementExpectedAwaits() {
        if (!task.awaits)
            return false;
        if (--task.awaits === 0)
            task.id = 0;
        task.echoes = task.awaits * ZONE_ECHO_LIMIT;
        return true;
    }
    if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
        incrementExpectedAwaits = decrementExpectedAwaits = nop;
    }
    function onPossibleParallellAsync(possiblePromise) {
        if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
            incrementExpectedAwaits();
            return possiblePromise.then(function (x) {
                decrementExpectedAwaits();
                return x;
            }, function (e) {
                decrementExpectedAwaits();
                return rejection(e);
            });
        }
        return possiblePromise;
    }
    function zoneEnterEcho(targetZone) {
        ++totalEchoes;
        if (!task.echoes || --task.echoes === 0) {
            task.echoes = task.id = 0;
        }
        zoneStack.push(PSD);
        switchToZone(targetZone, true);
    }
    function zoneLeaveEcho() {
        var zone = zoneStack[zoneStack.length - 1];
        zoneStack.pop();
        switchToZone(zone, false);
    }
    function switchToZone(targetZone, bEnteringZone) {
        var currentZone = PSD;
        if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
            enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
        }
        if (targetZone === PSD)
            return;
        PSD = targetZone;
        if (currentZone === globalPSD)
            globalPSD.env = snapShot();
        if (patchGlobalPromise) {
            var GlobalPromise_1 = globalPSD.env.Promise;
            var targetEnv = targetZone.env;
            nativePromiseProto.then = targetEnv.nthen;
            GlobalPromise_1.prototype.then = targetEnv.gthen;
            if (currentZone.global || targetZone.global) {
                Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
                GlobalPromise_1.all = targetEnv.all;
                GlobalPromise_1.race = targetEnv.race;
                GlobalPromise_1.resolve = targetEnv.resolve;
                GlobalPromise_1.reject = targetEnv.reject;
                if (targetEnv.allSettled)
                    GlobalPromise_1.allSettled = targetEnv.allSettled;
                if (targetEnv.any)
                    GlobalPromise_1.any = targetEnv.any;
            }
        }
    }
    function snapShot() {
        var GlobalPromise = _global.Promise;
        return patchGlobalPromise ? {
            Promise: GlobalPromise,
            PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
            all: GlobalPromise.all,
            race: GlobalPromise.race,
            allSettled: GlobalPromise.allSettled,
            any: GlobalPromise.any,
            resolve: GlobalPromise.resolve,
            reject: GlobalPromise.reject,
            nthen: nativePromiseProto.then,
            gthen: GlobalPromise.prototype.then
        } : {};
    }
    function usePSD(psd, fn, a1, a2, a3) {
        var outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn(a1, a2, a3);
        }
        finally {
            switchToZone(outerScope, false);
        }
    }
    function enqueueNativeMicroTask(job) {
        nativePromiseThen.call(resolvedNativePromise, job);
    }
    function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
        return typeof fn !== 'function' ? fn : function () {
            var outerZone = PSD;
            if (possibleAwait)
                incrementExpectedAwaits();
            switchToZone(zone, true);
            try {
                return fn.apply(this, arguments);
            }
            finally {
                switchToZone(outerZone, false);
                if (cleanup)
                    enqueueNativeMicroTask(decrementExpectedAwaits);
            }
        };
    }
    function getPatchedPromiseThen(origThen, zone) {
        return function (onResolved, onRejected) {
            return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
        };
    }
    var UNHANDLEDREJECTION = "unhandledrejection";
    function globalError(err, promise) {
        var rv;
        try {
            rv = promise.onuncatched(err);
        }
        catch (e) { }
        if (rv !== false)
            try {
                var event, eventData = { promise: promise, reason: err };
                if (_global.document && document.createEvent) {
                    event = document.createEvent('Event');
                    event.initEvent(UNHANDLEDREJECTION, true, true);
                    extend(event, eventData);
                }
                else if (_global.CustomEvent) {
                    event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                    extend(event, eventData);
                }
                if (event && _global.dispatchEvent) {
                    dispatchEvent(event);
                    if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                        try {
                            _global.onunhandledrejection(event);
                        }
                        catch (_) { }
                }
                if (debug && event && !event.defaultPrevented) {
                    console.warn("Unhandled rejection: " + (err.stack || err));
                }
            }
            catch (e) { }
    }
    var rejection = DexiePromise.reject;

    function tempTransaction(db, mode, storeNames, fn) {
        if (!db.idbdb || (!db._state.openComplete && (!PSD.letThrough && !db._vip))) {
            if (db._state.openComplete) {
                return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
            }
            if (!db._state.isBeingOpened) {
                if (!db._options.autoOpen)
                    return rejection(new exceptions.DatabaseClosed());
                db.open().catch(nop);
            }
            return db._state.dbReadyPromise.then(function () { return tempTransaction(db, mode, storeNames, fn); });
        }
        else {
            var trans = db._createTransaction(mode, storeNames, db._dbSchema);
            try {
                trans.create();
                db._state.PR1398_maxLoop = 3;
            }
            catch (ex) {
                if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                    console.warn('Dexie: Need to reopen db');
                    db._close();
                    return db.open().then(function () { return tempTransaction(db, mode, storeNames, fn); });
                }
                return rejection(ex);
            }
            return trans._promise(mode, function (resolve, reject) {
                return newScope(function () {
                    PSD.trans = trans;
                    return fn(resolve, reject, trans);
                });
            }).then(function (result) {
                return trans._completion.then(function () { return result; });
            });
        }
    }

    var DEXIE_VERSION = '3.2.2';
    var maxString = String.fromCharCode(65535);
    var minKey = -Infinity;
    var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
    var STRING_EXPECTED = "String expected.";
    var connections = [];
    var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
    var hasIEDeleteObjectStoreBug = isIEOrEdge;
    var hangsOnDeleteLargeKeyRange = isIEOrEdge;
    var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
    var DBNAMES_DB = '__dbnames';
    var READONLY = 'readonly';
    var READWRITE = 'readwrite';

    function combine(filter1, filter2) {
        return filter1 ?
            filter2 ?
                function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
                filter1 :
            filter2;
    }

    var AnyRange = {
        type: 3 ,
        lower: -Infinity,
        lowerOpen: false,
        upper: [[]],
        upperOpen: false
    };

    function workaroundForUndefinedPrimKey(keyPath) {
        return typeof keyPath === "string" && !/\./.test(keyPath)
            ? function (obj) {
                if (obj[keyPath] === undefined && (keyPath in obj)) {
                    obj = deepClone(obj);
                    delete obj[keyPath];
                }
                return obj;
            }
            : function (obj) { return obj; };
    }

    var Table =  (function () {
        function Table() {
        }
        Table.prototype._trans = function (mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans;
            var tableName = this.name;
            function checkTableInTransaction(resolve, reject, trans) {
                if (!trans.schema[tableName])
                    throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
                return fn(trans.idbtrans, trans);
            }
            var wasRootExec = beginMicroTickScope();
            try {
                return trans && trans.db === this.db ?
                    trans === PSD.trans ?
                        trans._promise(mode, checkTableInTransaction, writeLocked) :
                        newScope(function () { return trans._promise(mode, checkTableInTransaction, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                    tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
            }
            finally {
                if (wasRootExec)
                    endMicroTickScope();
            }
        };
        Table.prototype.get = function (keyOrCrit, cb) {
            var _this = this;
            if (keyOrCrit && keyOrCrit.constructor === Object)
                return this.where(keyOrCrit).first(cb);
            return this._trans('readonly', function (trans) {
                return _this.core.get({ trans: trans, key: keyOrCrit })
                    .then(function (res) { return _this.hook.reading.fire(res); });
            }).then(cb);
        };
        Table.prototype.where = function (indexOrCrit) {
            if (typeof indexOrCrit === 'string')
                return new this.db.WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
                return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
            var keyPaths = keys(indexOrCrit);
            if (keyPaths.length === 1)
                return this
                    .where(keyPaths[0])
                    .equals(indexOrCrit[keyPaths[0]]);
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
                return ix.compound &&
                    keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                    ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
            })[0];
            if (compoundIndex && this.db._maxKey !== maxString)
                return this
                    .where(compoundIndex.name)
                    .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
            if (!compoundIndex && debug)
                console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                    ("compound index [" + keyPaths.join('+') + "]"));
            var idxByName = this.schema.idxByName;
            var idb = this.db._deps.indexedDB;
            function equals(a, b) {
                try {
                    return idb.cmp(a, b) === 0;
                }
                catch (e) {
                    return false;
                }
            }
            var _a = keyPaths.reduce(function (_a, keyPath) {
                var prevIndex = _a[0], prevFilterFn = _a[1];
                var index = idxByName[keyPath];
                var value = indexOrCrit[keyPath];
                return [
                    prevIndex || index,
                    prevIndex || !index ?
                        combine(prevFilterFn, index && index.multi ?
                            function (x) {
                                var prop = getByKeyPath(x, keyPath);
                                return isArray(prop) && prop.some(function (item) { return equals(value, item); });
                            } : function (x) { return equals(value, getByKeyPath(x, keyPath)); })
                        : prevFilterFn
                ];
            }, [null, null]), idx = _a[0], filterFunction = _a[1];
            return idx ?
                this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                    .filter(filterFunction) :
                compoundIndex ?
                    this.filter(filterFunction) :
                    this.where(keyPaths).equals('');
        };
        Table.prototype.filter = function (filterFunction) {
            return this.toCollection().and(filterFunction);
        };
        Table.prototype.count = function (thenShortcut) {
            return this.toCollection().count(thenShortcut);
        };
        Table.prototype.offset = function (offset) {
            return this.toCollection().offset(offset);
        };
        Table.prototype.limit = function (numRows) {
            return this.toCollection().limit(numRows);
        };
        Table.prototype.each = function (callback) {
            return this.toCollection().each(callback);
        };
        Table.prototype.toArray = function (thenShortcut) {
            return this.toCollection().toArray(thenShortcut);
        };
        Table.prototype.toCollection = function () {
            return new this.db.Collection(new this.db.WhereClause(this));
        };
        Table.prototype.orderBy = function (index) {
            return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ?
                "[" + index.join('+') + "]" :
                index));
        };
        Table.prototype.reverse = function () {
            return this.toCollection().reverse();
        };
        Table.prototype.mapToClass = function (constructor) {
            this.schema.mappedClass = constructor;
            var readHook = function (obj) {
                if (!obj)
                    return obj;
                var res = Object.create(constructor.prototype);
                for (var m in obj)
                    if (hasOwn(obj, m))
                        try {
                            res[m] = obj[m];
                        }
                        catch (_) { }
                return res;
            };
            if (this.schema.readHook) {
                this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
        };
        Table.prototype.defineClass = function () {
            function Class(content) {
                extend(this, content);
            }
            return this.mapToClass(Class);
        };
        Table.prototype.add = function (obj, key) {
            var _this = this;
            var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
                objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans('readwrite', function (trans) {
                return _this.core.mutate({ trans: trans, type: 'add', keys: key != null ? [key] : null, values: [objToAdd] });
            }).then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
                .then(function (lastResult) {
                if (keyPath) {
                    try {
                        setByKeyPath(obj, keyPath, lastResult);
                    }
                    catch (_) { }
                }
                return lastResult;
            });
        };
        Table.prototype.update = function (keyOrObject, modifications) {
            if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
                var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                if (key === undefined)
                    return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
                try {
                    if (typeof modifications !== "function") {
                        keys(modifications).forEach(function (keyPath) {
                            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                        });
                    }
                    else {
                        modifications(keyOrObject, { value: keyOrObject, primKey: key });
                    }
                }
                catch (_a) {
                }
                return this.where(":id").equals(key).modify(modifications);
            }
            else {
                return this.where(":id").equals(keyOrObject).modify(modifications);
            }
        };
        Table.prototype.put = function (obj, key) {
            var _this = this;
            var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
                objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'put', values: [objToAdd], keys: key != null ? [key] : null }); })
                .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
                .then(function (lastResult) {
                if (keyPath) {
                    try {
                        setByKeyPath(obj, keyPath, lastResult);
                    }
                    catch (_) { }
                }
                return lastResult;
            });
        };
        Table.prototype.delete = function (key) {
            var _this = this;
            return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'delete', keys: [key] }); })
                .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
        };
        Table.prototype.clear = function () {
            var _this = this;
            return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'deleteRange', range: AnyRange }); })
                .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
        };
        Table.prototype.bulkGet = function (keys) {
            var _this = this;
            return this._trans('readonly', function (trans) {
                return _this.core.getMany({
                    keys: keys,
                    trans: trans
                }).then(function (result) { return result.map(function (res) { return _this.hook.reading.fire(res); }); });
            });
        };
        Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
            var _this = this;
            var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
            options = options || (keys ? undefined : keysOrOptions);
            var wantResults = options ? options.allKeys : undefined;
            return this._trans('readwrite', function (trans) {
                var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
                if (keyPath && keys)
                    throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (keys && keys.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                var numObjects = objects.length;
                var objectsToAdd = keyPath && auto ?
                    objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                    objects;
                return _this.core.mutate({ trans: trans, type: 'add', keys: keys, values: objectsToAdd, wantResults: wantResults })
                    .then(function (_a) {
                    var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                    var result = wantResults ? results : lastResult;
                    if (numFailures === 0)
                        return result;
                    throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
                });
            });
        };
        Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
            var _this = this;
            var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
            options = options || (keys ? undefined : keysOrOptions);
            var wantResults = options ? options.allKeys : undefined;
            return this._trans('readwrite', function (trans) {
                var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
                if (keyPath && keys)
                    throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (keys && keys.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                var numObjects = objects.length;
                var objectsToPut = keyPath && auto ?
                    objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                    objects;
                return _this.core.mutate({ trans: trans, type: 'put', keys: keys, values: objectsToPut, wantResults: wantResults })
                    .then(function (_a) {
                    var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                    var result = wantResults ? results : lastResult;
                    if (numFailures === 0)
                        return result;
                    throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
                });
            });
        };
        Table.prototype.bulkDelete = function (keys) {
            var _this = this;
            var numKeys = keys.length;
            return this._trans('readwrite', function (trans) {
                return _this.core.mutate({ trans: trans, type: 'delete', keys: keys });
            }).then(function (_a) {
                var numFailures = _a.numFailures, lastResult = _a.lastResult, failures = _a.failures;
                if (numFailures === 0)
                    return lastResult;
                throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
            });
        };
        return Table;
    }());

    function Events(ctx) {
        var evs = {};
        var rv = function (eventName, subscriber) {
            if (subscriber) {
                var i = arguments.length, args = new Array(i - 1);
                while (--i)
                    args[i - 1] = arguments[i];
                evs[eventName].subscribe.apply(null, args);
                return ctx;
            }
            else if (typeof (eventName) === 'string') {
                return evs[eventName];
            }
        };
        rv.addEventType = add;
        for (var i = 1, l = arguments.length; i < l; ++i) {
            add(arguments[i]);
        }
        return rv;
        function add(eventName, chainFunction, defaultFunction) {
            if (typeof eventName === 'object')
                return addConfiguredEvents(eventName);
            if (!chainFunction)
                chainFunction = reverseStoppableEventChain;
            if (!defaultFunction)
                defaultFunction = nop;
            var context = {
                subscribers: [],
                fire: defaultFunction,
                subscribe: function (cb) {
                    if (context.subscribers.indexOf(cb) === -1) {
                        context.subscribers.push(cb);
                        context.fire = chainFunction(context.fire, cb);
                    }
                },
                unsubscribe: function (cb) {
                    context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                    context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
                }
            };
            evs[eventName] = rv[eventName] = context;
            return context;
        }
        function addConfiguredEvents(cfg) {
            keys(cfg).forEach(function (eventName) {
                var args = cfg[eventName];
                if (isArray(args)) {
                    add(eventName, cfg[eventName][0], cfg[eventName][1]);
                }
                else if (args === 'asap') {
                    var context = add(eventName, mirror, function fire() {
                        var i = arguments.length, args = new Array(i);
                        while (i--)
                            args[i] = arguments[i];
                        context.subscribers.forEach(function (fn) {
                            asap$1(function fireEvent() {
                                fn.apply(null, args);
                            });
                        });
                    });
                }
                else
                    throw new exceptions.InvalidArgument("Invalid event config");
            });
        }
    }

    function makeClassConstructor(prototype, constructor) {
        derive(constructor).from({ prototype: prototype });
        return constructor;
    }

    function createTableConstructor(db) {
        return makeClassConstructor(Table.prototype, function Table(name, tableSchema, trans) {
            this.db = db;
            this._tx = trans;
            this.name = name;
            this.schema = tableSchema;
            this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
                "creating": [hookCreatingChain, nop],
                "reading": [pureFunctionChain, mirror],
                "updating": [hookUpdatingChain, nop],
                "deleting": [hookDeletingChain, nop]
            });
        });
    }

    function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) &&
            (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }
    function addFilter(ctx, fn) {
        ctx.filter = combine(ctx.filter, fn);
    }
    function addReplayFilter(ctx, factory, isLimitFilter) {
        var curr = ctx.replayFilter;
        ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
        ctx.justLimit = isLimitFilter && !curr;
    }
    function addMatchFilter(ctx, fn) {
        ctx.isMatch = combine(ctx.isMatch, fn);
    }
    function getIndexOrStore(ctx, coreSchema) {
        if (ctx.isPrimKey)
            return coreSchema.primaryKey;
        var index = coreSchema.getIndexByKeyPath(ctx.index);
        if (!index)
            throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
        return index;
    }
    function openCursor(ctx, coreTable, trans) {
        var index = getIndexOrStore(ctx, coreTable.schema);
        return coreTable.openCursor({
            trans: trans,
            values: !ctx.keysOnly,
            reverse: ctx.dir === 'prev',
            unique: !!ctx.unique,
            query: {
                index: index,
                range: ctx.range
            }
        });
    }
    function iter(ctx, fn, coreTrans, coreTable) {
        var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
        if (!ctx.or) {
            return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
        }
        else {
            var set_1 = {};
            var union = function (item, cursor, advance) {
                if (!filter || filter(cursor, advance, function (result) { return cursor.stop(result); }, function (err) { return cursor.fail(err); })) {
                    var primaryKey = cursor.primaryKey;
                    var key = '' + primaryKey;
                    if (key === '[object ArrayBuffer]')
                        key = '' + new Uint8Array(primaryKey);
                    if (!hasOwn(set_1, key)) {
                        set_1[key] = true;
                        fn(item, cursor, advance);
                    }
                }
            };
            return Promise.all([
                ctx.or._iterate(union, coreTrans),
                iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
            ]);
        }
    }
    function iterate(cursorPromise, filter, fn, valueMapper) {
        var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
        var wrappedFn = wrap(mappedFn);
        return cursorPromise.then(function (cursor) {
            if (cursor) {
                return cursor.start(function () {
                    var c = function () { return cursor.continue(); };
                    if (!filter || filter(cursor, function (advancer) { return c = advancer; }, function (val) { cursor.stop(val); c = nop; }, function (e) { cursor.fail(e); c = nop; }))
                        wrappedFn(cursor.value, cursor, function (advancer) { return c = advancer; });
                    c();
                });
            }
        });
    }

    function cmp(a, b) {
        try {
            var ta = type(a);
            var tb = type(b);
            if (ta !== tb) {
                if (ta === 'Array')
                    return 1;
                if (tb === 'Array')
                    return -1;
                if (ta === 'binary')
                    return 1;
                if (tb === 'binary')
                    return -1;
                if (ta === 'string')
                    return 1;
                if (tb === 'string')
                    return -1;
                if (ta === 'Date')
                    return 1;
                if (tb !== 'Date')
                    return NaN;
                return -1;
            }
            switch (ta) {
                case 'number':
                case 'Date':
                case 'string':
                    return a > b ? 1 : a < b ? -1 : 0;
                case 'binary': {
                    return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
                }
                case 'Array':
                    return compareArrays(a, b);
            }
        }
        catch (_a) { }
        return NaN;
    }
    function compareArrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
            var res = cmp(a[i], b[i]);
            if (res !== 0)
                return res;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
    }
    function compareUint8Arrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
            if (a[i] !== b[i])
                return a[i] < b[i] ? -1 : 1;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
    }
    function type(x) {
        var t = typeof x;
        if (t !== 'object')
            return t;
        if (ArrayBuffer.isView(x))
            return 'binary';
        var tsTag = toStringTag(x);
        return tsTag === 'ArrayBuffer' ? 'binary' : tsTag;
    }
    function getUint8Array(a) {
        if (a instanceof Uint8Array)
            return a;
        if (ArrayBuffer.isView(a))
            return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        return new Uint8Array(a);
    }

    var Collection =  (function () {
        function Collection() {
        }
        Collection.prototype._read = function (fn, cb) {
            var ctx = this._ctx;
            return ctx.error ?
                ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                ctx.table._trans('readonly', fn).then(cb);
        };
        Collection.prototype._write = function (fn) {
            var ctx = this._ctx;
            return ctx.error ?
                ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                ctx.table._trans('readwrite', fn, "locked");
        };
        Collection.prototype._addAlgorithm = function (fn) {
            var ctx = this._ctx;
            ctx.algorithm = combine(ctx.algorithm, fn);
        };
        Collection.prototype._iterate = function (fn, coreTrans) {
            return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
        };
        Collection.prototype.clone = function (props) {
            var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
            if (props)
                extend(ctx, props);
            rv._ctx = ctx;
            return rv;
        };
        Collection.prototype.raw = function () {
            this._ctx.valueMapper = null;
            return this;
        };
        Collection.prototype.each = function (fn) {
            var ctx = this._ctx;
            return this._read(function (trans) { return iter(ctx, fn, trans, ctx.table.core); });
        };
        Collection.prototype.count = function (cb) {
            var _this = this;
            return this._read(function (trans) {
                var ctx = _this._ctx;
                var coreTable = ctx.table.core;
                if (isPlainKeyRange(ctx, true)) {
                    return coreTable.count({
                        trans: trans,
                        query: {
                            index: getIndexOrStore(ctx, coreTable.schema),
                            range: ctx.range
                        }
                    }).then(function (count) { return Math.min(count, ctx.limit); });
                }
                else {
                    var count = 0;
                    return iter(ctx, function () { ++count; return false; }, trans, coreTable)
                        .then(function () { return count; });
                }
            }).then(cb);
        };
        Collection.prototype.sortBy = function (keyPath, cb) {
            var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
            function getval(obj, i) {
                if (i)
                    return getval(obj[parts[i]], i - 1);
                return obj[lastPart];
            }
            var order = this._ctx.dir === "next" ? 1 : -1;
            function sorter(a, b) {
                var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
                return aVal < bVal ? -order : aVal > bVal ? order : 0;
            }
            return this.toArray(function (a) {
                return a.sort(sorter);
            }).then(cb);
        };
        Collection.prototype.toArray = function (cb) {
            var _this = this;
            return this._read(function (trans) {
                var ctx = _this._ctx;
                if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                    var valueMapper_1 = ctx.valueMapper;
                    var index = getIndexOrStore(ctx, ctx.table.core.schema);
                    return ctx.table.core.query({
                        trans: trans,
                        limit: ctx.limit,
                        values: true,
                        query: {
                            index: index,
                            range: ctx.range
                        }
                    }).then(function (_a) {
                        var result = _a.result;
                        return valueMapper_1 ? result.map(valueMapper_1) : result;
                    });
                }
                else {
                    var a_1 = [];
                    return iter(ctx, function (item) { return a_1.push(item); }, trans, ctx.table.core).then(function () { return a_1; });
                }
            }, cb);
        };
        Collection.prototype.offset = function (offset) {
            var ctx = this._ctx;
            if (offset <= 0)
                return this;
            ctx.offset += offset;
            if (isPlainKeyRange(ctx)) {
                addReplayFilter(ctx, function () {
                    var offsetLeft = offset;
                    return function (cursor, advance) {
                        if (offsetLeft === 0)
                            return true;
                        if (offsetLeft === 1) {
                            --offsetLeft;
                            return false;
                        }
                        advance(function () {
                            cursor.advance(offsetLeft);
                            offsetLeft = 0;
                        });
                        return false;
                    };
                });
            }
            else {
                addReplayFilter(ctx, function () {
                    var offsetLeft = offset;
                    return function () { return (--offsetLeft < 0); };
                });
            }
            return this;
        };
        Collection.prototype.limit = function (numRows) {
            this._ctx.limit = Math.min(this._ctx.limit, numRows);
            addReplayFilter(this._ctx, function () {
                var rowsLeft = numRows;
                return function (cursor, advance, resolve) {
                    if (--rowsLeft <= 0)
                        advance(resolve);
                    return rowsLeft >= 0;
                };
            }, true);
            return this;
        };
        Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
            addFilter(this._ctx, function (cursor, advance, resolve) {
                if (filterFunction(cursor.value)) {
                    advance(resolve);
                    return bIncludeStopEntry;
                }
                else {
                    return true;
                }
            });
            return this;
        };
        Collection.prototype.first = function (cb) {
            return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
        };
        Collection.prototype.last = function (cb) {
            return this.reverse().first(cb);
        };
        Collection.prototype.filter = function (filterFunction) {
            addFilter(this._ctx, function (cursor) {
                return filterFunction(cursor.value);
            });
            addMatchFilter(this._ctx, filterFunction);
            return this;
        };
        Collection.prototype.and = function (filter) {
            return this.filter(filter);
        };
        Collection.prototype.or = function (indexName) {
            return new this.db.WhereClause(this._ctx.table, indexName, this);
        };
        Collection.prototype.reverse = function () {
            this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
            if (this._ondirectionchange)
                this._ondirectionchange(this._ctx.dir);
            return this;
        };
        Collection.prototype.desc = function () {
            return this.reverse();
        };
        Collection.prototype.eachKey = function (cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function (val, cursor) { cb(cursor.key, cursor); });
        };
        Collection.prototype.eachUniqueKey = function (cb) {
            this._ctx.unique = "unique";
            return this.eachKey(cb);
        };
        Collection.prototype.eachPrimaryKey = function (cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
        };
        Collection.prototype.keys = function (cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function (item, cursor) {
                a.push(cursor.key);
            }).then(function () {
                return a;
            }).then(cb);
        };
        Collection.prototype.primaryKeys = function (cb) {
            var ctx = this._ctx;
            if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                return this._read(function (trans) {
                    var index = getIndexOrStore(ctx, ctx.table.core.schema);
                    return ctx.table.core.query({
                        trans: trans,
                        values: false,
                        limit: ctx.limit,
                        query: {
                            index: index,
                            range: ctx.range
                        }
                    });
                }).then(function (_a) {
                    var result = _a.result;
                    return result;
                }).then(cb);
            }
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function (item, cursor) {
                a.push(cursor.primaryKey);
            }).then(function () {
                return a;
            }).then(cb);
        };
        Collection.prototype.uniqueKeys = function (cb) {
            this._ctx.unique = "unique";
            return this.keys(cb);
        };
        Collection.prototype.firstKey = function (cb) {
            return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
        };
        Collection.prototype.lastKey = function (cb) {
            return this.reverse().firstKey(cb);
        };
        Collection.prototype.distinct = function () {
            var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
            if (!idx || !idx.multi)
                return this;
            var set = {};
            addFilter(this._ctx, function (cursor) {
                var strKey = cursor.primaryKey.toString();
                var found = hasOwn(set, strKey);
                set[strKey] = true;
                return !found;
            });
            return this;
        };
        Collection.prototype.modify = function (changes) {
            var _this = this;
            var ctx = this._ctx;
            return this._write(function (trans) {
                var modifyer;
                if (typeof changes === 'function') {
                    modifyer = changes;
                }
                else {
                    var keyPaths = keys(changes);
                    var numKeys = keyPaths.length;
                    modifyer = function (item) {
                        var anythingModified = false;
                        for (var i = 0; i < numKeys; ++i) {
                            var keyPath = keyPaths[i], val = changes[keyPath];
                            if (getByKeyPath(item, keyPath) !== val) {
                                setByKeyPath(item, keyPath, val);
                                anythingModified = true;
                            }
                        }
                        return anythingModified;
                    };
                }
                var coreTable = ctx.table.core;
                var _a = coreTable.schema.primaryKey, outbound = _a.outbound, extractKey = _a.extractKey;
                var limit = _this.db._options.modifyChunkSize || 200;
                var totalFailures = [];
                var successCount = 0;
                var failedKeys = [];
                var applyMutateResult = function (expectedCount, res) {
                    var failures = res.failures, numFailures = res.numFailures;
                    successCount += expectedCount - numFailures;
                    for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
                        var pos = _a[_i];
                        totalFailures.push(failures[pos]);
                    }
                };
                return _this.clone().primaryKeys().then(function (keys) {
                    var nextChunk = function (offset) {
                        var count = Math.min(limit, keys.length - offset);
                        return coreTable.getMany({
                            trans: trans,
                            keys: keys.slice(offset, offset + count),
                            cache: "immutable"
                        }).then(function (values) {
                            var addValues = [];
                            var putValues = [];
                            var putKeys = outbound ? [] : null;
                            var deleteKeys = [];
                            for (var i = 0; i < count; ++i) {
                                var origValue = values[i];
                                var ctx_1 = {
                                    value: deepClone(origValue),
                                    primKey: keys[offset + i]
                                };
                                if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                                    if (ctx_1.value == null) {
                                        deleteKeys.push(keys[offset + i]);
                                    }
                                    else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                                        deleteKeys.push(keys[offset + i]);
                                        addValues.push(ctx_1.value);
                                    }
                                    else {
                                        putValues.push(ctx_1.value);
                                        if (outbound)
                                            putKeys.push(keys[offset + i]);
                                    }
                                }
                            }
                            var criteria = isPlainKeyRange(ctx) &&
                                ctx.limit === Infinity &&
                                (typeof changes !== 'function' || changes === deleteCallback) && {
                                index: ctx.index,
                                range: ctx.range
                            };
                            return Promise.resolve(addValues.length > 0 &&
                                coreTable.mutate({ trans: trans, type: 'add', values: addValues })
                                    .then(function (res) {
                                    for (var pos in res.failures) {
                                        deleteKeys.splice(parseInt(pos), 1);
                                    }
                                    applyMutateResult(addValues.length, res);
                                })).then(function () { return (putValues.length > 0 || (criteria && typeof changes === 'object')) &&
                                coreTable.mutate({
                                    trans: trans,
                                    type: 'put',
                                    keys: putKeys,
                                    values: putValues,
                                    criteria: criteria,
                                    changeSpec: typeof changes !== 'function'
                                        && changes
                                }).then(function (res) { return applyMutateResult(putValues.length, res); }); }).then(function () { return (deleteKeys.length > 0 || (criteria && changes === deleteCallback)) &&
                                coreTable.mutate({
                                    trans: trans,
                                    type: 'delete',
                                    keys: deleteKeys,
                                    criteria: criteria
                                }).then(function (res) { return applyMutateResult(deleteKeys.length, res); }); }).then(function () {
                                return keys.length > offset + count && nextChunk(offset + limit);
                            });
                        });
                    };
                    return nextChunk(0).then(function () {
                        if (totalFailures.length > 0)
                            throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                        return keys.length;
                    });
                });
            });
        };
        Collection.prototype.delete = function () {
            var ctx = this._ctx, range = ctx.range;
            if (isPlainKeyRange(ctx) &&
                ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || range.type === 3 ))
             {
                return this._write(function (trans) {
                    var primaryKey = ctx.table.core.schema.primaryKey;
                    var coreRange = range;
                    return ctx.table.core.count({ trans: trans, query: { index: primaryKey, range: coreRange } }).then(function (count) {
                        return ctx.table.core.mutate({ trans: trans, type: 'deleteRange', range: coreRange })
                            .then(function (_a) {
                            var failures = _a.failures; _a.lastResult; _a.results; var numFailures = _a.numFailures;
                            if (numFailures)
                                throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) { return failures[pos]; }), count - numFailures);
                            return count - numFailures;
                        });
                    });
                });
            }
            return this.modify(deleteCallback);
        };
        return Collection;
    }());
    var deleteCallback = function (value, ctx) { return ctx.value = null; };

    function createCollectionConstructor(db) {
        return makeClassConstructor(Collection.prototype, function Collection(whereClause, keyRangeGenerator) {
            this.db = db;
            var keyRange = AnyRange, error = null;
            if (keyRangeGenerator)
                try {
                    keyRange = keyRangeGenerator();
                }
                catch (ex) {
                    error = ex;
                }
            var whereCtx = whereClause._ctx;
            var table = whereCtx.table;
            var readingHook = table.hook.reading.fire;
            this._ctx = {
                table: table,
                index: whereCtx.index,
                isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
                range: keyRange,
                keysOnly: false,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: true,
                isMatch: null,
                offset: 0,
                limit: Infinity,
                error: error,
                or: whereCtx.or,
                valueMapper: readingHook !== mirror ? readingHook : null
            };
        });
    }

    function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
    }
    function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
    }

    function fail(collectionOrWhereClause, err, T) {
        var collection = collectionOrWhereClause instanceof WhereClause ?
            new collectionOrWhereClause.Collection(collectionOrWhereClause) :
            collectionOrWhereClause;
        collection._ctx.error = T ? new T(err) : new TypeError(err);
        return collection;
    }
    function emptyCollection(whereClause) {
        return new whereClause.Collection(whereClause, function () { return rangeEqual(""); }).limit(0);
    }
    function upperFactory(dir) {
        return dir === "next" ?
            function (s) { return s.toUpperCase(); } :
            function (s) { return s.toLowerCase(); };
    }
    function lowerFactory(dir) {
        return dir === "next" ?
            function (s) { return s.toLowerCase(); } :
            function (s) { return s.toUpperCase(); };
    }
    function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
        var length = Math.min(key.length, lowerNeedle.length);
        var llp = -1;
        for (var i = 0; i < length; ++i) {
            var lwrKeyChar = lowerKey[i];
            if (lwrKeyChar !== lowerNeedle[i]) {
                if (cmp(key[i], upperNeedle[i]) < 0)
                    return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                if (cmp(key[i], lowerNeedle[i]) < 0)
                    return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                if (llp >= 0)
                    return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                return null;
            }
            if (cmp(key[i], lwrKeyChar) < 0)
                llp = i;
        }
        if (length < lowerNeedle.length && dir === "next")
            return key + upperNeedle.substr(key.length);
        if (length < key.length && dir === "prev")
            return key.substr(0, upperNeedle.length);
        return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
    }
    function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
        var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
        if (!needles.every(function (s) { return typeof s === 'string'; })) {
            return fail(whereClause, STRING_EXPECTED);
        }
        function initDirection(dir) {
            upper = upperFactory(dir);
            lower = lowerFactory(dir);
            compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
            var needleBounds = needles.map(function (needle) {
                return { lower: lower(needle), upper: upper(needle) };
            }).sort(function (a, b) {
                return compare(a.lower, b.lower);
            });
            upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
            lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
            direction = dir;
            nextKeySuffix = (dir === "next" ? "" : suffix);
        }
        initDirection("next");
        var c = new whereClause.Collection(whereClause, function () { return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix); });
        c._ondirectionchange = function (direction) {
            initDirection(direction);
        };
        var firstPossibleNeedle = 0;
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            if (typeof key !== 'string')
                return false;
            var lowerKey = lower(key);
            if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
                return true;
            }
            else {
                var lowestPossibleCasing = null;
                for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                    var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                    if (casing === null && lowestPossibleCasing === null)
                        firstPossibleNeedle = i + 1;
                    else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                        lowestPossibleCasing = casing;
                    }
                }
                if (lowestPossibleCasing !== null) {
                    advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
                }
                else {
                    advance(resolve);
                }
                return false;
            }
        });
        return c;
    }
    function createRange(lower, upper, lowerOpen, upperOpen) {
        return {
            type: 2 ,
            lower: lower,
            upper: upper,
            lowerOpen: lowerOpen,
            upperOpen: upperOpen
        };
    }
    function rangeEqual(value) {
        return {
            type: 1 ,
            lower: value,
            upper: value
        };
    }

    var WhereClause =  (function () {
        function WhereClause() {
        }
        Object.defineProperty(WhereClause.prototype, "Collection", {
            get: function () {
                return this._ctx.table.db.Collection;
            },
            enumerable: false,
            configurable: true
        });
        WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
            includeLower = includeLower !== false;
            includeUpper = includeUpper === true;
            try {
                if ((this._cmp(lower, upper) > 0) ||
                    (this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                    return emptyCollection(this);
                return new this.Collection(this, function () { return createRange(lower, upper, !includeLower, !includeUpper); });
            }
            catch (e) {
                return fail(this, INVALID_KEY_ARGUMENT);
            }
        };
        WhereClause.prototype.equals = function (value) {
            if (value == null)
                return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function () { return rangeEqual(value); });
        };
        WhereClause.prototype.above = function (value) {
            if (value == null)
                return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function () { return createRange(value, undefined, true); });
        };
        WhereClause.prototype.aboveOrEqual = function (value) {
            if (value == null)
                return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function () { return createRange(value, undefined, false); });
        };
        WhereClause.prototype.below = function (value) {
            if (value == null)
                return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function () { return createRange(undefined, value, false, true); });
        };
        WhereClause.prototype.belowOrEqual = function (value) {
            if (value == null)
                return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function () { return createRange(undefined, value); });
        };
        WhereClause.prototype.startsWith = function (str) {
            if (typeof str !== 'string')
                return fail(this, STRING_EXPECTED);
            return this.between(str, str + maxString, true, true);
        };
        WhereClause.prototype.startsWithIgnoreCase = function (str) {
            if (str === "")
                return this.startsWith(str);
            return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
        };
        WhereClause.prototype.equalsIgnoreCase = function (str) {
            return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
        };
        WhereClause.prototype.anyOfIgnoreCase = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
                return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
        };
        WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
                return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function (x, a) { return a.some(function (n) { return x.indexOf(n) === 0; }); }, set, maxString);
        };
        WhereClause.prototype.anyOf = function () {
            var _this = this;
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            var compare = this._cmp;
            try {
                set.sort(compare);
            }
            catch (e) {
                return fail(this, INVALID_KEY_ARGUMENT);
            }
            if (set.length === 0)
                return emptyCollection(this);
            var c = new this.Collection(this, function () { return createRange(set[0], set[set.length - 1]); });
            c._ondirectionchange = function (direction) {
                compare = (direction === "next" ?
                    _this._ascending :
                    _this._descending);
                set.sort(compare);
            };
            var i = 0;
            c._addAlgorithm(function (cursor, advance, resolve) {
                var key = cursor.key;
                while (compare(key, set[i]) > 0) {
                    ++i;
                    if (i === set.length) {
                        advance(resolve);
                        return false;
                    }
                }
                if (compare(key, set[i]) === 0) {
                    return true;
                }
                else {
                    advance(function () { cursor.continue(set[i]); });
                    return false;
                }
            });
            return c;
        };
        WhereClause.prototype.notEqual = function (value) {
            return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
        };
        WhereClause.prototype.noneOf = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
                return new this.Collection(this);
            try {
                set.sort(this._ascending);
            }
            catch (e) {
                return fail(this, INVALID_KEY_ARGUMENT);
            }
            var ranges = set.reduce(function (res, val) { return res ?
                res.concat([[res[res.length - 1][1], val]]) :
                [[minKey, val]]; }, null);
            ranges.push([set[set.length - 1], this.db._maxKey]);
            return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
        };
        WhereClause.prototype.inAnyRange = function (ranges, options) {
            var _this = this;
            var cmp = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
            if (ranges.length === 0)
                return emptyCollection(this);
            if (!ranges.every(function (range) {
                return range[0] !== undefined &&
                    range[1] !== undefined &&
                    ascending(range[0], range[1]) <= 0;
            })) {
                return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
            }
            var includeLowers = !options || options.includeLowers !== false;
            var includeUppers = options && options.includeUppers === true;
            function addRange(ranges, newRange) {
                var i = 0, l = ranges.length;
                for (; i < l; ++i) {
                    var range = ranges[i];
                    if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                        range[0] = min(range[0], newRange[0]);
                        range[1] = max(range[1], newRange[1]);
                        break;
                    }
                }
                if (i === l)
                    ranges.push(newRange);
                return ranges;
            }
            var sortDirection = ascending;
            function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
            var set;
            try {
                set = ranges.reduce(addRange, []);
                set.sort(rangeSorter);
            }
            catch (ex) {
                return fail(this, INVALID_KEY_ARGUMENT);
            }
            var rangePos = 0;
            var keyIsBeyondCurrentEntry = includeUppers ?
                function (key) { return ascending(key, set[rangePos][1]) > 0; } :
                function (key) { return ascending(key, set[rangePos][1]) >= 0; };
            var keyIsBeforeCurrentEntry = includeLowers ?
                function (key) { return descending(key, set[rangePos][0]) > 0; } :
                function (key) { return descending(key, set[rangePos][0]) >= 0; };
            function keyWithinCurrentRange(key) {
                return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
            }
            var checkKey = keyIsBeyondCurrentEntry;
            var c = new this.Collection(this, function () { return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers); });
            c._ondirectionchange = function (direction) {
                if (direction === "next") {
                    checkKey = keyIsBeyondCurrentEntry;
                    sortDirection = ascending;
                }
                else {
                    checkKey = keyIsBeforeCurrentEntry;
                    sortDirection = descending;
                }
                set.sort(rangeSorter);
            };
            c._addAlgorithm(function (cursor, advance, resolve) {
                var key = cursor.key;
                while (checkKey(key)) {
                    ++rangePos;
                    if (rangePos === set.length) {
                        advance(resolve);
                        return false;
                    }
                }
                if (keyWithinCurrentRange(key)) {
                    return true;
                }
                else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
                    return false;
                }
                else {
                    advance(function () {
                        if (sortDirection === ascending)
                            cursor.continue(set[rangePos][0]);
                        else
                            cursor.continue(set[rangePos][1]);
                    });
                    return false;
                }
            });
            return c;
        };
        WhereClause.prototype.startsWithAnyOf = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (!set.every(function (s) { return typeof s === 'string'; })) {
                return fail(this, "startsWithAnyOf() only works with strings");
            }
            if (set.length === 0)
                return emptyCollection(this);
            return this.inAnyRange(set.map(function (str) { return [str, str + maxString]; }));
        };
        return WhereClause;
    }());

    function createWhereClauseConstructor(db) {
        return makeClassConstructor(WhereClause.prototype, function WhereClause(table, index, orCollection) {
            this.db = db;
            this._ctx = {
                table: table,
                index: index === ":id" ? null : index,
                or: orCollection
            };
            var indexedDB = db._deps.indexedDB;
            if (!indexedDB)
                throw new exceptions.MissingAPI();
            this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);
            this._descending = function (a, b) { return indexedDB.cmp(b, a); };
            this._max = function (a, b) { return indexedDB.cmp(a, b) > 0 ? a : b; };
            this._min = function (a, b) { return indexedDB.cmp(a, b) < 0 ? a : b; };
            this._IDBKeyRange = db._deps.IDBKeyRange;
        });
    }

    function eventRejectHandler(reject) {
        return wrap(function (event) {
            preventDefault(event);
            reject(event.target.error);
            return false;
        });
    }
    function preventDefault(event) {
        if (event.stopPropagation)
            event.stopPropagation();
        if (event.preventDefault)
            event.preventDefault();
    }

    var DEXIE_STORAGE_MUTATED_EVENT_NAME = 'storagemutated';
    var STORAGE_MUTATED_DOM_EVENT_NAME = 'x-storagemutated-1';
    var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);

    var Transaction =  (function () {
        function Transaction() {
        }
        Transaction.prototype._lock = function () {
            assert(!PSD.global);
            ++this._reculock;
            if (this._reculock === 1 && !PSD.global)
                PSD.lockOwnerFor = this;
            return this;
        };
        Transaction.prototype._unlock = function () {
            assert(!PSD.global);
            if (--this._reculock === 0) {
                if (!PSD.global)
                    PSD.lockOwnerFor = null;
                while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var fnAndPSD = this._blockedFuncs.shift();
                    try {
                        usePSD(fnAndPSD[1], fnAndPSD[0]);
                    }
                    catch (e) { }
                }
            }
            return this;
        };
        Transaction.prototype._locked = function () {
            return this._reculock && PSD.lockOwnerFor !== this;
        };
        Transaction.prototype.create = function (idbtrans) {
            var _this = this;
            if (!this.mode)
                return this;
            var idbdb = this.db.idbdb;
            var dbOpenError = this.db._state.dbOpenError;
            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
                switch (dbOpenError && dbOpenError.name) {
                    case "DatabaseClosedError":
                        throw new exceptions.DatabaseClosed(dbOpenError);
                    case "MissingAPIError":
                        throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                    default:
                        throw new exceptions.OpenFailed(dbOpenError);
                }
            }
            if (!this.active)
                throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);
            idbtrans = this.idbtrans = idbtrans ||
                (this.db.core
                    ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })
                    : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
            idbtrans.onerror = wrap(function (ev) {
                preventDefault(ev);
                _this._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function (ev) {
                preventDefault(ev);
                _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
                _this.active = false;
                _this.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function () {
                _this.active = false;
                _this._resolve();
                if ('mutatedParts' in idbtrans) {
                    globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
                }
            });
            return this;
        };
        Transaction.prototype._promise = function (mode, fn, bWriteLock) {
            var _this = this;
            if (mode === 'readwrite' && this.mode !== 'readwrite')
                return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
                return rejection(new exceptions.TransactionInactive());
            if (this._locked()) {
                return new DexiePromise(function (resolve, reject) {
                    _this._blockedFuncs.push([function () {
                            _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                        }, PSD]);
                });
            }
            else if (bWriteLock) {
                return newScope(function () {
                    var p = new DexiePromise(function (resolve, reject) {
                        _this._lock();
                        var rv = fn(resolve, reject, _this);
                        if (rv && rv.then)
                            rv.then(resolve, reject);
                    });
                    p.finally(function () { return _this._unlock(); });
                    p._lib = true;
                    return p;
                });
            }
            else {
                var p = new DexiePromise(function (resolve, reject) {
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p._lib = true;
                return p;
            }
        };
        Transaction.prototype._root = function () {
            return this.parent ? this.parent._root() : this;
        };
        Transaction.prototype.waitFor = function (promiseLike) {
            var root = this._root();
            var promise = DexiePromise.resolve(promiseLike);
            if (root._waitingFor) {
                root._waitingFor = root._waitingFor.then(function () { return promise; });
            }
            else {
                root._waitingFor = promise;
                root._waitingQueue = [];
                var store = root.idbtrans.objectStore(root.storeNames[0]);
                (function spin() {
                    ++root._spinCount;
                    while (root._waitingQueue.length)
                        (root._waitingQueue.shift())();
                    if (root._waitingFor)
                        store.get(-Infinity).onsuccess = spin;
                }());
            }
            var currentWaitPromise = root._waitingFor;
            return new DexiePromise(function (resolve, reject) {
                promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                    if (root._waitingFor === currentWaitPromise) {
                        root._waitingFor = null;
                    }
                });
            });
        };
        Transaction.prototype.abort = function () {
            if (this.active) {
                this.active = false;
                if (this.idbtrans)
                    this.idbtrans.abort();
                this._reject(new exceptions.Abort());
            }
        };
        Transaction.prototype.table = function (tableName) {
            var memoizedTables = (this._memoizedTables || (this._memoizedTables = {}));
            if (hasOwn(memoizedTables, tableName))
                return memoizedTables[tableName];
            var tableSchema = this.schema[tableName];
            if (!tableSchema) {
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            }
            var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
            transactionBoundTable.core = this.db.core.table(tableName);
            memoizedTables[tableName] = transactionBoundTable;
            return transactionBoundTable;
        };
        return Transaction;
    }());

    function createTransactionConstructor(db) {
        return makeClassConstructor(Transaction.prototype, function Transaction(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
            var _this = this;
            this.db = db;
            this.mode = mode;
            this.storeNames = storeNames;
            this.schema = dbschema;
            this.chromeTransactionDurability = chromeTransactionDurability;
            this.idbtrans = null;
            this.on = Events(this, "complete", "error", "abort");
            this.parent = parent || null;
            this.active = true;
            this._reculock = 0;
            this._blockedFuncs = [];
            this._resolve = null;
            this._reject = null;
            this._waitingFor = null;
            this._waitingQueue = null;
            this._spinCount = 0;
            this._completion = new DexiePromise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            });
            this._completion.then(function () {
                _this.active = false;
                _this.on.complete.fire();
            }, function (e) {
                var wasActive = _this.active;
                _this.active = false;
                _this.on.error.fire(e);
                _this.parent ?
                    _this.parent._reject(e) :
                    wasActive && _this.idbtrans && _this.idbtrans.abort();
                return rejection(e);
            });
        });
    }

    function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
        return {
            name: name,
            keyPath: keyPath,
            unique: unique,
            multi: multi,
            auto: auto,
            compound: compound,
            src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
        };
    }
    function nameFromKeyPath(keyPath) {
        return typeof keyPath === 'string' ?
            keyPath :
            keyPath ? ('[' + [].join.call(keyPath, '+') + ']') : "";
    }

    function createTableSchema(name, primKey, indexes) {
        return {
            name: name,
            primKey: primKey,
            indexes: indexes,
            mappedClass: null,
            idxByName: arrayToObject(indexes, function (index) { return [index.name, index]; })
        };
    }

    function safariMultiStoreFix(storeNames) {
        return storeNames.length === 1 ? storeNames[0] : storeNames;
    }
    var getMaxKey = function (IdbKeyRange) {
        try {
            IdbKeyRange.only([[]]);
            getMaxKey = function () { return [[]]; };
            return [[]];
        }
        catch (e) {
            getMaxKey = function () { return maxString; };
            return maxString;
        }
    };

    function getKeyExtractor(keyPath) {
        if (keyPath == null) {
            return function () { return undefined; };
        }
        else if (typeof keyPath === 'string') {
            return getSinglePathKeyExtractor(keyPath);
        }
        else {
            return function (obj) { return getByKeyPath(obj, keyPath); };
        }
    }
    function getSinglePathKeyExtractor(keyPath) {
        var split = keyPath.split('.');
        if (split.length === 1) {
            return function (obj) { return obj[keyPath]; };
        }
        else {
            return function (obj) { return getByKeyPath(obj, keyPath); };
        }
    }

    function arrayify(arrayLike) {
        return [].slice.call(arrayLike);
    }
    var _id_counter = 0;
    function getKeyPathAlias(keyPath) {
        return keyPath == null ?
            ":id" :
            typeof keyPath === 'string' ?
                keyPath :
                "[" + keyPath.join('+') + "]";
    }
    function createDBCore(db, IdbKeyRange, tmpTrans) {
        function extractSchema(db, trans) {
            var tables = arrayify(db.objectStoreNames);
            return {
                schema: {
                    name: db.name,
                    tables: tables.map(function (table) { return trans.objectStore(table); }).map(function (store) {
                        var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                        var compound = isArray(keyPath);
                        var outbound = keyPath == null;
                        var indexByKeyPath = {};
                        var result = {
                            name: store.name,
                            primaryKey: {
                                name: null,
                                isPrimaryKey: true,
                                outbound: outbound,
                                compound: compound,
                                keyPath: keyPath,
                                autoIncrement: autoIncrement,
                                unique: true,
                                extractKey: getKeyExtractor(keyPath)
                            },
                            indexes: arrayify(store.indexNames).map(function (indexName) { return store.index(indexName); })
                                .map(function (index) {
                                var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath = index.keyPath;
                                var compound = isArray(keyPath);
                                var result = {
                                    name: name,
                                    compound: compound,
                                    keyPath: keyPath,
                                    unique: unique,
                                    multiEntry: multiEntry,
                                    extractKey: getKeyExtractor(keyPath)
                                };
                                indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                                return result;
                            }),
                            getIndexByKeyPath: function (keyPath) { return indexByKeyPath[getKeyPathAlias(keyPath)]; }
                        };
                        indexByKeyPath[":id"] = result.primaryKey;
                        if (keyPath != null) {
                            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                        }
                        return result;
                    })
                },
                hasGetAll: tables.length > 0 && ('getAll' in trans.objectStore(tables[0])) &&
                    !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
                        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            };
        }
        function makeIDBKeyRange(range) {
            if (range.type === 3 )
                return null;
            if (range.type === 4 )
                throw new Error("Cannot convert never type to IDBKeyRange");
            var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
            var idbRange = lower === undefined ?
                upper === undefined ?
                    null :
                    IdbKeyRange.upperBound(upper, !!upperOpen) :
                upper === undefined ?
                    IdbKeyRange.lowerBound(lower, !!lowerOpen) :
                    IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
            return idbRange;
        }
        function createDbCoreTable(tableSchema) {
            var tableName = tableSchema.name;
            function mutate(_a) {
                var trans = _a.trans, type = _a.type, keys = _a.keys, values = _a.values, range = _a.range;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var outbound = store.keyPath == null;
                    var isAddOrPut = type === "put" || type === "add";
                    if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange')
                        throw new Error("Invalid operation type: " + type);
                    var length = (keys || values || { length: 1 }).length;
                    if (keys && values && keys.length !== values.length) {
                        throw new Error("Given keys array must have same length as given values array.");
                    }
                    if (length === 0)
                        return resolve({ numFailures: 0, failures: {}, results: [], lastResult: undefined });
                    var req;
                    var reqs = [];
                    var failures = [];
                    var numFailures = 0;
                    var errorHandler = function (event) {
                        ++numFailures;
                        preventDefault(event);
                    };
                    if (type === 'deleteRange') {
                        if (range.type === 4 )
                            return resolve({ numFailures: numFailures, failures: failures, results: [], lastResult: undefined });
                        if (range.type === 3 )
                            reqs.push(req = store.clear());
                        else
                            reqs.push(req = store.delete(makeIDBKeyRange(range)));
                    }
                    else {
                        var _a = isAddOrPut ?
                            outbound ?
                                [values, keys] :
                                [values, null] :
                            [keys, null], args1 = _a[0], args2 = _a[1];
                        if (isAddOrPut) {
                            for (var i = 0; i < length; ++i) {
                                reqs.push(req = (args2 && args2[i] !== undefined ?
                                    store[type](args1[i], args2[i]) :
                                    store[type](args1[i])));
                                req.onerror = errorHandler;
                            }
                        }
                        else {
                            for (var i = 0; i < length; ++i) {
                                reqs.push(req = store[type](args1[i]));
                                req.onerror = errorHandler;
                            }
                        }
                    }
                    var done = function (event) {
                        var lastResult = event.target.result;
                        reqs.forEach(function (req, i) { return req.error != null && (failures[i] = req.error); });
                        resolve({
                            numFailures: numFailures,
                            failures: failures,
                            results: type === "delete" ? keys : reqs.map(function (req) { return req.result; }),
                            lastResult: lastResult
                        });
                    };
                    req.onerror = function (event) {
                        errorHandler(event);
                        done(event);
                    };
                    req.onsuccess = done;
                });
            }
            function openCursor(_a) {
                var trans = _a.trans, values = _a.values, query = _a.query, reverse = _a.reverse, unique = _a.unique;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var index = query.index, range = query.range;
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ?
                        store :
                        store.index(index.name);
                    var direction = reverse ?
                        unique ?
                            "prevunique" :
                            "prev" :
                        unique ?
                            "nextunique" :
                            "next";
                    var req = values || !('openKeyCursor' in source) ?
                        source.openCursor(makeIDBKeyRange(range), direction) :
                        source.openKeyCursor(makeIDBKeyRange(range), direction);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function (ev) {
                        var cursor = req.result;
                        if (!cursor) {
                            resolve(null);
                            return;
                        }
                        cursor.___id = ++_id_counter;
                        cursor.done = false;
                        var _cursorContinue = cursor.continue.bind(cursor);
                        var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                        if (_cursorContinuePrimaryKey)
                            _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                        var _cursorAdvance = cursor.advance.bind(cursor);
                        var doThrowCursorIsNotStarted = function () { throw new Error("Cursor not started"); };
                        var doThrowCursorIsStopped = function () { throw new Error("Cursor not stopped"); };
                        cursor.trans = trans;
                        cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                        cursor.fail = wrap(reject);
                        cursor.next = function () {
                            var _this = this;
                            var gotOne = 1;
                            return this.start(function () { return gotOne-- ? _this.continue() : _this.stop(); }).then(function () { return _this; });
                        };
                        cursor.start = function (callback) {
                            var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                                resolveIteration = wrap(resolveIteration);
                                req.onerror = eventRejectHandler(rejectIteration);
                                cursor.fail = rejectIteration;
                                cursor.stop = function (value) {
                                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                                    resolveIteration(value);
                                };
                            });
                            var guardedCallback = function () {
                                if (req.result) {
                                    try {
                                        callback();
                                    }
                                    catch (err) {
                                        cursor.fail(err);
                                    }
                                }
                                else {
                                    cursor.done = true;
                                    cursor.start = function () { throw new Error("Cursor behind last entry"); };
                                    cursor.stop();
                                }
                            };
                            req.onsuccess = wrap(function (ev) {
                                req.onsuccess = guardedCallback;
                                guardedCallback();
                            });
                            cursor.continue = _cursorContinue;
                            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                            cursor.advance = _cursorAdvance;
                            guardedCallback();
                            return iterationPromise;
                        };
                        resolve(cursor);
                    }, reject);
                });
            }
            function query(hasGetAll) {
                return function (request) {
                    return new Promise(function (resolve, reject) {
                        resolve = wrap(resolve);
                        var trans = request.trans, values = request.values, limit = request.limit, query = request.query;
                        var nonInfinitLimit = limit === Infinity ? undefined : limit;
                        var index = query.index, range = query.range;
                        var store = trans.objectStore(tableName);
                        var source = index.isPrimaryKey ? store : store.index(index.name);
                        var idbKeyRange = makeIDBKeyRange(range);
                        if (limit === 0)
                            return resolve({ result: [] });
                        if (hasGetAll) {
                            var req = values ?
                                source.getAll(idbKeyRange, nonInfinitLimit) :
                                source.getAllKeys(idbKeyRange, nonInfinitLimit);
                            req.onsuccess = function (event) { return resolve({ result: event.target.result }); };
                            req.onerror = eventRejectHandler(reject);
                        }
                        else {
                            var count_1 = 0;
                            var req_1 = values || !('openKeyCursor' in source) ?
                                source.openCursor(idbKeyRange) :
                                source.openKeyCursor(idbKeyRange);
                            var result_1 = [];
                            req_1.onsuccess = function (event) {
                                var cursor = req_1.result;
                                if (!cursor)
                                    return resolve({ result: result_1 });
                                result_1.push(values ? cursor.value : cursor.primaryKey);
                                if (++count_1 === limit)
                                    return resolve({ result: result_1 });
                                cursor.continue();
                            };
                            req_1.onerror = eventRejectHandler(reject);
                        }
                    });
                };
            }
            return {
                name: tableName,
                schema: tableSchema,
                mutate: mutate,
                getMany: function (_a) {
                    var trans = _a.trans, keys = _a.keys;
                    return new Promise(function (resolve, reject) {
                        resolve = wrap(resolve);
                        var store = trans.objectStore(tableName);
                        var length = keys.length;
                        var result = new Array(length);
                        var keyCount = 0;
                        var callbackCount = 0;
                        var req;
                        var successHandler = function (event) {
                            var req = event.target;
                            if ((result[req._pos] = req.result) != null)
                                ;
                            if (++callbackCount === keyCount)
                                resolve(result);
                        };
                        var errorHandler = eventRejectHandler(reject);
                        for (var i = 0; i < length; ++i) {
                            var key = keys[i];
                            if (key != null) {
                                req = store.get(keys[i]);
                                req._pos = i;
                                req.onsuccess = successHandler;
                                req.onerror = errorHandler;
                                ++keyCount;
                            }
                        }
                        if (keyCount === 0)
                            resolve(result);
                    });
                },
                get: function (_a) {
                    var trans = _a.trans, key = _a.key;
                    return new Promise(function (resolve, reject) {
                        resolve = wrap(resolve);
                        var store = trans.objectStore(tableName);
                        var req = store.get(key);
                        req.onsuccess = function (event) { return resolve(event.target.result); };
                        req.onerror = eventRejectHandler(reject);
                    });
                },
                query: query(hasGetAll),
                openCursor: openCursor,
                count: function (_a) {
                    var query = _a.query, trans = _a.trans;
                    var index = query.index, range = query.range;
                    return new Promise(function (resolve, reject) {
                        var store = trans.objectStore(tableName);
                        var source = index.isPrimaryKey ? store : store.index(index.name);
                        var idbKeyRange = makeIDBKeyRange(range);
                        var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                        req.onsuccess = wrap(function (ev) { return resolve(ev.target.result); });
                        req.onerror = eventRejectHandler(reject);
                    });
                }
            };
        }
        var _a = extractSchema(db, tmpTrans), schema = _a.schema, hasGetAll = _a.hasGetAll;
        var tables = schema.tables.map(function (tableSchema) { return createDbCoreTable(tableSchema); });
        var tableMap = {};
        tables.forEach(function (table) { return tableMap[table.name] = table; });
        return {
            stack: "dbcore",
            transaction: db.transaction.bind(db),
            table: function (name) {
                var result = tableMap[name];
                if (!result)
                    throw new Error("Table '" + name + "' not found");
                return tableMap[name];
            },
            MIN_KEY: -Infinity,
            MAX_KEY: getMaxKey(IdbKeyRange),
            schema: schema
        };
    }

    function createMiddlewareStack(stackImpl, middlewares) {
        return middlewares.reduce(function (down, _a) {
            var create = _a.create;
            return (__assign(__assign({}, down), create(down)));
        }, stackImpl);
    }
    function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
        var IDBKeyRange = _a.IDBKeyRange; _a.indexedDB;
        var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
        return {
            dbcore: dbcore
        };
    }
    function generateMiddlewareStacks(_a, tmpTrans) {
        var db = _a._novip;
        var idbdb = tmpTrans.db;
        var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
        db.core = stacks.dbcore;
        db.tables.forEach(function (table) {
            var tableName = table.name;
            if (db.core.schema.tables.some(function (tbl) { return tbl.name === tableName; })) {
                table.core = db.core.table(tableName);
                if (db[tableName] instanceof db.Table) {
                    db[tableName].core = table.core;
                }
            }
        });
    }

    function setApiOnPlace(_a, objs, tableNames, dbschema) {
        var db = _a._novip;
        tableNames.forEach(function (tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function (obj) {
                var propDesc = getPropertyDescriptor(obj, tableName);
                if (!propDesc || ("value" in propDesc && propDesc.value === undefined)) {
                    if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                        setProp(obj, tableName, {
                            get: function () { return this.table(tableName); },
                            set: function (value) {
                                defineProperty(this, tableName, { value: value, writable: true, configurable: true, enumerable: true });
                            }
                        });
                    }
                    else {
                        obj[tableName] = new db.Table(tableName, schema);
                    }
                }
            });
        });
    }
    function removeTablesApi(_a, objs) {
        var db = _a._novip;
        objs.forEach(function (obj) {
            for (var key in obj) {
                if (obj[key] instanceof db.Table)
                    delete obj[key];
            }
        });
    }
    function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
    }
    function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
        var globalSchema = db._dbSchema;
        var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);
        trans.create(idbUpgradeTrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        var transless = PSD.transless || PSD;
        newScope(function () {
            PSD.trans = trans;
            PSD.transless = transless;
            if (oldVersion === 0) {
                keys(globalSchema).forEach(function (tableName) {
                    createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                generateMiddlewareStacks(db, idbUpgradeTrans);
                DexiePromise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
            }
            else
                updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
        });
    }
    function updateTablesAndIndexes(_a, oldVersion, trans, idbUpgradeTrans) {
        var db = _a._novip;
        var queue = [];
        var versions = db._versions;
        var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
        var anyContentUpgraderHasRun = false;
        var versToRun = versions.filter(function (v) { return v._cfg.version >= oldVersion; });
        versToRun.forEach(function (version) {
            queue.push(function () {
                var oldSchema = globalSchema;
                var newSchema = version._cfg.dbschema;
                adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
                adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
                globalSchema = db._dbSchema = newSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                diff.add.forEach(function (tuple) {
                    createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                });
                diff.change.forEach(function (change) {
                    if (change.recreate) {
                        throw new exceptions.Upgrade("Not yet support for changing primary key");
                    }
                    else {
                        var store_1 = idbUpgradeTrans.objectStore(change.name);
                        change.add.forEach(function (idx) { return addIndex(store_1, idx); });
                        change.change.forEach(function (idx) {
                            store_1.deleteIndex(idx.name);
                            addIndex(store_1, idx);
                        });
                        change.del.forEach(function (idxName) { return store_1.deleteIndex(idxName); });
                    }
                });
                var contentUpgrade = version._cfg.contentUpgrade;
                if (contentUpgrade && version._cfg.version > oldVersion) {
                    generateMiddlewareStacks(db, idbUpgradeTrans);
                    trans._memoizedTables = {};
                    anyContentUpgraderHasRun = true;
                    var upgradeSchema_1 = shallowClone(newSchema);
                    diff.del.forEach(function (table) {
                        upgradeSchema_1[table] = oldSchema[table];
                    });
                    removeTablesApi(db, [db.Transaction.prototype]);
                    setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
                    trans.schema = upgradeSchema_1;
                    var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                    if (contentUpgradeIsAsync_1) {
                        incrementExpectedAwaits();
                    }
                    var returnValue_1;
                    var promiseFollowed = DexiePromise.follow(function () {
                        returnValue_1 = contentUpgrade(trans);
                        if (returnValue_1) {
                            if (contentUpgradeIsAsync_1) {
                                var decrementor = decrementExpectedAwaits.bind(null, null);
                                returnValue_1.then(decrementor, decrementor);
                            }
                        }
                    });
                    return (returnValue_1 && typeof returnValue_1.then === 'function' ?
                        DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () { return returnValue_1; }));
                }
            });
            queue.push(function (idbtrans) {
                if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                    var newSchema = version._cfg.dbschema;
                    deleteRemovedTables(newSchema, idbtrans);
                }
                removeTablesApi(db, [db.Transaction.prototype]);
                setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
                trans.schema = db._dbSchema;
            });
        });
        function runQueue() {
            return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
                DexiePromise.resolve();
        }
        return runQueue().then(function () {
            createMissingTables(globalSchema, idbUpgradeTrans);
        });
    }
    function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
            del: [],
            add: [],
            change: []
        };
        var table;
        for (table in oldSchema) {
            if (!newSchema[table])
                diff.del.push(table);
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef) {
                diff.add.push([table, newDef]);
            }
            else {
                var change = {
                    name: table,
                    def: newDef,
                    recreate: false,
                    del: [],
                    add: [],
                    change: []
                };
                if ((
                '' + (oldDef.primKey.keyPath || '')) !== ('' + (newDef.primKey.keyPath || '')) ||
                    (oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge))
                 {
                    change.recreate = true;
                    diff.change.push(change);
                }
                else {
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    var idxName = void 0;
                    for (idxName in oldIndexes) {
                        if (!newIndexes[idxName])
                            change.del.push(idxName);
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                        if (!oldIdx)
                            change.add.push(newIdx);
                        else if (oldIdx.src !== newIdx.src)
                            change.change.push(newIdx);
                    }
                    if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                        diff.change.push(change);
                    }
                }
            }
        }
        return diff;
    }
    function createTable(idbtrans, tableName, primKey, indexes) {
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ?
            { keyPath: primKey.keyPath, autoIncrement: primKey.auto } :
            { autoIncrement: primKey.auto });
        indexes.forEach(function (idx) { return addIndex(store, idx); });
        return store;
    }
    function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function (tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
        });
    }
    function deleteRemovedTables(newSchema, idbtrans) {
        [].slice.call(idbtrans.db.objectStoreNames).forEach(function (storeName) {
            return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
        });
    }
    function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }
    function buildGlobalSchema(db, idbdb, tmpTrans) {
        var globalSchema = {};
        var dbStoreNames = slice(idbdb.objectStoreNames, 0);
        dbStoreNames.forEach(function (storeName) {
            var store = tmpTrans.objectStore(storeName);
            var keyPath = store.keyPath;
            var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
                var idbindex = store.index(store.indexNames[j]);
                keyPath = idbindex.keyPath;
                var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
                indexes.push(index);
            }
            globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
        });
        return globalSchema;
    }
    function readGlobalSchema(_a, idbdb, tmpTrans) {
        var db = _a._novip;
        db.verno = idbdb.version / 10;
        var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
        db._storeNames = slice(idbdb.objectStoreNames, 0);
        setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
    }
    function verifyInstalledSchema(db, tmpTrans) {
        var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
        var diff = getSchemaDiff(installedSchema, db._dbSchema);
        return !(diff.add.length || diff.change.some(function (ch) { return ch.add.length || ch.change.length; }));
    }
    function adjustToExistingIndexNames(_a, schema, idbtrans) {
        var db = _a._novip;
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            db._hasGetAll = 'getAll' in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
                var indexName = store.indexNames[j];
                var keyPath = store.index(indexName).keyPath;
                var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
                if (schema[storeName]) {
                    var indexSpec = schema[storeName].idxByName[dexieName];
                    if (indexSpec) {
                        indexSpec.name = indexName;
                        delete schema[storeName].idxByName[dexieName];
                        schema[storeName].idxByName[indexName] = indexSpec;
                    }
                }
            }
        }
        if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
            db._hasGetAll = false;
        }
    }
    function parseIndexSyntax(primKeyAndIndexes) {
        return primKeyAndIndexes.split(',').map(function (index, indexNum) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, "");
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
            return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
        });
    }

    var Version =  (function () {
        function Version() {
        }
        Version.prototype._parseStoresSpec = function (stores, outSchema) {
            keys(stores).forEach(function (tableName) {
                if (stores[tableName] !== null) {
                    var indexes = parseIndexSyntax(stores[tableName]);
                    var primKey = indexes.shift();
                    if (primKey.multi)
                        throw new exceptions.Schema("Primary key cannot be multi-valued");
                    indexes.forEach(function (idx) {
                        if (idx.auto)
                            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!idx.keyPath)
                            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                    });
                    outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
                }
            });
        };
        Version.prototype.stores = function (stores) {
            var db = this.db;
            this._cfg.storesSource = this._cfg.storesSource ?
                extend(this._cfg.storesSource, stores) :
                stores;
            var versions = db._versions;
            var storesSpec = {};
            var dbschema = {};
            versions.forEach(function (version) {
                extend(storesSpec, version._cfg.storesSource);
                dbschema = (version._cfg.dbschema = {});
                version._parseStoresSpec(storesSpec, dbschema);
            });
            db._dbSchema = dbschema;
            removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
            setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
            db._storeNames = keys(dbschema);
            return this;
        };
        Version.prototype.upgrade = function (upgradeFunction) {
            this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
            return this;
        };
        return Version;
    }());

    function createVersionConstructor(db) {
        return makeClassConstructor(Version.prototype, function Version(versionNumber) {
            this.db = db;
            this._cfg = {
                version: versionNumber,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            };
        });
    }

    function getDbNamesTable(indexedDB, IDBKeyRange) {
        var dbNamesDB = indexedDB["_dbNamesDB"];
        if (!dbNamesDB) {
            dbNamesDB = indexedDB["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
                addons: [],
                indexedDB: indexedDB,
                IDBKeyRange: IDBKeyRange,
            });
            dbNamesDB.version(1).stores({ dbnames: "name" });
        }
        return dbNamesDB.table("dbnames");
    }
    function hasDatabasesNative(indexedDB) {
        return indexedDB && typeof indexedDB.databases === "function";
    }
    function getDatabaseNames(_a) {
        var indexedDB = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
        return hasDatabasesNative(indexedDB)
            ? Promise.resolve(indexedDB.databases()).then(function (infos) {
                return infos
                    .map(function (info) { return info.name; })
                    .filter(function (name) { return name !== DBNAMES_DB; });
            })
            : getDbNamesTable(indexedDB, IDBKeyRange).toCollection().primaryKeys();
    }
    function _onDatabaseCreated(_a, name) {
        var indexedDB = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
        !hasDatabasesNative(indexedDB) &&
            name !== DBNAMES_DB &&
            getDbNamesTable(indexedDB, IDBKeyRange).put({ name: name }).catch(nop);
    }
    function _onDatabaseDeleted(_a, name) {
        var indexedDB = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
        !hasDatabasesNative(indexedDB) &&
            name !== DBNAMES_DB &&
            getDbNamesTable(indexedDB, IDBKeyRange).delete(name).catch(nop);
    }

    function vip(fn) {
        return newScope(function () {
            PSD.letThrough = true;
            return fn();
        });
    }

    function idbReady() {
        var isSafari = !navigator.userAgentData &&
            /Safari\//.test(navigator.userAgent) &&
            !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!isSafari || !indexedDB.databases)
            return Promise.resolve();
        var intervalId;
        return new Promise(function (resolve) {
            var tryIdb = function () { return indexedDB.databases().finally(resolve); };
            intervalId = setInterval(tryIdb, 100);
            tryIdb();
        }).finally(function () { return clearInterval(intervalId); });
    }

    function dexieOpen(db) {
        var state = db._state;
        var indexedDB = db._deps.indexedDB;
        if (state.isBeingOpened || db.idbdb)
            return state.dbReadyPromise.then(function () { return state.dbOpenError ?
                rejection(state.dbOpenError) :
                db; });
        debug && (state.openCanceller._stackHolder = getErrorWithStack());
        state.isBeingOpened = true;
        state.dbOpenError = null;
        state.openComplete = false;
        var openCanceller = state.openCanceller;
        function throwIfCancelled() {
            if (state.openCanceller !== openCanceller)
                throw new exceptions.DatabaseClosed('db.open() was cancelled');
        }
        var resolveDbReady = state.dbReadyResolve,
        upgradeTransaction = null, wasCreated = false;
        return DexiePromise.race([openCanceller, (typeof navigator === 'undefined' ? DexiePromise.resolve() : idbReady()).then(function () { return new DexiePromise(function (resolve, reject) {
                throwIfCancelled();
                if (!indexedDB)
                    throw new exceptions.MissingAPI();
                var dbName = db.name;
                var req = state.autoSchema ?
                    indexedDB.open(dbName) :
                    indexedDB.open(dbName, Math.round(db.verno * 10));
                if (!req)
                    throw new exceptions.MissingAPI();
                req.onerror = eventRejectHandler(reject);
                req.onblocked = wrap(db._fireOnBlocked);
                req.onupgradeneeded = wrap(function (e) {
                    upgradeTransaction = req.transaction;
                    if (state.autoSchema && !db._options.allowEmptyDB) {
                        req.onerror = preventDefault;
                        upgradeTransaction.abort();
                        req.result.close();
                        var delreq = indexedDB.deleteDatabase(dbName);
                        delreq.onsuccess = delreq.onerror = wrap(function () {
                            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                        });
                    }
                    else {
                        upgradeTransaction.onerror = eventRejectHandler(reject);
                        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                        wasCreated = oldVer < 1;
                        db._novip.idbdb = req.result;
                        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                    }
                }, reject);
                req.onsuccess = wrap(function () {
                    upgradeTransaction = null;
                    var idbdb = db._novip.idbdb = req.result;
                    var objectStoreNames = slice(idbdb.objectStoreNames);
                    if (objectStoreNames.length > 0)
                        try {
                            var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
                            if (state.autoSchema)
                                readGlobalSchema(db, idbdb, tmpTrans);
                            else {
                                adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                                if (!verifyInstalledSchema(db, tmpTrans)) {
                                    console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                                }
                            }
                            generateMiddlewareStacks(db, tmpTrans);
                        }
                        catch (e) {
                        }
                    connections.push(db);
                    idbdb.onversionchange = wrap(function (ev) {
                        state.vcFired = true;
                        db.on("versionchange").fire(ev);
                    });
                    idbdb.onclose = wrap(function (ev) {
                        db.on("close").fire(ev);
                    });
                    if (wasCreated)
                        _onDatabaseCreated(db._deps, dbName);
                    resolve();
                }, reject);
            }); })]).then(function () {
            throwIfCancelled();
            state.onReadyBeingFired = [];
            return DexiePromise.resolve(vip(function () { return db.on.ready.fire(db.vip); })).then(function fireRemainders() {
                if (state.onReadyBeingFired.length > 0) {
                    var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
                    state.onReadyBeingFired = [];
                    return DexiePromise.resolve(vip(function () { return remainders_1(db.vip); })).then(fireRemainders);
                }
            });
        }).finally(function () {
            state.onReadyBeingFired = null;
            state.isBeingOpened = false;
        }).then(function () {
            return db;
        }).catch(function (err) {
            state.dbOpenError = err;
            try {
                upgradeTransaction && upgradeTransaction.abort();
            }
            catch (_a) { }
            if (openCanceller === state.openCanceller) {
                db._close();
            }
            return rejection(err);
        }).finally(function () {
            state.openComplete = true;
            resolveDbReady();
        });
    }

    function awaitIterator(iterator) {
        var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
        function step(getNext) {
            return function (val) {
                var next = getNext(val), value = next.value;
                return next.done ? value :
                    (!value || typeof value.then !== 'function' ?
                        isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                        value.then(onSuccess, onError));
            };
        }
        return step(callNext)();
    }

    function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
        var i = arguments.length;
        if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
        var args = new Array(i - 1);
        while (--i)
            args[i - 1] = arguments[i];
        scopeFunc = args.pop();
        var tables = flatten(args);
        return [mode, tables, scopeFunc];
    }
    function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
        return DexiePromise.resolve().then(function () {
            var transless = PSD.transless || PSD;
            var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
            var zoneProps = {
                trans: trans,
                transless: transless
            };
            if (parentTransaction) {
                trans.idbtrans = parentTransaction.idbtrans;
            }
            else {
                try {
                    trans.create();
                    db._state.PR1398_maxLoop = 3;
                }
                catch (ex) {
                    if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                        console.warn('Dexie: Need to reopen db');
                        db._close();
                        return db.open().then(function () { return enterTransactionScope(db, mode, storeNames, null, scopeFunc); });
                    }
                    return rejection(ex);
                }
            }
            var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
            if (scopeFuncIsAsync) {
                incrementExpectedAwaits();
            }
            var returnValue;
            var promiseFollowed = DexiePromise.follow(function () {
                returnValue = scopeFunc.call(trans, trans);
                if (returnValue) {
                    if (scopeFuncIsAsync) {
                        var decrementor = decrementExpectedAwaits.bind(null, null);
                        returnValue.then(decrementor, decrementor);
                    }
                    else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                        returnValue = awaitIterator(returnValue);
                    }
                }
            }, zoneProps);
            return (returnValue && typeof returnValue.then === 'function' ?
                DexiePromise.resolve(returnValue).then(function (x) { return trans.active ?
                    x
                    : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
                : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
                if (parentTransaction)
                    trans._resolve();
                return trans._completion.then(function () { return x; });
            }).catch(function (e) {
                trans._reject(e);
                return rejection(e);
            });
        });
    }

    function pad(a, value, count) {
        var result = isArray(a) ? a.slice() : [a];
        for (var i = 0; i < count; ++i)
            result.push(value);
        return result;
    }
    function createVirtualIndexMiddleware(down) {
        return __assign(__assign({}, down), { table: function (tableName) {
                var table = down.table(tableName);
                var schema = table.schema;
                var indexLookup = {};
                var allVirtualIndexes = [];
                function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                    var keyPathAlias = getKeyPathAlias(keyPath);
                    var indexList = (indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || []);
                    var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
                    var isVirtual = keyTail > 0;
                    var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual: isVirtual, keyTail: keyTail, keyLength: keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
                    indexList.push(virtualIndex);
                    if (!virtualIndex.isPrimaryKey) {
                        allVirtualIndexes.push(virtualIndex);
                    }
                    if (keyLength > 1) {
                        var virtualKeyPath = keyLength === 2 ?
                            keyPath[0] :
                            keyPath.slice(0, keyLength - 1);
                        addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
                    }
                    indexList.sort(function (a, b) { return a.keyTail - b.keyTail; });
                    return virtualIndex;
                }
                var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
                indexLookup[":id"] = [primaryKey];
                for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
                    var index = _a[_i];
                    addVirtualIndexes(index.keyPath, 0, index);
                }
                function findBestIndex(keyPath) {
                    var result = indexLookup[getKeyPathAlias(keyPath)];
                    return result && result[0];
                }
                function translateRange(range, keyTail) {
                    return {
                        type: range.type === 1  ?
                            2  :
                            range.type,
                        lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                        lowerOpen: true,
                        upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                        upperOpen: true
                    };
                }
                function translateRequest(req) {
                    var index = req.query.index;
                    return index.isVirtual ? __assign(__assign({}, req), { query: {
                            index: index,
                            range: translateRange(req.query.range, index.keyTail)
                        } }) : req;
                }
                var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey: primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function (req) {
                        return table.count(translateRequest(req));
                    }, query: function (req) {
                        return table.query(translateRequest(req));
                    }, openCursor: function (req) {
                        var _a = req.query.index, keyTail = _a.keyTail, isVirtual = _a.isVirtual, keyLength = _a.keyLength;
                        if (!isVirtual)
                            return table.openCursor(req);
                        function createVirtualCursor(cursor) {
                            function _continue(key) {
                                key != null ?
                                    cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) :
                                    req.unique ?
                                        cursor.continue(cursor.key.slice(0, keyLength)
                                            .concat(req.reverse
                                            ? down.MIN_KEY
                                            : down.MAX_KEY, keyTail)) :
                                        cursor.continue();
                            }
                            var virtualCursor = Object.create(cursor, {
                                continue: { value: _continue },
                                continuePrimaryKey: {
                                    value: function (key, primaryKey) {
                                        cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                                    }
                                },
                                primaryKey: {
                                    get: function () {
                                        return cursor.primaryKey;
                                    }
                                },
                                key: {
                                    get: function () {
                                        var key = cursor.key;
                                        return keyLength === 1 ?
                                            key[0] :
                                            key.slice(0, keyLength);
                                    }
                                },
                                value: {
                                    get: function () {
                                        return cursor.value;
                                    }
                                }
                            });
                            return virtualCursor;
                        }
                        return table.openCursor(translateRequest(req))
                            .then(function (cursor) { return cursor && createVirtualCursor(cursor); });
                    } });
                return result;
            } });
    }
    var virtualIndexMiddleware = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: createVirtualIndexMiddleware
    };

    function getObjectDiff(a, b, rv, prfx) {
        rv = rv || {};
        prfx = prfx || '';
        keys(a).forEach(function (prop) {
            if (!hasOwn(b, prop)) {
                rv[prfx + prop] = undefined;
            }
            else {
                var ap = a[prop], bp = b[prop];
                if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
                    var apTypeName = toStringTag(ap);
                    var bpTypeName = toStringTag(bp);
                    if (apTypeName !== bpTypeName) {
                        rv[prfx + prop] = b[prop];
                    }
                    else if (apTypeName === 'Object') {
                        getObjectDiff(ap, bp, rv, prfx + prop + '.');
                    }
                    else if (ap !== bp) {
                        rv[prfx + prop] = b[prop];
                    }
                }
                else if (ap !== bp)
                    rv[prfx + prop] = b[prop];
            }
        });
        keys(b).forEach(function (prop) {
            if (!hasOwn(a, prop)) {
                rv[prfx + prop] = b[prop];
            }
        });
        return rv;
    }

    function getEffectiveKeys(primaryKey, req) {
        if (req.type === 'delete')
            return req.keys;
        return req.keys || req.values.map(primaryKey.extractKey);
    }

    var hooksMiddleware = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function (downCore) { return (__assign(__assign({}, downCore), { table: function (tableName) {
                var downTable = downCore.table(tableName);
                var primaryKey = downTable.schema.primaryKey;
                var tableMiddleware = __assign(__assign({}, downTable), { mutate: function (req) {
                        var dxTrans = PSD.trans;
                        var _a = dxTrans.table(tableName).hook, deleting = _a.deleting, creating = _a.creating, updating = _a.updating;
                        switch (req.type) {
                            case 'add':
                                if (creating.fire === nop)
                                    break;
                                return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                            case 'put':
                                if (creating.fire === nop && updating.fire === nop)
                                    break;
                                return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                            case 'delete':
                                if (deleting.fire === nop)
                                    break;
                                return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                            case 'deleteRange':
                                if (deleting.fire === nop)
                                    break;
                                return dxTrans._promise('readwrite', function () { return deleteRange(req); }, true);
                        }
                        return downTable.mutate(req);
                        function addPutOrDelete(req) {
                            var dxTrans = PSD.trans;
                            var keys = req.keys || getEffectiveKeys(primaryKey, req);
                            if (!keys)
                                throw new Error("Keys missing");
                            req = req.type === 'add' || req.type === 'put' ? __assign(__assign({}, req), { keys: keys }) : __assign({}, req);
                            if (req.type !== 'delete')
                                req.values = __spreadArray([], req.values, true);
                            if (req.keys)
                                req.keys = __spreadArray([], req.keys, true);
                            return getExistingValues(downTable, req, keys).then(function (existingValues) {
                                var contexts = keys.map(function (key, i) {
                                    var existingValue = existingValues[i];
                                    var ctx = { onerror: null, onsuccess: null };
                                    if (req.type === 'delete') {
                                        deleting.fire.call(ctx, key, existingValue, dxTrans);
                                    }
                                    else if (req.type === 'add' || existingValue === undefined) {
                                        var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                                        if (key == null && generatedPrimaryKey != null) {
                                            key = generatedPrimaryKey;
                                            req.keys[i] = key;
                                            if (!primaryKey.outbound) {
                                                setByKeyPath(req.values[i], primaryKey.keyPath, key);
                                            }
                                        }
                                    }
                                    else {
                                        var objectDiff = getObjectDiff(existingValue, req.values[i]);
                                        var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                                        if (additionalChanges_1) {
                                            var requestedValue_1 = req.values[i];
                                            Object.keys(additionalChanges_1).forEach(function (keyPath) {
                                                if (hasOwn(requestedValue_1, keyPath)) {
                                                    requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                                                }
                                                else {
                                                    setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                                }
                                            });
                                        }
                                    }
                                    return ctx;
                                });
                                return downTable.mutate(req).then(function (_a) {
                                    var failures = _a.failures, results = _a.results, numFailures = _a.numFailures, lastResult = _a.lastResult;
                                    for (var i = 0; i < keys.length; ++i) {
                                        var primKey = results ? results[i] : keys[i];
                                        var ctx = contexts[i];
                                        if (primKey == null) {
                                            ctx.onerror && ctx.onerror(failures[i]);
                                        }
                                        else {
                                            ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ?
                                                req.values[i] :
                                                primKey
                                            );
                                        }
                                    }
                                    return { failures: failures, results: results, numFailures: numFailures, lastResult: lastResult };
                                }).catch(function (error) {
                                    contexts.forEach(function (ctx) { return ctx.onerror && ctx.onerror(error); });
                                    return Promise.reject(error);
                                });
                            });
                        }
                        function deleteRange(req) {
                            return deleteNextChunk(req.trans, req.range, 10000);
                        }
                        function deleteNextChunk(trans, range, limit) {
                            return downTable.query({ trans: trans, values: false, query: { index: primaryKey, range: range }, limit: limit })
                                .then(function (_a) {
                                var result = _a.result;
                                return addPutOrDelete({ type: 'delete', keys: result, trans: trans }).then(function (res) {
                                    if (res.numFailures > 0)
                                        return Promise.reject(res.failures[0]);
                                    if (result.length < limit) {
                                        return { failures: [], numFailures: 0, lastResult: undefined };
                                    }
                                    else {
                                        return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                                    }
                                });
                            });
                        }
                    } });
                return tableMiddleware;
            } })); }
    };
    function getExistingValues(table, req, effectiveKeys) {
        return req.type === "add"
            ? Promise.resolve([])
            : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
    }

    function getFromTransactionCache(keys, cache, clone) {
        try {
            if (!cache)
                return null;
            if (cache.keys.length < keys.length)
                return null;
            var result = [];
            for (var i = 0, j = 0; i < cache.keys.length && j < keys.length; ++i) {
                if (cmp(cache.keys[i], keys[j]) !== 0)
                    continue;
                result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
                ++j;
            }
            return result.length === keys.length ? result : null;
        }
        catch (_a) {
            return null;
        }
    }
    var cacheExistingValuesMiddleware = {
        stack: "dbcore",
        level: -1,
        create: function (core) {
            return {
                table: function (tableName) {
                    var table = core.table(tableName);
                    return __assign(__assign({}, table), { getMany: function (req) {
                            if (!req.cache) {
                                return table.getMany(req);
                            }
                            var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                            if (cachedResult) {
                                return DexiePromise.resolve(cachedResult);
                            }
                            return table.getMany(req).then(function (res) {
                                req.trans["_cache"] = {
                                    keys: req.keys,
                                    values: req.cache === "clone" ? deepClone(res) : res,
                                };
                                return res;
                            });
                        }, mutate: function (req) {
                            if (req.type !== "add")
                                req.trans["_cache"] = null;
                            return table.mutate(req);
                        } });
                },
            };
        },
    };

    var _a;
    function isEmptyRange(node) {
        return !("from" in node);
    }
    var RangeSet = function (fromOrTree, to) {
        if (this) {
            extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
        }
        else {
            var rv = new RangeSet();
            if (fromOrTree && ("d" in fromOrTree)) {
                extend(rv, fromOrTree);
            }
            return rv;
        }
    };
    props(RangeSet.prototype, (_a = {
            add: function (rangeSet) {
                mergeRanges(this, rangeSet);
                return this;
            },
            addKey: function (key) {
                addRange(this, key, key);
                return this;
            },
            addKeys: function (keys) {
                var _this = this;
                keys.forEach(function (key) { return addRange(_this, key, key); });
                return this;
            }
        },
        _a[iteratorSymbol] = function () {
            return getRangeSetIterator(this);
        },
        _a));
    function addRange(target, from, to) {
        var diff = cmp(from, to);
        if (isNaN(diff))
            return;
        if (diff > 0)
            throw RangeError();
        if (isEmptyRange(target))
            return extend(target, { from: from, to: to, d: 1 });
        var left = target.l;
        var right = target.r;
        if (cmp(to, target.from) < 0) {
            left
                ? addRange(left, from, to)
                : (target.l = { from: from, to: to, d: 1, l: null, r: null });
            return rebalance(target);
        }
        if (cmp(from, target.to) > 0) {
            right
                ? addRange(right, from, to)
                : (target.r = { from: from, to: to, d: 1, l: null, r: null });
            return rebalance(target);
        }
        if (cmp(from, target.from) < 0) {
            target.from = from;
            target.l = null;
            target.d = right ? right.d + 1 : 1;
        }
        if (cmp(to, target.to) > 0) {
            target.to = to;
            target.r = null;
            target.d = target.l ? target.l.d + 1 : 1;
        }
        var rightWasCutOff = !target.r;
        if (left && !target.l) {
            mergeRanges(target, left);
        }
        if (right && rightWasCutOff) {
            mergeRanges(target, right);
        }
    }
    function mergeRanges(target, newSet) {
        function _addRangeSet(target, _a) {
            var from = _a.from, to = _a.to, l = _a.l, r = _a.r;
            addRange(target, from, to);
            if (l)
                _addRangeSet(target, l);
            if (r)
                _addRangeSet(target, r);
        }
        if (!isEmptyRange(newSet))
            _addRangeSet(target, newSet);
    }
    function rangesOverlap(rangeSet1, rangeSet2) {
        var i1 = getRangeSetIterator(rangeSet2);
        var nextResult1 = i1.next();
        if (nextResult1.done)
            return false;
        var a = nextResult1.value;
        var i2 = getRangeSetIterator(rangeSet1);
        var nextResult2 = i2.next(a.from);
        var b = nextResult2.value;
        while (!nextResult1.done && !nextResult2.done) {
            if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
                return true;
            cmp(a.from, b.from) < 0
                ? (a = (nextResult1 = i1.next(b.from)).value)
                : (b = (nextResult2 = i2.next(a.from)).value);
        }
        return false;
    }
    function getRangeSetIterator(node) {
        var state = isEmptyRange(node) ? null : { s: 0, n: node };
        return {
            next: function (key) {
                var keyProvided = arguments.length > 0;
                while (state) {
                    switch (state.s) {
                        case 0:
                            state.s = 1;
                            if (keyProvided) {
                                while (state.n.l && cmp(key, state.n.from) < 0)
                                    state = { up: state, n: state.n.l, s: 1 };
                            }
                            else {
                                while (state.n.l)
                                    state = { up: state, n: state.n.l, s: 1 };
                            }
                        case 1:
                            state.s = 2;
                            if (!keyProvided || cmp(key, state.n.to) <= 0)
                                return { value: state.n, done: false };
                        case 2:
                            if (state.n.r) {
                                state.s = 3;
                                state = { up: state, n: state.n.r, s: 0 };
                                continue;
                            }
                        case 3:
                            state = state.up;
                    }
                }
                return { done: true };
            },
        };
    }
    function rebalance(target) {
        var _a, _b;
        var diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
        var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
        if (r) {
            var l = r === "r" ? "l" : "r";
            var rootClone = __assign({}, target);
            var oldRootRight = target[r];
            target.from = oldRootRight.from;
            target.to = oldRootRight.to;
            target[r] = oldRootRight[r];
            rootClone[r] = oldRootRight[l];
            target[l] = rootClone;
            rootClone.d = computeDepth(rootClone);
        }
        target.d = computeDepth(target);
    }
    function computeDepth(_a) {
        var r = _a.r, l = _a.l;
        return (r ? (l ? Math.max(r.d, l.d) : r.d) : l ? l.d : 0) + 1;
    }

    var observabilityMiddleware = {
        stack: "dbcore",
        level: 0,
        create: function (core) {
            var dbName = core.schema.name;
            var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
            return __assign(__assign({}, core), { table: function (tableName) {
                    var table = core.table(tableName);
                    var schema = table.schema;
                    var primaryKey = schema.primaryKey;
                    var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
                    var tableClone = __assign(__assign({}, table), { mutate: function (req) {
                            var trans = req.trans;
                            var mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
                            var getRangeSet = function (indexName) {
                                var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                                return (mutatedParts[part] ||
                                    (mutatedParts[part] = new RangeSet()));
                            };
                            var pkRangeSet = getRangeSet("");
                            var delsRangeSet = getRangeSet(":dels");
                            var type = req.type;
                            var _a = req.type === "deleteRange"
                                ? [req.range]
                                : req.type === "delete"
                                    ? [req.keys]
                                    : req.values.length < 50
                                        ? [[], req.values]
                                        : [], keys = _a[0], newObjs = _a[1];
                            var oldCache = req.trans["_cache"];
                            return table.mutate(req).then(function (res) {
                                if (isArray(keys)) {
                                    if (type !== "delete")
                                        keys = res.results;
                                    pkRangeSet.addKeys(keys);
                                    var oldObjs = getFromTransactionCache(keys, oldCache);
                                    if (!oldObjs && type !== "add") {
                                        delsRangeSet.addKeys(keys);
                                    }
                                    if (oldObjs || newObjs) {
                                        trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                                    }
                                }
                                else if (keys) {
                                    var range = { from: keys.lower, to: keys.upper };
                                    delsRangeSet.add(range);
                                    pkRangeSet.add(range);
                                }
                                else {
                                    pkRangeSet.add(FULL_RANGE);
                                    delsRangeSet.add(FULL_RANGE);
                                    schema.indexes.forEach(function (idx) { return getRangeSet(idx.name).add(FULL_RANGE); });
                                }
                                return res;
                            });
                        } });
                    var getRange = function (_a) {
                        var _b, _c;
                        var _d = _a.query, index = _d.index, range = _d.range;
                        return [
                            index,
                            new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY),
                        ];
                    };
                    var readSubscribers = {
                        get: function (req) { return [primaryKey, new RangeSet(req.key)]; },
                        getMany: function (req) { return [primaryKey, new RangeSet().addKeys(req.keys)]; },
                        count: getRange,
                        query: getRange,
                        openCursor: getRange,
                    };
                    keys(readSubscribers).forEach(function (method) {
                        tableClone[method] = function (req) {
                            var subscr = PSD.subscr;
                            if (subscr) {
                                var getRangeSet = function (indexName) {
                                    var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                                    return (subscr[part] ||
                                        (subscr[part] = new RangeSet()));
                                };
                                var pkRangeSet_1 = getRangeSet("");
                                var delsRangeSet_1 = getRangeSet(":dels");
                                var _a = readSubscribers[method](req), queriedIndex = _a[0], queriedRanges = _a[1];
                                getRangeSet(queriedIndex.name || "").add(queriedRanges);
                                if (!queriedIndex.isPrimaryKey) {
                                    if (method === "count") {
                                        delsRangeSet_1.add(FULL_RANGE);
                                    }
                                    else {
                                        var keysPromise_1 = method === "query" &&
                                            outbound &&
                                            req.values &&
                                            table.query(__assign(__assign({}, req), { values: false }));
                                        return table[method].apply(this, arguments).then(function (res) {
                                            if (method === "query") {
                                                if (outbound && req.values) {
                                                    return keysPromise_1.then(function (_a) {
                                                        var resultingKeys = _a.result;
                                                        pkRangeSet_1.addKeys(resultingKeys);
                                                        return res;
                                                    });
                                                }
                                                var pKeys = req.values
                                                    ? res.result.map(extractKey)
                                                    : res.result;
                                                if (req.values) {
                                                    pkRangeSet_1.addKeys(pKeys);
                                                }
                                                else {
                                                    delsRangeSet_1.addKeys(pKeys);
                                                }
                                            }
                                            else if (method === "openCursor") {
                                                var cursor_1 = res;
                                                var wantValues_1 = req.values;
                                                return (cursor_1 &&
                                                    Object.create(cursor_1, {
                                                        key: {
                                                            get: function () {
                                                                delsRangeSet_1.addKey(cursor_1.primaryKey);
                                                                return cursor_1.key;
                                                            },
                                                        },
                                                        primaryKey: {
                                                            get: function () {
                                                                var pkey = cursor_1.primaryKey;
                                                                delsRangeSet_1.addKey(pkey);
                                                                return pkey;
                                                            },
                                                        },
                                                        value: {
                                                            get: function () {
                                                                wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                                                return cursor_1.value;
                                                            },
                                                        },
                                                    }));
                                            }
                                            return res;
                                        });
                                    }
                                }
                            }
                            return table[method].apply(this, arguments);
                        };
                    });
                    return tableClone;
                } });
        },
    };
    function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
        function addAffectedIndex(ix) {
            var rangeSet = getRangeSet(ix.name || "");
            function extractKey(obj) {
                return obj != null ? ix.extractKey(obj) : null;
            }
            var addKeyOrKeys = function (key) { return ix.multiEntry && isArray(key)
                ? key.forEach(function (key) { return rangeSet.addKey(key); })
                : rangeSet.addKey(key); };
            (oldObjs || newObjs).forEach(function (_, i) {
                var oldKey = oldObjs && extractKey(oldObjs[i]);
                var newKey = newObjs && extractKey(newObjs[i]);
                if (cmp(oldKey, newKey) !== 0) {
                    if (oldKey != null)
                        addKeyOrKeys(oldKey);
                    if (newKey != null)
                        addKeyOrKeys(newKey);
                }
            });
        }
        schema.indexes.forEach(addAffectedIndex);
    }

    var Dexie$1 =  (function () {
        function Dexie(name, options) {
            var _this = this;
            this._middlewares = {};
            this.verno = 0;
            var deps = Dexie.dependencies;
            this._options = options = __assign({
                addons: Dexie.addons, autoOpen: true,
                indexedDB: deps.indexedDB, IDBKeyRange: deps.IDBKeyRange }, options);
            this._deps = {
                indexedDB: options.indexedDB,
                IDBKeyRange: options.IDBKeyRange
            };
            var addons = options.addons;
            this._dbSchema = {};
            this._versions = [];
            this._storeNames = [];
            this._allTables = {};
            this.idbdb = null;
            this._novip = this;
            var state = {
                dbOpenError: null,
                isBeingOpened: false,
                onReadyBeingFired: null,
                openComplete: false,
                dbReadyResolve: nop,
                dbReadyPromise: null,
                cancelOpen: nop,
                openCanceller: null,
                autoSchema: true,
                PR1398_maxLoop: 3
            };
            state.dbReadyPromise = new DexiePromise(function (resolve) {
                state.dbReadyResolve = resolve;
            });
            state.openCanceller = new DexiePromise(function (_, reject) {
                state.cancelOpen = reject;
            });
            this._state = state;
            this.name = name;
            this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
            this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
                return function (subscriber, bSticky) {
                    Dexie.vip(function () {
                        var state = _this._state;
                        if (state.openComplete) {
                            if (!state.dbOpenError)
                                DexiePromise.resolve().then(subscriber);
                            if (bSticky)
                                subscribe(subscriber);
                        }
                        else if (state.onReadyBeingFired) {
                            state.onReadyBeingFired.push(subscriber);
                            if (bSticky)
                                subscribe(subscriber);
                        }
                        else {
                            subscribe(subscriber);
                            var db_1 = _this;
                            if (!bSticky)
                                subscribe(function unsubscribe() {
                                    db_1.on.ready.unsubscribe(subscriber);
                                    db_1.on.ready.unsubscribe(unsubscribe);
                                });
                        }
                    });
                };
            });
            this.Collection = createCollectionConstructor(this);
            this.Table = createTableConstructor(this);
            this.Transaction = createTransactionConstructor(this);
            this.Version = createVersionConstructor(this);
            this.WhereClause = createWhereClauseConstructor(this);
            this.on("versionchange", function (ev) {
                if (ev.newVersion > 0)
                    console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
                else
                    console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
                _this.close();
            });
            this.on("blocked", function (ev) {
                if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                    console.warn("Dexie.delete('" + _this.name + "') was blocked");
                else
                    console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
            });
            this._maxKey = getMaxKey(options.IDBKeyRange);
            this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) { return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction); };
            this._fireOnBlocked = function (ev) {
                _this.on("blocked").fire(ev);
                connections
                    .filter(function (c) { return c.name === _this.name && c !== _this && !c._state.vcFired; })
                    .map(function (c) { return c.on("versionchange").fire(ev); });
            };
            this.use(virtualIndexMiddleware);
            this.use(hooksMiddleware);
            this.use(observabilityMiddleware);
            this.use(cacheExistingValuesMiddleware);
            this.vip = Object.create(this, { _vip: { value: true } });
            addons.forEach(function (addon) { return addon(_this); });
        }
        Dexie.prototype.version = function (versionNumber) {
            if (isNaN(versionNumber) || versionNumber < 0.1)
                throw new exceptions.Type("Given version is not a positive number");
            versionNumber = Math.round(versionNumber * 10) / 10;
            if (this.idbdb || this._state.isBeingOpened)
                throw new exceptions.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versions = this._versions;
            var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
            if (versionInstance)
                return versionInstance;
            versionInstance = new this.Version(versionNumber);
            versions.push(versionInstance);
            versions.sort(lowerVersionFirst);
            versionInstance.stores({});
            this._state.autoSchema = false;
            return versionInstance;
        };
        Dexie.prototype._whenReady = function (fn) {
            var _this = this;
            return (this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip)) ? fn() : new DexiePromise(function (resolve, reject) {
                if (_this._state.openComplete) {
                    return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
                }
                if (!_this._state.isBeingOpened) {
                    if (!_this._options.autoOpen) {
                        reject(new exceptions.DatabaseClosed());
                        return;
                    }
                    _this.open().catch(nop);
                }
                _this._state.dbReadyPromise.then(resolve, reject);
            }).then(fn);
        };
        Dexie.prototype.use = function (_a) {
            var stack = _a.stack, create = _a.create, level = _a.level, name = _a.name;
            if (name)
                this.unuse({ stack: stack, name: name });
            var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
            middlewares.push({ stack: stack, create: create, level: level == null ? 10 : level, name: name });
            middlewares.sort(function (a, b) { return a.level - b.level; });
            return this;
        };
        Dexie.prototype.unuse = function (_a) {
            var stack = _a.stack, name = _a.name, create = _a.create;
            if (stack && this._middlewares[stack]) {
                this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
                    return create ? mw.create !== create :
                        name ? mw.name !== name :
                            false;
                });
            }
            return this;
        };
        Dexie.prototype.open = function () {
            return dexieOpen(this);
        };
        Dexie.prototype._close = function () {
            var state = this._state;
            var idx = connections.indexOf(this);
            if (idx >= 0)
                connections.splice(idx, 1);
            if (this.idbdb) {
                try {
                    this.idbdb.close();
                }
                catch (e) { }
                this._novip.idbdb = null;
            }
            state.dbReadyPromise = new DexiePromise(function (resolve) {
                state.dbReadyResolve = resolve;
            });
            state.openCanceller = new DexiePromise(function (_, reject) {
                state.cancelOpen = reject;
            });
        };
        Dexie.prototype.close = function () {
            this._close();
            var state = this._state;
            this._options.autoOpen = false;
            state.dbOpenError = new exceptions.DatabaseClosed();
            if (state.isBeingOpened)
                state.cancelOpen(state.dbOpenError);
        };
        Dexie.prototype.delete = function () {
            var _this = this;
            var hasArguments = arguments.length > 0;
            var state = this._state;
            return new DexiePromise(function (resolve, reject) {
                var doDelete = function () {
                    _this.close();
                    var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                    req.onsuccess = wrap(function () {
                        _onDatabaseDeleted(_this._deps, _this.name);
                        resolve();
                    });
                    req.onerror = eventRejectHandler(reject);
                    req.onblocked = _this._fireOnBlocked;
                };
                if (hasArguments)
                    throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
                if (state.isBeingOpened) {
                    state.dbReadyPromise.then(doDelete);
                }
                else {
                    doDelete();
                }
            });
        };
        Dexie.prototype.backendDB = function () {
            return this.idbdb;
        };
        Dexie.prototype.isOpen = function () {
            return this.idbdb !== null;
        };
        Dexie.prototype.hasBeenClosed = function () {
            var dbOpenError = this._state.dbOpenError;
            return dbOpenError && (dbOpenError.name === 'DatabaseClosed');
        };
        Dexie.prototype.hasFailed = function () {
            return this._state.dbOpenError !== null;
        };
        Dexie.prototype.dynamicallyOpened = function () {
            return this._state.autoSchema;
        };
        Object.defineProperty(Dexie.prototype, "tables", {
            get: function () {
                var _this = this;
                return keys(this._allTables).map(function (name) { return _this._allTables[name]; });
            },
            enumerable: false,
            configurable: true
        });
        Dexie.prototype.transaction = function () {
            var args = extractTransactionArgs.apply(this, arguments);
            return this._transaction.apply(this, args);
        };
        Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
            var _this = this;
            var parentTransaction = PSD.trans;
            if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1)
                parentTransaction = null;
            var onlyIfCompatible = mode.indexOf('?') !== -1;
            mode = mode.replace('!', '').replace('?', '');
            var idbMode, storeNames;
            try {
                storeNames = tables.map(function (table) {
                    var storeName = table instanceof _this.Table ? table.name : table;
                    if (typeof storeName !== 'string')
                        throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                    return storeName;
                });
                if (mode == "r" || mode === READONLY)
                    idbMode = READONLY;
                else if (mode == "rw" || mode == READWRITE)
                    idbMode = READWRITE;
                else
                    throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
                if (parentTransaction) {
                    if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                        if (onlyIfCompatible) {
                            parentTransaction = null;
                        }
                        else
                            throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    }
                    if (parentTransaction) {
                        storeNames.forEach(function (storeName) {
                            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                                if (onlyIfCompatible) {
                                    parentTransaction = null;
                                }
                                else
                                    throw new exceptions.SubTransaction("Table " + storeName +
                                        " not included in parent transaction.");
                            }
                        });
                    }
                    if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                        parentTransaction = null;
                    }
                }
            }
            catch (e) {
                return parentTransaction ?
                    parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                    rejection(e);
            }
            var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
            return (parentTransaction ?
                parentTransaction._promise(idbMode, enterTransaction, "lock") :
                PSD.trans ?
                    usePSD(PSD.transless, function () { return _this._whenReady(enterTransaction); }) :
                    this._whenReady(enterTransaction));
        };
        Dexie.prototype.table = function (tableName) {
            if (!hasOwn(this._allTables, tableName)) {
                throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
            }
            return this._allTables[tableName];
        };
        return Dexie;
    }());

    var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol
        ? Symbol.observable
        : "@@observable";
    var Observable =  (function () {
        function Observable(subscribe) {
            this._subscribe = subscribe;
        }
        Observable.prototype.subscribe = function (x, error, complete) {
            return this._subscribe(!x || typeof x === "function" ? { next: x, error: error, complete: complete } : x);
        };
        Observable.prototype[symbolObservable] = function () {
            return this;
        };
        return Observable;
    }());

    function extendObservabilitySet(target, newSet) {
        keys(newSet).forEach(function (part) {
            var rangeSet = target[part] || (target[part] = new RangeSet());
            mergeRanges(rangeSet, newSet[part]);
        });
        return target;
    }

    function liveQuery(querier) {
        return new Observable(function (observer) {
            var scopeFuncIsAsync = isAsyncFunction(querier);
            function execute(subscr) {
                if (scopeFuncIsAsync) {
                    incrementExpectedAwaits();
                }
                var exec = function () { return newScope(querier, { subscr: subscr, trans: null }); };
                var rv = PSD.trans
                    ?
                        usePSD(PSD.transless, exec)
                    : exec();
                if (scopeFuncIsAsync) {
                    rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
                }
                return rv;
            }
            var closed = false;
            var accumMuts = {};
            var currentObs = {};
            var subscription = {
                get closed() {
                    return closed;
                },
                unsubscribe: function () {
                    closed = true;
                    globalEvents.storagemutated.unsubscribe(mutationListener);
                },
            };
            observer.start && observer.start(subscription);
            var querying = false, startedListening = false;
            function shouldNotify() {
                return keys(currentObs).some(function (key) {
                    return accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]);
                });
            }
            var mutationListener = function (parts) {
                extendObservabilitySet(accumMuts, parts);
                if (shouldNotify()) {
                    doQuery();
                }
            };
            var doQuery = function () {
                if (querying || closed)
                    return;
                accumMuts = {};
                var subscr = {};
                var ret = execute(subscr);
                if (!startedListening) {
                    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                    startedListening = true;
                }
                querying = true;
                Promise.resolve(ret).then(function (result) {
                    querying = false;
                    if (closed)
                        return;
                    if (shouldNotify()) {
                        doQuery();
                    }
                    else {
                        accumMuts = {};
                        currentObs = subscr;
                        observer.next && observer.next(result);
                    }
                }, function (err) {
                    querying = false;
                    observer.error && observer.error(err);
                    subscription.unsubscribe();
                });
            };
            doQuery();
            return subscription;
        });
    }

    var domDeps;
    try {
        domDeps = {
            indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
            IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
        };
    }
    catch (e) {
        domDeps = { indexedDB: null, IDBKeyRange: null };
    }

    var Dexie = Dexie$1;
    props(Dexie, __assign(__assign({}, fullNameExceptions), {
        delete: function (databaseName) {
            var db = new Dexie(databaseName, { addons: [] });
            return db.delete();
        },
        exists: function (name) {
            return new Dexie(name, { addons: [] }).open().then(function (db) {
                db.close();
                return true;
            }).catch('NoSuchDatabaseError', function () { return false; });
        },
        getDatabaseNames: function (cb) {
            try {
                return getDatabaseNames(Dexie.dependencies).then(cb);
            }
            catch (_a) {
                return rejection(new exceptions.MissingAPI());
            }
        },
        defineClass: function () {
            function Class(content) {
                extend(this, content);
            }
            return Class;
        }, ignoreTransaction: function (scopeFunc) {
            return PSD.trans ?
                usePSD(PSD.transless, scopeFunc) :
                scopeFunc();
        }, vip: vip, async: function (generatorFn) {
            return function () {
                try {
                    var rv = awaitIterator(generatorFn.apply(this, arguments));
                    if (!rv || typeof rv.then !== 'function')
                        return DexiePromise.resolve(rv);
                    return rv;
                }
                catch (e) {
                    return rejection(e);
                }
            };
        }, spawn: function (generatorFn, args, thiz) {
            try {
                var rv = awaitIterator(generatorFn.apply(thiz, args || []));
                if (!rv || typeof rv.then !== 'function')
                    return DexiePromise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        },
        currentTransaction: {
            get: function () { return PSD.trans || null; }
        }, waitFor: function (promiseOrFunction, optionalTimeout) {
            var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ?
                Dexie.ignoreTransaction(promiseOrFunction) :
                promiseOrFunction)
                .timeout(optionalTimeout || 60000);
            return PSD.trans ?
                PSD.trans.waitFor(promise) :
                promise;
        },
        Promise: DexiePromise,
        debug: {
            get: function () { return debug; },
            set: function (value) {
                setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
            }
        },
        derive: derive, extend: extend, props: props, override: override,
        Events: Events, on: globalEvents, liveQuery: liveQuery, extendObservabilitySet: extendObservabilitySet,
        getByKeyPath: getByKeyPath, setByKeyPath: setByKeyPath, delByKeyPath: delByKeyPath, shallowClone: shallowClone, deepClone: deepClone, getObjectDiff: getObjectDiff, cmp: cmp, asap: asap$1,
        minKey: minKey,
        addons: [],
        connections: connections,
        errnames: errnames,
        dependencies: domDeps,
        semVer: DEXIE_VERSION, version: DEXIE_VERSION.split('.')
            .map(function (n) { return parseInt(n); })
            .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }) }));
    Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);

    if (typeof dispatchEvent !== 'undefined' && typeof addEventListener !== 'undefined') {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (updatedParts) {
            if (!propagatingLocally) {
                var event_1;
                if (isIEOrEdge) {
                    event_1 = document.createEvent('CustomEvent');
                    event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
                }
                else {
                    event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
                        detail: updatedParts
                    });
                }
                propagatingLocally = true;
                dispatchEvent(event_1);
                propagatingLocally = false;
            }
        });
        addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function (_a) {
            var detail = _a.detail;
            if (!propagatingLocally) {
                propagateLocally(detail);
            }
        });
    }
    function propagateLocally(updateParts) {
        var wasMe = propagatingLocally;
        try {
            propagatingLocally = true;
            globalEvents.storagemutated.fire(updateParts);
        }
        finally {
            propagatingLocally = wasMe;
        }
    }
    var propagatingLocally = false;

    if (typeof BroadcastChannel !== 'undefined') {
        var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
            if (!propagatingLocally) {
                bc_1.postMessage(changedParts);
            }
        });
        bc_1.onmessage = function (ev) {
            if (ev.data)
                propagateLocally(ev.data);
        };
    }
    else if (typeof self !== 'undefined' && typeof navigator !== 'undefined') {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
            try {
                if (!propagatingLocally) {
                    if (typeof localStorage !== 'undefined') {
                        localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
                            trig: Math.random(),
                            changedParts: changedParts,
                        }));
                    }
                    if (typeof self['clients'] === 'object') {
                        __spreadArray([], self['clients'].matchAll({ includeUncontrolled: true }), true).forEach(function (client) {
                            return client.postMessage({
                                type: STORAGE_MUTATED_DOM_EVENT_NAME,
                                changedParts: changedParts,
                            });
                        });
                    }
                }
            }
            catch (_a) { }
        });
        if (typeof addEventListener !== 'undefined') {
            addEventListener('storage', function (ev) {
                if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
                    var data = JSON.parse(ev.newValue);
                    if (data)
                        propagateLocally(data.changedParts);
                }
            });
        }
        var swContainer = self.document && navigator.serviceWorker;
        if (swContainer) {
            swContainer.addEventListener('message', propagateMessageLocally);
        }
    }
    function propagateMessageLocally(_a) {
        var data = _a.data;
        if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
            propagateLocally(data.changedParts);
        }
    }

    DexiePromise.rejectionMapper = mapError;
    setDebug(debug, dexieStackFrameFilter);

    var namedExports = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dexie: Dexie$1,
        liveQuery: liveQuery,
        'default': Dexie$1,
        RangeSet: RangeSet,
        mergeRanges: mergeRanges,
        rangesOverlap: rangesOverlap
    });

    __assign(Dexie$1, namedExports, { default: Dexie$1 });

    return Dexie$1;

}));
//# sourceMappingURL=dexie.js.map




















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
	var cssb64 = `LyogY3lyaWxsaWMtZXh0ICovCkBmb250LWZhY2UgewogIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubyc7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgZm9udC1kaXNwbGF5OiBzd2FwOwogIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pYm1wbGV4bW9uby92MTIvLUY2M2ZqcHRBZ3Q1Vk0ta1ZrcWR5VThuMWlJcTEyOWsud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsKfQovKiBjeXJpbGxpYyAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpc3ExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7Cn0KLyogdmlldG5hbWVzZSAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpQXExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjsKfQovKiBsYXRpbi1leHQgKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaUVxMTI5ay53b2ZmMikgZm9ybWF0KCd3b2ZmMicpOwogIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7Cn0KLyogbGF0aW4gKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaThxMXcud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOwp9CmJvZHkgI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7CglkaXNwbGF5OiBub25lOwp9CgoKYm9keVtjbmRzX3Nob3duPSd5ZXMnXSAuY2hhdC0yWmZqb0kgLmNvbnRlbnQtMWpReTJsCnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKCmJvZHlbY25kc19zaG93bj0neWVzJ10gI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7Cglwb3NpdGlvbjogYWJzb2x1dGU7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJYmFja2dyb3VuZDogIzM2MzkzZjsKCXotaW5kZXg6IDY1NTM1Owp9Cgpib2R5W2NuZHNfc2hvd249J3llcyddICNjaW5lbWFfZHNfbWFpbl93aW5kb3c6OmJlZm9yZQp7Cgljb250ZW50OiAnJzsKCXBvc2l0aW9uOiBhYnNvbHV0ZTsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAycHg7Cgl0b3A6IDBweDsKCWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7CgliYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDEwMCUpOwoJYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19zdGF0cwp7Cgljb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOwoJcG9zaXRpb246IGFic29sdXRlOwoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDIwcHg7Cglmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7CiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgKi8KICAgIGRpc3BsYXk6IGZsZXg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwogICAgLyogdGV4dC1hbGlnbjogZW5kOyAqLwogICAgLyogcGFkZGluZy1sZWZ0OiAzMzZweDsgKi8KICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi8KICAgIHdpZHRoOiA5NSU7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19tZWRpYV9wb29sCnsKCWRpc3BsYXk6IGJsb2NrOwoJLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovCgkvKmZsZXgtZ3JvdzogMTsqLwoJb3ZlcmZsb3cteTogc2Nyb2xsOwoJaGVpZ2h0OiBpbmhlcml0OwoKCn0KCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzCnsKCXVzZXItc2VsZWN0OiBub25lOwoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiByb3c7CglhbGlnbi1pdGVtczogY2VudGVyOwoJanVzdGlmeS1jb250ZW50OiBjZW50ZXI7CglwYWRkaW5nOiAxMHB4OwoJY29sb3I6IHdoaXRlOwp9CgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAuY2luZW1hZHNfcGFnZSwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfcHJldiwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfbmV4dAp7CglwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsKCW9wYWNpdHk6IDAuNTsKfQoKI2NpbmVtYWRzX3BhZ2VzIC5wZ19hY3RpdmUsCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzICNjaW5lbWFkc19wYWdlX3ByZXYsCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzICNjaW5lbWFkc19wYWdlX25leHQKewoJb3BhY2l0eTogMSAhaW1wb3J0YW50Owp9CgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAuY2luZW1hZHNfcGFnZTpob3ZlciwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfcHJldjpob3ZlciwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfbmV4dDpob3Zlcgp7CgliYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7Cn0KCgojY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX3ZpZGVvX2VudHJ5LCAjY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX2ltZ19lbnRyeQp7CglkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cglwb3NpdGlvbjogcmVsYXRpdmU7CgkvKm9iamVjdC1maXQ6IGNvbnRhaW47Ki8KCS8qaGVpZ2h0OiA2MCU7Ki8KCS8qd2lkdGg6IGZpdC1jb250ZW50OyovCgkvKm1heC13aWR0aDogODAlOyovCgl3aWR0aDogMTU0cHg7CgloZWlnaHQ6IDEwcmVtOwoJLypoZWlnaHQ6IGF1dG87Ki8KCW1heC1oZWlnaHQ6IDEwcmVtOwoJbWFyZ2luOiAyMHB4OwoJdmVydGljYWwtYWxpZ246IHRleHQtdG9wOwp9CgojY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX3ZpZGVvX2VudHJ5CnsKCWRpc3BsYXk6IGlubGluZS1ibG9jazsKfQoKI2NpbmVtYWRzX21lZGlhX3Bvb2wgLmNpbmVtYV9kc19pbWdfZW50cnkgaW1nCnsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJb2JqZWN0LWZpdDogY29udGFpbjsKCS8qaGVpZ2h0OiBhdXRvOyovCgltYXgtaGVpZ2h0OiAxMHJlbTsKfQoKI2NpbmVtYWRzX21lZGlhX3Bvb2wgLmNpbmVtYV9kc192aWRlb19lbnRyeSB2aWRlbwp7Cgl3aWR0aDogMTAwJTsKCWhlaWdodDogMTAwJTsKCW9iamVjdC1maXQ6IGNvbnRhaW47CgltYXgtaGVpZ2h0OiAxMHJlbTsKCW9iamVjdC1wb3NpdGlvbjogY2VudGVyOwp9CgouY2luZW1hX2RzX3ZpZGVvX2VudHJ5IC52aWRlb19pY29uCnsKCXBvc2l0aW9uOiBhYnNvbHV0ZTsKCXRvcDogMHB4OwoJbGVmdDogMHB4OwoJd2lkdGg6IDMwcHg7CgloZWlnaHQ6IDMwcHg7CgltYXJnaW46IDNweDsKfQoKLmNpbmVtYV9kc192aWRlb19lbnRyeSAudmlkZW9faWNvbiBzdmcKewoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDEwMCU7Cn0KCgouY2luZW1hX2RzX2ltZ19lbnRyeS5wbGFjZWhvbGRlcgp7CgloZWlnaHQ6IDEwcmVtOwoJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpOwp9CgoKI2NpbmVtYV9kc19mdWxsc2NyZWVuCnsKCXBvc2l0aW9uOiBmaXhlZDsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJei1pbmRleDogMjE0NzQ4MzY0OwoJb2JqZWN0LWZpdDogY29udGFpbjsKCW9iamVjdC1wb3NpdGlvbjogY2VudGVyOwoJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpOwoJYmFja2Ryb3AtZmlsdGVyOiBibHVyKDlweCk7Cn0KCi5uYXZfbG9ja2VkCnsKCWNvbG9yOiAjRkY0NzRGICFpbXBvcnRhbnQ7Cgl1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50OwoJcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDsKCS8qb3BhY2l0eTogMC45NSAhaW1wb3J0YW50OyovCn0KCgphLmFydGljbGVfbGluawp7Cgl0cmFuc2l0aW9uOiAuM3M7Cgl2aXNpYmlsaXR5OiBoaWRkZW47Cglwb3NpdGlvbjogYWJzb2x1dGU7CglyaWdodDogMHB4OwoJdG9wOiAwcHg7CgltYXJnaW46IDVweDsKCXdpZHRoOiAyNHB4OwoJaGVpZ2h0OiAyNHB4OwoJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpOwoJYm9yZGVyLXJhZGl1czogNXB4OwoJcGFkZGluZzogM3B4OwoJb3BhY2l0eTogMDsKfQoKLmNpbmVtYV9kc192aWRlb19lbnRyeTpob3ZlciBhLmFydGljbGVfbGluaywgLmNpbmVtYV9kc19pbWdfZW50cnk6aG92ZXIgYS5hcnRpY2xlX2xpbmsKewoJdHJhbnNpdGlvbjogLjE3czsKCXZpc2liaWxpdHk6IHZpc2libGU7CglvcGFjaXR5OiAxOwp9CgphLmFydGljbGVfbGluayBzdmcKewoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDEwMCU7CglmaWxsOiB3aGl0ZTsKCW9wYWNpdHk6IDAuNTsKfQoK`;
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




btg.dl_icon = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4yOTMgOS4yOTNMMTcuNzA3IDEwLjcwN0wxMiAxNi40MTRMNi4yOTI5NyAxMC43MDdMNy43MDY5NyA5LjI5M0wxMSAxMi41ODZWMkgxM1YxMi41ODZMMTYuMjkzIDkuMjkzWk0xOCAyMFYxOEgyMFYyMEMyMCAyMS4xMDIgMTkuMTA0IDIyIDE4IDIySDZDNC44OTYgMjIgNCAyMS4xMDIgNCAyMFYxOEg2VjIwSDE4WiI+PC9wYXRoPjwvc3ZnPg=='));


btg.link_icon = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTU1IDkuMjI5ODhDNTMuNzM3OSA3LjkyODU2IDUyLjIyNyA2Ljg5NDE3IDUwLjU1NzMgNi4xODgxM0M0OC44ODc1IDUuNDgyMDkgNDcuMDkyOSA1LjExODgyIDQ1LjI4IDUuMTE5ODhINDUuMTdDNDEuMzYzMSA1LjExNTkzIDM3LjcwODQgNi42MTQ0NyAzNSA5LjI4OTg4TDIyLjY4IDIxLjYzOTlDMjAuNDU4IDIzLjg4MTYgMTkuMDY0NSAyNi44MTIzIDE4LjcyODMgMjkuOTUwN0MxOC4zOTIxIDMzLjA4OSAxOS4xMzMzIDM2LjI0ODQgMjAuODMgMzguOTA5OUMyMS4xMDU2IDM5LjM0MTkgMjEuNDc1NSAzOS43MDU4IDIxLjkxMiAzOS45NzQzQzIyLjM0ODUgNDAuMjQyOCAyMi44NDAyIDQwLjQwODggMjMuMzUgNDAuNDU5OUMyMy40NzY1IDQwLjQ2OTggMjMuNjAzNiA0MC40Njk4IDIzLjczIDQwLjQ1OTlDMjQuNjUgNDAuNDY0OCAyNS41MzQ0IDQwLjEwNTMgMjYuMTkgMzkuNDU5OUMyNi43NDc3IDM4LjkwNyAyNy4wOTk0IDM4LjE4IDI3LjE4NjcgMzcuMzk5NUMyNy4yNzQgMzYuNjE5MSAyNy4wOTE3IDM1LjgzMjMgMjYuNjcgMzUuMTY5OUMyNS44MjA0IDMzLjg0MjYgMjUuNDQ4NSAzMi4yNjUzIDI1LjYxNTggMzAuNjk4M0MyNS43ODMgMjkuMTMxMiAyNi40Nzk0IDI3LjY2OCAyNy41OSAyNi41NDk5TDQwLjE3IDEzLjk5OTlDNDAuODUwNSAxMy4zMjM5IDQxLjY2NDMgMTIuNzk2OSA0Mi41NTk1IDEyLjQ1MjZDNDMuNDU0OCAxMi4xMDgzIDQ0LjQxMTkgMTEuOTU0MSA0NS4zNyAxMS45OTk5QzQ2LjMzMjUgMTIuMDQxIDQ3LjI3NTQgMTIuMjg0OSA0OC4xMzcxIDEyLjcxNThDNDguOTk4NyAxMy4xNDY2IDQ5Ljc1OTcgMTMuNzU0NiA1MC4zNyAxNC40OTk5QzUxLjQ0NDEgMTUuODczIDUxLjk3NDYgMTcuNTkzNyA1MS44NjAyIDE5LjMzMzJDNTEuNzQ1OSAyMS4wNzI4IDUwLjk5NDYgMjIuNzA5MiA0OS43NSAyMy45Mjk5TDQ3LjI5IDI2LjM4OTlDNDYuOTY2MiAyNi43MTE1IDQ2LjcwOTIgMjcuMDk0IDQ2LjUzMzggMjcuNTE1M0M0Ni4zNTg1IDI3LjkzNjYgNDYuMjY4MiAyOC4zODg1IDQ2LjI2ODIgMjguODQ0OUM0Ni4yNjgyIDI5LjMwMTMgNDYuMzU4NSAyOS43NTMxIDQ2LjUzMzggMzAuMTc0NUM0Ni43MDkyIDMwLjU5NTggNDYuOTY2MiAzMC45NzgzIDQ3LjI5IDMxLjI5OTlDNDcuOTQyMiAzMS45NDkgNDguODI0OSAzMi4zMTM0IDQ5Ljc0NSAzMi4zMTM0QzUwLjY2NTIgMzIuMzEzNCA1MS41NDc5IDMxLjk0OSA1Mi4yIDMxLjI5OTlMNTQuODMgMjguNjY5OUM1Ny4zOTM3IDI2LjA5NDggNTguODQ3MSAyMi42MTgxIDU4Ljg3ODkgMTguOTg0NUM1OC45MTA2IDE1LjM1MSA1Ny41MTgzIDExLjg0OTQgNTUgOS4yMjk4OFY5LjIyOTg4WiIvPjxwYXRoIGQ9Ik00MC41NDAxIDIzLjQxOThDMzkuODkxNCAyMy4zNDY2IDM5LjIzNTIgMjMuNDU3OSAzOC42NDY5IDIzLjc0MDhDMzguMDU4NiAyNC4wMjM4IDM3LjU2MjEgMjQuNDY2OSAzNy4yMTQzIDI1LjAxOTRDMzYuODY2NSAyNS41NzE4IDM2LjY4MTcgMjYuMjExMiAzNi42ODA5IDI2Ljg2NEMzNi42ODAyIDI3LjUxNjggMzYuODYzNiAyOC4xNTY2IDM3LjIxMDEgMjguNzA5OEMzOC4wNjE4IDMwLjAzNzYgMzguNDM1NyAzMS42MTU5IDM4LjI3MDMgMzMuMTg0NkMzOC4xMDQ5IDM0Ljc1MzQgMzcuNDEgMzYuMjE4OSAzNi4zMDAxIDM3LjMzOThMMjMuNzIwMSA0OS45MTk4QzIzLjAzODYgNTAuNTk0NCAyMi4yMjQ2IDUxLjEyMDMgMjEuMzI5NiA1MS40NjQ2QzIwLjQzNDYgNTEuODA4OCAxOS40NzggNTEuOTYzOCAxOC41MjAxIDUxLjkxOThDMTcuNTU3MyA1MS44NzU2IDE2LjYxNDUgNTEuNjI5MyAxNS43NTMgNTEuMTk2OUMxNC44OTE2IDUwLjc2NDQgMTQuMTMwOCA1MC4xNTU2IDEzLjUyMDEgNDkuNDA5OEMxMi40NDUzIDQ4LjA0MDggMTEuOTE0MiA0Ni4zMjI5IDEyLjAyODYgNDQuNTg2MkMxMi4xNDMgNDIuODQ5NCAxMi44OTUgNDEuMjE2MSAxNC4xNDAxIDM5Ljk5OThMMTYuNjAwMSAzNy41Mzk4QzE3LjI0NDYgMzYuODgzNyAxNy42MDQgMzUuOTk5NiAxNy42MDAxIDM1LjA3OThDMTcuNjAyOSAzNC42MjU4IDE3LjUxNiAzNC4xNzU2IDE3LjM0NDQgMzMuNzU1MkMxNy4xNzI4IDMzLjMzNDcgMTYuOTE5OCAzMi45NTIzIDE2LjYwMDEgMzIuNjI5OEMxNS45NDA1IDMxLjk5NDkgMTUuMDYwNiAzMS42NDAzIDE0LjE0NTEgMzEuNjQwM0MxMy4yMjk2IDMxLjY0MDMgMTIuMzQ5NyAzMS45OTQ5IDExLjY5MDEgMzIuNjI5OEw5LjI5MDEyIDM0Ljk5OThDNy45NTI4NyAzNi4zNTI3IDYuODk2MDggMzcuOTU2NCA2LjE4MDQ2IDM5LjcxODhDNS40NjQ4NCA0MS40ODEyIDUuMTA0NDkgNDMuMzY3NyA1LjEyMDEyIDQ1LjI2OThDNS4xMTc3MSA0Ny4wODQ0IDUuNDgwMzQgNDguODgwOSA2LjE4NjQxIDUwLjU1MjVDNi44OTI0OSA1Mi4yMjQgNy45Mjc1OSA1My43MzY1IDkuMjMwMTIgNTQuOTk5OEMxMS44NDc3IDU3LjUwNTEgMTUuMzM5NSA1OC44OTAxIDE4Ljk2MjYgNTguODYwMkMyMi41ODU3IDU4LjgzMDMgMjYuMDU0MiA1Ny4zODc5IDI4LjYzMDEgNTQuODM5OEw0MS4yMTAxIDQyLjI0OThDNDMuNDI0IDQwLjAwNzYgNDQuODEyMyAzNy4wODExIDQ1LjE0ODQgMzMuOTQ4QzQ1LjQ4NDQgMzAuODE0OSA0NC43NDgyIDI3LjY2MDUgNDMuMDYwMSAyNC45OTk4QzQyLjc4NjcgMjQuNTYzMiA0Mi40MTc5IDI0LjE5NDMgNDEuOTgxNSAyMy45MjA2QzQxLjU0NSAyMy42NDcgNDEuMDUyMiAyMy40NzU4IDQwLjU0MDEgMjMuNDE5OFoiLz48L3N2Zz4='));


btg.main_window = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PGRpdiBpZD0iY2luZW1hX2RzX21haW5fd2luZG93Ij4NCgk8ZGl2IGlkPSJjaW5lbWFkc19zdGF0cyI+U3RhdHM8L2Rpdj4NCgk8ZGl2IGlkPSJjaW5lbWFkc19tZWRpYV9wb29sIj48L2Rpdj4NCgk8ZGl2IGlkPSJjaW5lbWFkc19wYWdlcyI+PC9kaXY+DQo8L2Rpdj4='));


btg.video_icon = window.bootlegger_sys_funcs.UTF8ArrToStr(window.bootlegger_sys_funcs.base64DecToArr('PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIG9wYWNpdHk9IjAuOTkiIGQ9Ik0wLjQ5MjIgMC45OTQwOTFDMC4yMTYwNSAwLjk5ODM5MSAtMC4wMDQzMDggMS4yMjU3NiAxLjE5OThlLTA1IDEuNTAxOVYxNC40OTQxQy0wLjAwNDk4OCAxNC44MzIyIDAuMjQ3NTgyIDE1LjAwMzUgMC41MDAwMTIgMTUuMDAxOUwxLjAwMDAxIDE0Ljk5OFYxMy4wMDE5SDMuMDAwMDFWMTQuOTk4SDExVjEzLjAwMTlIMTNWMTQuOTk4SDEzLjVDMTMuNzUyNSAxNC45OTggMTQuMDA0OCAxNC44MjgzIDE0IDE0LjQ5MDJWMS41MDE5QzE0LjAwNSAxLjE2MzgyIDEzLjc1MjQgMC45OTI0ODggMTMuNSAwLjk5NDA5MUwxMyAwLjk5Nzk5N1YzLjAwMTlIMTFWMC45OTc5OTdIMy4wMDAwMVYzLjAwMTlIMS4wMDAwMVYwLjk5Nzk5N0wwLjQ5MjIgMC45OTQwOTFaTTEuMDAwMDEgNC4wMDE5SDMuMDAwMDFWNi4wMDE5SDEuMDAwMDFWNC4wMDE5Wk0xMSA0LjAwMTlIMTNWNi4wMDE5SDExVjQuMDAxOVpNNS40NzY1NyA1LjAwNTgxQzUuNTc3MDcgNS4wMDE4MSA1LjY3NjczIDUuMDI4OTggNS43NjE3MyA1LjA4MTk4TDkuNzYxNzMgNy41ODE5OEMxMC4wNzQ2IDcuNzc3ODggMTAuMDc0NiA4LjIzMzc0IDkuNzYxNzMgOC40Mjk2NEw1Ljc2MTczIDEwLjkyOTZDNS40Mjg2MyAxMS4xMzgzIDQuOTk2MDEgMTAuODk4OSA0Ljk5NjExIDEwLjUwNThWNS41MDU4MUM0Ljk5NTkxIDUuMjM3MTEgNS4yMDgwNyA1LjAxNjgxIDUuNDc2NTcgNS4wMDU4MVpNMS4wMDAwMSA3LjAwMTlIMy4wMDAwMVY5LjAwMTlIMS4wMDAwMVY3LjAwMTlaTTExIDcuMDAxOUgxM1Y5LjAwMTlIMTFWNy4wMDE5Wk0xLjAwMDAxIDEwLjAwMTlIMy4wMDAwMVYxMS45OTQxSDEuMDAwMDFWMTAuMDAxOVpNMTEgMTAuMDAxOUgxM1YxMS45OTQxSDExVjEwLjAwMTlaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo='));

















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

	if (event.target.closest('a.article_link')){window.bootlegger.grid.open_article()}
	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_next')){window.bootlegger.grid.load_next_page()}
	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_prev')){window.bootlegger.grid.load_prev_page()}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry:not(.cinema_ds_video_entry[autoplay])')){window.bootlegger.grid.maximize_video(event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry:not(.cinema_ds_video_entry[autoplay])'))}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry[autoplay]')){window.bootlegger.grid.maximize_video_autoplay(event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry[autoplay]'))}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry')){window.bootlegger.grid.maximize_image(event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry'))}
	if (event.target.closest('#cinema_ds_fullscreen:not(.noclick)')){$('body #cinema_ds_fullscreen').remove()}
	if (event.target.closest('.cinemads_page:not(.pg_active)')){window.bootlegger.grid.page_switch(event.target.closest('.cinemads_page:not(.pg_active)'))}


});


document.addEventListener('keydown', tr_event => {


	// ==========================================
	// 	grid grid
	// ==========================================

	if (event.target.closest('body')){window.bootlegger.grid.close_video_fullscreen(tr_event)}




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


document.addEventListener('contextmenu', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('.cinema_ds_img_entry, .cinema_ds_video_entry')){window.bootlegger.main.ban_msg(tr_event, event.target.closest('.cinema_ds_img_entry, .cinema_ds_video_entry'))}


});








if (!window.bootlegger.core){window.bootlegger.core={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.core){window.bootlegger.core={}};

window.print = console.log;
const obj_url = (window.URL || window.webkitURL);




const bandb = new Dexie('cinemads');
bandb.version(1).stores({
	bans: 'msgid'
});
console.log('Using Dexie v' + Dexie.semVer);



window.mein_sleep = {}

async function jsleep(amt=500, ref='a') {

	return new Promise(function(resolve, reject){
	    window.mein_sleep[ref] = setTimeout(function () {
			resolve(true)
	    }, amt);
	});
}

function rnd_interval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}


window.bootlegger.core.global_cache = []

window.bootlegger.core.banned = []


const media_types = {
	'image': [
		'image',
		'image/png',
		'image/jpeg',
		'image/webp',
		'image/gif',
		'image/x-ms-bmp',
		'png',
		'jpg',
		'jpeg',
		'bmp',
		'webp',
		'apng',
		'gif',
		'jfif'
	],
	'video': [
		'gifv',
		'video',
		'video/mp4',
		'video/quicktime',
		'mp4',
		'mov',
		'webm',
		'avi'
	]
}

const ok_codes = [...range(200, 300)]

window.bootlegger.core.buffer_to_url = function(buf){
	const blb = new Blob([buf], {});
	return obj_url.createObjectURL(blb)
}


window.bootlegger.core.fetch = function(params)
{
	print('input params:', params)
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
	const rq_url_clear = new obj_url(func_prms.url).no_search
	print('OBJECT KEY LENGTH', Object.keys(func_prms.url_params).length)
	const request_url = 
		((Object.keys(func_prms.url_params).length > 0) ? rq_url_clear : func_prms.url)
		+ 
		((Object.keys(func_prms.url_params).length > 0) ? `?${mk_url_params.toString()}` : '')

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
				anonymous: true,

				onload: function(response) {

					if (!ok_codes.includes(response.status)){
						resolve(false)
						return
					}


					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						print('current URK is', request_url)
						const fuckoff = (new URL(request_url)).target.suffix
						const blb = new Blob([response.response], {type: `image/${fuckoff}`});
						const mk_url = obj_url.createObjectURL(blb)
						window.bootlegger.core.global_cache.push(mk_url)
						resolve(mk_url)
					}
					if (func_prms.load_as == 'text'){
						const shite = response.responseText
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
				},

				onerror: function() {
					resolve(false)
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
				anonymous: true,

				binary: true,
				data: payload_buffer,

				onload: function(response) {

					if (!ok_codes.includes(response.status)){
						resolve(false)
						return
					}

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
				},

				onerror: function(response) {
					resolve(false)
				}
			}
			if (func_prms.add_cookie){
				rqprms['cookie'] = document.cookie
			}

			GM_xmlhttpRequest(rqprms)
		});
	}

}

window.bootlegger.core.fetch({
	'url':'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite'
})

const localStorage = {}
localStorage.setItem = function(item, value)
{
	GM_setValue(item, value)
}

localStorage.getItem = function(item)
{
	GM_getValue(item, null)
}


window.addEventListener('urlchange', (info) => window.bootlegger.main.url_switch_protocol());


if (!window.bootlegger.grid){window.bootlegger.grid={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.grid){window.bootlegger.grid={}};


window.bootlegger.grid.grid = null
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
		this.cache_size = 3

		this.pages = []

		print('initialized gridder')
		this.unlock_nav()

	}

	async load_page(msg_offs=null){
		if (this.alive != true || this.working == true){print('Page loader cant do shit:', 'class alive:', this.alive, 'working:', this.working);return}
		print('msg offs index', msg_offs)

		$('#cinema_ds_main_window #cinemads_pages').html(this.eval_pages(window.bootlegger.grid.current_page_index).join('\n'))
		$('#cinema_ds_main_window #cinemads_media_pool').empty()
		const pulled_cache = this.pull_page_from_cache(window.bootlegger.grid.current_page_index)

		this.traversing = true;
		this.lock_nav()
		const msgs = pulled_cache || await window.bootlegger.main.msg_traverser(this.chan_id, this.worker_alive, msg_offs, 56)
		this.qitems = msgs.media_units || msgs;
		this.unlock_nav()
		this.traversing = false;



		const cache_size = this.pages.reduce(function(sum, current){
			print('Counting cache...', current)
			sum += 1 ? current.cached == true : 0
			return sum
		}, 0)
		print('Cache size:', cache_size)
		if (cache_size > this.cache_size){
			for (let i = window.bootlegger.grid.current_page_index - this.cache_size ; i >= 0; i--) {
				this.del_page_from_cache(i)
			}
			for (let kil of range(window.bootlegger.grid.current_page_index + this.cache_size, this.pages.length)) {
				this.del_page_from_cache(kil)
			}
		}
		print('writing down last offset', msgs.last_id || this.pages[window.bootlegger.grid.current_page_index].offs)
		var page_cache = {
			'offs': msgs.last_id || this.pages[window.bootlegger.grid.current_page_index].offs,
			'cached': true,
			'media': {}
		}
		for (var future_cache of msgs.media_units || msgs){
			page_cache.media[future_cache.lizard_id] = future_cache
		}

		if (this.pages[window.bootlegger.grid.current_page_index]){
			this.pages[window.bootlegger.grid.current_page_index] = page_cache
		}else{
			this.pages.push(page_cache)
		}

		this.working = true;
		await window.bootlegger.main.media_queue_processor(this, this.worker_alive)
		this.working = false;

		return true
	}

	pull_page_from_cache(page_index){
		if (!this.pages[page_index]){return false}

		print('Pulling page from cache index', page_index)

		var standard_queue = []
		for (var med in this.pages[page_index].media){
			standard_queue.push(this.pages[page_index].media[med])
		}
		return standard_queue
	}

	del_page_from_cache(page_index){
		if (!this.pages[page_index]){return false}
		console.time(`Deleted page ${page_index} from cache`)
		for (var delcache in this.pages[page_index].media){
			if (delcache in window.bootlegger.main.media_cache){
				print('deleting', delcache, 'from cache', window.bootlegger.main.media_cache[delcache].attr('src'), window.bootlegger.main.media_cache[delcache].attr('fullsize'))
				obj_url.revokeObjectURL(window.bootlegger.main.media_cache[delcache].attr('src'))
				obj_url.revokeObjectURL(window.bootlegger.main.media_cache[delcache].attr('fullsize'))
				delete window.bootlegger.main.media_cache[delcache]
			}
		}
		this.pages[page_index].cached = false;
		console.timeEnd(`Deleted page ${page_index} from cache`)
	}

	eval_pages(active_page_index=null){

		const amt = 9
		const list = (amt % 2) ? (amt + 1) : amt

		const sides = Math.floor(list / 2)

		var result = []

		const pg_len = this.pages.length - 1

		result.push(`
			<div id="cinemads_page_prev">Prev</div>
		`)

		const frist_in_the_beginning = active_page_index > sides
		if (frist_in_the_beginning){
			result.push(`
				<div page_index="0" class="cinemads_page">0</div>
				<div class="cinemads_page_between">...</div>
			`)
		}
		print('Left side:', (active_page_index - sides).clamp(0, 65535), active_page_index)
		for (var pgl of range((active_page_index - sides).clamp(0, 65535), active_page_index)){
			if (!this.pages[pgl]){break}
			var p_index = pgl
			result.push(`
				<div page_index="${p_index}" class="cinemads_page">${p_index}</div>
			`)
		}
		result.push(`
			<div class="cinemads_page pg_active">${active_page_index}</div>
		`)
		print('Right side:', active_page_index, active_page_index + sides)
		for (var pgr of range(active_page_index + 1, active_page_index + sides)){
			if (!this.pages[pgr]){break}
			var p_index = pgr
			result.push(`
				<div page_index="${p_index}" class="cinemads_page">${p_index}</div>
			`)
		}
		if ((pg_len - active_page_index) > sides){
			result.push(`
				<div class="cinemads_page_between">...</div>
				<div page_index="${pg_len}" class="cinemads_page">${pg_len}</div>
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

		window.bootlegger.grid.current_page_index = pg_index

		this.load_page(this.pages[pg_index].offs)
	}

	next_page(initial=0){
		this.abort()

		this.unlock_nav()

		window.bootlegger.grid.current_page_index += 1
		print('Next page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1, 'got offset:', this.pages[window.bootlegger.grid.current_page_index - 1].offs)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	prev_page(initial=0){
		this.abort()

		this.unlock_nav()

		window.bootlegger.grid.current_page_index -= 1
		print('Prev page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	kill(){
		this.alive = false;
		this.worker_alive.alive = false;
		this.unlock_nav()

		this.traversing = true;
		this.working = true;

	}

	abort(){
		this.worker_alive.alive = false;
		this.worker_alive = {alive: true};
		this.working = false;
	}

	wipe_cache(){
		console.time('Wiped all pages cache')
		for (var page of this.pages){
			for (var wipe_media in page.media){
				if (!window.bootlegger.main.media_cache[wipe_media]){continue}
				obj_url.revokeObjectURL(window.bootlegger.main.media_cache[wipe_media].attr('src'))
				obj_url.revokeObjectURL(window.bootlegger.main.media_cache[wipe_media].attr('fullsize'))
			}
		}
		console.timeEnd('Wiped all pages cache')
	}

	lock_nav(){
		$('#cinemads_pages').addClass('nav_locked');
	}

	unlock_nav(){
		$('#cinemads_pages').removeClass('nav_locked');
	}
}


window.bootlegger.grid.reset = function(){
	window.bootlegger.grid.grid.wipe_cache()
	window.bootlegger.grid.grid.kill()
	window.bootlegger.grid.current_page_index = 0
	window.bootlegger.grid.grid = new gridmaker()
}


window.bootlegger.grid.load_next_page = function(){
	window.bootlegger.grid.grid.next_page()
}

window.bootlegger.grid.load_prev_page = function(){
	window.bootlegger.grid.grid.prev_page()
}

window.bootlegger.grid.maximize_image = async function(tgt){
	$('body #cinema_ds_fullscreen').remove()
	$('body').append(`<div id="cinema_ds_fullscreen" src=""></div>`)
	var media_full = null;
	if (tgt.getAttribute('full_as_thumb') == 'true'){
		var media_full = tgt.getAttribute('src')
	}else{
		var media_full = await window.bootlegger.core.fetch({
			'url': tgt.getAttribute('fullsize'),
			'method': 'GET',
			'load_as': 'blob_url'
		})
	}

	$('body #cinema_ds_fullscreen').replaceWith(`<img id="cinema_ds_fullscreen" src="${media_full}">`)
}

window.bootlegger.grid.maximize_video = function(tgt){
	$('body #cinema_ds_fullscreen').remove()
	$('body').append(`<video id="cinema_ds_fullscreen" class="noclick" controls src="${tgt.getAttribute('src')}"></video>`)
}

window.bootlegger.grid.maximize_video_autoplay = function(tgt){
	$('body #cinema_ds_fullscreen').remove()
	$('body').append(`<video id="cinema_ds_fullscreen" loop muted autoplay src="${tgt.getAttribute('src')}"></video>`)
}


window.bootlegger.grid.chan_switch = function()
{
	window.bootlegger.grid.reset()
	while (window.bootlegger.core.global_cache.length >= 1){
		obj_url.revokeObjectURL(window.bootlegger.core.global_cache[0])
		window.bootlegger.core.global_cache.shift()
	}

	if (document.body.getAttribute('cnds_shown') == 'yes'){
		window.bootlegger.grid.grid.load_page(null)
	}
}


window.bootlegger.grid.init = function(){
	if (!window.bootlegger.grid.grid){
		window.bootlegger.grid.grid = new gridmaker()
		print('created new grid')
		window.bootlegger.grid.grid.load_page(null)
		window.bootlegger.main.url_switch_protocol = window.bootlegger.grid.chan_switch
	}
}

window.bootlegger.grid.page_switch = function(pgi){
	window.bootlegger.grid.grid.page_switch(int(pgi.getAttribute('page_index')))
}

window.bootlegger.grid.close_video_fullscreen = function(evt){
	if (evt.keyCode == 27){
		const kill = document.getElementById('cinema_ds_fullscreen')
		if (kill){
			kill.remove()
		}
	}
}
if (!window.bootlegger.main){window.bootlegger.main={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.main){window.bootlegger.main={}};



window.bootlegger.main.media_cache = {}


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
		window.bootlegger.grid.init()
	}
}

window.bootlegger.main.buffer_equal = function(buf1, buf2)
{
	if (buf1.byteLength != buf2.byteLength) return false;
	var dv1 = new Int8Array(buf1);
	var dv2 = new Int8Array(buf2);
	for (var i = 0 ; i != buf1.byteLength ; i++){
		if (dv1[i] != dv2[i]) return false;
	}
	return true;
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


window.bootlegger.main.open_article = function(evt, elem)
{
	evt.preventDefault();
	window.open(elem.href)
}



window.bootlegger.main.mask_referer = function(link)
{
	const mask_referer = (
		link.includes('media.discordapp.net')
		||
		link.includes('discord.com')
		||
		link.includes('cdn.discordapp.com')
		||
		link.includes('discordapp.com')
		||
		link.includes('discordapp.net')
		||
		link.includes('cdn.discordapp')
	)

	const referer = mask_referer ? 'https://www.reddit.com/' : (new obj_url(link)).origin

	return referer
}

window.bootlegger.main.media_processor.video = async function(msg, as_embed=false, looped_mute=false)
{
	print('Spawning a video...', msg, as_embed, looped_mute)
	if (as_embed == true){
		var media_url = msg.video.url
	}else{
		var media_url = msg.url
	}

	print('mask referer true for', media_url)
	var media_bytes = await window.bootlegger.core.fetch({
		'url': media_url,
		'method': 'GET',
		'load_as': 'blob_url',
		'headers': {
			'referer': window.bootlegger.main.mask_referer(media_url),
		}
	})
	print('Got video Blob URL', media_bytes)

	if (media_bytes === false){
		print('First request failed, retrying with fullsize link')
		obj_url.revokeObjectURL(media_bytes)
		var media_bytes = await window.bootlegger.core.fetch({
			'url': fullsize_link,
			'method': 'GET',
			'load_as': 'blob_url',
			'headers': {
				'referer': window.bootlegger.main.mask_referer(blob_src),
			}
		})
		print('retry result:', media_bytes)
	}


	return $(`
		<div 
			class="cinema_ds_video_entry"
			${looped_mute ? 'loop muted autoplay' : ''}
			lizard_id="${msg.lizard_id}"
			src="${media_bytes}"
			blob_src="${media_url}"
			src_msg_id="${msg.ds_id}"
			download="${(new URL(media_url)).pathname.split('/').at(-1)}"
		>
			${msg.type == 'article' ? `<a target="_blank" href="${msg.original_url}" class="article_link">${btg.link_icon}</a>` : ''}
			<video
				${looped_mute ? 'loop muted autoplay' : ''}
				src="${media_bytes}">
			</video>
			${!looped_mute ? `<div class="video_icon">${btg.video_icon}</div>` : ''}
		</div>
	`);
}

window.bootlegger.main.media_processor.image = async function(msg, as_url=false, use_thumb=true)
{
	print('Spawning an image:', msg, as_url)

	var as_thumb = null
	var url_prms = {}
	if (!!msg.thumbnail && use_thumb == true){
		if (msg.thumbnail.width > 400){
			const factor = msg.thumbnail.width / 400
			url_prms['width'] = 400
			url_prms['height'] = Math.round(msg.thumbnail.height / factor)
			as_thumb = msg.thumbnail.proxy_url
		}
	}

	const blob_src = as_url ? msg : as_thumb || msg.url
	const fullsize_link = as_url ? msg : msg.url

	
	var media_bytes = await window.bootlegger.core.fetch({
		'url': blob_src,
		'method': 'GET',
		'load_as': 'blob_url',
		'url_params': url_prms,
		'headers': {
			'referer': window.bootlegger.main.mask_referer(blob_src),
		}
	})
	print('Got image Blob URL:', media_bytes)

	if (media_bytes === false){
		print('First request failed, retrying with fullsize link')
		obj_url.revokeObjectURL(media_bytes)
		var media_bytes = await window.bootlegger.core.fetch({
			'url': fullsize_link,
			'method': 'GET',
			'load_as': 'blob_url',
			'url_params': url_prms,
			'headers': {
				'referer': window.bootlegger.main.mask_referer(blob_src),
			}
		})
		print('retry result:', media_bytes)
	}


	return $(`
		<div 
			class="cinema_ds_img_entry"
			lizard_id="${msg.lizard_id}"
			src="${media_bytes}"
			draggable="false"
			blob_src="${blob_src}"
			fullsize="${fullsize_link}"
			src_msg_id="${msg.ds_id}"
			full_as_thumb="${fullsize_link == blob_src}"
		>
			${msg.type == 'article' ? `<a target="_blank" href="${msg.original_url}" class="article_link">${btg.link_icon}</a>` : ''}
			<img src="${media_bytes}">
		</div>
	`);
}

window.bootlegger.main.media_processor.imgur_album = async function(msg, break_signal={}, imgur_link)
{

	const album_id = new obj_url(imgur_link)

	const raw_list = await window.bootlegger.core.fetch({
		'url': `https://imgur.com/a/${album_id.target.name}/layout/blog`,
		'method': 'GET',
		'load_as': 'text'
	})

	const regexp = /\{\"hash\":\"([\w\d]*)\"\,\"title\".*?\"ext\"\:\"(\.jpg|.png|.gif|.gifv|.mp4)\".*?\}/g;
	const url_pairs = raw_list.matchAll(regexp);
	var imgs = []
	var fuck_imgur = []
	for (let match of url_pairs) {
		if (break_signal.alive != true){return}

		var imglink = match[1] + match[2]
		var placeholder = window.bootlegger.main.spawn_placeholder()
		var imgbytes = await window.bootlegger.core.fetch({
			'url': `https://i.imgur.com/${imglink}`,
			'method': 'GET',
			'load_as': 'buffer_raw'
		})
		if (break_signal.alive != true){return}

		var dicks = false
		for (let fuckoff of fuck_imgur){
			if (window.bootlegger.main.buffer_equal(fuckoff, imgbytes) == true){
				var dicks = true
				placeholder.remove()
				break
			}
		}
		if (dicks == true){continue}
		fuck_imgur.push(imgbytes)

		imgbytes = window.bootlegger.core.buffer_to_url(imgbytes)

		placeholder.replaceWith(`
			<div 
				class="cinema_ds_img_entry"
				lizard_id="${msg.lizard_id}"
				src="${imgbytes}"
				draggable="false"
				blob_src="${imglink}"
				fullsize="${imgbytes}"
				src_msg_id="${msg.ds_id}"
				full_as_thumb="true"
			>
				<img src="${imgbytes}">
			</div>
		`)
	}

	return true

}

window.bootlegger.main.spawn_placeholder = function()
{
	const placeholder = $(`<img class="cinema_ds_img_entry placeholder">`)
	$('#cinema_ds_main_window #cinemads_media_pool').prepend(placeholder)
	return placeholder
}


window.bootlegger.main.msg_processor = async function(msg, break_signal={})
{

	const as_emb = msg.lizard_type == 'embed';
	const media_type_key = as_emb ? 'type' : 'content_type';
	if (!as_emb && !msg[media_type_key]){
		const mk_ext = new obj_url(msg.url) 
		msg[media_type_key] = mk_ext.target.suffix
	}
	print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);

	const this_channel = (new obj_url(window.location.href)).target.name
	const msg_banned = await window.bootlegger.msgban.msg_is_banned(`${this_channel}/${msg.ds_id}`)
	if (msg_banned){
		return
	}





	if (msg.lizard_type == 'embed'){
		if (msg.url.lower().includes('imgur.com/a')){
			await window.bootlegger.main.media_processor.imgur_album(msg, break_signal, msg.url)
			return true
		}
	}

	if (media_types.image.includes(msg[media_type_key])){
		msg['thumbnail'] = {}
		msg.thumbnail['width'] = msg.width
		msg.thumbnail['height'] = msg.height
		msg.thumbnail['proxy_url'] = msg.proxy_url
		msg.thumbnail['url'] = msg.url
		var placeholder = window.bootlegger.main.spawn_placeholder()
		const elem = await window.bootlegger.main.media_processor.image(msg)
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		window.bootlegger.main.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

	if (media_types.video.includes(msg[media_type_key])){
		var placeholder = window.bootlegger.main.spawn_placeholder()
		await jsleep(rnd_interval(0, 137))
		const elem = await window.bootlegger.main.media_processor.video(msg, as_emb, msg[media_type_key] == 'gifv')
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		window.bootlegger.main.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}


	if (msg[media_type_key] == 'article' && msg.thumbnail){
		msg.url = msg.thumbnail.url
		var placeholder = window.bootlegger.main.spawn_placeholder()
		const elem = await window.bootlegger.main.media_processor.image(msg)
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		window.bootlegger.main.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

}




window.bootlegger.main.url_switch_protocol = function(){
	print('url switch protocol empty')
}




window.bootlegger.main.get_messages = async function(chan_id, before=null, after=null)
{
	return new Promise(function(resolve, reject){
		var input_prms = {
			'limit': 50
		}
		if (before || after){
			input_prms[before ? 'before' : 'after'] = before || after
		}
		const urlParams = new URLSearchParams(input_prms);
		const super_props = {
			'os': 'Windows',
			'browser': 'Chrome',
			'device': '',
			'system_locale': 'en-US',
			'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
			'browser_version': '107.0.0.0',
			'os_version': '10',
			'referrer':'https://discord.com/',
			'referring_domain': 'discord.com',
			'referrer_current': '',
			'referring_domain_current': '',
			'release_channel': 'stable',
			'client_build_number': window.bootlegger.core.app_ver || null,
			'client_event_source': null
		}
		fetch(`https://discord.com/api/v9/channels/${chan_id}/messages?${urlParams.toString()}`, {
			'headers': {
				'accept': '*/*',
				'cache-control': 'no-cache',
				'pragma': 'no-cache',
				'authorization': ds_token,
				'cookie': document.cookie,
				'x-super-properties': lizard.btoa(JSON.stringify(super_props)),
				'x-debug-options': 'bugReporterEnabled',
				'x-discord-locale': document.documentElement.lang
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
		const interval = rnd_interval(139, 247)
		await jsleep(interval)
		print('Getting 50 messages...', 'wifite', interval)
		var messages = await window.bootlegger.main.get_messages(current_chan_id, last_msg_id)
		if (messages.length <= 0){break}
		print('Got 50<= messages...', messages)
		var last_msg_id = messages.at(-1).id
		const tgt_chan = (new obj_url(window.location.href)).target.name
		for (var msg of messages){
			total_msgs_scanned += 1
			var msg_banned = await window.bootlegger.msgban.msg_is_banned(`${tgt_chan}/${msg.id}`)
			if ((msg.attachments.length <= 0 && msg.embeds.length <= 0) || msg_banned == true){continue}

			msg.attachments = msg.attachments.map(function sex(m){
				m.lizard_type = 'attachment'
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				return m
			})

			var entries_combined = msg.attachments.concat(msg.embeds)
			for (var embed of entries_combined){
				print('treating embed', embed)


				embed.original_url = embed.url
				embed.ds_id = msg.id

				if (embed.provider){
					if (embed.provider.name.lower() == 'youtube'){
						continue
					}
				}

				embed.lizard_id = lizard.rndwave(32)
				found_msgs.push(embed)
				print('found embed', embed)
			}
		}
	}

	return {'media_units': found_msgs, 'last_id': last_msg_id}
}



window.bootlegger.main.media_queue_processor = async function(media_queue, break_signal={}, callback_func=null, wait=false)
{
	print('Processing media queue', media_queue.qitems)
	if (break_signal.alive != true){return []}

	var media_items = []

	const this_channel = (new obj_url(window.location.href)).target.name

	while (break_signal.alive){
		var current_msg = media_queue.qitems[0];
		print('Processing a message...', current_msg);
		if (!current_msg){print('invalid message', current_msg);break}

		if (current_msg.lizard_id in window.bootlegger.main.media_cache && !window.bootlegger.core.banned.includes(`${this_channel}/${current_msg.ds_id}`)){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(window.bootlegger.main.media_cache[current_msg.lizard_id])
			media_queue.qitems.shift()
			continue
		}

		if (wait == true){
			await window.bootlegger.main.msg_processor(current_msg, break_signal)
		}else{
			window.bootlegger.main.msg_processor(current_msg, break_signal)
		}

		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue, cache storage length:', Object.keys(window.bootlegger.main.media_cache).length);

	return media_items
}



window.bootlegger.main.ban_msg = async function(evt, msg){
	if (evt.altKey){
		evt.preventDefault()
		const tgt_chan = new obj_url(window.location.href)
		const msg_path = `${tgt_chan.target.name}/${msg.getAttribute('src_msg_id')}`
		window.bootlegger.msgban.ban_msg(msg_path)
		window.bootlegger.core.banned.push(msg_path)
		msg.remove()
	}
}

if (!window.bootlegger.msgban){window.bootlegger.msgban={}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.msgban){window.bootlegger.msgban={}};



window.bootlegger.msgban.ban_msg = async function(msg_path=null){
	const banned = await bandb.bans.put({msgid: msg_path});
}

window.bootlegger.msgban.msg_is_banned = async function(msg_path=null){
	const isbanned = await bandb.bans.get({msgid: msg_path})
	if (isbanned){
		return true
	}else{
		return false
	}
}

