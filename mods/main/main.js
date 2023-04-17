


$this.media_cache = {}


$this.toggle_main_window_vis = function(state='toggle')
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
		// print('toggle pool vis:', state)
		(document.body.getAttribute('cnds_shown') == 'yes') ? document.body.setAttribute('cnds_shown', 'no') : document.body.setAttribute('cnds_shown', 'yes')
	}
}


// open the image pool through a keybind
$this.open_pool_via_keybind = function(evt)
{
	if (evt.altKey && evt.keyCode == 65){
		print('Opening Pool via keybind...')
		// ensure that it exists
		const cotainer_exists = $this.ensure_container_exists(true)
		print('Ensuring that container exists:', cotainer_exists)
		$this.toggle_main_window_vis('toggle')
		$all.grid.init()
	}
}


// check the equality of two buffers
$this.buffer_equal = function(buf1, buf2)
{
	if (buf1.byteLength != buf2.byteLength) return false;
	const dv1 = new Int8Array(buf1);
	const dv2 = new Int8Array(buf2);
	for (var i = 0 ; i != buf1.byteLength ; i++){
		if (dv1[i] != dv2[i]) return false;
	}
	return true;
}

// ensures that the image container is present
// present, but not visible
// silent = do not manipulate the pool visibility
// returns false if container didnt exist
$this.ensure_container_exists = function(silent=false)
{
	const target_place = $('.chat-2ZfjoI .content-1jQy2l')
	// if container wasn't present on the page - spawn it and make it visible
	if ($('#cinema_ds_main_window').length <= 0){
		print('Pool wasnt found, creating a new one...')
		target_place.prepend(btg.main_window)
		// listen for scrolls
		// const fresh_elem =
		document.querySelector('#cinema_ds_main_window #cinemads_media_pool').addEventListener('scroll', function(event)
		{
			$this.scroll_watcher(event.target)
		});
		print('Ensure type (silent/non silent)', silent)
		silent ? null : $this.toggle_main_window_vis(true)
		// $this.traverse_more_messages()
		return false
	}
	print('Pool existed, skipping and returning true')
	return true
}

$this.media_processor = {}


// this has to be a function to prevent an image/video going fullscreen
$this.open_article = function(evt, elem)
{
	evt.preventDefault();
	window.open(elem.href)
}



// todo: hiding shit from discord is kinda not needed
// altough they might get suspicious when IP adress requests hendreds of images at once from discord.com
// for now this also hides stuff from discord, which is pointless
// The important thing it does is it matches referer header to given URL
// Because for whatever reason, some websites refuse servicing outsider referers...
$this.mask_referer = function(link)
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

	return {'ref': referer, 'cookie': false}
}

