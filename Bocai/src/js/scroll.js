$(function() {
    $(document).scroll(function() {
        var top = $(window).scrollTop() / 2;
        // console.log(top);
        $('.banner img').css('top', top);
    })
})