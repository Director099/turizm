'use strict';

$(document).ready(function() {
	$('#page').fullpage({
		navigation: true,
		navigationPosition: 'right',
		scrollBar: true,
		animateAnchor: true,
		parallax: true,
		sectionSelector: '.section',
		slideSelector: '.slide'
	});
});

$('.section.bg-3').parallax({imageSrc: '/img/beach.jpg'});
$('.section.bg-4').parallax({imageSrc: '/img/palma.jpg'});
$('.section.s').parallax({imageSrc: '/img/slider-2.jpg'});
// $('.slide-1').parallax({imageSrc: '/img/slider-1.jpg'});
// $('.slide-2 .fp-bg').parallax({imageSrc: '/img/slider-2.jpg'});
// $('.slide-3 .fp-bg').parallax({imageSrc: '/img/slider-3.jpg'});
// $('.slide-4 .fp-bg').parallax({imageSrc: '/img/slider-4.jpg'});

$('.slide-main').owlCarousel({
	loop:true,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: 'fadeOut',
    autoplay:true,
    mouseDrag:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:10000,
    items: 1
});


$('.companions').owlCarousel({
	loop:true,
    nav:true,
    margin:40,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    mouseDrag:true,
    dots:false,
    items: 4
});


