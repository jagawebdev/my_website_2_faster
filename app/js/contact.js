/*global $ */
$(document).ready(function() {
    showLinks();
});

function showLinks() {
    
      $('.thumbs').each(function(i){
        setTimeout(function() {
          $('.thumbs').eq(i).addClass('visible');
        }, 200 * i);
      });
    }
    