(function ($) {
    Drupal.behaviors.SpecialReportPopUp = {
        attach: function() {

            //set up the cookie so popup appear only once
            //set time for popup to appear after 4s
            setTimeout(function() {
                if (!$.cookie('Ebook')){
                    $('.popup-container').fadeIn();
                    $('body').css("overflow","hidden");
                }
                $.cookie('Ebook', 'true', { expires: 3, path: '/' });
            }, 4000);

            //make close buttong and white space clickable in order to hide the popup 
            $(document).on('click', 'button.mfp-close, .overlay-close', function(event){
                $('.popup-container').hide();
                $('body').css("overflow","auto");
            });
        }

    };
}(jQuery));