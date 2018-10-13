$(function() {
    // console.log('aaaa');
    $('.jjfa-head').load('../public/header.html');
    $('.menu-right').load('../public/right_menu.html');
    $('.jjfa-map').load('../public/btm-map.html');
    $('.jjfa-footer').load('../public/footer.html');


    // 大图部分数字跑动效果
    var jjfasz1 = $('.jjfa-sz1');
    var jjfasz2 = $('.jjfa-sz2');
    var jjfasz3 = $('.jjfa-sz3');
    var jjfasz = {};

    jjfasz.i = 200;
    jjfasz.k = 890;
    jjfasz.n = 4860;

    function sz1() {
        jjfasz.i++;
        jjfasz.k++;
        jjfasz.n++;
        // console.log(jjfasz.i);
        if (jjfasz.i <= 300) {
            jjfasz1.html(jjfasz.i + '+');
        }
        if (jjfasz.k <= 1000) {
            jjfasz2.html(jjfasz.k + '+');
        }
        if (jjfasz.n <= 5000) {
            jjfasz3.html(jjfasz.n + '+');
        } else {
            clearTimeout(jjfasz.t1);
        }

        jjfasz.t1 = setTimeout(function() {
            sz1();
        }, 4);

    }


    //品牌保证部分


    //服务领域-小屏
    $('.fwly-xp-nr').on('click', function() {
        $(this).toggleClass('fwly-xp-active');
        $(this).siblings().removeClass('fwly-xp-active');
        $(this).children('.fwly-xp-nr-more').slideToggle('normal');
    });

    //品牌保证
    $('.ppbz-chose>li').on('click', function(e) {
        $(this).addClass('ppbz-chose-active');
        $(this).siblings().removeClass('ppbz-chose-active');
        var i = $(this).attr('num');
        setTimeout(function() {
            $('#ppbz-nr-' + i).fadeIn('slow');
        }, 800);

        $('#ppbz-nr-' + i).siblings().fadeOut('slow');
    });

    // console.log($(window).height(), $('.ani-up').offset().top);

    //animated 动画效果
    $('.ani-up1').addClass("animated fadeInUp");
    setTimeout(function() {

        $('.ani-up2').addClass("animated fadeInUp");
        sz1();

    }, 400);
    $(window).scroll(function() {

        $('.ani-up').each(function() {
            if ($(this).offset().top < $(document).scrollTop() + $(window).height() * 0.8) {
                $(this).addClass("animated fadeInUp");
            }
        });



        if ($('.jjfa-fwlc-nr').offset().top < $(document).scrollTop() + $(window).height() * 0.8) {
            $('.fwlc-fg-hr').animate({
                width: "100%",
            }, 1000);
            var ani = 1;

            function adr() {
                if (ani <= 9) {
                    $('.ani-right' + ani).addClass('animated fadeInRight');
                    setTimeout(adr, 500);
                    ani++;
                }
            }
            setTimeout(adr, 1000);
        }
    });

    //服务流程亮起
    if ($('.ani-right9').css("opacity") == 0) {
        var ank = 1;


        function adl() {
            if (ank <= 9) {
                $('.ani-right' + ank).addClass('fwlc-light');
                $('.ani-right' + ank).siblings().removeClass('fwlc-light');


            } else {
                ank = 1;
                $('.ani-right' + ank).addClass('fwlc-light');
                $('.ani-right' + ank).siblings().removeClass('fwlc-light');
            }
            ank++;
        }

    }
    setInterval(adl, 2500);

});