$(function() {
    // $(".header").load("../../html/public/header.html");
    $(window).scroll(function() {
        var top = $(window).scrollTop();

        $(".banner>.img").css({
            // "top": top++,
            top: top,
        });
        console.log(top);
    });

    var wid = $(window).width();
    // var hei = $(".banner").height();
    // console.log(hei);
    // $(".banner>.img").css({
    //     width: wid,
    // })
});