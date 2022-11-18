document.addEventListener('click', tr_event => {


	// ==========================================
	// 	grid grid
	// ==========================================

	if (event.target.closest('a.article_link')){window.bootlegger.grid.open_article()}
	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_next')){window.bootlegger.grid.load_next_page()}
	if (event.target.closest('#cinema_ds_main_window #cinemads_pages #cinemads_page_prev')){window.bootlegger.grid.load_prev_page()}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry:not(.cinema_ds_video_entry[autoplay])')){window.bootlegger.grid.maximize_video(event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry:not(.cinema_ds_video_entry[autoplay])'))}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry[autoplay]')){window.bootlegger.grid.maximize_video_autoplay(event.target.closest('#cinema_ds_main_window .cinema_ds_video_entry[autoplay]'))}
	if (event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry')){window.bootlegger.grid.maximize_image(event.target.closest('#cinema_ds_main_window .cinema_ds_img_entry'))}
	if (event.target.closest('#cinema_ds_fullscreen:not(.noclick)')){$('body #cinema_ds_fullscreen').remove()}
	if (event.target.closest('.cinemads_page:not(.pg_active)')){window.bootlegger.grid.page_switch(event.target.closest('.cinemads_page:not(.pg_active)'))}


});


document.addEventListener('keydown', tr_event => {


	// ==========================================
	// 	grid grid
	// ==========================================

	if (event.target.closest('body')){window.bootlegger.grid.close_video_fullscreen(tr_event)}




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


document.addEventListener('contextmenu', tr_event => {


	// ==========================================
	// 	main main
	// ==========================================

	if (event.target.closest('.cinema_ds_img_entry, .cinema_ds_video_entry')){window.bootlegger.main.ban_msg(tr_event, event.target.closest('.cinema_ds_img_entry, .cinema_ds_video_entry'))}


});


