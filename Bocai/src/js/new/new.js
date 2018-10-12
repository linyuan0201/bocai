var reg = /^\w{4,24}@[A-Za-z]{2,3}\.[A-Za-z]{2,3}$/,
    reg2 = /^.{6,}$/,
    flag = 0,
    flag1 = 0;

// 账户验证
$(".form input:eq(0)").on("keyup", function() {
    if (!reg.test(this.value)) {
        flag = 0;
        $(".form span:eq(0)").css({
            "display": "block",
        }).html(function(index, oldval) {
            return " <i class='caret'></i>Please enter a valid email address";
        });
    } else {
        flag = 1;
        $(".form span:eq(0)").css({
            "display": "none",
        })
    }
})

// 密码验证
$(".form input:eq(1)").on("keyup", function() {
        if (!reg2.test(this.value)) {
            flag1 = 0;
            $(".form span:eq(1)").css({
                "display": "block",
            }).html(function(index, oldval) {
                return " <i class='caret'></i>Please enter at least 6 characters";
            });
        } else {
            flag1 = 1;
            $(".form span:eq(1)").css({
                "display": "none",
            })
        }
    })
    // 注册按钮
$(".form>div button:eq(0)").on("click", function() {
        var usename = $(".form input:eq(0)").val(),
            password = $(".form input:eq(1)").val(),
            url = "../../php/new/register.php",
            output = $(".form div p");
        var data = {
            "usename": usename,
            "password": password,
        }
        if (flag == 1 && flag1 == 1) {
            $.ajax({
                type: "post",
                url: url,
                data: data,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    if (response.res == 0) {
                        output.css({
                            "display": "block",
                        }).html("zhucechenggong");
                    } else {
                        output.css({
                            "display": "block",
                        }).html("yonghuyicunzai");
                    };
                },
                error: function(err) {
                    console.log(err);
                }

            });
        } else {
            output.css({
                "display": "block",
            }).html("ERROR: INVALID LOGIN");
        }
        flag = 0;
        flag1 = 0;
        $(".form>div input").val("");
    })
    // 登录按钮
$(".form>div button:eq(1)").on("click", function() {
        var usename = $(".form input:eq(0)").val(),
            password = $(".form input:eq(1)").val(),
            url = "../../php/new/register2.php",
            output = $(".form div p");

        var data = {
            "usename": usename,
            "password": password,
        }
        var dat = new Date();
        dat.setDate(dat.getDate() + 1);
        document.cookie = usename + "=" + password + ";expires=" + dat;
        if (flag == 1 && flag1 == 1) {
            $.ajax({
                type: "post",
                url: url,
                data: data,
                dataType: "json",
                success: function(response) {
                    console.log(response.pwd);
                    if (response.res == 0) {
                        output.css({
                            "display": "block",
                        }).html("ERROR: INVALID LOGIN");
                    } else if (response.pwd == 1) {
                        location.href = "../../html/home/home.html";
                    } else {
                        output.css({
                            "display": "block",
                        }).html("ERROR: password error");
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        } else {
            output.css({
                "display": "block",
            }).html("ERROR: INVALID LOGIN");
        }
        flag = 0;
        flag1 = 0;
        $(".form>div input").val("");
    })
    // 
if (document.cookie) {
    var cooke_arr = document.cookie.split("; ");
    var cooke_arr_2 = cooke_arr[cooke_arr.length - 1].split("=");
    console.log(cooke_arr_2);
    $(".form input:eq(0)").val(cooke_arr_2[0]);
    $(".form input:eq(1)").val(cooke_arr_2[1]);
}
$(".form input:eq(0)").on("focus", function() {
    console.log(1);
    $(".form input:eq(1)").val("");
})