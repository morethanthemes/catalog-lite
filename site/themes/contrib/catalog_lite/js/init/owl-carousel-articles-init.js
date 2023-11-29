(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.mtOwlCarouselArticles = {
    attach: function (context, settings) {
      once('mtOwlCarouselArticlesInit', ".mt-carousel-articles", context).forEach(function(item) {
        $(item).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:1,
            },
            480:{
              items:1,
            },
            768:{
              items:2,
            },
            992:{
              items:2,
            },
            1200:{
              items:2,
            },
            1680:{
              items:2,
            }
          },
          autoplay: drupalSettings.catalog_lite.owlCarouselArticlesInit.owlArticlesAutoPlay,
          autoplayTimeout: drupalSettings.catalog_lite.owlCarouselArticlesInit.owlArticlesEffectTime,
          nav: false,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings, once);
