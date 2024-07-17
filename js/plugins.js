// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Swiper('.swiper', {
    autoHeight: true,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 2,
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 32,
    speed: 500,
    watchOverflow: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      slideShadows: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        effect: 'slide',
        centeredSlides: false,
        initialSlide: 0,
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      1024: {
        effect: 'slide',
        centeredSlides: false,
        initialSlide: 0,
        simulateTouch: false,
        slidesPerGroup: 3,
        slidesPerView: 3
      }
    }
  })
})
