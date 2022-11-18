
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
		// print('toggle pool vis:', state)
		(document.body.getAttribute('cnds_shown') == 'yes') ? document.body.setAttribute('cnds_shown', 'no') : document.body.setAttribute('cnds_shown', 'yes')
	}
}


// open the image pool trough a keybind
window.bootlegger.main.open_pool_via_keybind = function(evt)
{
	if (evt.altKey && evt.keyCode == 65){
		print('Opening Pool via keybind...')
		// ensure that it exists
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

// ensures that the image container is present
// present, but not visible
// silent = do not manipulate the pool visibility
// returns false if container didnt exist
window.bootlegger.main.ensure_container_exists = function(silent=false)
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
			window.bootlegger.main.scroll_watcher(event.target)
		});
		print('Ensure type (silent/non silent)', silent)
		silent ? null : window.bootlegger.main.toggle_main_window_vis(true)
		// window.bootlegger.main.traverse_more_messages()
		return false
	}
	print('Pool existed, skipping and returning true')
	return true
}

window.bootlegger.main.media_processor = {}


// this has to be a function to prevent an image/video going fullscreen
window.bootlegger.main.open_article = function(evt, elem)
{
	evt.preventDefault();
	window.open(elem.href)
}



// todo: hiding shit from discord is kinda not needed
// altough they might get suspicious when IP adress requests hendreds of images at once from discord.com
// for now this also hides stuff from discord, which is pointless
// The important thing it does is it matches referer header to given URL
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
	const media_bytes = await window.bootlegger.core.fetch({
		'url': media_url,
		'method': 'GET',
		'load_as': 'blob_url',
		'headers': {
			'referer': window.bootlegger.main.mask_referer(media_url),
		}
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

window.bootlegger.main.media_processor.image = async function(msg, as_url=false, use_thumb=true)
{
	// important todo: tidy these functions and document all the actions
	// also document the general logic behind each one of these functions
	print('Spawning an image:', msg, as_url)

	// try using thumbnail
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

	// the reason everything's using blobs is that it's the only reliable way to load the image
	// sometimes some websites, for whatever reason, may refuse to accept requests from src=""
	
	// important todo: sometimes the thumbnail URL already comes with width=&height=
	// adding another parameter set makes the URL invalid
	// it'd be better to "clear" the URL manually,
	// but for now it's always done automatically inside bootleg fetch when url_params are present
	// actually, it'd be better if it was a parameter for the fetch function, like "wipe original URL params"
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

	// retry with fullsize url if error occured...
	// todo: this is super dodgy...
	// there has to be a better solution
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

		// FOR WHATEVER REASON IMGUR DOUBLES ALL IMAGES ???!!!!!
		// todo: find a more graceful way of continuing
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


// window.bootlegger.main.media_cache[media_elem.attr('lizard_id')] = media_elem
// process a given message
// important todo: this is extremely fucking stupid.
// Shit was working PERFECTLY FINE
// all of this just to support the stupid fucking imgur shit...
// is it really worth it?
// please kill me
window.bootlegger.main.msg_processor = async function(msg, break_signal={})
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
	const msg_banned = await window.bootlegger.msgban.msg_is_banned(`${this_channel}/${msg.ds_id}`)
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
			await window.bootlegger.main.media_processor.imgur_album(msg, break_signal, msg.url)
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
		var placeholder = window.bootlegger.main.spawn_placeholder()
		// await jsleep(rnd_interval(0, 137))
		// var elem = await window.bootlegger.main.media_processor.image(msg)
		const elem = await window.bootlegger.main.media_processor.image(msg)
		if (break_signal.alive != true){
			obj_url.revokeObjectURL(elem.attr('src'))
			return false
		}
		window.bootlegger.main.media_cache[msg.lizard_id] = elem
		placeholder.replaceWith(elem)
		return true
	}

	//
	// regular (?) and gifv videos
	//
	if (media_types.video.includes(msg[media_type_key])){
		// var elem = await window.bootlegger.main.media_processor.video(msg, as_emb, msg[media_type_key] == 'gifv')
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

	//
	// Articles
	//

	// Text only based articles are bad
	// a good article should have a thumbnail property
	if (msg[media_type_key] == 'article' && msg.thumbnail){
		msg.url = msg.thumbnail.url
		// var elem = await window.bootlegger.main.media_processor.image(current_msg.thumbnail.url, true)
		// var elem = await window.bootlegger.main.media_processor.image(current_msg)
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




// load messages from discord from a desired channel
// ALL channels are unique and do NOT depend on server id or anything else
window.bootlegger.main.get_messages = async function(chan_id, before=null, after=null)
{
	// use fetch, because it'd be weird to force-use the Tampermonkey OP API
	// even for the links which are within the discord domain
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


// observe the scroll
window.bootlegger.main.scroll_watcher = function(mpool)
{
	if (mpool.scrollTop == 0 && window.bootlegger.main.media_queue_active != true){
		// it's ok to spam with this function
		// window.bootlegger.main.media_queue.ensure()	
		print('Reached the top of the media pool, loading more messages')
		// window.bootlegger.main.traverse_more_messages()
	}
}


// get more messages and find which ones have any attachments or embeds
// takes channel id and life status. Once life status changes to false - the function exits immediately
// the life status object should have an .alive property
window.bootlegger.main.msg_traverser = async function(chain_id=null, break_signal={}, msg_offs=null, limit=50)
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
		var messages = await window.bootlegger.main.get_messages(current_chan_id, last_msg_id)
		// if returned payload is empty, then it means that the beginning of the channel has been reached
		if (messages.length <= 0){break}
		print('Got 50<= messages...', messages)
		// write down the last message id
		var last_msg_id = messages.at(-1).id
		const tgt_chan = (new obj_url(window.location.href)).target.name
		// go through each one of them and discard the ones which don't have any attachments and embeds
		for (var msg of messages){
			// count total amount of messages
			total_msgs_scanned += 1
			var msg_banned = await window.bootlegger.msgban.msg_is_banned(`${tgt_chan}/${msg.id}`)
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
			for (var embed of entries_combined){
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
				found_msgs.push(embed)
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
window.bootlegger.main.media_queue_processor = async function(media_queue, break_signal={}, callback_func=null, wait=false)
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
		if (current_msg.lizard_id in window.bootlegger.main.media_cache && !window.bootlegger.core.banned.includes(`${this_channel}/${current_msg.ds_id}`)){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(window.bootlegger.main.media_cache[current_msg.lizard_id])
			media_queue.qitems.shift()
			continue
		}

		// treat the type
		// todo: the bad thing about this is that the chain is quite deep now...
		if (wait == true){
			// todo: is it ok to await a function initialized earlier?
			await window.bootlegger.main.msg_processor(current_msg, break_signal)
		}else{
			window.bootlegger.main.msg_processor(current_msg, break_signal)
		}

		// delete processed element from the queue
		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue, cache storage length:', Object.keys(window.bootlegger.main.media_cache).length);

	return media_items
}



window.bootlegger.main.ban_msg = async function(evt, msg){
	// src_msg_id
	if (evt.altKey){
		evt.preventDefault()
		const tgt_chan = new obj_url(window.location.href)
		const msg_path = `${tgt_chan.target.name}/${msg.getAttribute('src_msg_id')}`
		window.bootlegger.msgban.ban_msg(msg_path)
		window.bootlegger.core.banned.push(msg_path)
		msg.remove()
	}
}
