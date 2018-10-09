var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
};
$(function() {
    var num = true;
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        // console.log(t);
        if (h > 4480 && num == true) {
            num = false;
            var demo = new CountUp('num1', 0, 13, 0, 1, options);
            var demo1 = new CountUp('num2', 0, 500, 0, 1, options);
            var demo2 = new CountUp('num3', 0, 6000, 0, 1, options);
            var demo3 = new CountUp('num4', 0, 500, 0, 1, options);
            if (!demo.error && !demo1.error && !demo2.error && !demo3.error) {
                demo.start();
                demo1.start();
                demo2.start();
                demo3.start();
            } else {
                console.error(demo.error);
            }
        }


        console.log(num);
    })
});