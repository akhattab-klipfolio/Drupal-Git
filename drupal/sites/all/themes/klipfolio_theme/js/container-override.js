(function ($) {
    Drupal.behaviors.cOverride = {
        attach: function() {

           
            $( ".kpi-button" ).click(function() {
                var category = $(this).data("category");
                var navTabs = $(this).closest(".navigation-tabs").removeClass()
                        .addClass("navigation-tabs " + category + " easing");
                        console.log(navTabs)


                    
            });

            
        }
    };
}(jQuery));
