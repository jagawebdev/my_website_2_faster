/*global $ */

$(document).ready(function() {
  
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });

  });
  
var prev = 0;
var $window = $(window);
var nav = $('.header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

$(window).scroll(function() {
    showLinks();
  });
  
  function showLinks() {
    var wScroll = $(window).scrollTop();
  if($('.about-container').offset().top - $(window).height() / 3 < wScroll) {
      $('.thumbs').each(function(i){
        setTimeout(function() {
          $('.thumbs').eq(i).addClass('visible');
        }, 100 * i);
      });
    }
  }