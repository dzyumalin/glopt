$(document).ready(function() {
    $('.feedback__carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
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

// Modal window

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function() {
    $('.overlay, #consulatiton, #thanks').fadeOut('slow');
});

// Masked input

$("input[name=phone]").mask("+7 (999) 999-99-99");

$('form').submit(function(event) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

// Smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

// fadein animation

new WOW().init();