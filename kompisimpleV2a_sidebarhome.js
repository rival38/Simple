$(function(){ // document ready
   if ($('#sidebar-right2').length) { // make sure "#sticky" element exists
      var el = $('#sidebar-right2');
      var stickyTop = $('#sidebar-right2').offset().top; // returns number
      var stickyHeight = $('#sidebar-right2').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#footer-wrapper').offset().top - stickyHeight - 20;

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

function myFunction() {
    var x = document.getElementById('sidebar-right');
    var y = document.getElementById('sidebar-right2');
    var z = document.getElementById('main-wrapper');
    var a = document.getElementsByTagName('article');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
    if (z.style.width === 'calc(100% - 8px)') {
        z.style.width = 'calc(100% - 218px)';
    } else {
        z.style.width = 'calc(100% - 8px)';
    }

$(".post").toggleClass("toggle");
   
}