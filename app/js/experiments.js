/*global $ */

$(document).ready(function() {
    setInterval(function(){articleTada();}, 2000);
    
    startArticles();
});

function articleTada(){
    var randNum = Math.floor(Math.random() * $('.bg-thumbs').length) + 1;
    
    $('.bg-thumbs').eq(randNum).addClass('is-emph');
    //$('.bg-thumbs').siblings().removeClass('is-emph');
}

function startArticles() {
    $('.bg-thumbs').each(function(i){
      setTimeout(function() {
        $('.bg-thumbs').eq(i).addClass('is-visible');
      }, 100 * i);
    });
  }
  


