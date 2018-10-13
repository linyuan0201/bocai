$(function() {
    $('.icon_circle').on('click', function(e) {
        // window.location.hash="#icon_circle";
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $('#icon_circle').offset().top
        }, 400);
    })
})