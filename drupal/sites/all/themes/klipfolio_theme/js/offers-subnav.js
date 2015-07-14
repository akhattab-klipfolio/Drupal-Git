(function ($) {
  Drupal.behaviors.stickySubNav = {
    attach: function() {

      var offers = $(".offers-sub-nav"),
          myWindow = $( window );

          offers.insertBefore( "#top-container" );
          
          myWindow.scroll( function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition >= 1300) {
              offers.css( "top", "70px" );
            } else {
              offers.css( "top", "-25px" );
            }
          });

    }
  };
}(jQuery));



    
