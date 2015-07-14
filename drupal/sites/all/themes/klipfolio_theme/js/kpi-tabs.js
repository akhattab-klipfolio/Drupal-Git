(function ($) {
    Drupal.behaviors.kpiTabs = {
        attach: function() {  

        	$.fn.preload = function() {
			    this.each(function(){
			        $('<img/>')[0].src = this;
			    });
			}

			// Usage:

			$(['http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg2.jpg','http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg3.jpg',
				'http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg3.jpg','http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg4.jpg',
				'http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg5.jpg','http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg6.jpg',
				'http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg7.jpg','http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg8.jpg',
				'http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg9.jpg','http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg10.jpg',
				'http://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kpi-examples-bg/navigation-tabs-bg11.jpg']).preload();
       

            $( ".kpi-button" ).click(function() {
                var category = $(this).data("category");
                var navTabs = $(this).closest(".navigation-tabs").removeClass()
                        .addClass("navigation-tabs " + category + " easing");
            });

            $( ".navigation-tabs .nav-tabs li:first-child" ).addClass("active");
            $( ".tab-content .tab-pane:first-child" ).addClass("active");
            $( ".kpi-examples-images .col-xs-4:first-child img" ).addClass("kpi-examples-images trigger1");
            $( ".kpi-examples-images .col-xs-4:nth-child(2) img" ).addClass("kpi-examples-images trigger2");
            $( ".kpi-examples-images .col-xs-4:nth-child(3) img" ).addClass("kpi-examples-images trigger3");

        }
    };
}(jQuery));
