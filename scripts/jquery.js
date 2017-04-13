import $ from "jquery";

(function($) {
    $(function() {
        var fonts = 'https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic|Source+Sans+Pro:400,700|Source+Code+Pro';
        if (document.createStyleSheet) document.createStyleSheet(fonts);
        else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
    });
})(jQuery);
