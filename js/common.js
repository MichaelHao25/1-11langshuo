var mySwiper = new Swiper('.index-banner .swiper-container', {

	// pagination: '.swiper-pagination',

	// nextButton: '.swiper-button-next',
	// prevButton: '.swiper-button-prev',

})
$('.header .search-box .list .item>a.language+.child-menu a').on('click', function() {
	$(this).parent('.child-menu').siblings().text($(this).text());
});

function fix_screen(hide) {
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if (hide == 'hide') {
		document.documentElement.style.overflow = 'hidden';
		$('body').addClass('active').css('top', '-' + top + 'px');
	} else {
		$('body').removeClass('active');
		document.documentElement.style.overflow = 'auto';
		document.documentElement.scrollTop = -parseInt($('body').css('top'));
		document.body.scrollTop = -parseInt($('body').css('top'));
	}
}

$('.header .nav .menu').on('click', function() {
	if ($(this).parent().toggleClass('active').hasClass('active')) {
		fix_screen('hide');
	} else {
		fix_screen();
	}
});
$('.header .nav .layout').on('click', function() {
	$('.header .nav .menu').trigger('click');
});
$('.header .nav .item').hover(function() {
	$('.header .nav .item .child-menu').slideUp();
	$(this).children('.child-menu').slideDown();
}, function() {
	/* Stuff to do when the mouse leaves the element */
});
$('.header .nav').hover(function() {
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.header .nav .item .child-menu').slideUp();
});


$('*[data-js-tabs]').children().on('click', function() {
	var tabs_obj = $(this).parent().attr('data-js-tabs');
	$(tabs_obj).children().eq($(this).index()).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active');
});
$.each($('*[data-js-tabs]'), function(index, el) {
	var arg = window.location.search;
	if (arg != '') {
		arg = arg.split('?')[1].split('=')[1];
		console.log(arg);
		$(el).children().eq(arg - 1).trigger('click');

	} else {
		$(el).children().first().addClass('active');
		$($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
	}
});
