import { video, editing, webdev } from "../js/data.js";

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

  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['button', 'escape'],
    closeLabel: "Close",
    cssClass: ['modal-1', 'modal-2', 'modal-3'],
    onOpen: function () {
      console.log('modal open');
    },
    onClose: function () {
      console.log('modal closed');
    },
  });
  modal.addFooterBtn('Ask more', 'btn btn--primary', function () {
    var url = 'https://t.me/uniworkerSupport'
    window.open(url, '_blank')
  });
  modal.addFooterBtn('Go back', 'btn btn--danger', function () {
    modal.close();
  });
  document.addEventListener('click', (e) => {
    if (e.target.closest('#modal-1') || e.target.closest('#modal-2') || e.target.closest('#modal-3')) {
      modal.open();
    }
    if (e.target.closest('#modal-1')) {
      modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type of service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
          let tableRows = '';
          for (let i = 0; i < video.service.length; i++) {
            tableRows += `<tr><td>${i + 1}</td><td>${video.service[i]}</td><td>${video.priceUS[i]}</td></tr>`;
          }
          return tableRows;
        })()}
                </tbody>
              </table>
      `);
    }
    if (e.target.closest('#modal-2')) {
      modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type of service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
          let tableRows = '';
          for (let i = 0; i < editing.service.length; i++) {
            tableRows += `<tr><td>${i + 1}</td><td>${editing.service[i]}</td><td>${editing.priceUS[i]}</td></tr>`;
          }
          return tableRows;
        })()}
                </tbody>
              </table>
      `);
    }
    if (e.target.closest('#modal-3')) {
      modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type of service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
          let tableRows = '';
          for (let i = 0; i < webdev.service.length; i++) {
            tableRows += `<tr><td>${i + 1}</td><td>${webdev.service[i]}</td><td>${webdev.priceUS[i]}</td></tr>`;
          }
          return tableRows;
        })()}
                </tbody>
              </table>
      `);
    }
  })
})