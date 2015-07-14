(function ($) {
  Drupal.behaviors.makeSticky = {
    attach: function() {

      $( '<div class="nav-bg"></div>').insertBefore( ".navbar-inner .container" );

      $( "header.navbar" ).addClass( "sticky-nav" );
      $("a.logo").addClass ("white-logo");
      
      var myWindow = $( window ),
          myHeader = $( "header.navbar" ),
          logo = $("a.logo");

          myWindow.scroll( function() {
            if ( myWindow.scrollTop() == 0 ) {
              myHeader.addClass( "sticky-nav" ),
              logo.addClass ("white-logo");
            } else {
              myHeader.removeClass( "sticky-nav" ),
              logo.removeClass ("white-logo");
            }
          } );
    }
  };
}(jQuery));



    
