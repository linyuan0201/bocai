$(function() {
    var ss = {};
    ss.val = sessionStorage.ssdata;

    console.log(ss);
    $.ajax({
        type: "get",
        url: "../../php/cgla/sousuo.php",
        dataType: "json",
        data: ss,
        success: function(data) {
            $(".ssgl-zwxx").css("display", "none");
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].src, data[i].val);
                $('.many-xfk').append(' <li class="xfk-load' + i + '"><a href="" class="nr-tu "><img  src="" class="img-responsive " alt=""><div><div><p></p><p>官方网站建设</p></div></div></a><div class="nr-ms"><h4><a href=""></a></h4><span>用户体验   / 平台开发</span><hr/><a href=""><span>Details</span><span class="img"></span></a></div></li>');
                $('.many-xfk>.xfk-load' + i + '>a>img').attr('src', data[i].src);
                $('.many-xfk>.xfk-load' + i + '>a p:first').html(data[i].val);
                $('.many-xfk>.xfk-load' + i + '>.nr-ms h4 a').html(data[i].val);
            }
            // console.log(data.length);

        },
        error: function(msg) {
            console.log(msg);
        }
    });
})