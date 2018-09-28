$(function() {
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        console.log(top);
        $(".banner>.img").css({
            // "top": top++,
            top: top,
        });
    });


})