/*global $ */

$(document).ready(function() {
        $('.next').click( function() {
           var currentPage = $('.current');
           var nextPage = currentPage.next();
           
           var currentLine = $('.active');
           var nextLine = currentLine.next();
           
           if(nextPage.length === 0) {
               nextPage = $('.page').first();
               nextLine = $('.line').first();
       }
       
       currentPage.slideUp(800).removeClass('current');
       nextPage.slideDown(800).addClass('current');
       
       currentLine.removeClass('active');
       nextLine.addClass('active');
       
        });
        
        
        $('.prev').click( function() {
           var currentPage = $('.current');
           var prevPage = currentPage.prev();
           
           var currentLine = $('.active');
           var prevLine = currentLine.prev();
           
           if(prevPage.length === 0) {
               prevPage = $('.page').last();
               prevLine = $('.line').last();
       }
       
       currentPage.slideUp(800).removeClass('current');
       prevPage.slideDown(800).addClass('current');
       
       currentLine.removeClass('active');
       prevLine.addClass('active');
       
    });
    
});

