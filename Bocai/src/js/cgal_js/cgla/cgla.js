$(function() {
    var maxH1 = $('.max-tu h1');
    var maxH2 = $('.max-tu h2');
    var maxShuzi = $('.max-tu .shuzi')
    maxH1.addClass('animated fadeInUp');
    setTimeout(function() {
        maxH2.addClass('animated fadeInUp');
    }, 500);
    setTimeout(function() {
        maxShuzi.addClass('animated fadeInUp');
    }, 700);

    // 引入公共部分
    $('.cgal-header').load('../../html/public/header.html');
    $('.cgla-mp').load('../../html/public/btm-map.html');
    $('.cgla-right-menu').load("../../html/public/right_menu.html")
    $('.cgla-footer').load('../../html/public/footer.html');


    $('.many-xfk').append('');
    $('#nr-load-more').on('click', function() {
        $('#nr-load-more').css('display', 'none');

        $.ajax({
            type: "post",
            url: "../../php/cgla/cgla.php",
            dataType: "json",
            success: function(data) {
                console.log(data.length);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].src, data[i].val);
                    $('.many-xfk').append(' <li class="xfk-load' + i + '"><a href="" class="nr-tu "><img  src="" class="img-responsive " alt=""><div><div><p></p><p>官方网站建设</p></div></div></a><div class="nr-ms"><h4><a href=""></a></h4><span>用户体验   /	平台开发</span><hr/><a href=""><span>Details</span><span class="img"></span></a></div></li>');
                    $('.many-xfk>.xfk-load' + i + '>a>img').attr('src', data[i].src);
                    $('.many-xfk>.xfk-load' + i + '>a p:first').html(data[i].val);
                    $('.many-xfk>.xfk-load' + i + '>.nr-ms h4 a').html(data[i].val);
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        });
    });

});