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
    console.log(maxH2.html());
    console.log(maxH1.offset().top);
    console.log()

});