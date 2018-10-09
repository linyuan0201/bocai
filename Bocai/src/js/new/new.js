var reg = /^\w{4,10}@[A-Za-z]{2,3}\.[A-Za-z]{2,3}$/,
    reg2 = /^.{6,}$/,
    flag = 0,
    flag1 = 0;
// var reg = /^\w{4,8}$/;
$(".form input:eq(0)").on("keyup", function() {
    if (!reg.test(this.value)) {
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
$(".form input:eq(1)").on("keyup", function() {
    if (!reg2.test(this.value)) {
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
                if (!response.res) {
                    output.css({
                        "display": "block",
                    }).html("zhucechenggong");
                } else {
                    output.css({
                        "display": "block",
                    }).html("yonghuyicunzai");
                }
            }
        });
    } else {
        output.css({
            "display": "block",
        }).html("ERROR: INVALID LOGIN");
    }
})
$(".form>div button:eq(1)").on("click", function() {
    var usename = $(".form input:eq(0)").val(),
        password = $(".form input:eq(1)").val(),
        url = "../../php/new/register2.php",
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
                if (!response.res) {
                    output.css({
                        "display": "block",
                    }).html("ERROR: INVALID LOGIN");
                } else {
                    location.href = "#";
                }
            }
        });
    } else {
        output.css({
            "display": "block",
        }).html("ERROR: INVALID LOGIN");
    }
})