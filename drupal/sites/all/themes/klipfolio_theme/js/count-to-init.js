(function ($) {
  Drupal.behaviors.countToInit = {
    attach: function() {
        $('#Founded').countTo();
        $('#Cloud').countTo();
        $('#Revenue').countTo();

        
        $('#Customers').countTo({
            formatter: function (value, options) {
              return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        $('#Countries').countTo();
        $('#Seat').countTo();
    }
  };
}(jQuery));
