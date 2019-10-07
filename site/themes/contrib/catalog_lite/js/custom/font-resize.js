jQuery(document).ready(function($) {
  if ($("#incfont").length>0 || $("#decfont").length>0 ) {

    (function () {
      $.fn.fontResize = function(options) {

        var self = this;
        var increaseCount = 0;

        options.increaseBtn.on("click", function (e) {
          e.preventDefault();
          self.each(function(index, element){
            curSize= parseInt($(element).css("font-size")) + 1;
            $(element).css("font-size", curSize);
          });
          return false;
        });

        options.decreaseBtn.on("click", function (e) {
          e.preventDefault();
          self.each(function(index, element){
            curSize= parseInt($(element).css("font-size")) - 1;
            $(element).css("font-size", curSize);
          });
          return false;
        });

      }

    })();

    $(".node__main-content p, .node__main-content h1, .node__main-content h2, .node__main-content h3, .node__main-content h4," + 
      ".node__main-content h5, .node__main-content .node-info-item, .node__main-content .node__user-info .node__main-content h6," +
      ".node__main-content a, .node__main-content ul, .node__main-content ol, .node__main-content input, .comment .comment__meta").fontResize({
        increaseBtn: $("#incfont"),
        decreaseBtn: $("#decfont")
      });
  }
});
