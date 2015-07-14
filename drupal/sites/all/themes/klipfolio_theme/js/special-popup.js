(function ($) {
    Drupal.behaviors.specialpopup = {
        attach: function() {
            setTimeout(function() {
                if (!$.cookie('kfDresnerReport')){
                    var $title = $('<button title="Close (Esc)" type="button" class="mfp-close">×</button><h4 style="margin: 0; font-weight: bold; text-transform: uppercase;">Download Dresner\'s 2014 SME BI Report</h4>');
                    var $content=$("<div>").append($('<img src="http://www.klipfolio.com/images/content/dresner-report/dresner-report.jpg" style="float: left;width: 170px;margin: 0 20px 10px 0;border: 1px solid #333;"><p>Get Howard Dresner\'s latest report for free (this one is on us), and find out the key Business Intelligence trends for small and medium-sized enterprises in 2014. <p><p>Plus, you\'ll get to see how Klipfolio ranks in the SME BI Buyer\'s Guide included in this report!<p>'));                
                    var $cta = $('<div class="report-button"><h4 style="margin: 0; padding: 0;font-weight: bold;"><a href="http://www.klipfolio.com/downloads/dresner-sme-2014" style="color: #fff; ">Download Report</a></h4></div>');
                    
                    $.magnificPopup.open({
                        items: {
                            type: "inline",
                            src: $("<div class='report-popup'>")
                                .append($("<div class='popup-outer-border'>")
                                    .append($("<div class='popup-inner-border'>")
                                        .append($("<div class='popup-header'>").append($title))
                                        .append($("<div class='popup-content'>").append($content, $cta))))
                        },
                        focus: "#email-address",
                        closeBtnInside:false
                    });
                }
                $.cookie('kfDresnerReport', 'true', { expires: 3, path: '/' });
            }, 4000);
        }
    };
}(jQuery));