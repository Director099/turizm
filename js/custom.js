'use strict';

$(document).ready(function() {

    if ($(window).width() >= 992) {
            $('#page').fullpage({
            navigation: true,
            navigationPosition: 'right',
            scrollBar: true,
            animateAnchor: true,
            parallax: true,
            sectionSelector: '.section',
            slideSelector: '.slide'
        });
    }
	// $('#page').fullpage({
	// 	navigation: true,
	// 	navigationPosition: 'right',
	// 	scrollBar: true,
	// 	animateAnchor: true,
	// 	parallax: true,
	// 	sectionSelector: '.section',
	// 	slideSelector: '.slide'
	// });


    $('.section.bg-3').parallax({imageSrc: '/img/beach.jpg'});
    $('.section.bg-4').parallax({imageSrc: '/img/sand.jpg'});
    $('.section.bg-5').parallax({imageSrc: '/img/palma.jpg'});
    $('.section.bg-7').parallax({imageSrc: '/img/slider-4.jpg'});
    $('.section.s').parallax({imageSrc: '/img/slider-2.jpg'});

    $('.slide-main').owlCarousel({
    	loop:true,
        nav:true,
        navText: ['<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>', '<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>'],
        animateOut: 'fadeOut',
        autoplay:true,
        mouseDrag:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:10000,
        items: 1
    });


    $('.companions').owlCarousel({
    	center: true,
        loop: true,
        rewind: false,
        stagePadding: 58,
        margin: 0,
        // autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveBaseElement: window,
        dots: false,
        nav: true,
        navText: ['<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>', '<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            450: {
                items: 3,
                nav: true
            },
            1200: {
                items: 3,
                nav: true,
            },
            1399: {
                items: 5,
                nav: true,
            }
        }
    });

    $('.comments').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>', '<svg class="arrow" width="50" height="50"><use xlink:href="#right-arrow"/></svg>'],
        dots:true,
        items: 1,
        onInitialized: function() {
            var dot = document.querySelectorAll('.owl-dot');
            dot[0].innerHTML = '<img src="img/comment/dot-2.jpg" alt="Иконки">';
            dot[1].innerHTML = '<img src="img/comment/dot-3.jpg" alt="Иконки">';
            dot[2].innerHTML = '<img src="img/comment/dot-4.jpg" alt="Иконки">';
            dot[3].innerHTML = '<img src="img/comment/dot-5.jpg" alt="Иконки">';
        }
    });

    $('.partners').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<svg class="arrow" width="35" height="35"><use xlink:href="#right-arrow"/></svg>', '<svg class="arrow" width="35" height="35"><use xlink:href="#right-arrow"/></svg>'],
        dots:false,
        stagePadding: 55,
        margin: 120,
        items: 4
    });

});

(function() {

    var btnTur = document.querySelector('#choose-tur');
    var sidebar = document.querySelector('.sidebar');
    var fullPage = document.querySelector('#page');

    btnTur.addEventListener('click', function() {
        btnTur.classList.toggle('disabled');
        sidebar.classList.toggle('active');
        page.classList.toggle('disabled');
    })

})();


