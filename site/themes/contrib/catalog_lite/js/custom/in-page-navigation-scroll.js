(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.inPageNav = {
    attach: function (context, settings) {
        once('inPageNavInit', ".link--smooth-scroll", context).forEach(function(item) {
        var adminHeight = parseInt($('body').css('paddingTop')) || 0;
        var anchorDestination = this.hash;
        if (anchorDestination) {
          e.preventDefault();
          $('html, body').animate({
            //scrollTop: $($(this).attr("href")).offset().top
            scrollTop: $(anchorDestination).offset().top - drupalSettings.catalog_lite.inPageNavigation.inPageNavigationOffset - adminHeight
          }, 1000);
          if (history.pushState) {
            history.pushState(null, null, anchorDestination);
          } else {
            location.hash = anchorDestination;
          }
        }
      });

    }
  };
})(jQuery, Drupal, drupalSettings, once);
