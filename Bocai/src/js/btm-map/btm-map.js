$(function() {
    // 事件委托，用来给每个地址添加点击事件
    $(".btm-map .mbox1 ul").on("click", "li", function() {
        // 更改地址效果
        $(this).parent().children().removeClass("bld");
        $(this).addClass("bld");
        // 匹配每个地址的地图搜索
        $(".btm-map .mbox2 div").removeClass("map-show");
        $($(".btm-map .mbox2 div")[$(this).index()]).addClass("map-show");

    })
})