document.addEventListener('click', tr_event => {


	// ==========================================
	// 	grid grid
	// ==========================================

	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_next')){window.bootlegger.grid.load_next_page()}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry')){window.bootlegger.grid.maximize_image(event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry'))}
	if (event.target.closest('#cinema_ds_fullscreen')){$('body #cinema_ds_fullscreen').remove()}


});


document.addEventListener('keydown', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('body')){window.bootlegger.main.open_pool_via_keybind(tr_event)}


});


document.addEventListener('scroll', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('#cinema_ds_main_window #cinemads_media_pool')){window.bootlegger.main.scroll_watcher(event.target.closest('#cinema_ds_main_window #cinemads_media_pool'))}


});


