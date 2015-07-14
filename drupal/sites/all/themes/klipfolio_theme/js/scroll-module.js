(function ($) {
	Drupal.behaviors.scrollModule = {
		attach: function() {	
			$.fn.scrollvisible = function(partial) {
			    
		      	var $t            = $(this),
					$w            = $(window),
					viewTop       = $w.scrollTop(),
					viewBottom    = viewTop + $w.height(),
					_top          = $t.offset().top,
					_bottom       = _top + $t.height(),
					compareTop    = partial === true ? _bottom : _top,
					compareBottom = partial === true ? _top : _bottom;

		    	return (_top <= viewTop + 600);
		  	};
		
			var win = $(window);

			var allMods = $(".triangle");
			var allMods23 = $(".triangle2");
			var allMods2 = $(".graph-transition");
			var allMods3 = $(".scale-up");
			var allMods4 = $(".overview-header");

			// allMods.each(function(i, el) {
			// 	var el = $(el);
			// 	if (el.scrollvisible(true)) {
			// 		el.addClass("already-visible"); 
			// 	} 
			// });

			win.scroll(function(event) {
			  
			  allMods.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("add");
			    } 
			    else {
			      el.addClass("remove");
			      el.removeClass("add");
			    }
			  });

			  allMods23.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("up");
			    } 
			    else {
			      el.addClass("down");
			      el.removeClass("up");
			    }
			  });


			  allMods2.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("line-full"); 
			    } 
			  });

			  allMods3.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("scaling"); 
			    } 
			  });

			  allMods4.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("bg-bigger"); 
			    } 
			  });

			

			});

			$('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({scrollTop: target.offset().top}, 1000);
			        return false;
			      }
			    }
			});

			$("li").tooltip();

			var $w = $(window);
			var $prog2 = $('.progress-indicator');
			var wh, h, sHeight;
			function setSizes(){
				wh = $w.height();
				h = $('body').height();
				sHeight = h - wh;
			}

			setSizes();

			$w.on('scroll', function(){
				var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
				updateProgress(perc);
			}).on('resize', function(){
				setSizes();
				$w.trigger('scroll');
			});

			function updateProgress(perc){
				$prog2.css({height : perc*100 + '%'});
			}

		}
	};
}(jQuery));