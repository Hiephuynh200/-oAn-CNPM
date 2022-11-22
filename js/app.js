$(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
        } else {
            // $('.hamburger').removeClass('whenscrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    });

    $('.navbar-nav a[href^="#"]').on('click', function (e) {
        $('html, body').animate(
            {
                //.hash đọc thuộc tính href lấy phần URL bắt đầu bằng #
                scrollTop: $(this.hash).offset().top,
            },
            100,
        );
    });
    // // load anh dong ra
    // particlesJS.load('particles-js', 'js/particlesjs-config.json');
});
