// export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const subMenu = document.querySelectorAll('.nav__item--submenu');
subMenu.forEach(sub => {
  const navLink = sub.querySelector('.nav__link');

  navLink.addEventListener('focus', (e) => {
    sub.classList.add('open');
  })

  window.addEventListener('click', (e) => {
    sub.classList.remove('open');
  })

  document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
      sub.classList.remove('open');
    }
  });

  const simpleLink = document.querySelectorAll('.nav__link');
  simpleLink.forEach(simple => {
    if(!simple.closest('.nav__item--submenu')) {
      simple.addEventListener('focus', (e) => {
        sub.classList.remove('open');
      })
    }
  })

  const subImg = sub.querySelector('svg');
  subImg.addEventListener("click", function() {
    const subList = sub.querySelector('.nav__sub-list');
    if(!sub.classList.contains('open-touch')) {
      sub.classList.add('open-touch');
      subList.style.maxHeight = subList.scrollHeight + "px";
    } else {
      sub.classList.remove('open-touch');
      subList.style.maxHeight = null;
    }
  })
})



// let body = document.querySelector('body');

// if(isMobile.any()) {
//   body.classList.add('touch');

//   let submenu = document.querySelectorAll('.nav__item--submenu');
//   for(let sub = 0; sub < submenu.length; sub++) {
//     let thisLink = submenu[sub].querySelector('.nav__link');
//     let subList = submenu[sub].querySelector('.nav__sub-list');
//     let thisArrow = submenu[sub].querySelector('svg');

//     thisLink.classList.add('parent');
//     submenu[sub].querySelector('svg').addEventListener("click", function() {
//       subList.classList.toggle('open');
//       thisArrow.classList.toggle('active');
//     });
//   }
// }


