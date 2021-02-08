$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
      $('.nav').addClass('active');
  } else {
      $('.nav').removeClass('active');
  }
});

$('.header__bg-slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 2000,
  dots: true,
})