// ---------------------------------------------------------
// Google Analytics code
// ---------------------------------------------------------
/**
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-634262-2']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
// ---------------------------------------------------------


// ---------------------------------------------------------
// AdRoll Pixel code
// ---------------------------------------------------------
adroll_adv_id = "2KKSGYPQX5FJTDOGYPS2PN";
adroll_pix_id = "VOPCLFPETJAFPIPNPILW6F";

(function () {
    var oldonload = window.onload;
    window.onload = function(){
        __adroll_loaded=true;
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
            document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
        if(oldonload){oldonload()}};
}());
// ---------------------------------------------------------
*/

var slider = false;

(function ($) {
    Drupal.behaviors.klipfolioJS = {
        attach: function() {
            $("#navbar").scrollToFixed({
                zIndex:100
            });

            setSecondaryNav();
            setSideBars();
            resizeContainer();


            $(window).resize($.debounce(200, onWindowResize));


            // Goal Complete: user contacted us ----------------------
            $("#webform-client-form-125 .form-submit, #webform-client-form-364 .form-submit, #webform-client-form-126 .form-submit").click(function(evt){
                // _gaq.push(['_trackPageview', '/ga_goals/contact']);
                ga('send', 'pageview', '/ga_goals/contact');
            });
            // -------------------------------------------------------

            // Goal Complete: user signed up for emails --------------
            $("#webform-client-form-283 .form-submit, #webform-client-form-752 .form-submit").click(function(evt){
                // _gaq.push(['_trackPageview', '/ga_goals/registration']);
                ga('send', 'pageview', '/ga_goals/registration');
            });
            // -------------------------------------------------------

            // Goal Complete: user registered for webinars -----------
            $("#webform-client-form-935 .form-submit").click(function(evt){
                // _gaq.push(['_trackPageview', '/ga_goals/registration']);
                ga('send', 'pageview', '/ga_goals/registration');
            });
            // -------------------------------------------------------

            // General GA event tracking
            $(".gatrack").click(function(evt){
                // _gaq.push(['_trackEvent', $(this).data("ga_event_category"), $(this).data("ga_event_action"), $(this).data("ga_event_label")]);
                ga('send', 'event', $(this).data("ga_event_category"), $(this).data("ga_event_action"), $(this).data("ga_event_label"));
            });

            // Track when sidenav items activate
//            $("[data-spy='scroll']").on("activate", function(e) {
//                _gaq.push(['_trackEvent', 'Reading', 'SideNav', $(e.target).text()]);
                // ga('send', 'event', 'Reading', 'SideNav', $(e.target).text());
//            });


            // -------------------------------------------------------
            // Keyword rank tracking
            // Adapted from http://cutroni.com/blog/2013/01/14/a-new-method-to-track-keyword-ranking-using-google-analytics/%5C
            // -------------------------------------------------------
            if (document.referrer.match(/google\./gi) && document.referrer.match(/cd/gi)) {
                var myString = document.referrer;
                var r = myString.match(/cd=(.*?)&/);
                var rank = parseInt(r[1]);
                var kw = myString.match(/q=(.*?)&/);

                var keyWord = (kw[1].length > 0 ? decodeURI(kw[1]) : "(not provided)");

                var p = document.location.pathname;
                // _gaq.push(['_trackEvent', 'RankTracker', keyWord, p, rank, true]);
                // ga('send', 'event', 'RankTracker', keyWord, p, rank, {'nonInteraction': 1});
                ga('send', {'hitType': 'event','eventCategory': 'RankTracker','eventAction': keyWord,'eventLabel': p,'eventValue': rank,'nonInteraction':1});

            }
            // -------------------------------------------------------
        }
    };

    var onWindowResize = function() {
        if (slider) slider.reloadSlider();

        setSecondaryNav();
        setSideBars();
        resizeContainer();
    };

    var setSecondaryNav = function() {
        var $secondNavBar = $("#second-navbar");

        if ($secondNavBar.length > 0) {
            var respColour = $(".responsive-indicator").css("background-color");
            var isScrollToFixed = $.isScrollToFixed("#second-navbar");

            if (isScrollToFixed) {
                $secondNavBar.trigger("detach.ScrollToFixed");
            }

            if (respColour != "rgb(0, 0, 0)") {
                $secondNavBar.scrollToFixed({
                    marginTop:$("#navbar").outerHeight(true),
                    zIndex:99
                });
            }
        }

    };

    var setSideBars = function() {
        var $sideBars = $(".kf-sidebar");

        if ($sideBars.length > 0) {
            var isScrollToFixed = $.isScrollToFixed(".kf-sidebar");

            if (isScrollToFixed) {
                $sideBars.trigger("detach.ScrollToFixed");
            }

            $sideBars.scrollToFixed({
                marginTop: $("#navbar").outerHeight(true) + $("#second-navbar").outerHeight(true),
                limit: function() {
                    var limit = $("#footer").offset().top - $(this).outerHeight(true) - 20;
                    return limit;
                },
                zIndex: 98,
                removeOffsets:true
            });
        }
    };

    var resizeContainer = function() {
        
        //OnePageScroll plugin
        var $h = $('#OnePageContainer');
        $h.each(function(){
            $(this).css({
               'height':(($(window).height())-71)+'px' 
            });
        })
    };


}(jQuery));
