(function ($) {
    Drupal.behaviors.klipfolioOdometer = {
        attach: function() {
            var jan2014 = new Date(2014, 1, 1);
            var baseNumber = 3219300000;
            var baseIncr = 100;

            var previous = new Date();
            var numbersCrunched = baseNumber + Math.floor((previous.getTime() - jan2014.getTime()) / 1000) * baseIncr;

            var min = 400;
            var max = 600;

            var $odometer = $(".crunched-odometer");

            if ($odometer.length > 0) {
                var od = new Odometer({
                    el : document.querySelector(".crunched-odometer"),
                    value: numbersCrunched,
                    format: "(,ddd)",
                    theme: "default"
                });

                setInterval(function() {
                    var now = new Date();
                    var randIncr = Math.floor(Math.random() * (max - min + 1)) + min;

                    numbersCrunched = numbersCrunched + randIncr;
                    previous = now;

                    od.update(numbersCrunched);
                }, 5000)
            }
        }
    };
}(jQuery));
