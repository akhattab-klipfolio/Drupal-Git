(function ($) {
  Drupal.behaviors.AddContainer = {
    attach: function() {
    	// Remove the main container of the page
    	var mainContainer = $(".main-container");
    	mainContainer.addClass("container");
    	
    }
  };
}(jQuery));
