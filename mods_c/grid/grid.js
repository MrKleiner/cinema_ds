
if (!window.bootlegger){window.bootlegger = {}};

if (!window.bootlegger.grid){window.bootlegger.grid={}};


window.bootlegger.grid.grid = null
window.bootlegger.grid.current_page_index = 0

class gridmaker
{
	// this should be triggered on every channel switch
	// so that the class always has the actual channel id
	constructor(){
		// ensure that everything exists (in a silent manner)
		window.bootlegger.main.ensure_container_exists(true)
		// set this to false and everything will die
		this.alive = true;
		this.worker_alive = {alive: true};
		// indicate that picking messages with embeds is still going
		this.traversing = false;
		// indicate that iage queue is busy
		this.working = false;
		// last message id
		this.msg_offset = null;
		// get channel id
		this.chan_id = (new URL(window.location.href)).target.name
		this.qitems = []
		// how many pages to keep in cache
		this.cache_size = 5

		// Pages loaded so far
		// now with caching
		// format is:
		// [
		// 	{
		// 		'offs': LAST MESSAGE ID,
		//		'cached': true/false,
		// 		'media': {
		// 			'MEDIA_ID': original media json,
		// 			'MEDIA_ID': original media json,
		// 		}
		// 	}
		// ]
		this.pages = []

		print('initialized gridder')

	}

	// loads a page full of images
	// pass nothing to load the first page
	async load_page(msg_offs=null){
		if (this.alive != true || this.working == true){print('Page loader cant do shit:', 'class alive:', this.alive, 'working:', this.working);return}
		// this.worker_alive.alive = true;
		print('msg offs index', msg_offs)

		// show page numbers
		// window.bootlegger.grid.current_page_index = msg_offs || 0
		$('#cinema_ds_main_window #cinemads_pages').html(this.eval_pages(window.bootlegger.grid.current_page_index).join('\n'))
		$('#cinema_ds_main_window #cinemads_media_pool').empty()
		// pull cache, if any
		const pulled_cache = this.pull_page_from_cache(window.bootlegger.grid.current_page_index)

		// traverse through raw discord messages and find suitable ones
		this.traversing = true;
		console.log('Lock nav')
		const msgs = pulled_cache || await window.bootlegger.main.msg_traverser(this.chan_id, this.worker_alive, msg_offs, 56)
		this.qitems = msgs.media_units || msgs;
		console.log('unlock nav')
		console.log('Pages:', this.pages)
		this.traversing = false;

		// write down last message id globally
		// this.msg_offset = msgs.last_id;
		// window.bootlegger.grid.current_page_index = msgs.last_id

		//
		// save the page to cache
		//

		// first check whether the cache amount exceeds the limit
		const cache_size = this.pages.reduce(function(sum, current){
			print('Counting cache...', current)
			sum += 1 ? current.cached == true : 0
			return sum
		}, 0)
		// if limit is exceeded - delete first cached page from cache
		print('Cache size:', cache_size)
		if (cache_size > this.cache_size){
			this.del_page_from_cache(window.bootlegger.grid.current_page_index - this.cache_size)
		}
		print('writing down last offset', msgs.last_id || this.pages[window.bootlegger.grid.current_page_index].offs)
		// create new cache
		var page_cache = {
			// todo: it's also possible to pull original id from original array
			'offs': msgs.last_id || this.pages[window.bootlegger.grid.current_page_index].offs,
			'cached': true,
			'media': {}
		}
		for (var future_cache of msgs.media_units || msgs){
			page_cache.media[future_cache.lizard_id] = future_cache
		}

		// todo: if this page exists already - simply overwrite it for now
		if (this.pages[window.bootlegger.grid.current_page_index]){
			this.pages[window.bootlegger.grid.current_page_index] = page_cache
		}else{
			// else - append this page to cache
			this.pages.push(page_cache)
		}

		//
		// Process the resulting queue. Spawn elements
		//
		this.working = true;
		await window.bootlegger.main.media_queue_processor(this, this.worker_alive)
		this.working = false;

		return true
	}

	// The algorithm is pretty smart:
	// Cache id is assigned to the message object on the traversing process, but no actual cache is created
	// the cache creation only happens AFTER the traversing was done
	// Which means that if traversing was interrupted - no damaged cache is present anywhere
	pull_page_from_cache(page_index){
		// if this page is missing completely - return false
		// this usually happens when loading the next page (and it doesn't exist)
		if (!this.pages[page_index]){return false}

		print('Pulling page from cache index', page_index)

		// Always return an array of messages,
		// becasue messages are pulled from cache in the main functions and not here
		// this means that the media processing process happens no matter what
		// and the only difference is how fast it is
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

	// show pages
	eval_pages(active_page_index=null){
		// 9 + sides

		// size of all the visible page numbers
		const amt = 9
		const list = (amt % 2) ? (amt + 1) : amt

		const sides = Math.floor(list / 2)

		var result = []

		const pg_len = this.pages.length - 1

		// previous
		result.push(`
			<div id="cinemads_page_prev">Prev</div>
		`)

		// first
		const frist_in_the_beginning = active_page_index > sides
		if (frist_in_the_beginning){
			result.push(`
				<div page_index="0" class="cinemads_page">0</div>
				<div class="cinemads_page_between">...</div>
			`)
		}
		// left side
		print('Left side:', (active_page_index - sides).clamp(0, 65535), active_page_index)
		for (var pgl of range((active_page_index - sides).clamp(0, 65535), active_page_index)){
			if (!this.pages[pgl]){break}
			var p_index = pgl
			result.push(`
				<div page_index="${p_index}" class="cinemads_page">${p_index}</div>
			`)
		}
		// middle
		result.push(`
			<div class="cinemads_page pg_active">${active_page_index}</div>
		`)
		// right side
		print('Right side:', active_page_index, active_page_index + sides)
		for (var pgr of range(active_page_index + 1, active_page_index + sides)){
			if (!this.pages[pgr]){break}
			var p_index = pgr
			result.push(`
				<div page_index="${p_index}" class="cinemads_page">${p_index}</div>
			`)
		}
		// last
		// todo: why use not not ?
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

		// kill previous work
		this.abort()

		window.bootlegger.grid.current_page_index = pg_index

		this.load_page(this.pages[pg_index].offs)
	}

	next_page(initial=0){
		// kill previous work
		this.abort()

		window.bootlegger.grid.current_page_index += 1
		print('Next page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1, 'got offset:', this.pages[window.bootlegger.grid.current_page_index - 1].offs)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	prev_page(initial=0){
		// kill previous work
		this.abort()

		window.bootlegger.grid.current_page_index -= 1
		print('Prev page index:', window.bootlegger.grid.current_page_index, 'pages:', this.pages, 'offset from', window.bootlegger.grid.current_page_index - 1)
		this.load_page(this.pages[window.bootlegger.grid.current_page_index - 1].offs)
	}

	kill(){
		this.alive = false;
		this.worker_alive.alive = false;

		// todo: is this over the top ?
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
		// todo: this a good reason to explore various ways of avoiding nested for loops
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
	// $('body').append(`<img id="cinema_ds_fullscreen" src="${tgt.getAttribute('fullsize')}">`)
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