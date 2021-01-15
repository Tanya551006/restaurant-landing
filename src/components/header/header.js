$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('.nav').addClass('active');
  } else {
      $('.nav').removeClass('active');
  }
});

$('.header__block').slick({
  slidesToShow: 1,
  dots: true
})