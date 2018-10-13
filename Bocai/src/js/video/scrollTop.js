$(function() {
    $(document).scroll(function() {
        var top = $(window).scrollTop();
        if (top > 125 && top < 499) {
            $('.cont_one').addClass("show");
        } else if (top > 500 && top < 1199) {
            $('.cont_two').addClass("show");
        } else if (top > 1200 && top < 1664) {
            $('.cont_three').addClass("show");
        } else if (top > 1665) {
            $('.cont_four').addClass("show");
        }
    })
})

// $(function() {
//     var top = $(document).scrollTop();
//     if ($(window).width() > 1050) {
//         $(document).scroll(function() {
//             var top = $(document).scrollTop();
//             if (top >= Math.ceil($(".cont_one").offset().top - $(".cont_one").height())) {
//                 $('.cont_one').addClass("show");
//             } else if (top >= Math.ceil($(".cont_two").offset().top - $(".cont_two").height())) {
//                 $('.cont_two').addClass("show");
//             } else if (top >= Math.ceil($(".cont_three").offset().top - $(".cont_three").height())) {
//                 $('.cont_three').addClass("show");
//             } else if (top >= Math.ceil($(".cont_four").offset().top - $(".cont_four").height())) {
//                 $('.cont_four').addClass("show");
//             }
//             if ($(document).scrollTop() > 0) {
//                 if (top >= Math.ceil($(".cont_one").offset().top - $(".cont_one").height())) {
//                     $('.cont_one').addClass("show");
//                 } else if (top >= Math.ceil($(".cont_two").offset().top - $(".cont_two").height())) {
//                     $('.cont_two').addClass("show");
//                 } else if (top >= Math.ceil($(".cont_three").offset().top - $(".cont_three").height())) {
//                     $('.cont_three').addClass("show");
//                 } else if (top >= Math.ceil($(".cont_four").offset().top - $(".cont_four").height())) {
//                     $('.cont_four').addClass("show");
//                 }
//             }
//         })
//     } else if ($(window).width() < 1050) {
//         $('.cont_one').addClass("show");
//         $('.cont_two').addClass("show");
//         $('.cont_three').addClass("show");
//         $('.cont_four').addClass("show");
//     }
// })