$(function() {
    var hei = $(".list-nav").offset().top;
    var h = $(".icon").offset().top;
    console.log(h);
    // console.log(hei);
    $(window).scroll(function() {
        var t = $(window).scrollTop();
        console.log(t);
        if (t >= hei) {
            $(".list-nav").addClass("fixed active");
        } else {
            $(".list-nav").removeClass("fixed active");
            // console.log(123);
        }
    });
});