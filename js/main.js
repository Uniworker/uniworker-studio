var viewport = window.innerWidth || document.documentElement.clientWidth
var uiBtns = Array.from(document.querySelectorAll('.btn-outline--warning'))

if (document.readyState == "interactive") {
  document.body.dataset.loaded = false
  document.documentElement.style.cssText = 'background: #181A20;overflow:hidden';
  fadeIn(document.body, 2000, 20)
  var loader = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  loader.setAttribute("id", "loader")
  loader.setAttribute("viewBox", "0 0 50 50");
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "25");
  circle.setAttribute("cy", "25");
  circle.setAttribute("r", "20");
  loader.appendChild(circle);
  loader.style.cssText = "position:absolute;top:50%;left:50%;translate:-50%;z-index:999"
  document.body.appendChild(loader);
  setInterval(() => {
    document.documentElement.style.cssText = 'background: none;overflow:visible';
    loader.remove()
    document.body.dataset.loaded = true
  }, 2000)
  document.addEventListener('DOMContentLoaded', main())
} else {
  document.body.dataset.loaded = true
  main()
}

function fadeIn(oObj, time, delay) {
  if (oObj.style.visibility != 'visible') {
    oObj.style.visibility = 'visible';
    oObj.style.opacity = '0';
  }
  if (time == null) var time = 500
  if (delay == null) var delay = 50
  if (time > 0) {
    time -= delay;
    oObj.style.opacity = parseFloat(oObj.style.opacity) + (1 - parseFloat(oObj.style.opacity)) / (time / delay);
    window.setTimeout(function (_oObj, _time) { return function () { fadeIn(_oObj, _time) } }(oObj, time), delay);
  }
}

function main() {
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
      } else if (e.target.dataset.active === 'false') {
        e.target.lastElementChild.removeAttribute('hidden')
        e.target.dataset.active = true
      }
    }
  })
  document.forms.feedback.addEventListener('submit', (e) => {
    for (let field = 0; field < e.target.elements.length; field++) {
      fadeIn(e.target.getElementsByTagName('label')[field], 3000, 300)
      fadeIn(e.target.elements[field], 3000, 300)
      if (field == e.target.elements.length - 1) {
        var done = document.createElement('p')
        done.innerHTML = '&#9989; Got your feedback'
        done.style.cssText = 'color:#FBEC13;font-family:\'Montserrat\',sans-serif;font-weight: 500; text-align:center;text-transform:uppercase;position:absolute;top:45%;left:50%;width:100%;translate:-50%;z-index:999'
        e.target.append(done)
        setInterval(() => {
          done.remove()
          e.target.reset()
        }, 1500)
      }
    }
  })
}