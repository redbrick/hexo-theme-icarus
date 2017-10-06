($ => {
  const toTop = $('#sidebar').height() - $(window).height() + 60;
  // Caption
  $('.article-entry').each(function () {
    $(this).find('img').each(function () {
      if (this.alt) {
        $(this).after(`<span class="caption">${this.alt}</span>`);
      }
      $(this).wrap(
        `<a href="${this.src}" title="${this.alt}" class="gallery-item"></a>`
      );
    });
  });
  let options = {
    selector: '.gallery-item',
  };
  $('.article-entry').lightGallery(options);
  $('.article-gallery').lightGallery(options);
  options = {
    rowHeight: 140,
    margins  : 4,
    lastRow  : 'justify',
  };
  $('.justified-gallery').justifiedGallery(options);

  // Profile card
  $(document)
    .on('click', () => {
      $('#profile').removeClass('card');
    })
    .on('click', '#profile-anchor', e => {
      e.stopPropagation();
      $('#profile').toggleClass('card');
    })
    .on('click', '.profile-inner', e => {
      e.stopPropagation();
    });

  // To Top
  if ($('#sidebar').length) {
    $(document)
      .on('scroll', function () {
        if ($(document).width() >= 800) {
          if ($(this).scrollTop() > toTop && $(this).scrollTop() > 0) {
            $('#toTop').fadeIn();
            $('#toTop').css('left', $('#sidebar').offset().left);
          } else {
            $('#toTop').fadeOut();
          }
        } else {
          $('#toTop').fadeIn();
          $('#toTop').css('right', 20);
        }
      })
      .on('click', '#toTop', () => {
        $('body, html').animate({ scrollTop: 0 }, 600);
      });
  }
})(jQuery);
