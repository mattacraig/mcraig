$(document).on('ready', function() {
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop(),
				headerHeight = $('header').height(),
				hiddenNav = $('.hidden-nav');

		if(scroll >= headerHeight) {
			hiddenNav.addClass('nav-reveal');
		}else{
			hiddenNav.removeClass('nav-reveal');
		}
		
	});
});