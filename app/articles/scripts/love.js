/*global $ */ 
var lines = $('.line');

$(document).ready(function() {
    
    $(window).scroll( function(){
        
        lines.each( function(i){
            
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 280;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            /* If the object is completely visible in the window, show it and ad black class */
            if( bottom_of_window > bottom_of_object ){
                
                
                $(this).animate({'opacity':'1'},500).addClass('black');
                $(this).siblings().removeClass('black');
                
            }
        }); 
    
    });
});


(function blink() { 
  $('.blink').fadeOut(500).fadeIn(500, blink); 
})();

