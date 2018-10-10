// 调用公共部分
$(".header").load("../../html/public/header.html");
$(".abt-us-btm-map").load("../../html/public/btm-map.html");
$(".abt-us-footer").load("../../html/public/footer.html");

// 屏幕上跳动的数字可能是我的信仰
var li = $(".banner .banner-box .chang-nmb ul li"),
    li2 = $(".banner .banner-box .chang-btm .cb-h ul li");
// 5000+
for (var i = 3000; i <= 5000; i++) {
    (function(i) {
        setTimeout(function() {
            var q = Math.floor(i / 1000),
                s = i % 1000;
            if (s == 0) {
                s = s + "00";
            };
            li.eq(0).children(".cn-nav").children("span").html(q + "," + s);
        }, (i - 2999) * 1)
    })(i)
}
// 100+
for (var j = 0; j <= 100; j++) {
    (function(j) {
        setTimeout(function() {
            li.eq(1).children(".cn-nav").children("span").html(j);
        }, j * 10)
    })(j)
}
//300+
for (var k = 0; k <= 300; k++) {
    (function(k) {
        setTimeout(function() {
            li.eq(2).children(".cn-nav").children("span").html(k);
        }, k * 5)
    })(k)
}
//li2.eq(0).children(".cb-nav").children("span")
// 59.1%
for (var j1 = 0; j1 <= 591; j1++) {
    (function(j1) {
        setTimeout(function() {
            li2.eq(1).children(".cb-nav").children(".change-nav").html(j1 / 10);
        }, j1 * 4)
    })(j1)
}
// 26.4%
for (var i1 = 0; i1 <= 264; i1++) {
    (function(i1) {
        setTimeout(function() {
            li2.eq(0).children(".cb-nav").children(".change-nav").html(i1 / 10);
        }, i1 * 5)
    })(i1)
}
//31.9%
for (var k1 = 0; k1 <= 319; k1++) {
    (function(k1) {
        setTimeout(function() {
            li2.eq(2).children(".cb-nav").children(".change-nav").html(k1 / 10);
        }, k1 * 5)
    })(k1)
}
// console.log(li2.children("div").children('i').children("span"));
// 图像变化
li2.children("div").children('i').children("span").animate({
    "height": "100%",
}, 1000);



$(".banner").addClass("animated fadeInUp");
$(document).scroll(function() {
        var top = $(document).scrollTop(),
            pic = Math.ceil($(".box .picture").offset().top - $(".box .picture").height()),
            itdc = Math.ceil($(".box .introduce").offset().top - $(".box .introduce").height()),
            client = Math.ceil($(".box .client").offset().top - $(".box .client").height()),
            more = Math.ceil($(".box .more").offset().top - $(".box .more").height());
        console.log(top);
        if (top >= itdc) {
            $(".box .introduce").addClass("animated fadeInUp");
        }
        if (top >= pic) {
            $(".box .picture").addClass("animated fadeInUp");
        }
        if (top >= client) {
            $(".box .client").addClass("animated fadeInUp");
        }
        if (top >= more) {
            $(".box .more").addClass("animated fadeInUp");
        }
    })
    // 滚动监听
$(window).on("resize", function() {
    if ($(window).width() >= 1050) {
        $(".banner").addClass("animated fadeInUp");
        $(document).scroll(function() {
            var top = $(document).scrollTop(),
                pic = Math.ceil($(".box .picture").offset().top - $(".box .picture").height()),
                itdc = Math.ceil($(".box .introduce").offset().top - $(".box .introduce").height()),
                client = Math.ceil($(".box .client").offset().top - $(".box .client").height()),
                more = Math.ceil($(".box .more").offset().top - $(".box .more").height());
            console.log(top);
            if (top >= itdc) {
                $(".box .introduce").addClass("animated fadeInUp");
            }
            if (top >= pic) {
                $(".box .picture").addClass("animated fadeInUp");
            }
            if (top >= client) {
                $(".box .client").addClass("animated fadeInUp");
            }
            if (top >= more) {
                $(".box .more").addClass("animated fadeInUp");
            }
        })
    }
})