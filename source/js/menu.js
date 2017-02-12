$(document).ready(function () {
  $('body').on('click', function() {
    $('.menu li').removeClass('active');
  });
  $('.menu .menu-list .dropdown-toggle').on('click', function(e) {
    e.stopPropagation();
    $('.menu li').removeClass('active');
    const $parent = $(this).parent();
    $parent.addClass('active');
  });
});
