$(document).ready(function() {

  // Show & hide welcome text, circle on scroll
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      $('#bonjour').hide();
      $('#circle').hide();
      $('.works').css('color','#FFEF64');
    } else {
      $('#bonjour').fadeIn(800);
      $('#circle').fadeIn(800);
      $('.works').css('color','#bfbfbf');
    }

  });

  // Scroll to WORKS
  var y = window.innerHeight/2;
  $('.works').click(function() {
    $('html, body').animate({scrollTop: $('#p1').offset().top -y}, 'slow');
    $('#circle').css('display','none');
    $('#bonjour').css('display','none');
  });

});
