$(function() {
    // if ($(window).width() >= 1050) {
    var top = $(document).scrollTop();
    $(document).scroll(function() {
        var top = $(document).scrollTop();
        if (top >= Math.ceil($(".info_one").offset().top - $(".info_one").height())) {
            $(".info_one").addClass("show");
        };
        if (top >= Math.ceil($(".info_two").offset().top - $(".info_two").height())) {
            $(".info_two").addClass("show");
        };
        if (top >= Math.ceil($(".info_three").offset().top - 600)) {
            $(".info_three").addClass("show");
        };
        if (top >= Math.ceil($(".info_four").offset().top - $(".info_four").height())) {
            $(".info_four").addClass("show");
        };
        if (top >= Math.ceil($(".info_five").offset().top - $(".info_five").height())) {
            $(".info_five").addClass("show");
        };
        if (top >= Math.ceil($(".info_six").offset().top - $(".info_six").height())) {
            $(".info_six").addClass("show");
        };
    })

    if ($(document).scrollTop() > 0) {
        if (top >= Math.ceil($(".info_one").offset().top - $(".info_one").height())) {
            $(".info_one").addClass("show");
        };
        if (top >= Math.ceil($(".info_two").offset().top - $(".info_two").height())) {
            $(".info_two").addClass("show");
        };
        if (top >= Math.ceil($(".info_three").offset().top - 600)) {
            $(".info_three").addClass("show");
        };
        if (top >= Math.ceil($(".info_four").offset().top - $(".info_four").height())) {
            $(".info_four").addClass("show");
        };
        if (top >= Math.ceil($(".info_five").offset().top - $(".info_five").height())) {
            $(".info_five").addClass("show");
        };
        if (top >= Math.ceil($(".info_six").offset().top - $(".info_six").height())) {
            $(".info_six").addClass("show");
        };
    }
    // }

})