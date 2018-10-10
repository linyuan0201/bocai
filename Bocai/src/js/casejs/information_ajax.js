var data = $(".input").val();
var count = true;
$.ajax({
    type: "post",
    url: "../../php/information.php",
    data: data,
    dataType: "json",
    success: function(response) {
        // console.log(response);
        $(".more-load").on("click", function() {
            count = false;
            var output = "";
            if (count == false) {
                $("#loadmore").css("display", "none");
                $(".news").css("paddingBottom", "0");
            }
            for (var i in response) {
                output += `
                    <div class="item" data-order=${response[i].s_id}>
                    <div class="container-fluid box">
                        <a href="#" class="sign-a">
                        <img src="${response[i].s_url}">
                        </a>
                        <div class="date">
                            <span class="day">
                            <p class="ri">${response[i].s_day}</p>
                            <p class="month">${response[i].s_month}</p>
                        </span>
                            <div class="xq">
                                <p class="dec">
                                    <a href="#">
                                    ${response[i].s_decrition}
                                </a>
                                </p>
                                <p class="vid">
                                    <a href="#">
                                    ${response[i].s_vi}                                                                          
                                </a>
                                </p>
                            </div>
                            <a href="#" class="details">
                                <span class="detail-co">Details</span>
                                <span class="dec-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>`;
            }
            $(".my-gallery-container").html(output);
            // console.log(1);
            $.getScript("../../js/casejs/mp.mansory.min.js");
            $.getScript("../../js/casejs/pubuliu.js");
        });
        $(".iconfont1").on("click", function() {
            var str = $(".search1>.input").val();
            var put = "";
            count = false;
            if (count == false) {
                $("#loadmore").css("display", "none");
                // $(".news").css("paddingBottom", "0");
            }
            for (var j in response) {
                if (response[j].s_decrition.indexOf(str) != -1 && str) {
                    put += `
                    <div class="item" data-order=${response[j].s_id}>
                    <div class="container-fluid box">
                        <a href="#" class="sign-a">
                        <img src="${response[j].s_url}">
                        </a>
                        <div class="date">
                            <span class="day">
                            <p class="ri">${response[j].s_day}</p>
                            <p class="month">${response[j].s_month}</p>
                        </span>
                            <div class="xq">
                                <p class="dec">
                                    <a href="#">
                                    ${response[j].s_decrition}
                                </a>
                                </p>
                                <p class="vid">
                                    <a href="#">
                                    ${response[j].s_vi}                                                                          
                                </a>
                                </p>
                            </div>
                            <a href="#" class="details">
                                <span class="detail-co">Details</span>
                                <span class="dec-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>`;
                }
                $(".my-gallery-container").html(put);
                $.getScript("../../js/casejs/mp.mansory.min.js");
                $.getScript("../../js/casejs/pubuliu.js");
            }
        })
    },
    error: function(err) {
        console.log(err);
    }

});