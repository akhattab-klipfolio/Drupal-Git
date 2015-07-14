(function ($) {
    Drupal.behaviors.jobDescription = {
        attach: function() {
            var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

            //open team-member bio
            $('#job-listings').find('ul a').on('click', function(event){
                event.stopPropagation();
                event.preventDefault();
                var selected_member = $(this).data('type');
                $('.job-description.'+selected_member+'').addClass('slide-in');
                $('.job-description-close').addClass('is-visible');

                // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
                if( is_firefox ) {
                    $('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                            $('body').addClass('overflow-hidden');
                    });
                } else {
                    $('body').addClass('overflow-hidden');
                    $('main').addClass('slide-out');
                }
            });

            //close team-member bio
            $(document).on('click', '.page-overlay, .job-description-close', function(event){
                event.stopPropagation();
                event.preventDefault();
                $('.job-description').removeClass('slide-in');
                $('.job-description-close').removeClass('is-visible');

                if( is_firefox ) {
                    $('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                        $('body').removeClass('overflow-hidden');
                    });
                } else {
                    $('body').removeClass('overflow-hidden');
                    $('main').removeClass('slide-out');
                }
            });
        }
    };
}(jQuery));
