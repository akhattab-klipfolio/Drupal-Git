(function ($) {
    Drupal.behaviors.klipfolioCarousel = {
        attach: function() {
            // slider = $('.dashboard-carousel').bxSlider({
            //     // options for here
            // });

            // $(".dashboard-carousel .slide").click(function() {
            //     slider.goToNextSlide();
            // });

            $('.carousel.slide').carousel({
                interval: 0,
                pause: "none"
            });
        }
    };
}(jQuery));
