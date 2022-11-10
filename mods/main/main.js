
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
		const cotainer_exists = $this.ensure_container_exists()
		print('Ensuring that container exists:', cotainer_exists)
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

// content_type
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
		<video 
			class="cinema_ds_video_entry"
			${looped_mute ? 'loop muted autoplay' : 'controls'}
			src="${media_bytes}"
			download="${(new URL(media_url)).pathname.split('/').at(-1)}"
		></video>
	`);
}

$this.media_processor.image = async function(msg, as_url=false)
{
	print('Spawning an image:', msg, as_url)
	const media_bytes = await $all.core.fetch({
		'url': as_url ? msg : msg.url,
		'method': 'GET',
		'load_as': 'blob_url'
	})

	print('Got image Blob URL:', media_bytes)

	// $('#cinema_ds_main_window #cinemads_media_pool').prepend(`
	return $(`
		<img 
			class="cinema_ds_img_entry"
			src="${media_bytes}"
			draggable="false"
		>
	`);
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
				return m
			})
			msg.embeds = msg.embeds.map(function sex(m){
				m.lizard_type = 'embed'
				return m
			})

			// Concat embeds and attachments of the message and add all of these entries
			// to the global media queue
			for (var embed of msg.attachments.concat(msg.embeds)){
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
$this.media_queue_processor = async function(media_queue, break_signal)
{
	print('Processing media queue', media_queue.qitems)
	// die if asked to
	if (break_signal.alive != true){return false}

	// keep doing shit until there are no items left in the queue
	while (break_signal.alive){
		// get the current message from the queue pool
		var current_msg = media_queue.qitems[0];
		print('Processing a message...', current_msg);
		// when this check fails - it means that there are no items left in the queue
		if (!current_msg){break}

		// get the message type. Smartly
		var as_emb = current_msg.lizard_type == 'embed'
		var media_type_key = as_emb ? 'type' : 'content_type'

		print('Determined message type:', 'as_emb:', as_emb, 'media_type_key:', media_type_key);

		// treat the message according to type

		// regular (?) images
		if (media_types.image.includes(current_msg[media_type_key])){
			var elem = await $this.media_processor.image(current_msg)
		}
		// regular (?) and gifv videos
		if (media_types.video.includes(current_msg[media_type_key])){
			var elem = await $this.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
		}
		// special: article
		// text only based articles are bad
		// a good article should have a thumbnail property
		if (current_msg[media_type_key] == 'article' && current_msg.thumbnail){
			print('found article:', current_msg)
			var elem = await $this.media_processor.image(current_msg.thumbnail.url, true)
		}


		// die if not alive anymore
		if (break_signal.alive != true){break}

		// append the resulting element to the pool
		// when this check fails it means that no corresponding type was found and message element wasn't created
		if (elem){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(elem)
		}

		// delete the processed element from the queue
		media_queue.qitems.shift()
		print('Current queue length', media_queue.qitems.length)
	}

	print('Done iterating over the media queue');

	return true
}