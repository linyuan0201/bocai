// 调用公共部分
// $("body .header").load("../../html/public/header.html");
// $(".home-btm-map").load("../../html/public/btm-map.html");
// $(".home-btm").load("../../html/public/footer.html");

// banner下的li变色效果
// var val = $(".banner .carousel ol .active").index();
// console.log(val);
// for (var i = 0; i < val; i++) {
//     $($(".banner .carousel ol li")[i]).children("i").animate({
//         "width": "100%",
//     })
// }
$(".banner .carousel ol .active i").animate({
    "width": "100%",
}, 4000);