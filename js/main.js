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
});