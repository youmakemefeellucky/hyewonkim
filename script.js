$(document).ready(function() {

  $( '#button-dcs' ).click(function() {
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );
      $( '#portfolio' ).load( "docusign" ).fadeIn();
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
  });

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
      $( '#portfolio' ).load( "archisport" ).fadeIn();
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
  });


  $( '#button-kei' ).click(function() {
      window.scrollTo(0, 0);
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );
      $( '#portfolio' ).load( "keisuke" ).fadeIn();
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
  });


  $( '#button-aut' ).click(function() {
      window.scrollTo(0, 0);
      $( this ).css( 'color', '#FFEF64' );
      $( this ).siblings().css( 'color', '#bfbfbf' );      
      $( '#portfolio' ).load( "autres" ).fadeIn();
      $( 'html, body' ).animate({scrollTop: window.innerHeight}, 300);
  });

});
