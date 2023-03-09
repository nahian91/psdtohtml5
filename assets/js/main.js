$(document).ready(function() {
    // Counter Up
    $('.counter').counterUp();

    // Magnific Popup Image
    $('.popup-image').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    // Project Popup Image
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    // Magnific Popup Video
    $('.video-popup').magnificPopup({
        type:'iframe'
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
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // Projects Filter

    // init Isotope
    var $grid = $('.project-items').isotope({
        // options
    });
    // filter items on button click
    $('.projects-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    $('.projects-menu').on( 'click', 'li', function() {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    })
})