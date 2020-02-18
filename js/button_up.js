$(document).ready(function () {
  let button_up = $('.button_up');
  //
  $(window).on('scroll', () => {
    //
    if ($(this).scrollTop() >= 50) {
      button_up.fadeIn();
    }
    else {
      button_up.fadeOut();
    }
  });
  button_up.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  });
});