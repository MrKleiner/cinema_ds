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
// @version      0.19
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
// @license 	 MIT
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
				return inp.length
			} catch (error) {
				return str(inp).length
			}
		}

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


	};

	get info() {
		return `Lizard's toybox. Version 0.38`
	};






















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
	var cssb64 = `LyogY3lyaWxsaWMtZXh0ICovCkBmb250LWZhY2UgewogIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubyc7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgZm9udC1kaXNwbGF5OiBzd2FwOwogIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pYm1wbGV4bW9uby92MTIvLUY2M2ZqcHRBZ3Q1Vk0ta1ZrcWR5VThuMWlJcTEyOWsud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjsKfQovKiBjeXJpbGxpYyAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpc3ExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7Cn0KLyogdmlldG5hbWVzZSAqLwpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nOwogIGZvbnQtc3R5bGU6IG5vcm1hbDsKICBmb250LXdlaWdodDogNDAwOwogIGZvbnQtZGlzcGxheTogc3dhcDsKICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaWJtcGxleG1vbm8vdjEyLy1GNjNmanB0QWd0NVZNLWtWa3FkeVU4bjFpQXExMjlrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7CiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjsKfQovKiBsYXRpbi1leHQgKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaUVxMTI5ay53b2ZmMikgZm9ybWF0KCd3b2ZmMicpOwogIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7Cn0KLyogbGF0aW4gKi8KQGZvbnQtZmFjZSB7CiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJzsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBmb250LWRpc3BsYXk6IHN3YXA7CiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2libXBsZXhtb25vL3YxMi8tRjYzZmpwdEFndDVWTS1rVmtxZHlVOG4xaThxMXcud29mZjIpIGZvcm1hdCgnd29mZjInKTsKICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEOwp9CmJvZHkgI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7CglkaXNwbGF5OiBub25lOwp9CgoKYm9keVtjbmRzX3Nob3duPSd5ZXMnXSAuY2hhdC0yWmZqb0kgLmNvbnRlbnQtMWpReTJsCnsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKCmJvZHlbY25kc19zaG93bj0neWVzJ10gI2NpbmVtYV9kc19tYWluX3dpbmRvdwp7Cglwb3NpdGlvbjogYWJzb2x1dGU7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJYmFja2dyb3VuZDogIzM2MzkzZjsKCXotaW5kZXg6IDY1NTM1Owp9Cgpib2R5W2NuZHNfc2hvd249J3llcyddICNjaW5lbWFfZHNfbWFpbl93aW5kb3c6OmJlZm9yZQp7Cgljb250ZW50OiAnJzsKCXBvc2l0aW9uOiBhYnNvbHV0ZTsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAycHg7Cgl0b3A6IDBweDsKCWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7CgliYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDEwMCUpOwoJYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgMTAwJSk7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19zdGF0cwp7Cgljb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOwoJcG9zaXRpb246IGFic29sdXRlOwoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDIwcHg7Cglmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7CiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgKi8KICAgIGRpc3BsYXk6IGZsZXg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwogICAgLyogdGV4dC1hbGlnbjogZW5kOyAqLwogICAgLyogcGFkZGluZy1sZWZ0OiAzMzZweDsgKi8KICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi8KICAgIHdpZHRoOiA5NSU7Cn0KCgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19tZWRpYV9wb29sCnsKCWRpc3BsYXk6IGJsb2NrOwoJLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovCgkvKmZsZXgtZ3JvdzogMTsqLwoJb3ZlcmZsb3cteTogc2Nyb2xsOwoJaGVpZ2h0OiBpbmhlcml0OwoKCn0KCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzCnsKCXVzZXItc2VsZWN0OiBub25lOwoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiByb3c7CglhbGlnbi1pdGVtczogY2VudGVyOwoJanVzdGlmeS1jb250ZW50OiBjZW50ZXI7CglwYWRkaW5nOiAxMHB4OwoJY29sb3I6IHdoaXRlOwp9CgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAuY2luZW1hZHNfcGFnZSwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfcHJldiwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfbmV4dAp7CglwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsKCW9wYWNpdHk6IDAuNTsKfQoKI2NpbmVtYWRzX3BhZ2VzIC5wZ19hY3RpdmUsCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzICNjaW5lbWFkc19wYWdlX3ByZXYsCiNjaW5lbWFfZHNfbWFpbl93aW5kb3cgI2NpbmVtYWRzX3BhZ2VzICNjaW5lbWFkc19wYWdlX25leHQKewoJb3BhY2l0eTogMSAhaW1wb3J0YW50Owp9CgojY2luZW1hX2RzX21haW5fd2luZG93ICNjaW5lbWFkc19wYWdlcyAuY2luZW1hZHNfcGFnZTpob3ZlciwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfcHJldjpob3ZlciwKI2NpbmVtYV9kc19tYWluX3dpbmRvdyAjY2luZW1hZHNfcGFnZXMgI2NpbmVtYWRzX3BhZ2VfbmV4dDpob3Zlcgp7CgliYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7Cn0KCgojY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX3ZpZGVvX2VudHJ5LCAjY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX2ltZ19lbnRyeQp7CglkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cglwb3NpdGlvbjogcmVsYXRpdmU7CgkvKm9iamVjdC1maXQ6IGNvbnRhaW47Ki8KCS8qaGVpZ2h0OiA2MCU7Ki8KCS8qd2lkdGg6IGZpdC1jb250ZW50OyovCgkvKm1heC13aWR0aDogODAlOyovCgl3aWR0aDogMTU0cHg7CgloZWlnaHQ6IDEwcmVtOwoJLypoZWlnaHQ6IGF1dG87Ki8KCW1heC1oZWlnaHQ6IDEwcmVtOwoJbWFyZ2luOiAyMHB4OwoJdmVydGljYWwtYWxpZ246IHRleHQtdG9wOwp9CgojY2luZW1hZHNfbWVkaWFfcG9vbCAuY2luZW1hX2RzX3ZpZGVvX2VudHJ5CnsKCWRpc3BsYXk6IGlubGluZS1ibG9jazsKfQoKI2NpbmVtYWRzX21lZGlhX3Bvb2wgLmNpbmVtYV9kc19pbWdfZW50cnkgaW1nCnsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJb2JqZWN0LWZpdDogY29udGFpbjsKCS8qaGVpZ2h0OiBhdXRvOyovCgltYXgtaGVpZ2h0OiAxMHJlbTsKfQoKI2NpbmVtYWRzX21lZGlhX3Bvb2wgLmNpbmVtYV9kc192aWRlb19lbnRyeSB2aWRlbwp7Cgl3aWR0aDogMTAwJTsKCWhlaWdodDogMTAwJTsKCW9iamVjdC1maXQ6IGNvbnRhaW47CgltYXgtaGVpZ2h0OiAxMHJlbTsKCW9iamVjdC1wb3NpdGlvbjogY2VudGVyOwp9CgouY2luZW1hX2RzX3ZpZGVvX2VudHJ5IC52aWRlb19pY29uCnsKCXBvc2l0aW9uOiBhYnNvbHV0ZTsKCXRvcDogMHB4OwoJbGVmdDogMHB4OwoJd2lkdGg6IDMwcHg7CgloZWlnaHQ6IDMwcHg7CgltYXJnaW46IDNweDsKfQoKLmNpbmVtYV9kc192aWRlb19lbnRyeSAudmlkZW9faWNvbiBzdmcKewoJd2lkdGg6IDEwMCU7CgloZWlnaHQ6IDEwMCU7Cn0KCgouY2luZW1hX2RzX2ltZ19lbnRyeS5wbGFjZWhvbGRlcgp7CgloZWlnaHQ6IDEwcmVtOwoJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpOwp9CgoKI2NpbmVtYV9kc19mdWxsc2NyZWVuCnsKCXBvc2l0aW9uOiBmaXhlZDsKCXdpZHRoOiAxMDAlOwoJaGVpZ2h0OiAxMDAlOwoJei1pbmRleDogMjE0NzQ4MzY0OwoJb2JqZWN0LWZpdDogY29udGFpbjsKCW9iamVjdC1wb3NpdGlvbjogY2VudGVyOwoJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpOwoJYmFja2Ryb3AtZmlsdGVyOiBibHVyKDlweCk7Cn0KCgoKCgo=`;
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
	const rq_url_clear = new obj_url(func_prms.url).no_search
	const request_url = 
		rq_url_clear ? (func_prms.url_params != {}) : func_prms.url
		+ 
		((func_prms.url_params != {}) ? `?${mk_url_params.toString()}` : '')

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
		this.cache_size = 5

		this.pages = []

		print('initialized gridder')

	}

	async load_page(msg_offs=null){
		if (this.alive != true || this.working == true){print('Page loader cant do shit:', 'class alive:', this.alive, 'working:', this.working);return}
		print('msg offs index', msg_offs)

		$('#cinema_ds_main_window #cinemads_pages').html(this.eval_pages(window.bootlegger.grid.current_page_index).join('\n'))
		$('#cinema_ds_main_window #cinemads_media_pool').empty()
		const pulled_cache = this.pull_page_from_cache(window.bootlegger.grid.current_page_index)

		this.traversing = true;
		console.log('Lock nav')
		const msgs = pulled_cache || await window.bootlegger.main.msg_traverser(this.chan_id, this.worker_alive, msg_offs, 56)
		this.qitems = msgs.media_units || msgs;
		console.log('unlock nav')
		console.log('Pages:', this.pages)
		this.traversing = false;



		const cache_size = this.pages.reduce(function(sum, current){
			print('Counting cache...', current)
			sum += 1 ? current.cached == true : 0
			return sum
		}, 0)
		print('Cache size:', cache_size)
		if (cache_size > this.cache_size){
			this.del_page_from_cache(window.bootlegger.grid.current_page_index - this.cache_size)
		}
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
	console.log('pull shit from cache ???', page_index)

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

		window.bootlegger.grid.current_page_index += 1
		print('Next page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	prev_page(initial=0){
		this.abort()

		window.bootlegger.grid.current_page_index -= 1
		print('Prev page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1)
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
		<div 
			class="cinema_ds_video_entry"
			${looped_mute ? 'loop muted autoplay' : ''}
			lizard_id="${msg.lizard_id}"
			src="${media_bytes}"
			blob_src="${media_url}"
			src_msg_id="${msg.ds_id}"
			download="${(new URL(media_url)).pathname.split('/').at(-1)}"
		>
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

	
	const media_bytes = await window.bootlegger.core.fetch({
		'url': blob_src,
		'method': 'GET',
		'load_as': 'blob_url',
		'url_params': url_prms
	})

	print('Got image Blob URL:', media_bytes)

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
			<img src="${media_bytes}">
		</div>
	`);
}


window.bootlegger.main.url_switch_protocol = function(){
	print('url switch protocol empty')
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
				m.ds_id = msg.id
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				m.ds_id = msg.id
				return m
			})

			for (var embed of msg.attachments.concat(msg.embeds)){
				print('treating embed', embed)


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

window.bootlegger.main.cache_item = function(elem, id){

}


window.bootlegger.main.media_queue_processor = async function(media_queue, break_signal, callback_func=null, waits=true)
{
	if (window.bootlegger.grid.current_page_index >= 25){
		var wait = false
	}else{
		var wait = false
	}
	print('Processing media queue', media_queue.qitems)
	if (break_signal.alive != true){return []}

	var media_items = []

	while (break_signal.alive){
		var current_msg = media_queue.qitems[0];
		print('Processing a message...', current_msg);
		if (!current_msg){break}

		if (current_msg.lizard_id in window.bootlegger.main.media_cache){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(window.bootlegger.main.media_cache[current_msg.lizard_id])
			media_queue.qitems.shift()
			continue
		}

		var as_emb = current_msg.lizard_type == 'embed'
		var media_type_key = as_emb ? 'type' : 'content_type'

		print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);


		if (media_types.image.includes(current_msg[media_type_key])){
			current_msg['thumbnail'] = {}
			current_msg.thumbnail['width'] = current_msg.width
			current_msg.thumbnail['height'] = current_msg.height
			current_msg.thumbnail['proxy_url'] = current_msg.proxy_url
			current_msg.thumbnail['url'] = current_msg.url
			var elem = window.bootlegger.main.media_processor.image(current_msg)
		}
		if (media_types.video.includes(current_msg[media_type_key])){
			var elem = window.bootlegger.main.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
		}
		if (current_msg[media_type_key] == 'article' && current_msg.thumbnail){
			current_msg.url = current_msg.thumbnail.url
			var elem = window.bootlegger.main.media_processor.image(current_msg)
		}


		if (break_signal.alive != true){break}

		if (elem){
			if (wait == true){
				const media_unit = await elem
				if (break_signal.alive != true){break}
				if (callback_func) {callback_func(media_unit)}
				media_items.push(media_unit)
				window.bootlegger.main.media_cache[media_unit.attr('lizard_id')] = media_unit
				$('#cinema_ds_main_window #cinemads_media_pool').prepend(media_unit)

			}else{

				const placeholder = $(`<img class="cinema_ds_img_entry placeholder">`)
				$('#cinema_ds_main_window #cinemads_media_pool').prepend(placeholder)
				elem
				.then(function(media_unit) {
					if (break_signal.alive != true){return media_items}
					
					if (callback_func) {callback_func(media_unit)}
					media_items.push(media_unit)
					window.bootlegger.main.media_cache[media_unit.attr('lizard_id')] = media_unit
					placeholder.replaceWith(media_unit)
				});
			}
		}

		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue');

	return media_items
}