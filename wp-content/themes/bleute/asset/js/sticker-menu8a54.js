(function($) {
	"use strict";

    var pos = 200;
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos) {$(".sticker .menu-main").addClass("active");}
        else {$(".sticker .menu-main").removeClass("active");}
        if(windowpos<1){$(".sticker .menu-main").removeClass("active");}
    });

})(jQuery);