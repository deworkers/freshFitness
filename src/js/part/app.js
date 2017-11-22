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
        $('.calendar-club-list').slideUp();
    });

    $('.calendar-club').on('click', function(e) {
        e.stopPropagation();
        $(this).addClass('open').find('.calendar-club-list').slideToggle();
    });

    $('.calendar-club-list label').on('click', function(e) {
        e.stopPropagation();
        $('.calendar-club-list').slideUp();

        var icon = $(this).data('icon');
        var iconClass = 'filtr-icon--' + icon;
        if ( icon !== undefined ) {
            $(this).parents('.calendar-club').find('span').removeClass();
            $(this).parents('.calendar-club').find('span').addClass('filtr-icon').addClass(iconClass);
        }

        var title = $(this).text();
        $(this).parents('.calendar-club').find('span').html(title+'<i></i>');

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
        galleryTop.on('slideChangeTransitionEnd', function () {
            var idx = galleryTop.activeIndex;
            galleryThumbs.slideTo(idx, 300);
            $('.gallery-thumbs .swiper-slide').removeClass('active');
            $('.gallery-thumbs .swiper-slide').eq(idx).addClass('active');
        });
    }

    var calendarList = new Swiper('.calendar-days', {
        slidesPerView: 'auto',
        spaceBetween: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть (Esc)', // Alt text on close button
          tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
          gallery: {
            tPrev: 'Назад', // Alt text on left arrow
            tNext: 'Вперед', // Alt text on right arrow
            tCounter: '%curr% / %total%' // Markup for "1 of 7" counter
          },
          image: {
            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
          },
          ajax: {
            tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
          }
    });


    $('.person-photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $('.review, .gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });


    $('.calendar-type-one').on('click', function() {
        $('.calendar-type-one').removeClass('active');
        $(this).addClass('active');
    });

    $('.category-list label').on('click', function() {
        $('.category-list label').removeClass('active');
        $(this).addClass('active');
    });

    if ( $(window).width() >= 1024 ) {
        $('.grid').masonry({
            columnWidth: 145,
            itemSelector: '.grid-item',
            gutter: 10
        });
    } else {
        var person = new Swiper('.person-img', {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true
        });
    }



    $("#orderForm").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            }
       }
    });

    $("#order-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            }
       }
    });

    $("#contact-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            }
       }
    });

});

