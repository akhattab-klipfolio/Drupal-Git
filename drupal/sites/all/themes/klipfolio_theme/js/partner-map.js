(function ($) {
    var partnerRegions = ["North America", "Europe", "Asia-Pacific"];
    var mapColour = "#00aaff";

    var indicatorHeight = 25;

    var $canvas;
    var canvasWidth;
    var canvasPos;

    Drupal.behaviors.klipfolioPartnerMap = {
        attach: function() {
            var map = new jvm.WorldMap({
                container: $("#partner-map"),
                map: "global_by_region",
                backgroundColor: null,
                zoomButtons: false,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        fill: "#cccccc",
                        stroke: "#ffffff",
                        'stroke-width': 1,
                        'stroke-opacity': 1
                    },
                    hover: {
                        fill: mapColour,
                        'fill-opacity': 1
                    },
                    selected: {
                        fill: mapColour
                    }
                },
                selectedRegions: partnerRegions,
                onRegionOver: function(e, code) {
                    map.clearSelectedRegions();

                    drawTimeline(ctx, [code]);
                },
                onRegionOut: function(e, code) {
                    map.setSelectedRegions(partnerRegions);

                    drawTimeline(ctx, partnerRegions)
                }
            });

            $(".partner-logo-container")
                .bind("mouseover", function(evt) {
                    var region = $(this).data("region");

                    if (region == "Global") {
                        map.setSelectedRegions(partnerRegions);
                    } else {
                        map.clearSelectedRegions();
                        map.setSelectedRegions(region);
                    }

                    drawTimeline(ctx, map.getSelectedRegions());
                })
                .bind("mouseout", function(evt) {
                    map.setSelectedRegions(partnerRegions);

                    drawTimeline(ctx, partnerRegions);
                });

            $canvas = $("#partner-canvas").css("width", "100%");

            $(window).resize(function() {
                resizeCanvas();
                drawTimeline(ctx, map.getSelectedRegions());
            });

            var ctx = $canvas[0].getContext("2d");

            resizeCanvas();
            drawTimeline(ctx, map.getSelectedRegions());
        }
    };

    var resizeCanvas = function() {
        canvasWidth = $canvas.parent().width();

        $canvas[0].width = canvasWidth;
        $canvas[0].height = indicatorHeight;

        canvasPos = $canvas.position();
    };

    var drawTimeline = function(ctx, selectedRegions) {
        // reset canvas
        $canvas[0].width = canvasWidth;

        // determine where to place indicator
        // ----------------------------------
        var $container;
        if (selectedRegions.length > 1) {
            $container = $(".partner-logo-container[data-region='Global']");
        } else {
            $container = $(".partner-logo-container[data-region='" + selectedRegions[0] + "']");
        }

        var regionPosition = ($container.position().left + parseInt($container.css("margin-left"))) - canvasPos.left + 30;

        // draw lines
        // ------------------------
        ctx.strokeStyle = mapColour;
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasWidth, 0);
        ctx.stroke();

        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(regionPosition, 0);
        ctx.lineTo(regionPosition, indicatorHeight);
        ctx.stroke();
    };
}(jQuery));
