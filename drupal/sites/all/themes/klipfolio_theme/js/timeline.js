(function ($) {
    var eventPositions = [];
    var selectedEvent = false;

    var firstYear = 2001;

    var today = new Date();
    var lastYear = today.getFullYear();
    if (today.getMonth() > 5) {
        lastYear += 1;
    }

    var numTicks = lastYear - firstYear + 1;

    var timelineHeight = 30;
    var tickWidth = 7;
    var eventWidth = 10;

    var $canvas;
    var canvasWidth;
    var canvasPos;

    Drupal.behaviors.klipfolioTimeline = {
        attach: function() {
            var $comingSoon = $("#event-coming_soon").detach();
            $(".view-timeline-view > .view-content").append($comingSoon);

            $("#timeline-first-year").text(firstYear);
            $("#timeline-last-year").text(lastYear);

            $canvas = $("#timeline-canvas").css("width", "100%")
                .bind("mousemove click", function(evt) {
                    var x = evt.pageX;
                    var y = evt.pageY;

                    var isOverEvent = false;

                    for (var i = 0; i < eventPositions.length; i++) {
                        var pos = eventPositions[i];

                        if (intersects(x, y, pos.top, pos.left)) {
                            isOverEvent = true;

                            $canvas[0].width = canvasWidth;

                            selectedEvent = pos;
                            drawTimeline(ctx);
                            break;
                        }
                    }

                    $canvas.css("cursor", (isOverEvent ? "pointer" : "default"));
                });

            $(window).resize(function() {
                resizeCanvas();
                drawTimeline(ctx);
            });

            $("#timeline-previous").click(function(evt) {
                var $currentEvent = $(".timeline-event:visible");
                var $previousEvent =  $($currentEvent[0]).prev(".timeline-event");

                if ($previousEvent.length > 0) {
                    $canvas[0].width = canvasWidth;

                    selectedEvent = {
                        year: $previousEvent.data("year"),
                        month: $previousEvent.data("month")
                    };

                    drawTimeline(ctx);
                }
            });

            $("#timeline-next").click(function(evt) {
                var $currentEvent = $(".timeline-event:visible");
                var $nextEvent =  $($currentEvent[$currentEvent.length - 1]).next(".timeline-event");

                if ($nextEvent.length > 0) {
                    $canvas[0].width = canvasWidth;

                    selectedEvent = {
                        year: $nextEvent.data("year"),
                        month: $nextEvent.data("month")
                    };

                    drawTimeline(ctx);
                }
            });

            var ctx = $canvas[0].getContext("2d");

            resizeCanvas();
            drawTimeline(ctx);
        }
    };

    var checkButtonStates = function() {
        var $currentEvent = $(".timeline-event:visible");

        if ($($currentEvent[0]).prev(".timeline-event").length == 0) {
            $("#timeline-previous").addClass("disabled");
        } else {
            $("#timeline-previous").removeClass("disabled");
        }

        if ($($currentEvent[$currentEvent.length - 1]).next(".timeline-event").length == 0) {
            $("#timeline-next").addClass("disabled");
        } else {
            $("#timeline-next").removeClass("disabled");
        }
    };

    var intersects = function(x, y, top, left) {
        return /*(top <= y && y <= top + timelineHeight) &&*/ (left <= x && x <= left + eventWidth);
    };

    var resizeCanvas = function() {
        canvasWidth = $canvas.parent().width();

        $canvas[0].width = canvasWidth;
        $canvas[0].height = tickWidth * 2 + timelineHeight * 2;

        canvasPos = $canvas.offset();
    };

    var drawTimeline = function(ctx) {
        // draw the timeline well
        // ----------------------
        ctx.fillStyle = "#dddddd";
        ctx.fillRect(0, tickWidth, canvasWidth, timelineHeight);

        var tickSpacing = Math.floor(canvasWidth / numTicks);

        ctx.strokeStyle = "#dddddd";
        ctx.lineWidth = tickWidth;

        for (var i = 0; i < numTicks; i++) {
            var tickPosition = Math.floor(tickSpacing / 2) + tickSpacing * i;

            ctx.beginPath();
            ctx.moveTo(tickPosition, 0);
            ctx.lineTo(tickPosition, tickWidth);
            ctx.stroke();

            if (i == 0) {
                var firstLabel = $("#timeline-first-year");
                firstLabel.css("left", tickPosition - firstLabel.width() / 2);
            } else if (i == numTicks - 1) {
                var lastLabel = $("#timeline-last-year");
                lastLabel.css("left", tickPosition - lastLabel.width() / 2);
            }
        }

        // place the event ticks
        // ---------------------
        var events = $(".timeline-event").hide().addClass("visible-phone");
        eventPositions = [];        // clear previous positions

        for (var i = 0; i < events.length; i++) {
            var eYear = $(events[i]).data("year");
            var eMonth = $(events[i]).data("month");

            var selected = (selectedEvent && selectedEvent.year == eYear && selectedEvent.month == eMonth);
            if (!selectedEvent && i == 0) {
                selected = true;
            }

            ctx.strokeStyle = (selected ? "#0066CC" : "#666666");
            ctx.lineWidth = eventWidth;

            var eventPosition = Math.floor(tickSpacing / 2) + tickSpacing * (eYear - firstYear);
            eventPosition += Math.floor(tickSpacing / 12) * (eMonth - 1);

            ctx.beginPath();
            ctx.moveTo(eventPosition, tickWidth);
            ctx.lineTo(eventPosition, tickWidth + timelineHeight);
            ctx.stroke();

            eventPositions.push({ year:eYear, month:eMonth, top:tickWidth + canvasPos.top + parseInt($canvas.css("margin-top")), left:eventPosition - eventWidth / 2 + canvasPos.left });

            // draw blues lines for selected event
            // -----------------------------------
            if (selected) {
                $(events[i]).show().removeClass("visible-phone");

                ctx.lineWidth = 1;

                var totalTimelineHeight = tickWidth * 2 + timelineHeight;

                ctx.beginPath();
                ctx.moveTo(eventPosition, totalTimelineHeight);
                ctx.lineTo(eventPosition, totalTimelineHeight + timelineHeight);
                ctx.stroke();
            }
        }

        checkButtonStates();
    };
}(jQuery));
