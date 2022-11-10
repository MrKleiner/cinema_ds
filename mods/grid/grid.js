
$this.current_page_index = 0

class gridmaker
{
	// this should be triggered on every channel switch
	// so that the class always has the actual channel id
	constructor(){
		// ensure that everything exists (in a silent manner)
		$all.main.ensure_container_exists(true)
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

		// Pages loaded so far
		// now with caching
		// format is:
		// [
		// 	{
		// 		'offs': LAST MESSAGE ID,
		// 		'media': [
		// 			{
		// 				'msg_id': MESSAGEID,
		// 				'cache': BLOB URL OR NULL
		// 			},
		// 			{
		// 				'msg_id': MESSAGEID,
		// 				'cache': BLOB URL OR NULL
		// 			}
		// 		]
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

		// show page numbers
		// $this.current_page_index = msg_offs || 0
		$('#cinema_ds_main_window #cinemads_pages').html(this.eval_pages($this.current_page_index).join('\n'))
		$('#cinema_ds_main_window #cinemads_media_pool').empty()
		// traverse through raw discord messages and find suitable ones
		this.traversing = true;
		const msgs = await $all.main.msg_traverser(this.chan_id, this.worker_alive, msg_offs, 56)
		this.qitems = msgs.media_units;
		this.traversing = false;

		// write down last message id globally
		// this.msg_offset = msgs.last_id;
		// $this.current_page_index = msgs.last_id

		// save the page
		this.pages.push({
			'offs': msgs.last_id,
			'media': msgs.media_units
		})

		// Process created queue. Spawn elements
		this.working = true;
		await $all.main.media_queue_processor(this, this.worker_alive)
		this.working = false;

		return true
	}

	// show pages
	eval_pages(active_page_index=null){
		// 9 + sides

		// size of all the visible page numbers
		const amt = 9
		const list = (amt % 2) ? (amt + 1) : amt

		const sides = Math.floor(list / 2)

		var result = []

		const pg_len = this.pages.length

		// previous
		result.push(`
			<div id="cinemads_page_prev">Prev</div>
		`)

		// first
		if (active_page_index >= sides){
			result.push(`
				<div page_index="0" class="cinemads_page">1</div>
				<div class="cinemads_page_between">...</div>
			`)
		}
		// left side
		print('Left side:', (active_page_index - sides).clamp(0, 65535), active_page_index)
		for (var pgl of range((active_page_index - sides).clamp(0, 65535), active_page_index)){
			if (!this.pages[pgl]){break}
			result.push(`
				<div page_index="${pgl}" class="cinemads_page">${pgl}</div>
			`)
		}
		// middle
		result.push(`
			<div class="cinemads_page pg_active">${active_page_index}</div>
		`)
		// right side
		print('Right side:', active_page_index, active_page_index + sides)
		for (var pgr of range(active_page_index, active_page_index + sides)){
			if (!this.pages[pgr]){break}
			result.push(`
				<div page_index="${pgr}" class="cinemads_page">${pgr}</div>
			`)
		}
		// last
		// todo: why use not not ?
		if ((pg_len - active_page_index) > sides){
			result.push(`
				<div class="cinemads_page_between">...</div>
				<div page_index="0" class="cinemads_page">${pg_len}</div>
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

		this.load_page(this.pages[pg_index].offs)
	}

	next_page(initial=0){
		// kill previous work
		this.abort()

		$this.current_page_index += 1
		print('New page index:', $this.current_page_index, 'pages:', this.pages, 'WHAT??', $this.current_page_index - 1)
		this.load_page(this.pages[$this.current_page_index - 1].offs)
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
}

$this.grid = null

$this.init = function(){
	if (!$this.grid){
		$this.grid = new gridmaker()
		print('created new grid')
		$this.grid.load_page(0)
	}
}

$this.reset = function(){
	$this.grid.kill()
	$this.current_page_index = 0
	$this.grid = new gridmaker()
}


$this.load_next_page = function(){
	$this.grid.next_page()
}

$this.maximize_image = function(tgt){
	$('body #cinema_ds_fullscreen').remove()
	$('body').append(`<img id="cinema_ds_fullscreen" src="${tgt.src}">`)
}





