$(function() {
    $(document).scroll(function() {
        var top = $(window).scrollTop();
        if (top > 66 && top < 316) {
            $('.cont_first').addClass("show");
        } else if (top > 316) {
            $('.cont_piclist').addClass("show");
        }
    })
})