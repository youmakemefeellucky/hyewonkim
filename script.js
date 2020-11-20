$(document).ready(function() {



  // Show & hide welcome text, circle on scroll
  var lastScrollTop = 0;
  $(document).scroll(function() {
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



  // Show & hide sidebar
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.sidebar').fadeIn();
    } else {
      $('.sidebar').fadeOut();
    }
  });



  // Sidebar (refactoring required !)
  var observer1 = new IntersectionObserver(function(entries) {
  	if(entries[0].isIntersecting === true) {
      $('#side1').css('color', '#FFEF64');
    } else {
      $('#side1').css('color', '#bfbfbf');
    }
  }, { threshold: [0] });

  var observer2 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      $('#side2').css('color', '#FFEF64');
    } else {
      $('#side2').css('color', '#bfbfbf');
    }
  }, { threshold: [0] });

  var observer3 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      $('#side3').css('color', '#FFEF64');
    } else {
      $('#side3').css('color', '#bfbfbf');
    }
  }, { threshold: [0] });

  observer1.observe(document.querySelector("#p1-1"));
  observer2.observe(document.querySelector("#p2"));
  observer3.observe(document.querySelector("#p3"));

});
