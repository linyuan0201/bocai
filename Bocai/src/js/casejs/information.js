$(function() {
    // $(".header").load("../../html/public/header.html");
    $(window).scroll(function() {
        var top = $(window).scrollTop() / 2;

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
    $(".cebian").load("../../html/public/right_menu.html");
    $(".footer").load("../../html/public/btm-map.html");
    $(".footer2").load("../../html/public/footer.html");

});