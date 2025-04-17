import Swiper from 'swiper';
import { Navigation, Pagination, A11y} from 'swiper/modules';

function customCursor() {
  const cursor = document.querySelector('.case__cursor');
  const slider = document.querySelector('.case__slider');
  const slide = document.querySelector('.case__slide');
  const slideHeight = slide.offsetHeight;
  const contentHeight = document.querySelector('.case-item__content').offsetHeight;
  const articleGap = parseInt(window.getComputedStyle(document.querySelector('.case-item')).gap);
  const btnNext = document.querySelector('.case__next');
  const btnPrev = document.querySelector('.case__prev');
  const viewLink = document.querySelector('.case-item__view-link');

  viewLink.style.pointerEvents = `auto`;
  btnNext.style.height = `calc(${slideHeight}px - ${contentHeight}px - ${articleGap}px)`;
  btnPrev.style.height = `calc(${slideHeight}px - ${contentHeight}px - ${articleGap}px)`;

  slider.addEventListener("mousemove", function(e) {
    const targetElement = e.target;

    if(targetElement.closest('.case__next')) {
      console.log('я тут')
      const posX = e.clientX;
      const posY = e.clientY;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      cursor.classList.add('arrow-right');
    } else {
      cursor.classList.remove('arrow-right');
    }

    if(targetElement.closest('.case__prev')) {
      console.log('я тут')
      const posX = e.clientX;
      const posY = e.clientY;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      cursor.classList.add('arrow-left');
    } else {
      cursor.classList.remove('arrow-left');
    }

    if(targetElement.closest('.case-item__view-link')) {
      const viewLink = targetElement.closest('.case-item__view-link');
      const posX = e.clientX;
      const posY = e.clientY;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      viewLink.style.pointerEvents = `auto`;
      cursor.classList.add('view-case');
    } else {
      cursor.classList.remove('view-case');
    }
  })

  slider.addEventListener('mouseenter', function (e) {
    cursor.classList.add('visible');
  })
  slider.addEventListener('mouseleave', function (e) {
    cursor.classList.remove('visible');
  })
  slider.addEventListener('mousedown', function (e) {
    if(e.target.closest('.case__next') || e.target.closest('.case__prev')) {
      cursor.classList.add('active-btn');
    }
    if(e.target.closest('.case-item__view-link')) {
      cursor.classList.add('active-link');
    }
  })
  slider.addEventListener('mouseup', function (e) {
    cursor.classList.remove('active-btn');
    cursor.classList.remove('active-link');
  })

}

const caseSlider = new Swiper('.case__slider', {
  modules: [ Navigation, Pagination, A11y ],
  observer: true,
  observeParents: true,
  slidesPerView: 1.1,
  spaceBetween: 20,
  allowTouchMove: true,
  navigation: {
    nextEl: '.case__next',
    prevEl: '.case__prev',
  },
  pagination: {
    el: ".case__pagination",
    type: "fraction",
    renderFraction: (currentClass, totalClass) => {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="case__decor-pag"></span>' +
        '<span class="' + totalClass + '"></span>'
      }
  },
  on: {
    init: function () {
      customCursor();
    },

    slideChange: function () {
      const swiperSlides = document.getElementsByClassName('swiper-slide');
      for (let index = 0; index < swiperSlides.length; index++) {
        const element = swiperSlides[index];
        const viewLink = element.querySelector('.case-item__view-link');
        viewLink.style.pointerEvents = `none`;
        }
        const viewLinkActive = swiperSlides[caseSlider.realIndex].querySelector('.case-item__view-link');
        viewLinkActive.style.pointerEvents = `auto`;
    },
  },
  breakpoints: {
    767.98: {
      spaceBetween: 60,
      slidesPerView: 1,
      allowTouchMove: true,
    },
    1024.98: {
      spaceBetween: 60,
      allowTouchMove: false,
      slidesPerView: 1,
    }

  }
});








// const swiperSlides = document.getElementsByClassName('swiper-slide');

// caseSlider.on('slideChange', function() {
//   const otherSlides = swiperSlides
//   for (let index = 0; index < swiperSlides.length; index++) {
//     const element = swiperSlides[index];
//     const viewLink = element.querySelector('.case-item__view-link');
//     const cursorElem = document.querySelector('[data-cursor]');

//     viewLink.addEventListener("mouseenter", function (e) {
//       cursorElem.style.opacity = `0`;
//       cursorElem.style.visibility = `hidden`;
//       cursorElem.classList.remove('rotate-arrow');
//     })
//   }

//   const viewLinkActive = swiperSlides[caseSlider.realIndex].querySelector('.case-item__view-link');
//   const cursorElem = document.querySelector('[data-cursor]');

//   viewLinkActive.addEventListener("mousemove", function (e) {
//     const cursorElemViewHeight = cursorElem.offsetHeight;
//     const cursorElemViewWidth = cursorElem.offsetWidth;
//     const posX = e.clientX;
//     const posY = e.clientY;
//     cursorElem.style.left = `calc(${posX}px - ${cursorElemViewWidth / 2}px)`;
//     cursorElem.style.top = `calc(${posY}px - ${cursorElemViewHeight / 2}px)`;
//   })
//   viewLinkActive.addEventListener("mouseenter", function (e) {
//     cursorElem.style.opacity = `1`;
//     cursorElem.style.visibility = `visible`;
//     cursorElem.classList.add('view-case');
//   })
//   viewLinkActive.addEventListener("mouseleave", function (e) {
//     cursorElem.style.opacity = `0`;
//     cursorElem.style.visibility = `hidden`;
//     cursorElem.classList.remove('view-case');
//   })
// });

















