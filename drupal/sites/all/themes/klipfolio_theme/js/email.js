(function ($) {
    Drupal.behaviors.klipfolioEmail = {
	    attach: function() {

            var $logo = $("<div class='full-logo klipfolio-only'>");
            var $cancelBtn = $("<a class='cancel-action popup-cancel-email'>Cancel</a>")
            var $startBtn = $("<button class='red popup-send-email' style='width: auto;'>Send</button>");
            var $content = $("<div>").append($("<h3 style='margin-bottom:20px'>Send this page to a friend.</h3>"))
                .append($("<div>")
                    .append($("<div style='margin:30px 0 10px;'><span class='strong' style='display:inline-block; width:100px;'>To:</span><input id='email-address' type='email' style='width:400px'></div>"))
                    .append($("<div style='margin:0 0 10px;'><span class='strong' style='display:inline-block; width:100px;'>From:</span><input id='from-address' type='email' style='width:400px'></div>"))
                    .append($("<div style='margin:0 0 15px;'><span class='strong' style='display:inline-block; width:100px; vertical-align:top'>Message:</span><textarea id='message' rows='3' style='width:400px'></textarea></div>")));

            $(document)
                .delegate(".popup-cancel-email", "click", function (evt) {
                    $.magnificPopup.close();
                })
                .delegate(".popup-send-email", "click", function(evt) {
                    var email = $("#email-address").val();
                    var from = $("#from-address").val();
                    var message = $("#message").val();
                    var link = document.URL;
                    var subject = $('h1').text();

                    message = "<html>" +
                        "<head><title>" + subject + "</title></head>" +
                        "<body style='font-family:Arial,Helvetica,sans-serif;'>" +
                            "<p>" + from + " thought you'd like this page:</p>" +
                            "<p style='color:#505050;font-size:25px;'><a href='" + link + "'>" + subject + "</a></p>" +
                            "<p>" + message + "</p>" +
                            "<br/><br/><br/><br/><br/>" +
                            "<hr/>" +
                            "<table width='100%'>" +
                                "<tr>" +
                                    "<td align='left'>" +
                                        "<img src='http://static.klipfolio.com/images/content/logos/klipfolio-logo.gif' title='Klipfolio' alt='Klipfolio'/>" +
                                    "</td>" +
                                    "<td align='right'>" +
                                        "<div style='font-size:10px;font-family:Arial,Helvetica,sans-serif;color:#999;text-align:right;'>Delivered by: <a href='http://www.klipfolio.com'>www.klipfolio.com</a></div>" +
                                    "</td>" +
                                "</tr>" +
                            "</table>" +
                        "</body>" +
                    "</html>";

                    email = encodeURI(email);
                    email = email.replace(/\+/g, "%2B");

                    from = encodeURI(from);
                    from = from.replace(/\+/g, "%2B");

                    message = encodeURI(message);
                    message = message.replace(/#/g, "%23").replace(/\+/g, "%2B");

                    $.get('/email_test/' + '?email=' + email + '&from=' + from + '&subject=' + subject  + '&message=' +  message, function(data) {
                        $.magnificPopup.close();
                        alert("Your email has been sent.");
                    });
                });

            $(".social-links > .social-button > .email").magnificPopup({
                items: {
                    type: "inline",
                    src: $("<div class='trial-popup email'>")
                        .append($("<div class='popup-outer-border'>")
                            .append($("<div class='popup-inner-border'>")
                                .append($("<div class='popup-header'>").append($logo))
                                .append($("<div class='popup-content'>").append($content))
                                .append($("<div class='popup-footer'>").append($cancelBtn).append($startBtn))))
                },
                focus: "#email-address",
                closeBtnInside:false
            });
        }	
   }
}(jQuery));
