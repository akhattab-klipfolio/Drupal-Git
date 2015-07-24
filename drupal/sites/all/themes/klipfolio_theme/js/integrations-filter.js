(function ($) {
  Drupal.behaviors.intergrationFilter = {
    attach: function() {
        $( "li.nav-all" ).click(function() {
          $( ".integration-social-media").fadeIn();
          $( ".integration-technology" ).fadeIn();
          $( ".integration-marketing").fadeIn();
          $( ".integration-web-analytics" ).fadeIn();
          $( ".integration-project").fadeIn();
          $( ".integration-sales" ).fadeIn();
          $( ".integration-misc").fadeIn();
        });
    	$( "li.nav-social-media" ).click(function() {
          $( ".integration-social-media").fadeIn();
          $( ".integration-technology" ).fadeOut();
          $( ".integration-marketing").fadeOut();
          $( ".integration-web-analytics" ).fadeOut();
          $( ".integration-project").fadeOut();
          $( ".integration-sales" ).fadeOut();
          $( ".integration-misc").fadeOut();
        });

        $( "li.nav-technology" ).click(function() {
          $( ".integration-social-media").fadeOut();
          $( ".integration-technology" ).fadeIn();
          $( ".integration-marketing").fadeOut();
          $( ".integration-web-analytics" ).fadeOut();
          $( ".integration-project").fadeOut();
          $( ".integration-sales" ).fadeOut();
          $( ".integration-misc").fadeOut();
        });

       
    }
  };
}(jQuery));