$this.media_processor.video = async function(msg, as_embed=false, looped_mute=false)
{
	print('Spawning a video...', msg, as_embed, looped_mute)
	if (as_embed == true){
		var media_url = msg.video.url
	}else{
		var media_url = msg.url
	}

	// some websites refuse to give away content if referer is not the website itself
	// in this case, said websites also shouldn't get discord's cookie
	const anon = $this.mask_referer(media_url)

	print('mask referer true for', media_url)
	const media_bytes = await $all.core.fetch({
		'url': media_url,
		'method': 'GET',
		'load_as': 'blob_url',
		'headers': {
			'referer': anon.ref,
		},
		'add_cookie': anon.cookie
	})
	print('Got video Blob URL', media_bytes)

	// $('#cinema_ds_main_window #cinemads_media_pool').prepend(`
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

$this.media_processor.image = async function(msg, as_url=false, use_thumb=true)
{
	// important todo: tidy these functions and document all the actions
	// also document the general logic behind each one of these functions
	print('Spawning an image:', msg, as_url)

	// try using thumbnail
	var as_thumb = null
	var url_prms = {}
	if (!!msg.thumbnail && use_thumb == true){
		const clampto = 300
		if (msg.thumbnail.width > clampto){
			const factor = msg.thumbnail.width / clampto
			url_prms['width'] = clampto
			url_prms['height'] = Math.round(msg.thumbnail.height / factor)
			as_thumb = msg.thumbnail.proxy_url
		}
	}

	const blob_src = as_url ? msg : as_thumb || msg.url
	const fullsize_link = as_url ? msg : msg.url

	// some websites refuse to give away content if referer is not the website itself
	// in this case, said websites also shouldn't get discord's cookie
	const anon = $this.mask_referer(blob_src)

	// the reason everything's using blobs is that it's the only reliable way to load the image
	// sometimes some websites, for whatever reason, may refuse to accept requests from src=""
	
	// important todo: sometimes the thumbnail URL already comes with width=&height=
	// adding another parameter set makes the URL invalid
	// it'd be better to "clear" the URL manually,
	// but for now it's always done automatically inside bootleg fetch when url_params are present
	// actually, it'd be better if it was a parameter for the fetch function, like "wipe original URL params"
	var media_bytes = await $all.core.fetch({
		'url': blob_src,
		'method': 'GET',
		'load_as': 'blob_url',
		'url_params': url_prms,
		'headers': {
			'referer': anon.ref,
		},
		'add_cookie': anon.cookie
	})
	print('Got image Blob URL:', media_bytes)

	// retry with fullsize url if error occured...
	// todo: this is super dodgy...
	// there has to be a better solution
	if (media_bytes === false){
		print('First request failed, retrying with fullsize link')
		obj_url.revokeObjectURL(media_bytes)
		var media_bytes = await $all.core.fetch({
			'url': fullsize_link,
			'method': 'GET',
			'load_as': 'blob_url',
			'url_params': url_prms,
			'headers': {
				'referer': $this.mask_referer(blob_src),
			}
		})
		print('retry result:', media_bytes)
	}


	// $('#cinema_ds_main_window #cinemads_media_pool').prepend(`
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

$this.media_processor.imgur_album = async function(msg, break_signal={}, imgur_link)
{
	// For whatever reason, imgur is VERY concerned about hiding image URLs of an image ablum from non-API requests...

	// By default, the /a/ endpoint returns empty HTML page which is then populated
	// by js scripts with image IDs burned into the scripts themselves...

	// BUT, it appears that collections can be viewed in different layouts
	// and /layout/blog returns an html page WITH image IDs, which are STILL burned into the scripts,
	// except not as encrypted as in default /a/

	// Therefore, getting actual links from this is quite hard and requires a complex regex,
	// which returns pairs of image ID and image extension,
	// then, this whole deal has to be collapsed into an actual URL:
	// https://i.imgur.com/ + image_id + image_extension

	// The URL target is a collection ID:
	// https://imgur.com/a/TARGET_ALBUM_ID
	const album_id = new obj_url(imgur_link)

	// Here referer is masked, because the raw HTML page is loaded,
	// which is theoretically not supposed to be loaded from outside the imgur.com domain.
	// This also means no discord cookie
	const raw_list = await $all.core.fetch({
		'url': `https://imgur.com/a/${album_id.target.name}/layout/blog`,
		'method': 'GET',
		'load_as': 'text',
		'headers': {
			'referer': 'https://imgur.com'
		},
		'add_cookie': false
	})

	// the regexp used to pull image IDs from the HTML page
	// todo: is it possible to evaulate HTML and pull IDs that way?
	const regexp = /\{\"hash\":\"([\w\d]*)\"\,\"title\".*?\"ext\"\:\"(\.jpg|.png|.gif|.gifv|.mp4)\".*?\}/g;
	// execute the regexp and store raw pairs of ID : Extension
	// (this actually returns groups of 3, where 0 is some rubbish)
	const url_pairs = raw_list.matchAll(regexp);


	// It appears that the provided HTML page has A LOT of duplicate imgs with UNIQUE IDs...
	// This is absolutely retarded...
	// For now the hashing of the files is avoided as this may slow down the evaluation by A LOT

	// Supposedly, a single album usually has around 10 images
	// and it should be fine to simply compare their buffers stored in RAM
	// important todo: window.crypto offers fast buffer comparison
	const fuck_imgur = [];
	
	// Go through every regexp matched pair.
	for (let match of url_pairs) {
		if (break_signal.alive != true){return}

		// compose the file name
		const imglink = match[1] + match[2];
		// create a placeholder
		const placeholder = $this.spawn_placeholder();
		// Referer is not masked here, because imgur image cdn doesn't has any known cases
		// of refusing service to outsider referers,
		// but it still shouldn't get discord's cookie
		var imgbytes = await $all.core.fetch({
			'url': `https://i.imgur.com/${imglink}`,
			'method': 'GET',
			'load_as': 'buffer_raw',
			'add_cookie': false
		})
		if (break_signal.alive != true){return}

		// FOR WHATEVER REASON IMGUR DOUBLES ALL IMAGES ???!!!!!
		// todo: find a more graceful way of continuing
		var dicks = false
		for (let fuckoff of fuck_imgur){
			if ($this.buffer_equal(fuckoff, imgbytes) == true){
				var dicks = true
				placeholder.remove()
				break
			}
		}
		if (dicks == true){continue}
		fuck_imgur.push(imgbytes)

		imgbytes = $all.core.buffer_to_url(imgbytes)

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

$this.spawn_placeholder = function()
{
	const placeholder = $(`<img class="cinema_ds_img_entry placeholder">`)
	// todo: prepend kind of makes more sense
	// $('#cinema_ds_main_window #cinemads_media_pool').prepend(placeholder)
	$('#cinema_ds_main_window #cinemads_media_pool').append(placeholder)
	return placeholder
}


// $this.media_cache[media_elem.attr('lizard_id')] = media_elem
// process a given message
// important todo: this is extremely fucking stupid.
// Shit was working PERFECTLY FINE
// all of this just to support the stupid fucking imgur shit...
// is it really worth it?
// please kill me
$this.msg_processor = async function(msg, break_signal={})
{
	// if (break_signal.alive != true){return}

	// get the message type. Smartly
	const as_emb = msg.lizard_type == 'embed';
	const media_type_key = as_emb ? 'type' : 'content_type';
	if (!as_emb && !msg[media_type_key]){
		const mk_ext = new obj_url(msg.url) 
		msg[media_type_key] = mk_ext.target.suffix
	}
	print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);
	// console.log('Content type', msg[media_type_key], media_type_key, msg.lizard_type)

	// if it's banned - don't do anything
	const this_channel = (new obj_url(window.location.href)).target.name
	const msg_banned = await $all.msgban.msg_is_banned(`${this_channel}/${msg.ds_id}`)
	if (msg_banned){
		return
	}


	// todo: proper pattern matching

	//
	// first, try matching non-controversial cases, like link prefixes
	//


	//
	// imgur retarded shit
	//
	if (msg.lizard_type == 'embed'){
		if (msg.url.lower().includes('imgur.com/a')){
			await $this.media_processor.imgur_album(msg, break_signal, msg.url)
			return true
		}
	}

	//
	// regular (?) images
	//
	if (media_types.image.includes(msg[media_type_key])){
		msg['thumbnail'] = {}
		msg.thumbnail['width'] = msg.width
		msg.thumbnail['height'] = msg.height
		msg.thumbnail['proxy_url'] = msg.proxy_url
		msg.thumbnail['url'] = msg.url
		const placeholder = $this.spawn_placeholder()
		// await jsleep(rnd_interval(0, 137))
		// var elem = await $this.media_processor.image(msg)
		const elem = await $this.media_processor.image(msg)
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		$this.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

	//
	// regular (?) and gifv videos
	//
	if (media_types.video.includes(msg[media_type_key])){
		// var elem = await $this.media_processor.video(msg, as_emb, msg[media_type_key] == 'gifv')
		const placeholder = $this.spawn_placeholder()
		await jsleep(rnd_interval(0, 137))
		const elem = await $this.media_processor.video(msg, as_emb, msg[media_type_key] == 'gifv')
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		$this.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

	//
	// Articles
	//

	// Text only based articles are bad
	// a good article should have a thumbnail property
	if (msg[media_type_key] == 'article' && msg.thumbnail){
		msg.url = msg.thumbnail.url
		// var elem = await $this.media_processor.image(current_msg.thumbnail.url, true)
		// var elem = await $this.media_processor.image(current_msg)
		const placeholder = $this.spawn_placeholder()
		const elem = await $this.media_processor.image(msg)
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		$this.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

}




$this.url_switch_protocol = function(){
	print('url switch protocol empty')
}




// load messages from discord from a desired channel
// ALL channels are unique and do NOT depend on server id or anything else
$this.get_messages = async function(chan_id, before=null, after=null)
{
	// use fetch, because it'd be weird to force-use the Tampermonkey OP API
	// even for the links which are within the discord domain
	return new Promise(function(resolve, reject){
		const input_prms = {
			'limit': 50,
		}
		if (before || after){
			input_prms[before ? 'before' : 'after'] = before || after;
		}
		const urlParams = new URLSearchParams(input_prms);
		const super_props = {
			'os': 'Windows',
			'browser': 'Chrome',
			'device': '',
			'system_locale': 'en-US',
			'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
			// important todo: get browser version
			'browser_version': '107.0.0.0',
			'os_version': '10',
			'referrer':'https://discord.com/',
			'referring_domain': 'discord.com',
			'referrer_current': '',
			'referring_domain_current': '',
			'release_channel': 'stable',
			'client_build_number': $all.core.app_ver || null,
			'client_event_source': null,
		}
		const response = await
		fetch(`https://discord.com/api/v9/channels/${chan_id}/messages?${urlParams.toString()}`, {
			'headers': {
				'accept': '*/*',
				'cache-control': 'no-cache',
				'pragma': 'no-cache',
				'authorization': ds_token,
				'cookie': document.cookie,
				'x-super-properties': lizard.btoa(JSON.stringify(super_props)),
				'x-debug-options': 'bugReporterEnabled',
				'x-discord-locale': document.documentElement.lang,
			},
			'method': 'GET',
			'mode': 'cors',
			// important todo: the server can return a new cookie to set. Ignore it or not ?
			'credentials': 'omit',
		})
		const rdata = await response.json();
		resolve(msgs)
		return
	});
}


// observe the scroll
$this.scroll_watcher = function(mpool)
{
	if (mpool.scrollTop == 0 && $this.media_queue_active != true){
		// it's ok to spam with this function
		// $this.media_queue.ensure()	
		print('Reached the top of the media pool, loading more messages')
		// $this.traverse_more_messages()
	}
}


// get more messages and find which ones have any attachments or embeds
// takes channel id and life status. Once life status changes to false - the function exits immediately
// the life status object should have an .alive property
$this.msg_traverser = async function(chain_id=null, break_signal={}, msg_offs=null, limit=50)
{
	print('Traversing messages for', chain_id)
	// die if asked to
	if (break_signal.alive != true){print('traverser is dead from the start');return []}
	// get current channel id from the said url
	const current_chan_id = chain_id
	// keep track of the amount of found messages
	// one traverse cycle should not generate more than limit media entries
	var total_msgs_scanned = 0

	var found_msgs = []

	var last_msg_id = msg_offs;

	print('Traversing info:', current_chan_id)

	// traverse
	while (break_signal.alive && found_msgs.length <= limit){
		const interval = rnd_interval(139, 247)
		await jsleep(interval)
		print('Getting 50 messages...', 'wifite', interval)
		// fetch messages from discord servers
		var messages = await $this.get_messages(current_chan_id, last_msg_id)
		// if returned payload is empty, then it means that the beginning of the channel has been reached
		if (messages.length <= 0){break}
		print('Got 50<= messages...', messages)
		// write down the last message id
		var last_msg_id = messages.at(-1).id
		const tgt_chan = (new obj_url(window.location.href)).target.name
		// go through each one of them and discard the ones which don't have any attachments and embeds
		for (let msg of messages){
			// count total amount of messages
			total_msgs_scanned += 1
			const msg_banned = await $all.msgban.msg_is_banned(`${tgt_chan}/${msg.id}`)
			// if both attachment and embeds arrays are empty - current message doesn't has any stuff
			if ((msg.attachments.length <= 0 && msg.embeds.length <= 0) || msg_banned == true){continue}

			// identify every embed type
			msg.attachments = msg.attachments.map(function sex(m){
				m.lizard_type = 'attachment'
				// m.original_url = m.url
				// m.ds_id = msg.id
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				// m.original_url = m.url
				// m.ds_id = msg.id
				return m
			})

			// Concat embeds and attachments of the message and add all of these entries
			// to the global media queue
			var entries_combined = msg.attachments.concat(msg.embeds)
			// todo: the original element order from discord of the attachments and embes array
			// doesn't match the grid/list order
			// remoev this statement to be OG
			entries_combined.reverse()
			for (let embed of entries_combined){
				print('treating embed', embed)
				// important todo: due to files not being displayed anyhow - pages appear empty
				// same goes for youtube embeds, for now

				// if (embed.lizard_type == 'attachment'){
				// 	if (!embed.content_type){continue}
				// 	if (!embed.content_type.includes('image') && !embed.content_type.includes('video') && !embed.content_type.includes('article')){
				// 		continue
				// 	}
				// }

				// store some original data
				embed.original_url = embed.url
				embed.ds_id = msg.id

				// simply skip youtube shit, for now
				if (embed.provider){
					if (embed.provider.name.lower() == 'youtube'){
						continue
					}
				}

				// assign a unique id to this element
				embed.lizard_id = lizard.rndwave(32)
				// todo: leave push to be OG ?
				found_msgs.push(embed)
				// prepending to the beginning of the array matches the way it's laid out in discord
				// found_msgs.unshift(embed)

				print('found embed', embed)
			}
		}
	}

	// once done traversing - return collected items
	return {'media_units': found_msgs, 'last_id': last_msg_id}
}



// process media elements
// the dynamic behaviour is preserved, but an object with .qitems array
// also takes the alive status
$this.media_queue_processor = async function(media_queue, break_signal={}, callback_func=null, wait=false)
{
	print('Processing media queue', media_queue.qitems)
	// die if asked to
	if (break_signal.alive != true){return []}

	var media_items = []

	const this_channel = (new obj_url(window.location.href)).target.name

	// keep doing shit until there are no items left in the queue
	while (break_signal.alive){
		// get the current message from the queue pool
		var current_msg = media_queue.qitems[0];
		print('Processing a message...', current_msg);
		// when this check fails - it means that there are no items left in the queue
		if (!current_msg){print('invalid message', current_msg);break}

		// if it's present in the cache - append it immediately
		// otherwise - evaluate it
		if (current_msg.lizard_id in $this.media_cache && !$all.core.banned.includes(`${this_channel}/${current_msg.ds_id}`)){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend($this.media_cache[current_msg.lizard_id])
			media_queue.qitems.shift()
			continue
		}

		// treat the type
		// todo: the bad thing about this is that the chain is quite deep now...
		if (wait == true){
			// todo: is it ok to await a function initialized earlier?
			await $this.msg_processor(current_msg, break_signal)
		}else{
			$this.msg_processor(current_msg, break_signal)
		}

		// delete processed element from the queue
		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue, cache storage length:', Object.keys($this.media_cache).length);

	return media_items
}



$this.ban_msg = async function(evt, msg){
	// src_msg_id
	if (evt.altKey){
		evt.preventDefault()
		const tgt_chan = new obj_url(window.location.href)
		const msg_path = `${tgt_chan.target.name}/${msg.getAttribute('src_msg_id')}`
		$all.msgban.ban_msg(msg_path)
		$all.core.banned.push(msg_path)
		msg.remove()
	}
}



$this.temp_send_to_server = function(evt, elem){

	console.log('saving to server')
	if (evt.altKey){
		console.log('alt key detected')
		evt.preventDefault()
	}else{
		return
	}
	console.log('saving...')

	// a little trick to convert any data type to array buffer
	// the only reason this is done is because it's unclear whether the Tampermonkey
	// API accepts blobs or not
	const toblob = new Blob([elem.getAttribute('fullsize') || elem.getAttribute('blob_src')], {});
	console.log('got fullsize:', elem.getAttribute('fullsize') || elem.getAttribute('blob_src'))
	// const payload_buffer = await toblob.arrayBuffer()

	// const sex = await fetch('/172.0.0.1:8000/htbin/srv.py', {
	// 	'method': 'POST',
	// 	'body': toblob,
	// 	'mode': 'cors',
	// 	'credentials': 'omit'
	// })

	// console.log('WHYYYYYY', await sex.text())

	// request params
	const rqprms = {
		method: 'POST',
		url: 'http://192.168.0.6:8027/htbin/srv.py',
		nocache: true,
		// responseType: 'arraybuffer',
		anonymous: true,

		// send payload
		binary: true,
		data: elem.getAttribute('fullsize') || elem.getAttribute('blob_src'),

		// todo: separate this function?
		onload: function(response) {
			print('Server solution response', response.responseText)
		}
	}

	// execute request
	GM_xmlhttpRequest(rqprms)
}




// TEST
async function save_banned_db(){

	console.time('db backup')
	const payload = []
	console.log('saving shit')
	await bandb.bans.each(msg => payload.push(msg.msgid));

	// Filesaver dies from text Utf8Arrays, use Blobs instead
	const blb = new Blob([lizard.strToUTF8Arr(payload.join('\n'))], {type: 'text/plain'});

	const zip = new JSZip();
	zip.file('banned.ban', blb);
	console.log('generating zip')
	const zipped_file = await zip.generateAsync({
		type: 'blob',
		compression: 'DEFLATE',
		compressionOptions: {
			level: 9
		}
	})
	console.log('generated zip')
	// important todo: use Tampermonkey download and not filesaver ?
	await saveAs(zipped_file, 'banned_msgs.ban')
	console.timeEnd('db backup')
}