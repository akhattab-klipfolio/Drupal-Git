(function ($) {
  Drupal.behaviors.worldMap = {
    attach: function() {
	    $('.world_map_container area').hover(function () {
			var country_id = $(this).attr('id').replace('area_', '');
			$('#' + country_id).css('display', 'block');
		});

		$('.world_map_container area').mouseleave(function () {
			var country_id = $(this).attr('id').replace('area_', '');
			$('#' + country_id).css('display', 'none');
		});
    }
  };
}(jQuery));
