$(function() {
    var hei = $(".list-nav").offset().top;
    var h = $(".icon").offset().top;
    var tt2;
    console.log(h);
    // console.log(hei);
    $(window).scroll(function() {
        var t = $(window).scrollTop();
        if (tt2 >= t) {
            $(".list-nav").css("display", "none");
        } else {
            $(".list-nav").css("display", "block");

        }
        console.log(t);
        if (t >= hei) {
            $(".list-nav").addClass("fixed active");
        } else {
            $(".list-nav").removeClass("fixed active");
            $(".list-nav").css("display", "block");
        }
        tt2 = t;

    });
    $(".cebian").load("../../html/public/right_menu.html");
    $(".map").load("../../html/public/btm-map.html");
    $(".footer").load("../../html/public/footer.html");
});