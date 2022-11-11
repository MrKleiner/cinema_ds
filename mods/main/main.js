


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


// open the image pool trough a keybind
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


$this.media_processor.video = async function(msg, as_embed=false, looped_mute=false)
{
	print('Spawning a video...', msg, as_embed, looped_mute)
	if (as_embed == true){
		var media_url = msg.video.url
	}else{
		var media_url = msg.url
	}

	const media_bytes = await $all.core.fetch({
		'url': media_url,
		'method': 'GET',
		'load_as': 'blob_url'
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
	const media_bytes = await $all.core.fetch({
		'url': blob_src,
		'method': 'GET',
		'load_as': 'blob_url',
		'url_params': url_prms
	})

	print('Got image Blob URL:', media_bytes)

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
			<img src="${media_bytes}">
		</div>
	`);
}


$this.url_switch_protocol = function(){
	print('url switch protocol empty')
}




// load messages from discord from a desired channel
// ALL channels are unique and do NOT depend on server id
$this.get_messages = async function(chan_id, before=null)
{
	// use fetch, because it'd be weird to force-use the Tampermonkey OP API
	// even for the links which are within the discord domain
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

// this triggers when URL was switched
$this.url_switch = function()
{
	print('URL switch detected...')
	// first - kill the iterator
	$this.media_queue.flush()
	// now forget the last id
	$this.last_msg_id = null;
	// empty the container
	$('#cinema_ds_main_window #cinemads_media_pool').empty();
	// ensure that container exists...
	$this.ensure_container_exists(true)
	// logging
	$this.total_channel_msgs = 0
	// now re-run the iterator, only if the thing wasnt hidden
	if (document.body.getAttribute('cnds_shown') == 'yes'){
		$this.media_queue.ensure()
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
		print('Getting 100 messages...')
		// fetch messages from discord servers
		var messages = await $this.get_messages(current_chan_id, last_msg_id)
		// if returned payload is empty, then it means that the beginning of the channel has been reached
		if (messages.length <= 0){break}
		print('Got 100<= messages...', messages)
		// write down the last message id
		var last_msg_id = messages.at(-1).id
		// go through each one of them and discard the ones which don't have any attachments and embeds
		for (var msg of messages){
			// count total amount of messages
			total_msgs_scanned += 1
			// if both attachment and embeds arrays are empty - current message doesn't has any stuff
			if (msg.attachments.length <= 0 && msg.embeds.length <= 0){continue}

			// identify every embed type
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

			// Concat embeds and attachments of the message and add all of these entries
			// to the global media queue
			for (var embed of msg.attachments.concat(msg.embeds)){
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

$this.cache_item = function(elem, id){

}


// process media elements
// the dynamic behaviour is preserved, but an object with .qitems array
// also takes the alive status
$this.media_queue_processor = async function(media_queue, break_signal, callback_func=null, wait=false)
{
	print('Processing media queue', media_queue.qitems)
	// die if asked to
	if (break_signal.alive != true){return []}

	var media_items = []

	// keep doing shit until there are no items left in the queue
	while (break_signal.alive){
		// get the current message from the queue pool
		var current_msg = media_queue.qitems[0];
		print('Processing a message...', current_msg);
		// when this check fails - it means that there are no items left in the queue
		if (!current_msg){break}

		// if it's present in the cache - append it immediately
		// otherwise - evaluate it
		if (current_msg.lizard_id in $this.media_cache){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend($this.media_cache[current_msg.lizard_id])
			media_queue.qitems.shift()
			continue
		}

		// get the message type. Smartly
		var as_emb = current_msg.lizard_type == 'embed'
		var media_type_key = as_emb ? 'type' : 'content_type'

		print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);

		// treat the message according to type

		// regular (?) images
		if (media_types.image.includes(current_msg[media_type_key])){
			current_msg['thumbnail'] = {}
			current_msg.thumbnail['width'] = current_msg.width
			current_msg.thumbnail['height'] = current_msg.height
			current_msg.thumbnail['proxy_url'] = current_msg.proxy_url
			current_msg.thumbnail['url'] = current_msg.url
			// var elem = await $this.media_processor.image(current_msg)
			var elem = $this.media_processor.image(current_msg)
		}
		// regular (?) and gifv videos
		if (media_types.video.includes(current_msg[media_type_key])){
			// var elem = await $this.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
			var elem = $this.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
		}
		// special: article
		// text only based articles are bad
		// a good article should have a thumbnail property
		if (current_msg[media_type_key] == 'article' && current_msg.thumbnail){
			current_msg.url = current_msg.thumbnail.url
			// var elem = await $this.media_processor.image(current_msg.thumbnail.url, true)
			// var elem = await $this.media_processor.image(current_msg)
			var elem = $this.media_processor.image(current_msg)
		}


		// die if not alive anymore
		if (break_signal.alive != true){break}

		// append the resulting element to the pool
		// when this check fails it means that no corresponding type was found and message element wasn't created
		if (elem){
			// when wait is true then it means that images have to be loaded one by one and not in batch
			// otherwise - create placeholder elements and start loading them all simultaneously
			if (wait == true){
				// wait for media to fully load
				const media_unit = await elem
				if (break_signal.alive != true){break}
				// trigger callback, if any
				if (callback_func) {callback_func(media_unit)}
				// add element to the function output
				media_items.push(media_unit)
				// cache the element
				$this.media_cache[media_unit.attr('lizard_id')] = media_unit
				// add element to the page
				$('#cinema_ds_main_window #cinemads_media_pool').prepend(media_unit)

			}else{

				// spawn a placeholder
				const placeholder = $('<img class="cinema_ds_img_entry placeholder">')
				$('#cinema_ds_main_window #cinemads_media_pool').prepend(placeholder)
				// queue placeholder replacement with the actual stuff once it's fully loaded
				elem
				.then(function(media_unit) {
					if (break_signal.alive != true){return media_items}
					
					// $('#cinema_ds_main_window #cinemads_media_pool').prepend(media_unit)
					// trigger callback, if any
					if (callback_func) {callback_func(media_unit)}
					// add the element to the function output
					media_items.push(media_unit)
					// cache the element
					$this.media_cache[media_unit.attr('lizard_id')] = media_unit
					// replace the placeholder with an actual element
					placeholder.replaceWith(media_unit)
				});
			}
		}

		// delete processed element from the queue
		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue');

	return media_items
}