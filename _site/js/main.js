$(document).ready(function() {
    //Prevent <a> Clicks
    $("a").on("click", function(event) {
		event.preventDefault();
	});
	
	// Font Flex
	$(function() {
      $('.font-flex h2').fontFlex(32, 70, 10); 
      $('.font-flex p').fontFlex(16, 32, 30); 
    });
    
    //Keep Ratio
    $('.keep-ratio .image').keepRatio({ ratio: 800/400, calculate: 'height' });
    
    //Sliders
    ////////////////Carousel
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
    
    /////////////Single Slider
    $(".single-contained").owlCarousel({
        navigationText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>','<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'],
        navigation: true,
        pagination : true,
        singleItem: true,
        slideSpeed: 420
    });

    
    ////////////Custom Pager Slider    
    $('.pager-slider').bxSlider({
        pagerCustom: '.custom-pager',
        slideSpeed: 420,
        prevText: '<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-left-arrow"></use></svg>',
        nextText: '<svg xmlns="http://www.w3.org/2000/svg" class="icon"><use xlink:href="#shape-right-arrow"></use></svg>'
    });
    
    //Lightboxes
    /////////////////Single lightbox
    $('.popup').magnificPopup({ 
      type: 'image',
      removalDelay: 700
    });
    /////////////////Gallery lightbox
    $('.popup-gallery').magnificPopup({ 
      type: 'image',
      gallery:{enabled:true},
      removalDelay: 700
    });
    
    
});