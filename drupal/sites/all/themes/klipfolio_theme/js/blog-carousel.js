(function ($) {
    Drupal.behaviors.klipfolioBlogCarousel = {
        attach: function() {
            $('.carousel.slide').carousel({
                interval: 0,
                pause: "none"
            });
            
        }
    };
}(jQuery));