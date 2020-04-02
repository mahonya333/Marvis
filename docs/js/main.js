$(function () {

    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-right.png" alt="right"></button>',
        infinite: false,
    });
    $(".portfolio-slider.slider-jalousie").on('afterChange', function (event, slick, currentSlide) {
        $("#jalousie__current-slide").text(currentSlide + 1);
    });
    $(".portfolio-slider.slider-shutters").on('afterChange', function (event, slick, currentSlide) {
        $("#shutters__current-slide").text(currentSlide + 1);
    });

    $('.portfolio-tabs .portfolio-tabs__btn').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.portfolio-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.portfolio-tabs .tabs').find('.portfolio-tabs__btn').removeClass('_active');
        $(this).addClass('_active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


});