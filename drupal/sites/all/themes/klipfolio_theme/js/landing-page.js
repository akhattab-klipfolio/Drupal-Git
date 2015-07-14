(function ($) {
  Drupal.behaviors.LP = {
    attach: function() {

    	// Add a container to the header
    	$("header#navbar").find("div.collapse.navbar-collapse").remove("div.collapse.navbar-collapse");
        $("body").find("footer#footer").remove("footer#footer");

    }
  };
}(jQuery));
