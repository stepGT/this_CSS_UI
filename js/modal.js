/**
 *
 * @param selectorButton
 * @param selectorContent
 */
function modal(selectorButton, selectorContent) {
  let body = $('body');
  let content = $(selectorContent);
  let button = $(selectorButton);
  //
  body.prepend(
      '<div class="modal" data-modal="' + selectorButton + '"><div class="modal__content"><a class="modal__close" href="#">&times;</a></div></div>'
  );
  //
  let modal = $('.modal[data-modal="' + selectorButton + '"]');
  let close = modal.find('.modal__close');
  //
  modal.find('.modal__content').append(content);
  button.on('click', function (e) {
    e.preventDefault();
    modal.addClass('modal_active');
    body.children('*:not(script, .modal)').addClass('modal_blur');
  });
  close.on('click', function (e) {
    e.preventDefault();
    modal.removeClass('modal_active');
    $('.modal_blur').removeClass('modal_blur');
  });
}
//
modal('#button', '#content');
modal('#button2', '#content2');