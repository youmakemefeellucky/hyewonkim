$(document).ready(function() {

  $( '#button-doc' ).click(function() {
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );
      $( '#portfolio' ).load( "doctolib" ).fadeIn();
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
  });

  $( '#button-arc' ).click(function() {
      window.scrollTo(0, 0);
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
      $( '#portfolio' ).load( "archisport" ).fadeIn();
  });


  $( '#button-kei' ).click(function() {
      window.scrollTo(0, 0);
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
      $( '#portfolio' ).load( "keisuke" ).fadeIn();
  });


});
