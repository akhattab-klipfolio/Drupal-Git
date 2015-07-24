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
			var allMods3 = $(".graph-transition");
			var allMods4 = $(".scale-up");
			var allMods5 = $(".object-hidden");

			

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


			  allMods3.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("line-full"); 
			    } 
			  });

			  allMods4.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("scaling"); 
			    } 
			  });

			  allMods5.each(function(i, el) {
			    var el = $(el);
			    if (el.scrollvisible(true)) {
			      el.addClass("object-appeared"); 
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

			

		}
	};
}(jQuery));