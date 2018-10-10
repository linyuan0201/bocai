$(function() {
    console.log('aaaa');
    // $('.jjfa-head').load('../public/header.html');
    // $('.menu-right').load('../public/right_menu.html');
    // $('.jjfa-map').load('../public/btm-map.html');


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
        }, 5);

    }
    sz1();



});