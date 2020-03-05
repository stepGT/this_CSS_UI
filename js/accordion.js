/**
 *
 * @param selector
 */
function accordion(selector) {
  let accordion = $(selector);
  let spans = accordion.children('span');
  let divs = accordion.children('div');

  accordion
      .addClass('accordion')
      .on('click', '.accordion__control', function (e) {
        e.preventDefault();
        let a = $(this);
        let active = a.hasClass('accordion__control_active');
        //
        accordion
            .find('.accordion__control_active')
            .removeClass('accordion__control_active');
        accordion
            .find('.accordion__panel_active')
            .removeClass('accordion__panel_active');
        //
        if (!active) {
          a
              .addClass('accordion__control_active')
              .next()
              .addClass('accordion__panel_active')
        }
      });

  spans.each(function () {
    let span = $(this);
    span.replaceWith(
        '<a href="" class="accordion__control">' + span.text() + '</a>'
    );
  });

  divs.addClass('accordion__panel');
}

//
accordion('#accordion');