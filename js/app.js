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
});
