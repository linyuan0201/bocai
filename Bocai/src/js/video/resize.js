$(function() {
    $(window).resize(function() {
        var width = $(window).width();
        console.log(width);
        if (width < 768) {
            $(window).removeClass('show');
        }
    })
})