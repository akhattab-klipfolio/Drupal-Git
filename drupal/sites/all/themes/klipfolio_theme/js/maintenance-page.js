(function ($) {
  Drupal.behaviors.LP = {
    attach: function() {

    	$("body").find("header#navbar").remove("header#navbar");
        $("body").find("footer#footer").remove("footer#footer");

    }
  };
}(jQuery));
