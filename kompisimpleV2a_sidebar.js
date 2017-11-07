var mql = window.matchMedia('screen and (min-width: 641px)');if (mql.matches){
$(document).ready(function(){
$('a[name="link-download"]').before($('.download-sidebar').html());
$('.download-sidebar').html('');
});
}

$(function(){ // document ready
   if ($('#sidebar-right2').length) { // make sure "#sticky" element exists
      var el = $('#sidebar-right2');
      var stickyTop = $('#sidebar-right2').offset().top; // returns number
      var stickyHeight = $('#sidebar-right2').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#sticky_stoper').offset().top - stickyHeight - 20;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: '55px' });
             el.addClass("sticky_widget");
          }
          else {
             el.css('position','static');
             el.removeClass("sticky_widget");
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          el.removeClass("sticky_widget");
          }
        });
   }
});