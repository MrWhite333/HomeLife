$(function() {
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  $('.menu__btn').on('click', function(){
    $('.header__nav-wrap').toggleClass('header__nav-wrap--active')    
  });
  
});
