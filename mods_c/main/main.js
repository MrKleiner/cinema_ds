
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
		// show it
		window.bootlegger.main.toggle_main_window_vis('toggle')
		// initialize the queue
		!cotainer_exists ? window.bootlegger.main.traverse_more_messages() : null
	}
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


// a set of media processors
window.bootlegger.main.media_processor = {}

// the media queue trio
window.bootlegger.main.media_queue = {}


// basically, the main media loading queue
window.bootlegger.main.media_queue.items = [];
window.bootlegger.main.media_queue_active = false;
window.bootlegger.main.message_offset = 0;
window.bootlegger.main.last_msg_id = null;
window.bootlegger.main.total_channel_msgs = 0;
window.bootlegger.main.total_found_msgs = 0;



// content_type
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

window.bootlegger.main.media_processor.image = async function(msg, as_url=false)
{
	print('Spawning an image:', msg, as_url)
	const media_bytes = await window.bootlegger.core.fetch({
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





// important todo: this is EXTREMELY confusing !!!!!!




// standalone worker, which kills itself when told so by the higher controller
window.bootlegger.main.media_queue.processor = async function(worker)
{
	print('Launched a processor, worker:', worker)
	// if (window.bootlegger.main.media_queue_active == true){return}
	window.bootlegger.main.media_queue_active = true;

	// keep doing shit until there are no items left in the queue
	while (worker.alive){
		// get the current message from the queue pool
		var current_msg = window.bootlegger.main.media_queue.items[0];
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
			var elem = await window.bootlegger.main.media_processor.image(current_msg)
		}
		// regular (?) and gifv videos
		if (media_types.video.includes(current_msg[media_type_key])){
			var elem = await window.bootlegger.main.media_processor.video(current_msg, as_emb, current_msg[media_type_key] == 'gifv')
		}
		// special: article
		// text only based articles are bad
		// a good article should have a thumbnail property
		if (current_msg[media_type_key] == 'article' && current_msg.thumbnail){
			print('found article:', current_msg)
			var elem = await window.bootlegger.main.media_processor.image(current_msg.thumbnail.url, true)
		}



		// die if not alive anymore
		if (worker.alive != true){break}

		// append the resulting element to the pool
		// when this check fails it means that no corresponding type was found and message element wasn't created
		if (elem){
			$('#cinema_ds_main_window #cinemads_media_pool').prepend(elem)
		}

		// delete the processed element from the queue
		window.bootlegger.main.media_queue.items.shift()
		// status update
		window.bootlegger.main.dump_stats()
		print('Current queue length', window.bootlegger.main.media_queue.items.length)
	}

	print('Done iterating over the queue', 'worker status:', worker.alive, 'queue', window.bootlegger.main.media_queue.items);

	// indicate that the queue is not busy anymore
	// todo: this is kind of redundant
	window.bootlegger.main.media_queue_active = false;

	// also die gracefully
	worker.alive = false;
}



// this is the actual controler, but this only gives out a new instance of a controller
// important todo: stop fucking around and use classes...
window.bootlegger.main.media_queue.ctrl_src = function()
{
	return {
		start: function(){
			if (this.alive){
				print('Tried to launch an already running worker')
				return
			}
			print('Launched media queue worker')

			// resurrect ourselves
			this.alive = true
			// spawn a new worker
			// spawning it will make it start working automatically
			window.bootlegger.main.media_queue.processor(this)
		},
		kill: function(){
			print('Killing a wroker...', 'current state:', this.alive)
			this.alive = false
		}
	}
}

// this is where the useable controller lives
// also spawn one by default
window.bootlegger.main.media_queue.ctrl = window.bootlegger.main.media_queue.ctrl_src()

// and this is responsible for the life of the controller
window.bootlegger.main.media_queue.flush = function()
{
	print('Flushing Media Queue...')
	// kill previous processor
	window.bootlegger.main.media_queue.ctrl.kill()
	// global indicator
	window.bootlegger.main.media_queue_active = false;
	// now kill its queue
	window.bootlegger.main.media_queue.items = [];
	// overwrite previous processor with the new one
	window.bootlegger.main.media_queue.ctrl = window.bootlegger.main.media_queue.ctrl_src()
}

// ensure that the queue is working
// this is basically just a wrapper
window.bootlegger.main.media_queue.ensure = function()
{
	print('Ensuring that the queue is running, if possible')
	window.bootlegger.main.media_queue.ctrl.start()
}





// load messages from discord from a desired channel
// ALL channels are unique and do NOT depend on server id
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





window.bootlegger.main.dump_stats = function()
{
	document.querySelector('#cinema_ds_main_window #cinemads_stats')
	.innerText = `Total: ${str(window.bootlegger.main.total_channel_msgs).padStart(5, '0')}, Queued: ${window.bootlegger.main.media_queue.items.length}`;
}

window.bootlegger.main.traverse_lock = false

// get more messages and find which ones have any attachments or embeds
// basically this one of the main processes
// calling this function will start spawning messages
window.bootlegger.main.traverse_more_messages = async function()
{
	print('Traversing messages...')
	// can't traverse before the previous iteration is not done yet
	if (window.bootlegger.main.traverse_lock != false){print('Traversing is locked...');return}
	window.bootlegger.main.traverse_lock = true;
	// get current url
	const current_loc = window.location.pathname.strip('/').split('/')
	// get current channel id from the said url
	const current_chan_id = current_loc.at(-1)
	// keep track of the amount of found messages
	// one traverse cycle should not generate more than 50 media entries
	var found_msgs = 0

	print('Traversing info:', current_chan_id)

	// traverse
	while (true){
		if (found_msgs >= 50){break}
		print('Getting 100 messages...')
		// fetch messages from discord servers
		var messages = await window.bootlegger.main.get_messages(current_chan_id, window.bootlegger.main.last_msg_id)
		// if returned payload is empty, then it means that the beginning of the channel was has been reached
		if (messages.length <= 0){break}
		print('Got 100<= messages...', messages)
		// write down the last message id
		window.bootlegger.main.last_msg_id = messages.at(-1).id
		// go through each one of them and discard the ones which don't have any attachments and embeds
		for (var msg of messages){
			// statistics
			window.bootlegger.main.total_channel_msgs += 1
			// if both attachment and embeds arrays are empty - current message doesn't has any stuff
			if (msg.attachments.length <= 0 && msg.embeds.length <= 0){continue}
			// keep counting messages
			found_msgs += 1
			// statistics
			window.bootlegger.main.total_found_msgs += 1;

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
				window.bootlegger.main.media_queue.items.push(embed)
				print('found embed', embed)
			}

			window.bootlegger.main.dump_stats()
		}
	}

	// unlock traversing
	window.bootlegger.main.traverse_lock = false;

	// once done traversing - ensure that the queue is running
	window.bootlegger.main.media_queue.ensure()
}


// observe the scroll
window.bootlegger.main.scroll_watcher = function(mpool)
{
	if (mpool.scrollTop == 0 && window.bootlegger.main.media_queue_active != true){
		// it's ok to spam with this function
		window.bootlegger.main.media_queue.ensure()
		print('Reached the top of the media pool, loading more messages')
		window.bootlegger.main.traverse_more_messages()
	}
}

// this triggers when URL was switched
window.bootlegger.main.url_switch = function()
{
	print('URL switch detected...')
	// first - kill the iterator
	window.bootlegger.main.media_queue.flush()
	// now forget the last id
	window.bootlegger.main.last_msg_id = null;
	// empty the container
	$('#cinema_ds_main_window #cinemads_media_pool').empty();
	// ensure that container exists...
	window.bootlegger.main.ensure_container_exists(true)
	// logging
	window.bootlegger.main.total_channel_msgs = 0
	// now re-run the iterator, only if the thing wasnt hidden
	if (document.body.getAttribute('cnds_shown') == 'yes'){
		window.bootlegger.main.media_queue.ensure()
	}
	
}







