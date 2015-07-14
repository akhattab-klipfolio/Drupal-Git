(function ($) {
    Drupal.behaviors.pricingSliderInclude = {
        attach: function() {
          

        var slider = $( "#slider-range-min" ).slider({
          range: "min",
          value: 1,
          min: 0,
          max: 1000,
          step: 1,
          change: function( event, ui ) {
            valueChange (ui);
          },
          slide: function( event, ui ) {
            valueChange (ui);
          }
        })

        $( "#users" ).val( $( "#slider-range-min" ).slider( "value" ) );
        $( "#users" ).change(function() {
          slider.slider( "value", parseInt ($(this).val()) );
        });
        $( "#total-before" ).val ( format ( $("#slider-range-min" ).slider( "value" ) * 20 , "$" ));
        $( "#total-after" ).val ( format ( $("#slider-range-min" ).slider( "value" ) * 17, "$" ));
        // $( "#difference-before" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
        // $( "#difference-after" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );

        function valueChange (ui){
        $( ".block-hover" ).removeClass( "block-hover" );
          var price;
          if (ui.value < 10) {
            price = 20;
          } else if (ui.value >= 10 && ui.value < 50 ){
            $( ".prices-block1" ).addClass( "block-hover" );
            price = 15;
          } else if (ui.value >= 50 && ui.value < 100 ){
            $( ".prices-block2" ).addClass( "block-hover" );
            price = 12;
          }else if (ui.value >= 100 && ui.value < 500 ){
            $( ".prices-block3" ).addClass( "block-hover" );
            price = 9;
          }else if (ui.value >= 500 && ui.value < 1000 ){
            $( ".prices-block4" ).addClass( "block-hover" );
            price = 7;
          }else {
            $( ".prices-block5" ).addClass( "block-hover" );
            price = 5;
          }

          $( "#users" ).val( ui.value );
          $( "#total-before" ).val( format (ui.value * price, "$"));
          $( "#total-after" ).val( format (ui.value * price * 0.85, "$") );
          // $( "#difference-before" ).val( "$" + ( (ui.value * 20) - (ui.value * price ) )  ),
          // $( "#difference-after" ).val( "$" + ( (ui.value * 20) - (ui.value * price * 0.85 ) )  );
        }

        function format(n, currency) {
          return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }

        $('.total2').hide();
          $('.difference-after-label').hide();

          $('#prepaidDiscount').click(function () {
              var $this = $(this);
              if ($this.is(':checked')) {
                 $('.total1').hide();
                 $('.total2').show();
                 // $('.difference-before-label').hide();
                 // $('.difference-after-label').show();
              } else {
                 $('.total1').show();
                 $('.total2').hide();
                 // $('.difference-before-label').show();
                 // $('.difference-after-label').hide();
              }
          });
	         
        }
    };
}(jQuery));