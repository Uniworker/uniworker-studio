var viewport = window.innerWidth || document.documentElement.clientWidth
var uiBtns = Array.from(document.querySelectorAll('.btn-outline--warning'))

document.addEventListener('DOMContentLoaded', (e) => {
  if (viewport >= 768 && viewport < 1024) {
    document.getElementById('init-btn').classList.add('btn--md')
    document.getElementById('sender').classList.add('btn--md')
    uiBtns.forEach(btn => {
      btn.classList.add('btn--md')
    });
  } else if (viewport >= 1024) {
    document.getElementById('upper-menu').className = 'flex-grid__col--lg'
    document.getElementById('init-btn').classList.remove('btn--md') || document.getElementById('init-btn').classList.add('btn--lg')
    document.getElementById('sender').classList.add('btn--md')
    uiBtns.forEach(btn => {
      btn.classList.add('btn--md')
    });
  } else {
    document.getElementById('init-btn').classList.remove('btn-md') || document.getElementById('init-btn').classList.remove('btn--lg')
    document.getElementById('sender').classList.remove('btn--md')
    uiBtns.forEach(btn => {
      btn.classList.remove('btn--md')
    });
  }
  window.addEventListener('scroll', (e) => {
    if (document.getElementById('menu-opener').checked)
      document.body.style.position = 'fixed'
    if (window.pageYOffset > document.querySelector('.header').clientHeight) {
      document.getElementById('top').style.display = 'block'
    } else {
      document.getElementById('top').style.display = 'none'
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.closest('#menu-opener')) {
      document.body.style.position = ''
    }
    if (e.target.closest('.header__menu-item')) {
      document.getElementById('menu-opener').checked = false
    }
    if (e.target.closest('#top')) {
      window.scrollTo(0, 0)
    }
    if (e.target.closest('#easteregg')) {
      if (e.target.dataset.active === 'true') {
        e.target.lastElementChild.setAttribute('hidden', '')
        e.target.dataset.active = false
      } else if(e.target.dataset.active === 'false') {
        e.target.lastElementChild.removeAttribute('hidden')
        e.target.dataset.active = true
      }
    }
  })
})