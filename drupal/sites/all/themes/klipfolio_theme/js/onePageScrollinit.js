(function ($) {
    Drupal.behaviors.onePageinit = {
        attach: function() {
          $(".main").onepage_scroll({
            sectionContainer: "section#pageScroll",
            responsiveFallback: 600,
            beforeMove: function(index, next_el){
            	console.log(index, next_el)
            },
            loop: false
          });
        }
    };
}(jQuery));
