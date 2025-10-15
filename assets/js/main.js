// Synvo IT Service Template - Main JavaScript

(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    $('.loader-wrap').fadeOut(500);
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 80
      }, 800);
    }
  });

  // Mobile menu toggle
  $('.side-toggle').on('click', function() {
    $('.side-info').addClass('info-open');
    $('.offcanvas-overlay').addClass('overlay-open');
  });

  $('#side-info-close, .offcanvas-overlay').on('click', function() {
    $('.side-info').removeClass('info-open');
    $('.offcanvas-overlay').removeClass('overlay-open');
  });

  // Scroll to top
  $('.progress-wrap').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.progress-wrap').addClass('active-progress');
    } else {
      $('.progress-wrap').removeClass('active-progress');
    }
  });

})(jQuery);
