(function ($) {
	Drupal.behaviors.YoutubeModalControl = {
		attach: function() {
			
			
			
			 /*Requieres jQuery*/
			$(".modal").on('hidden.bs.modal', function (e) {
				var iframe = $(this).children('.modal-dialog').find('iframe.youtube-video'); 
		        var video = iframe.attr("src");
		        iframe.attr("src","");
		        iframe.attr("src",video);
		    });


			
		}
	};
}(jQuery));