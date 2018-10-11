// 调用公共部分
$(".header").load("../../html/public/header.html");
$(".home-btm-map").load("../../html/public/btm-map.html");
$(".home-btm").load("../../html/public/footer.html");
$(".rm-rm").load("../../html/public/right_menu.html");


// banner的li点击效果
// $(".banner .carousel ol li").on("click", function() {
//     $(".banner .carousel ol li").removeClass("active active1");
//     for (var i = 0; i < $(this).index(); i++) {
//         $(".banner .carousel ol li:eq(" + i + ")").addClass(function(index, oldval) {
//             return oldval + "active1";
//         })
//     }
//     $(this).addClass("active");
// })




// 滚动监听
$(window).on("resize", function() {
    console.log($(window).width() >= 1050);
    if ($(window).width() >= 1050) {
        $(".banner").addClass("animated fadeInUp");
        $(document).scroll(function() {
            var top = $(document).scrollTop();
            if (top >= Math.ceil($(".box .sem").offset().top - $(".box .sem").height())) {
                $(".box .sem").addClass("animated fadeInUp");
            };
            if (top >= Math.ceil($(".box .selution").offset().top - $(".box .selution").height())) {
                $(".box .selution").addClass("animated fadeInUp");
            };
            if (top >= Math.ceil($(".box .eg-win").offset().top - $(".box .eg-win").height())) {
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
})
if ($(window).width() >= 1050) {
    $(".banner").addClass("animated fadeInUp");
    $(document).scroll(function() {
        var top = $(document).scrollTop();
        if (top >= Math.ceil($(".box .sem").offset().top - $(".box .sem").height())) {
            $(".box .sem").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .selution").offset().top - $(".box .selution").height())) {
            $(".box .selution").addClass("animated fadeInUp");
        };
        if (top >= Math.ceil($(".box .eg-win").offset().top - $(".box .eg-win").height())) {
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