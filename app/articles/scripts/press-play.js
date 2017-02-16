/*global $ */

$(document).ready(function() {
    var audio = document.getElementById('myAudio');
    
    initAudio(audio);

    function initAudio(element) {
        if(!audio.currentTime) {
        $('#duration').html('0.00');
    }
}
    
    $('#pause').hide();
    
    $('#play').click(function() {
        audio.play();
        $('#play').hide();
        $('#pause').show();
        showDuration();
    })
    
    $('#pause').click(function() {
        audio.pause();
        $('#pause').hide();
        $('#play').show();
    })
    
    $('#volume').change(function() {
        audio.volume = parseFloat(this.value / 10);
    });
    
    function showDuration() {
        $(audio).bind('timeupdate', function() {
            var s = parseInt(audio.currentTime % 60);
            var m = parseInt((audio.currentTime) / 60) %60;
            
            if( s < 10) {
                s = '0' + s;
            }
            
            $('#duration').html(m + '.' + s);
            var value = 0;
            if(audio.currentTime > 0) {
                value = Math.floor((100 / audio.duration) * audio.currentTime);
            }
            $('#progress').css('width',value+'%');
        })
    }



    $(".head1").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
        
});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      var $this = $(this);

      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };
      resizer();

      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( $ );