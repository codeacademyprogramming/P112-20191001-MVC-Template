(function($) {
	
	"use strict";

    $(document).ready(function(){
                    
         // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();


        // dropdown menu

        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }


        /* Single Item Carousel  */
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop:true,
                margin:0,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                autoplay: 5000,
                dots: false,
                nav: true,
                navText: [ '<span class="fas fa-chevron-left"></span>', '<span>Next</span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });    		
        }


        // Services Load More Ajax
        if($('.services-loadmore').length){
            $('.services-loadmore').simpleLoadMore({
              item: '.loaditem',
              count: 4,
              itemsToLoad: 2,
              btnHTML: '<a href="#" class="loadmore-btn"><i class="fas fa-angle-down"></i> Next</a>'
            });
        }

        // Blog Load More Ajax
        if($('.blog-loadmore').length){
            $('.blog-loadmore').simpleLoadMore({
              item: '.loaditem',
              count: 3,
              itemsToLoad: 1,
              btnHTML: '<a href="#" class="loadmore-btn"><i class="fas fa-angle-down"></i> Next</a>'
            });
        }
        
        

        // Scroll to a Specific Div
        if($('.scroll-to-target').length){
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
               // animate
               $('html, body').animate({
                   scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-link').magnificPopup({
                type: 'video',
            });
        }

        // Scroll Down to contact form
        $(".scroll").on('click', function(e){
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop : position
            },2000);
        });


        // Elements Animation
        if($('.wow').length){
            var wow = new WOW(
              {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,       // trigger animations on mobile devices (default is true)
                live:         true       // act on asynchronously loaded content (default is true)
              }
            );
            wow.init();
        }


        /* AOS Animation */
        if($.fn.init){
            AOS.init({
                duration: 1200
            });
        }
        
    });

/* ==========================================================================
   When document is resize, do
   ========================================================================== */
	
    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();
    });


/* ==========================================================================
   When document is scroll, do
   ========================================================================== */
	
    $(window).on('scroll', function () {
        
        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
    $(window).on('load', function () {
            
        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if($('.preloader').length){
                $('.preloader').delay(200).fadeOut(500);
            }
        }
		handlePreloader();
	});	



})(window.jQuery);