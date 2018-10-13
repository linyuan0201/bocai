$(function() {
    $(".header").load("../../html/public/header.html");
    $(window).scroll(function() {
        var top = $(window).scrollTop() / 2;

        $(".banner>.img").css({
            // "top": top++,
            top: top,
        });
        console.log(top);
    });

    var wid = $(window).width();
    $(".cebian").load("../../html/public/right_menu.html");
    $(".footer").load("../../html/public/btm-map.html");
    $(".footer2").load("../../html/public/footer.html");
});