$(function() {
    // $('.tab-li-search input').focus(function() {
    //     console.log('a');
    //     $(window).keydown(function(event) {
    //         if (event.key == 13) {
    //             window.open('../../html/cgal_html/ssgl.html');
    //             console.log('aaa');
    //         }
    //     });
    // });


    var ss = {};
    //搜索状态，点击或者回车出发跳转
    $('.tab-li-search button').on('click', function() {
        ss.val = $('.tab-li-search p input').val();
        sessionStorage.ssdata = ss.val;
        window.open('../../html/cgal_html/ssgl.html');
    });
    $('.tab-li-search p input').keyup(function(event) {
        if (event.keyCode == 13) {
            window.open('../../html/cgal_html/ssgl.html');

        }
        ss.val = $('.tab-li-search p input').val();
        sessionStorage.ssdata = ss.val;

        // console.log(ss.val);
    });


});