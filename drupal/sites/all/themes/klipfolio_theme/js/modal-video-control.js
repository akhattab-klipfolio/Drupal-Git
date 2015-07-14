(function ($) {
	Drupal.behaviors.VideoModalControl = {
		attach: function() {
			$('#demo-video').on('show.bs.modal', function (e) {
				$('.marketing-video').get(0).play();
			})
			$('#demo-video').on('hide.bs.modal', function (e) {
				$('.marketing-video').get(0).pause();
			})	

			var videodemo = $('#video-demo');
			$(".video-control").click(function(){
			    	$(".video-control").hide(),
			    	$("h2.demo-video-title").hide(),
			    	$(".demo-video-repeat-text").hide(),
			    	videodemo.get(0).play(),
			    	videodemo.addClass("video-remove-effect");
			});

			videodemo.click(function(){
			    	$(".video-control").show(),
			    	videodemo.get(0).pause(),
			    	videodemo.removeClass("video-remove-effect");
			});

			videodemo.bind("ended", function() {
			    $(".video-control").show(),
			    $(".demo-video-repeat-text").show(),
			    videodemo.removeClass("video-remove-effect");
			});

			$(".modal").on('hidden.bs.modal', function (e) {
				var iframe = $(this).children('.modal-dialog').find('iframe.youtube-video'); 
		        var video = iframe.attr("src");
		        iframe.attr("src","");
		        iframe.attr("src",video);
		    });
			
		}
	};
}(jQuery));