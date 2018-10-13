$(function() {
    var btn = $("header .navbar .navbar-header button"),
        headerphone = $("body header");
    // console.log(btn);

    // // phone的高度调整
    // $("body").on('resize', function() {
    //     $("header .phone").css({
    //         "height": screen.height,
    //     })
    // })
    // console.log($("btn"));

    // search遮罩层
    $(".tab-li:last a").on("click", function() {
        $(".tab-li-search").css({
            "display": "block",
        })
    })
    $(".tab-li-search .tls-close").on("click", function() {
            $(".tab-li-search").css({
                "display": "none",
            })
        })
        // $(".tab-li-search p input").on("focus", function() {
        //     $(this).attr("placeholder", "");
        //     $(this).on("keyup", function(event) {
        //         if (event.keyCode == 13) {
        //             location.href = "";
        //         } else {
        //             $(this).html(function(index, old) {
        //                 return old + event.key;
        //             })
        //         }
        //     })
        // })
        // $(".tab-li-search p button").on("click", function() {
        //     location.href = "";
        // })

    //首页按钮点击事件
    btn.on('click', function() {
            console.log(headerphone);
            headerphone.animate({
                "left": "-66%",
                // "background-color": "#000",
            }, 300);
            $(".phone").animate({
                "left": "34%",
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
        $(".phone").animate({
            "left": "100%",
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
            // event.stoppropagation();
            event.stopImmediatePropagation()
        })
        // 三级菜单撤销
    $(".fh").on('click', function() {
        // console.log($(this).parent());
        $(this).parent().animate({
            "left": "100%",
        }, 300)
    })
})