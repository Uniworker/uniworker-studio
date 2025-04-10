import { video, editing, webdev } from "../js/data.js";

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    disable: 'phone',
    offset: 200,
    delay: 0,
    duration: 800,
    easing: 'ease-in-out',
    once: true
  })

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

  const modal = new tingle.modal({
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
  if (document.documentElement.lang === 'uk') {
    modal.addFooterBtn('Детальніше', 'btn btn--primary', function () {
      var url = 'https://t.me/uniworkerSupport'
      window.open(url, '_blank')
    });
    modal.addFooterBtn('Назад', 'btn btn--danger', function () {
      modal.close();
    });
  }
  if (document.documentElement.lang === 'ru') {
    modal.addFooterBtn('Подробнее', 'btn btn--primary', function () {
      var url = 'https://t.me/uniworkerSupport'
      window.open(url, '_blank')
    });
    modal.addFooterBtn('Назад', 'btn btn--danger', function () {
      modal.close();
    });
  }
  if (document.documentElement.lang === 'en') {
    modal.addFooterBtn('Ask more', 'btn btn--primary', function () {
      var url = 'https://t.me/uniworkerSupport'
      window.open(url, '_blank')
    });
    modal.addFooterBtn('Go back', 'btn btn--danger', function () {
      modal.close();
    });
  }
  document.addEventListener('click', (e) => {
    if (e.target.closest('#modal-1') || e.target.closest('#modal-2') || e.target.closest('#modal-3')) {
      modal.open();
    }
    if (e.target.closest('#modal-1')) {
      if (document.documentElement.lang === 'uk') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Категорія послуги</th>
                    <th>Вартість</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < video.serviceUK.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${video.serviceUK[i]}</td><td>${video.priceUK[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'ru') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Вид услуги</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < video.serviceRU.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${video.serviceRU[i]}</td><td>${video.priceRU[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'en') {
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
            for (let i = 0; i < video.serviceEN.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${video.serviceEN[i]}</td><td>${video.priceEN[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
    }
    if (e.target.closest('#modal-2')) {
      if (document.documentElement.lang === 'uk') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Категорія послуги</th>
                    <th>Вартість</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < editing.serviceUK.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${editing.serviceUK[i]}</td><td>${editing.priceUK[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'ru') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Вид услуги</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < editing.serviceRU.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${editing.serviceRU[i]}</td><td>${editing.priceRU[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'en') {
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
            for (let i = 0; i < editing.serviceEN.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${editing.serviceEN[i]}</td><td>${editing.priceEN[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
    }
    if (e.target.closest('#modal-3')) {
      if (document.documentElement.lang === 'uk') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Категорія послуги</th>
                    <th>Вартість</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < webdev.serviceUK.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${webdev.serviceUK[i]}</td><td>${webdev.priceUK[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'ru') {
        modal.setContent(`
        <table class="table table--striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Вид услуги</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                ${(() => {
            let tableRows = '';
            for (let i = 0; i < webdev.serviceRU.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${webdev.serviceRU[i]}</td><td>${webdev.priceRU[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
      if (document.documentElement.lang === 'en') {
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
            for (let i = 0; i < webdev.serviceEN.length; i++) {
              tableRows += `<tr><td>${i + 1}</td><td>${webdev.serviceEN[i]}</td><td>${webdev.priceEN[i]}</td></tr>`;
            }
            return tableRows;
          })()}
                </tbody>
              </table>
      `);
      }
    }
  })
})