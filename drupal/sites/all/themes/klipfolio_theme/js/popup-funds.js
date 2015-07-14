(function ($) {
    Drupal.behaviors.FundsPopUp = {
        attach: function() {

            //hide-popup in the beginning
            $('.popup-container').hide();

            //set up the cookie so popup appear only once
            //set time for popup to appear after 4s
            setTimeout(function() {
                if (!$.cookie('2015Funds')){
                    $('.popup-container').fadeIn();
                    $('body').css("overflow","hidden");
                }
                $.cookie('2015Funds', 'true', { expires: 10, path: '/' });
            }, 4000);

            //make close buttong and white space clickable in order to hide the popup 
            $(document).on('click', 'button.mfp-close, .overlay-close', function(event){
                $('.popup-container').hide();
                $('body').css("overflow","auto");
            });
        }

    };
}(jQuery));