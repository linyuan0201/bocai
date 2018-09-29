$(function() {
    var btn = $("header .navbar .navbar-header button"),
        headerphone = $("body");
    // console.log(btn);

    // // phone的高度调整
    // $("body").on('resize', function() {
    //     $("header .phone").css({
    //         "height": screen.height,
    //     })
    // })
    // console.log($("btn"));
    //首页按钮点击事件
    btn.on('click', function() {
            headerphone.animate({
                "left": "-66%",
            }, 300);
            $("header .navbar .navbar-header button .icon-bar").animate({
                "width": "22px",
            }, 300)
        })
        // 二级菜单撤销事件
    $("  .phone .clo").on("click", function() {
        headerphone.animate({
            "left": "0",
        }, 300);
        $("header .navbar .navbar-header button .icon-bar").first().animate({
            "width": "11px",
        }, 300);
        $("header .navbar .navbar-header button .icon-bar").last().animate({
            "width": "16px",
        }, 300);
    })

    // 二级菜单选择事件
    $(" .phone>ul").on("click", "li", function(event) {
            // console.log($(this).children().last());
            $(this).children().last().animate({
                "left": "0",
            }, 300);
            event.stoppropagation();
        })
        // 三级菜单撤销
    $(".fh").on('click', function() {
        // console.log($(this).parent());
        $(this).parent().animate({
            "left": "100%",
        }, 300)
    })
})