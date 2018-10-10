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

    $('.cgla-mp').load('../../html/public/btm-map.html');
    $('.cgla-footer').load('../../html/public/footer.html');
});