$(function() {
    var btns = $('.link>ul>li');
    console.log(btns);
    var btnDiv = $('.content');
    console.log(btnDiv);
    var line = $(".link>ul>li>a>i");
    console.log(line);
    btnDiv.eq(0).find("div").first().addClass('left fl animated fadeInLeft show');
    btnDiv.eq(0).find("div").last().addClass("right fr animated fadeInRight show");
    line.eq(0).css({
        "width": "52px",
        "marginLeft": "-26px",
    });
    btns.on('click', function(e) {
        e.preventDefault();
        console.log(1);
        console.log($(this));
        var i = btns.index($(this));
        btnDiv.children("div").removeClass("fadeInLeft fadeInRight ").addClass("  fadeOutDown");
        console.log(i);
        setTimeout(function() {
            btnDiv.children("div").removeClass("left fl animated fadeInLeft show right fr animated fadeInRight show animated fadeOutDown");
            btnDiv.eq(i).find("div").first().addClass('left fl animated fadeInLeft show');
            btnDiv.eq(i).find("div").last().addClass('right fr animated fadeInRight show');
            line.css({
                "width": 0,
                "marginLeft": 0
            });
            line.eq(i).css({
                "width": "52px",
                "marginLeft": "-26px",
            });
        }, 500);
    });
});