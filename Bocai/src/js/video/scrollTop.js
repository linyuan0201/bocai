$(function() {
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        console.log(top);
        if (top > 125 && top < 499) {
            $('.cont_first').addClass("show");
        } else if (top > 500 && top < 1385) {
            $('.cont_second:nth-of-type(1)').addClass("show");
            console.log("asdfh");
        } else if (top > 1386) {
            $('.cont_first:nth-of-type(2)').addClass("show");
            console.log("asdfh");
        } else if (top > 2200) {
            $('.cont_second:nth-of-type(2)').addClass("show");
            console.log("asdfh")
        }
    })
})