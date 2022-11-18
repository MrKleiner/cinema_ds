
if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.core){window.bootlegger.core={}};

// rebinds
// python-like stuff
// window.print = console.log;
window.print = function(){};
const obj_url = (window.URL || window.webkitURL);



//
// Init database
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
const ok_codes = [...range(200, 300)]

window.bootlegger.core.buffer_to_url = function(buf){
	const blb = new Blob([buf], {});
	return obj_url.createObjectURL(blb)
}


// use tampermonkey API to bypass the retarded CORS rubbish
// load_as = blob|blob_url|text|json|buffer|buffer_raw
// add_cookie = whether to add the current document cookie or not
// todo: this entire function makes little to no sense (probably):
// the Tampermonkey fetch api is sexy enough to be used raw
// window.bootlegger.core.fetch = function(furl, fmethod='get', load_as='text', fheaders={}, add_cookie=true)
// basically, this is a multitask function
// there should be more specific functions
// fun fact: this function doesn't do what it was supposed to do
window.bootlegger.core.fetch = function(params)
{
	print('input params:', params)
	// fuck, too bad js doesn't accept function parameters the same way python does
	const func_prms = {
		'url': params.url,
		'method': params.method || 'GET',
		'load_as': params.load_as || 'text',
		'headers': params.headers || {},
		'add_cookie': params.add_cookie || true,
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

	// headers
	const default_headers = {
		'Accept': '*/*',
		// it's again unclear whether it puts any default headers or not
		'User-Agent': window.navigator.userAgent
	}
	// merge default headers and additional ones
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
						// create a blob of certain type
						const blb = new Blob([response.response], {type: (media_types_mimes[file_ext] ? media_types_mimes[file_ext] : '*/file_ext')});
						// create object url of a specified blob
						const mk_url = obj_url.createObjectURL(blb)
						// important todo: this is just a lazy fix for proper global cache flushing
						window.bootlegger.core.global_cache.push(mk_url)
						resolve(mk_url)
					}
					if (func_prms.load_as == 'text'){
						const shite = response.responseText
						// print('tampermonkey', shite)
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
				rqprms['cookie'] = document.cookie
			}

			// execute request
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
						window.bootlegger.core.global_cache.push(mk_url)
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
window.bootlegger.core.fetch({
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


// when url changes - flush stuff and load new
window.addEventListener('urlchange', (info) => window.bootlegger.main.url_switch_protocol());

