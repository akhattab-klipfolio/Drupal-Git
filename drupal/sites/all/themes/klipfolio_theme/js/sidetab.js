(function ($) {
    Drupal.behaviors.klipfolioSideTab = {
        attach: function() {

            var $logo = $("<div class='full-logo klipfolio-only'>");
            var $content = $(".dialog-webinars").show();

            $(".open-webinar-dialog").magnificPopup({
                items: {
                    type: "inline",
                    src: $("<div class='trial-popup webinar'>")
                        .append($("<div class='popup-outer-border'>")
                            .append($("<div class='popup-inner-border'>")
                                .append($("<div class='popup-header'>").append($logo))
                                .append($("<div class='popup-content'>").append($content))))
                },
                focus: "#email-address",
                closeBtnInside:false
            })
            .click(function(evt) {
                // _gaq.push(['_trackEvent', 'Demo Tab', "Open", document.location.pathname]);
                ga('send', 'event', 'Demo Tab', "Open", document.location.pathname );
            });
        }
    }
}(jQuery));
