(function ($) {
  Drupal.behaviors.Scrollanimation = {
    attach: function() {
        var windowWidth = $(this).width();
        var windowHeight = $(this).height();
        var windowScrollTop = $(this).scrollTop();

        if ($(window).scrollTop() > 260) {
            $('.questions img').css('display', 'none');
            console.log("working 260px;");
        } else {
            $('.questions img').css('display', 'block');
            console.log("working 0;");
        }	
    }
  };
}(jQuery));
