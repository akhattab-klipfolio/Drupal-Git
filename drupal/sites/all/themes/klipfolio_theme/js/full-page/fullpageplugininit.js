(function ($) {
    Drupal.behaviors.fullpageplugininit = {
        attach: function() {

            $('#fullpage').fullpage({
		        'scrollOverflow': true,
		        keyboardScrolling: true,
		        'navigation': true,
		        'css3': true,
		    });

        }
    };
}(jQuery));
