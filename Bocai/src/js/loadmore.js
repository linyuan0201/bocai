var clickNum = 0;
document.getElementById('load_more').addEventListener('click', loadImg);

function loadImg() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../php/loadmore.php", false);
    xhr.onload = function() {
        if (this.status == 200) {
            var lilist = JSON.parse(this.responseText);
            var output = "",
                c = 0;

            if (lilist.length > 0) {

                var i = 9 * clickNum;
                for (i; i < lilist.length; i++) {
                    c++;
                    output += `
                            <li class="border col-lg-4 col-sm-6 col-xs-12">
                                <a class="cont_img_box" href="https://www.bocweb.cn/tvc/tvc_info/99.html"><img class="cont_img" src="${lilist[i].img_add}" alt="越秀华东美好定义篇">
                                    <span class="cont_video_play"></span>
                                </a>
                                <div class="cont_img_detail">
                                    <p class="cont_img_name"><a href="https://www.bocweb.cn/tvc/tvc_info/99.html">${lilist[i].img_tit}</a></p>
                                    <div class="cont_img_date">${lilist[i].img_data}</div>
                                    <div class="cont_img_btm">
                                        <a href="https://www.bocweb.cn/tvc/tvc_info/99.html">Details</a>
                                        <a class="cont_btm_arrow pull-right" href="https://www.bocweb.cn/tvc/tvc_info/99.html"></a>
                                    </div>
                                </div>
                            </li>`;
                    if (c > 8) {
                        break;
                    }
                }
                var html = document.getElementById('cont_video').innerHTML;
                document.getElementById('cont_video').innerHTML = html + output;

                if (clickNum == 1) {
                    $('.content_load').hide();
                }
            }
        }
    }
    xhr.send();
    clickNum++;
}