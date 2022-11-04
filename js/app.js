$(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('nav').addClass('stickyadd');
        } else {
            $('nav').removeClass('stickyadd');
        }
    });
});
