$(function() {
    // 引入公共样式
    $('.ssgl-head').load("../../html/public/header.html");
    $('.ssgl-right').load('../public/right_menu.html');
    $('.ssgl-map').load('../public/btm-map.html');
    $('.ssgl-footer').load('../public/footer.html');

    $(".ssgl-cir").on("click", function() {
        var top = $('.ssgl-ssjg').offset().top;
        $("body,html").animate({
            scrollTop: top,
        }, 400);
        console.log('aaa');
    });


});