$(document).ready(function(){
  $(".expand").click(function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top -60
    }, 500);
    $(this).next().slideToggle('slow');
});
  $(".ok").click(function(){
      $('html, body').animate({
          scrollTop: $(this).parent().parent().before().offset().top -100
      }, 500);
      $(this).parent().parent().hide('slow');
  });
  $( "#apropos" ).on( "click", function() {
    $( "#page1" ).fadeOut("slow","swing");
    $( "#page2" ).fadeIn("slow","swing");
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 500);
    return false;
    });
    $( "#home" ).on( "click", function() {
      $( "#page2" ).fadeOut("slow","swing");
      $( "#page1" ).fadeIn("slow","swing");
      $('html, body').animate({
          scrollTop: $("html").offset().top
      }, 500);
      return false;
    });
});
