$(document).ready(function() {
    var mainSlider = new Swiper('.slider-right', {
        speed: 400,
        spaceBetween: 0,
        pagination:'.swiper-pagination',
        paginationClickable: true,
    });

    $('.submenu i').on('click', function() {
        $(this).parents('.submenu').toggleClass('open').find('ul').slideToggle();
    });

    $('.adress-select-this').on('click', function(e) {
        e.stopPropagation();
        
        $(this).toggleClass('open').next().slideToggle();
    });

    $('.adress-one').on('click', function(e) {
        e.stopPropagation();

        $('.adress-list').slideUp();
        $('.adress-one').removeClass('active');
        $(this).addClass('active');

        text = $(this).text();
        phone = $(this).data('phone');

        $('.adress-select-this span').text(text);
        $('.header-contact__phone').text(phone);
    });

    $('body').click(function() {
        $('.adress-list').slideUp();
    });

    var galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 'auto',
        spaceBetween: 2
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 2,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });

    $('.gallery-thumbs .swiper-slide').on('click', function() {
        $('.gallery-thumbs .swiper-slide').removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        galleryTop.slideTo(idx, 300);

    });

    if ( $('.gallery-top').length > 0 ) {
        galleryTop.on('onSlideChangeEnd', function () {
            var idx = galleryTop.activeIndex;
            galleryThumbs.slideTo(idx, 300);
            $('.gallery-thumbs .swiper-slide').removeClass('active');
            $('.gallery-thumbs .swiper-slide').eq(idx).addClass('active');
        });
    }

});