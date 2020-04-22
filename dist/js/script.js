$(document).ready(function() {
    $('.feedback__carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.hamburger__wrapper').click(function(event) {
        $('.hamburger__wrapper,.header__menu').toggleClass('active');
    });
});