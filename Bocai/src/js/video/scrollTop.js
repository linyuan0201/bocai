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