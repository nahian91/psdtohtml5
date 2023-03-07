$(document).ready(function() {
    // Counter Up
    $('.counter').counterUp();

    // Magnific Popup
    $('.popup-image').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    // Testimonials Slider
    $('.testimonials').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        loop: true
    });

    // Clients Slider
    $('.clients').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
})