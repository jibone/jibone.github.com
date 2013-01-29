/* --------------------------- *
 * JavaScript for jShamsul.com *
 * --------------------------- */

$(function() {
  // -- menu on click
  $('#openSideNavi').on('click', function() {
    $('#fader').fadeIn();
    $('#sideNavigation').animate({
      left: '0%'
    }, 600, 'swing');
    return false;
  });
  $('#closeSideNavi').on('click', function() {
    $('#fader').fadeOut();
    $('#sideNavigation').animate({
      left: '-40%'
    }, 600, 'swing');
    return false;
  });

  $('#menuBtn').on('click', function() {
    $('#naviList').slideToggle();
    return false;
  });
});
