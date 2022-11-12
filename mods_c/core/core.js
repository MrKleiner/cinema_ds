
if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.core){window.bootlegger.core={}};





// rebinds
// python-like stuff
window.print = console.log;
// window.print = function(){};
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


window.bootlegger.core.buffer_to_url = function(buf){
	const blb = new Blob([buf], {});
	return obj_url.createObjectURL(blb)
}


// use tampermonkey API to bypass the retarded CORS rubbish
// load_as = blob|blob_url|text|json|buffer|buffer_raw
// add_cookie = whether to add the corrent document cookie
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

				// todo: separate this function?
				onload: function(response) {

					// const rsp_buffer = response.response

					if (func_prms.load_as == 'blob'){
						const blb = new Blob([response.response], {});
						resolve(blb)
					}
					if (func_prms.load_as == 'blob_url'){
						// const blb = new Blob([response.response], {});
						print('current URK is', request_url)
						const fuckoff = (new URL(request_url)).target.suffix
						// print(fuckoff)
						// print('blob type:', fuckoff)
						const blb = new Blob([response.response], {type: `image/${fuckoff}`});
						resolve(obj_url.createObjectURL(blb))
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

				// send payload
				binary: true,
				data: payload_buffer,

				// todo: separate this function?
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

