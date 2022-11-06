//$ định nghĩa 1 hàm
//Basic syntax is: $(selector).action()
/*
Examples:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".
*/
$(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.hamburger').addClass('whenscrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
        } else {
            $('.hamburger').removeClass('whenscrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    });

    $('.navbar-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                //.hash đọc thuộc tính href lấy phần URL bắt đầu bằng #
                scrollTop: $(this.hash).offset().top,
                // $("#home") ...
            },
            1000,
        );
    });
    // load anh dong ra
    particlesJS.load('particles-js', 'js/particlesjs-config.json');
});
