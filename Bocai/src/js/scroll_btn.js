$(function() {
    $(document).scroll(function() {
        var infodet_top = $(window).scrollTop();
        if ($(window).width() > 1050) {
            if (infodet_top > 80) {
                $('.skip_btn').addClass('show');
            } else {
                $('.skip_btn').removeClass('show');
            }
        } else if ($(window).width() < 1050) {
            $('.skip_btn').addClass('show');
        }

    })
})