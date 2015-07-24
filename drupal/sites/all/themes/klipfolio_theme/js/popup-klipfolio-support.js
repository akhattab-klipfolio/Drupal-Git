(function ($) {
    Drupal.behaviors.KlipfolioSupport = {
        attach: function() {


            //set up the cookie so popup appear only once
            //after being dismissed it appears after 3 days
            //set time for popup to appear after 4s
            setTimeout(function() {
                if (!$.cookie('KlipfolioSupportPopup')){
                    $('.popup-container').fadeIn();
                    $('body').css("overflow","hidden");
                }
                $.cookie('KlipfolioSupportPopup', 'true', { expires: 30, path: '/' });
            }, 4000);

            //make close buttong and white space clickable in order to hide the popup 
            $(document).on('click', 'button.mfp-close, .overlay-close', function(event){
                $('.popup-container').hide();
                $('body').css("overflow","auto");
            });
        }

    };
}(jQuery));