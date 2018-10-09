// 调用公共部分
$(".header").load("../../html/public/header.html");
$(".home-btm-map").load("../../html/public/btm-map.html");
$(".home-btm").load("../../html/public/footer.html");


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