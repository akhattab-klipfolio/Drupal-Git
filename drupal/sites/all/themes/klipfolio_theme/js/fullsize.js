(function ($) {
  Drupal.behaviors.fullSize = {
    attach: function() {
    	// Remove the main container of the page
    	var mainContainer = $(".main-container.container");
    	mainContainer.addClass("remove-container");
    	mainContainer.children( ".row" ).addClass("remove-container");
    	mainContainer.find( ".col-sm-12" ).addClass("remove-container");

    	// Hide the breadcrumb section
    	$("#top-container").css("display","none");

    	// Add a container to the header
    	$("article>header").addClass("container");

    	// Stylize the header
    	$("article>header>h1").addClass("pageTitle");
    }
  };
}(jQuery));
