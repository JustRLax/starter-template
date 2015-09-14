$(document).ready(function() {
    //Prevent <a> Clicks
    $("a").on("click", function(event) {
		event.preventDefault();
	});
    
    // Font Flex
    $('.font-flex h2').fontFlex(32, 70, 10); 
    $('.font-flex p').fontFlex(16, 32, 30); 
    
    //Keep Ratio
    $('.keep-ratio .image').keepRatio({ ratio: 800/400, calculate: 'height' });
    $('.wrap-image').keepRatio({ ratio: 1/1, calculate: 'height' });
    
    //Sliders
    //*************Carousel
    $(".carousel").owlCarousel({
        navigationText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>','<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'],
        navigation: true,
        pagination : true,
        itemsCustom : [
        [0, 1],
        [500, 2],
        [700, 3],
        [1200, 4]
      ],
    });
    
    //*************Single Slider Contained
    $(".slider-container .single-contained").owlCarousel({
        navigationText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>','<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'],
        navigation: true,
        pagination : true,
        singleItem: true,
        transitionStyle: 'backSlide', //fade | goDown | fadeUp | backSlide
        slideSpeed: 420
    });
    
    //*************Single Slider Full
    $(".slider-full .single-contained").owlCarousel({
        navigationText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>','<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'],
        navigation: true,
        pagination : true,
        singleItem: true,
        transitionStyle: 'goDown',
        slideSpeed: 420
    });

    
    //*************Custom Pager Slider    
    $('.pager-slider').bxSlider({
        pagerCustom: '.custom-pager',
        slideSpeed: 420,
        prevText: '<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>',
        nextText: '<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'
    });
    
    //Lightboxes
    //*************Single lightbox
    $('.popup').magnificPopup({ 
        type: 'image',
        removalDelay: 700
    });
    //*************Gallery lightbox
    $('.popup-gallery').magnificPopup({ 
        type: 'image',
        gallery:{enabled:true},
        removalDelay: 700
    });
    
    //*************Iframe lightbox
    $('.popup-iframe').magnificPopup({ 
        type: 'iframe',
        removalDelay: 700
    });
    
    //*************Inline lightbox
    $('.popup-inline').magnificPopup({ 
        type: 'inline',
        removalDelay: 700,
        closeBtnInside: true
    });
    
    //*************AJAX lightbox
    $('.popup-ajax').magnificPopup({ 
        type: 'ajax',
        removalDelay: 700,
        closeBtnInside: true
    });
    
    //Accordians
    $(".accordion-container .toggle").on("click", function(event) {
		$(this).toggleClass("active");
		$(this).next("article").slideToggle(420);
	});
	
	//Navigations
	
	//Inline to mobile button
    $(".nav.inline .menu").on("click", function(event) {
		$(this).toggleClass("active");
		$(this).next("nav").slideToggle(420);
	});
	
	//Dropdown button
	$(".with-sub .show-sub").on("click", function(event) {
        $(this).toggleClass("active");
        $(this).next().next("ul").slideToggle(420);
    	});
    	
    	//Inline Contained to Mobile Button
    	$(".nav.inline-contained .menu").on("click", function(event) {
		$(this).toggleClass("active");
		$(this).next(".site-nav").slideToggle(420);
	});
	
	
	$(window).resize(function(){
        var width = $(window).width();
		if(width >= 300 && width <= 780){
			$(".site-nav").attr( "style", "" );
			$(".nav nav").attr( "style", "" );
			$(".nav ul").attr( "style", "" );
		}
	}).resize();
	
	//Fullscreen Overlay
	$(".nav.fullscreen-overlay .menu").on("click", function(event) {
		$(this).addClass("active");
		$("nav.overlay").addClass("active").prepend('<span class="close">X</span>');
		$("nav.overlay .close").on("click", function(event) {
        	    $(".nav.fullscreen-overlay .menu").removeClass("active");
        	    $("nav.overlay").removeClass("active");
        	    $(this).remove();
        	});
	});
	
	//Off Canvas Nav
	$(".nav.off-canvas .menu").on("click", function(event) {
		$(this).toggleClass("active");
		$(".off-canvas-body").toggleClass("active");
	});
	$(".with-sub .show-subpages").on("click", function(event) {
		$(this).toggleClass("active");
		$("ul.subpages").toggleClass("active");
	});
	
	//Side Nav
    $(".side-off-canvas .menu").on("click", function(event) {
		$(this).toggleClass("active");
		$(".side-nav-body").toggleClass("active");
	});
	    
    //Tabs
    tabs();
    
    //Animations 
    $("a.animate").on("click", function(event) {
		$(this).siblings().filter(".animateIn").addClass('active');
		$(this).siblings().filter(".animateOut").addClass('active');
		$(this).siblings().filter(".slideIn").addClass('active');
		$(this).siblings().filter(".slideOut").addClass('active');
	});
	$("a.reset").on("click", function(event) {
		$(this).siblings().filter(".animateIn").removeClass('active');
		$(this).siblings().filter(".animateOut").removeClass('active');
		$(this).siblings().filter(".slideIn").removeClass('active');
		$(this).siblings().filter(".slideOut").removeClass('active');
		
	});
	
	//INVIEW 
	$('.inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $('.wrap-image').addClass('active');
      } else {
        $('.wrap-image').removeClass('active');
      }
    });
	
	
});