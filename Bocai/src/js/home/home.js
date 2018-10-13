// 调用公共部分
$(".header").load("../../html/public/header.html");
$(".home-btm-map").load("../../html/public/btm-map.html");
$(".home-btm").load("../../html/public/footer.html");
$(".rm-rm").load("../../html/public/right_menu.html");


// banner的li点击效果
var liall = $("#carousel-example-generic .carousel-indicators li");
$('#carousel-example-generic').carousel({ //设置轮播效果：鼠标hover不停止
        pause: null
    })
    // 加载页面的时候清除li的active类名
liall.first().removeClass("active").children("i").css({ //加载页面是是第一个li也拥有变化
    "width": "0",
    "display": "none",
}).removeAttr("style").parent().addClass("active");

// 使用了bootstrap插件用于在轮播单个结束时插入事件用于实现li的缓慢变化
$("#carousel-example-generic").on('slide.bs.carousel', function() {
    var num = $("#carousel-example-generic .carousel-indicators .active").index();
    $("#carousel-example-generic .carousel-indicators li:eq(" + num + ")").addClass("active1");
    if (num == 0) { //让第三个li下的i拥有变化的能力
        liall.eq(2).children("i").css({
            "display": "block",
        })
    }
    if (num + 1 == liall.length) { //当轮播转到最后一个时，清空i的长度变化
        liall.removeClass("active1");
        liall.eq(2).children("i").delay(6000).css({
            "display": "none",
        })
    }
});







// // 滚动监听
if ($(window).width() >= 1050) {
    // $(".banner").addClass("animated fadeInUp");
    $(document).scroll(function() {
        var top = $(document).scrollTop();
        if (top >= Math.ceil($(".box .sem").offset().top - $(".box .sem").height())) {
            $(".box .sem").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .selution").offset().top - $(".box .selution").height())) {
            $(".box .selution").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .eg-win").offset().top - 600)) {
            $(".box .eg-win").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .sem-two").offset().top - $(".box .sem-two").height())) {
            $(".box .sem-two").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .make-h5").offset().top - $(".box .make-h5").height())) {
            $(".box .make-h5").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .society").offset().top - $(".box .society").height())) {
            $(".box .society").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .difficult .dflt-top").offset().top - $(".box  .difficult .dflt-top").height())) {
            $(".box  .difficult .dflt-top").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .difficult .dflt-mld").offset().top - $(".box  .difficult .dflt-mld").height())) {
            $(".box  .difficult .dflt-mld").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .difficult .dflt-btm").offset().top - $(".box  .difficult .dflt-btm").height())) {
            $(".box  .difficult .dflt-btm").addClass("animated fadeInUp");
        };
    })
}