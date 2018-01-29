jQuery(document).ready(function($){
	"use strict";
    new WOW().init();
	$('.slider-item').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 5000,
		autoplay: true,
		cssEase: 'linear',
		nextArrow: '.slider-nav .next',
		prevArrow: '.slider-nav .prev',
	});
	$('.facebook-analysis-heading span').click(function(){
		$('.facebook-analysis .form-block').slideDown("slow");
		$('.facebook-analysis').css("padding-bottom", "110px");

	});    
	$('.facebook-analysis .form-block span').click(function(){
		$('.facebook-analysis .form-block').slideUp("slow");

		$('.facebook-analysis').css("padding-bottom", "0px");

	});
	$(window).scroll(function(){
		var sticky = $('.second-header .navbar-default'),
		scroll = $(window).scrollTop();

		if (scroll >= 100){ 
			sticky.addClass('fixed');
		}
		else {sticky.removeClass('fixed');
	}
});
	$('[data-sidenav]').sidenav();

});