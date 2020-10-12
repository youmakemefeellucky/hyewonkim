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
  
});
