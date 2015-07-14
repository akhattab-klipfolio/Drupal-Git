(function ($) {
    Drupal.behaviors.klipfolioTrial = {
        attach: function() {
            var $logo = $("<div class='full-logo'>");
            var $content = $("<div>").append($("<iframe id='trial-form' src='https://info.klipfolio.com/web-sign-up-1.html' scrolling='no' seamless='seamless' style='border:0; width: 100%; height: 270px;'></iframe>"));


            function receiveMessage(event)
            {
                var split = event.data.split(":", 2);
                if (split.length != 2) return;
                var command = split[0];
                var data = split[1].split(",");

                switch (command) {
                    case "resize":
                        resizeTrialForm(data[0], data[1]);
                        break;
                    case "startTrial":
                        var username = $.trim(data[0]);
                        var url = "https://app.klipfolio.com/apiAccount/trialRedirect?user.email=" + encodeURIComponent(username) + "&www_source=" + encodeURIComponent(document.URL);

                        document.location = url;
                        break;
                    case "startCampaign":
                        var url = "https://app.klipfolio.com/apiAccount/trialRedirect" 
                                    + "?user.email=" + encodeURIComponent($.trim(data[0])) 
                                    + "&www_source=" + encodeURIComponent(document.URL) 
                                    + "&dashboard_campaign=" + encodeURIComponent($.trim(data[1]));

                        document.location = url;
                        break;
                }
            }
            window.addEventListener("message", receiveMessage, false);

            function resizeTrialForm(w, h) {
                $("#trial-form").css({ width:w, height:h });
            }


            $(".open-trial-dialog").magnificPopup({
                items: {
                    type: "inline",
                    src: $("<div class='trial-popup'>")
                        .append($("<div class='popup-outer-border'>")
                            .append($("<div class='popup-inner-border'>")
                                .append($("<div class='popup-header'>").append($logo))
                                .append($("<div class='popup-content'>").append($content))))
                },
                focus: "#email-address",
                closeBtnInside:false
            })
            
        }
    };
}(jQuery));