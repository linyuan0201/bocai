$(function() {
    $(window).scroll(function() {
        var t = $(window).scrollTop();
        // console.log(t);
        var anch1 = Math.floor($(".anchor1").offset().top);
        var anch2 = Math.floor($(".anchor2").offset().top);
        var anch3 = Math.floor($(".anchor3").offset().top);
        var anch4 = Math.floor($(".anchor4").offset().top);
        // console.log(anch1, anch2, anch3, anch4);
        // console.log(Math.floor($(".gundong").offset().top));
        if (t >= anch1) {
            $(".list-nav>.nav1>ul>li:first").addClass("hover").siblings().removeClass("hover");
        }
        if (t >= anch1 && t < anch2) {
            $(".list-nav>.nav1>.div-right>ul>li:first").addClass("hover2").siblings().removeClass("hover2");
        } else if (t >= anch2 && t < anch3) {
            $(".list-nav>.nav1>.div-right>ul>li:eq(1)").addClass("hover2").siblings().removeClass("hover2");
        } else if (t >= anch3 && t < anch4) {
            $(".list-nav>.nav1>.div-right>ul>li:eq(2)").addClass("hover2").siblings().removeClass("hover2");
        } else if (t >= anch4 && t < 5598) {
            $(".list-nav>.nav1>.div-right>ul>li:eq(3)").addClass("hover2").siblings().removeClass("hover2");
        } else {
            $(".list-nav>.nav1>.div-right>ul>li").removeClass("hover2");
        }
    });
    $(".div-right>ul>li>a").on("click", function(event) {
        event.preventDefault();
        var top = $("." + $(this).attr("id")).offset().top;
        $("body,html").animate({
            scrollTop: top
        }, 1000)
    });
});