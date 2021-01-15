$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
      $('.nav').addClass('active');
  } else {
      $('.nav').removeClass('active');
  }
});