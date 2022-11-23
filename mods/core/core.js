
// rebinds
// python-like stuff
// window.print = console.log;
// important note: this plugin shits A LOT of logs, which take A LOT of RAM
// this is why there's a switch to mute them
window.print = function(){};
const obj_url = (window.URL || window.webkitURL);


// important todo:
// discord message fetching methods:
// before
// after
// around
// {NONE} = load latest



//
// Init banned messages database
//
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


// todo: temp solution for flushing cache globally
// this variable simply stores every single blob url created by the bootleg fetch
$this.global_cache = []


// It'd be extremely stupid to call the database when spawning cached items
// as this would take an insanely large amount of time
// The only way to avoid this is caching message IDs banned during this session
// inside an array which could be accessed quickly
$this.banned = []


// Basically, these types have a guaranteed support in the system.
// Everything else is skipped due to the fact that it's impossible to properly evaluate
// types with no guaranteed support
const media_types = {
	'image': [
		'image',
		'image/png',
		'image/jpeg',
		'image/webp',
		'image/gif',
		'image/x-ms-bmp',
		'image/avif',
		'avif',
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

// mime types of certain file formats
// this is ONE OF the solutions for blobs having invalid file name when saved with RMB
const media_types_mimes = {
	'mov': 'video/quicktime',
	'aac': 'audio/aac',
	'abw': 'application/x-abiword',
	'arc': 'application/x-freearc',
	'avif': 'image/avif',
	'avi': 'video/x-msvideo',
	'azw': 'application/vnd.amazon.ebook',
	'bin': 'application/octet-stream',
	'bmp': 'image/bmp',
	'bz': 'application/x-bzip',
	'bz2': 'application/x-bzip2',
	'cda': 'application/x-cdf',
	'csh': 'application/x-csh',
	'css': 'text/css',
	'csv': 'text/csv',
	'doc': 'application/msword',
	'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'eot': 'application/vnd.ms-fontobject',
	'epub': 'application/epub+zip',
	'gz': 'application/gzip',
	'gif': 'image/gif',
	'htm': 'text/html',
	'html': 'text/html',
	'ico': 'image/vnd.microsoft.icon',
	'ics': 'text/calendar',
	'jar': 'application/java-archive',
	'jpeg': 'image/jpeg',
	'jfif': 'image/jpeg',
	'jpg': 'image/jpeg',
	'js': 'text/javascript',
	'json': 'application/json',
	'jsonld': 'application/ld+json',
	'mid': 'audio/midi audio/x-midi',
	'midi': 'audio/midi audio/x-midi',
	'mjs': 'text/javascript',
	'mp3': 'audio/mpeg',
	'mp4': 'video/mp4',
	'mpeg': 'video/mpeg',
	'mpkg': 'application/vnd.apple.installer+xml',
	'odp': 'application/vnd.oasis.opendocument.presentation',
	'ods': 'application/vnd.oasis.opendocument.spreadsheet',
	'odt': 'application/vnd.oasis.opendocument.text',
	'oga': 'audio/ogg',
	'ogv': 'video/ogg',
	'ogx': 'application/ogg',
	'opus': 'audio/opus',
	'otf': 'font/otf',
	'png': 'image/png',
	'apng': 'image/apng',
	'pdf': 'application/pdf',
	'php': 'application/x-httpd-php',
	'ppt': 'application/vnd.ms-powerpoint',
	'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	'rar': 'application/vnd.rar',
	'rtf': 'application/rtf',
	'sh': 'application/x-sh',
	'svg': 'image/svg+xml',
	'tar': 'application/x-tar',
	'tif': 'image/tiff',
	'tiff': 'image/tiff',
	'ts': 'video/mp2t',
	'ttf': 'font/ttf',
	'txt': 'text/plain',
	'vsd': 'application/vnd.visio',
	'wav': 'audio/wav',
	'weba': 'audio/webm',
	'webm': 'video/webm',
	'webp': 'image/webp',
	'woff': 'font/woff',
	'woff2': 'font/woff2',
	'xhtml': 'application/xhtml+xml',
	'xls': 'application/vnd.ms-excel',
	'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'xml': 'application/xml',
	'xul': 'application/vnd.mozilla.xul+xml',
	'zip': 'application/zip',
	'3gp': 'video/3gpp; audio/3gpp',
	'3g2': 'video/3gpp2; audio/3gpp2',
	'7z': 'application/x-7z-compressed'
}

// FUUUUUUUUUUUUUUUUUUUUUUUUU
// important todo: Tampermonkey offers proper js Fetch...
// Even though it's in beta stage - it's probably mostly fine
// this variable stores the entire range of the OK response codes
const ok_codes = [...range(200, 300)]


// converts any buffer to object URL
$this.buffer_to_url = function(buf){
	const blb = new Blob([buf], {});
	return obj_url.createObjectURL(blb)
}


// ================================================================
// Use tampermonkey API to bypass the retarded CORS rubbish
// ================================================================

// load_as 		: blob|blob_url|text|json|buffer|buffer_raw
// add_cookie 	: whether to add the current document cookie or not
// url 			: the request URL
// headers 		: additional headers for the request
// url_params 	: a key:value dict which is added as URL params to the final url. Wipes any existing params in the input URL, if used
// bin 			: data payload when using the POST method

// fun fact: this function doesn't do what it was supposed to do (historically, this doesnt matter now)
$this.fetch = function(params)
{
	print('input params:', params)
	// fuck, too bad js doesn't accept function parameters the same way python does
	const func_prms = {
		'url': params.url,
		'method': params.method || 'GET',
		'load_as': params.load_as || 'text',
		'headers': params.headers || {},
		'add_cookie': (params.add_cookie === false) ? false : true,
		'url_params': params.url_params || {},
		'bin': params.bin || ''
	}

	// Construct request URL
	// URL params
	const mk_url_params = new URLSearchParams(func_prms.url_params);
	// wipe any parameters from the input url, if any custom parameters were defined
	const rq_url_clear = new obj_url(func_prms.url).no_search
	// Collapse into final
	// nothing is added if the url params dict is empty
	// todo: is it really neccessary to spam brackets like that ?
	print('OBJECT KEY LENGTH', Object.keys(func_prms.url_params).length)
	const request_url = 
		((Object.keys(func_prms.url_params).length > 0) ? rq_url_clear : func_prms.url)
		+ 
		((Object.keys(func_prms.url_params).length > 0) ? `?${mk_url_params.toString()}` : '')

	// Default headers
	const default_headers = {
		'Accept': '*/*',
		// it's again unclear whether it puts any default headers or not
		'User-Agent': window.navigator.userAgent
	}
	// merge default headers and additional ones
	// this action overwrites the default ones in case of any conflicts
	const mkheader = Object.assign({}, default_headers, func_prms.headers)


	//
	// execute the request according to type
	//

	if (func_prms.method.lower() == 'get'){
		return new Promise(function(resolve, reject){
			// request params
			const rqprms = {
				method: 'GET',
				url: request_url,
				headers: mkheader,
				nocache: true,
				responseType: 'arraybuffer',
				anonymous: true,

				// todo: separate this function?
				onload: function(response) {

					// TODO
					// FUCK: onerror only triggers on network error, like no internet....
					// it doesn't fucking care about response codes...
					if (!ok_codes.includes(response.status)){
						resolve(false)
						return
					}

					// const rsp_buffer = response.response

					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						// get file extension of the target
						const file_ext = (new URL(request_url)).target.suffix
						// create a blob of certain type (use mime types dict to match the file format)
						const blb = new Blob([response.response], {type: (media_types_mimes[file_ext] ? media_types_mimes[file_ext] : '*/file_ext')});
						// create object url of a specified blob
						const mk_url = obj_url.createObjectURL(blb)
						// important todo: this is just a lazy fix for proper global cache flushing
						$this.global_cache.push(mk_url)
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

			// add cookie, if asked
			// (default to true)
			if (func_prms.add_cookie){
				// cookie is added separately, by the API itself and not manual injection into hedaers dict
				rqprms['cookie'] = document.cookie
			}

			// execute the request
			GM_xmlhttpRequest(rqprms)
		});
	}


	if (func_prms.method.lower() == 'post'){
		return new Promise(async function(resolve, reject){
			// a little trick to convert any data type to array buffer
			// the only reason this is done is because it's unclear whether the Tampermonkey
			// API accepts blobs or not
			const toblob = new Blob([func_prms.bin], {});
			const payload_buffer = await toblob.arrayBuffer()

			// request params
			const rqprms = {
				method: 'POST',
				url: request_url,
				headers: mkheader,
				nocache: true,
				responseType: 'arraybuffer',
				anonymous: true,

				// send payload
				binary: true,
				data: payload_buffer,

				// todo: separate this function?
				onload: function(response) {

					// TODO
					// FUCK: onerror only triggers on network error, like no internet....
					// it doesn't fucking care about response codes...
					if (!ok_codes.includes(response.status)){
						resolve(false)
						return
					}

					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						// get file extension of the target
						const file_ext = (new URL(request_url)).target.suffix
						// create a blob of certain type
						const blb = new Blob([response.response], {type: (media_types_mimes[file_ext] ? media_types_mimes[file_ext] : '*/file_ext')});
						// create object url of a specified blob
						const mk_url = obj_url.createObjectURL(blb)
						// important todo: this is just a lazy fix for proper global cache flushing
						$this.global_cache.push(mk_url)
						resolve(mk_url)
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
			// add cookie, if asked
			// (default to true)
			if (func_prms.add_cookie){
				rqprms['cookie'] = document.cookie
			}

			// execute request
			GM_xmlhttpRequest(rqprms)
		});
	}

}

// Grant all domains permission
// by fetching a random URL which would prompt stuff to user
$this.fetch({
	'url':'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite'
})

// custom local storage binds
const localStorage = {}
localStorage.setItem = function(item, value)
{
	GM_setValue(item, value)
}

localStorage.getItem = function(item)
{
	GM_getValue(item, null)
}


// URL change event
// this function is re-assigned according to current view type
window.addEventListener('urlchange', (info) => $all.main.url_switch_protocol());

