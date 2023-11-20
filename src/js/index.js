// Карта
function loadYandexMap() {
  let mapOnload = new CustomEvent("maponload");
  document.dispatchEvent(mapOnload);
}

window.loadYandexMap = loadYandexMap;
if (document.getElementById("map")) {
  document.addEventListener("maponload", ymaps.ready(init));
}

function init() {

  let myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать её центр и коэффициент масштабирования.
    center:    [52.50557344876909,13.330960405511883],
    zoom: 17
  }, {
    suppressMapOpenBlock: true,
  });

  let placemark = new ymaps.Placemark([52.5056162423223,13.332269061844766], {

  }, {
    iconLayout: "default#image",
  });

  myMap.geoObjects.add(placemark);
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); 
  // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

import Swiper from 'swiper/bundle';

// init Swiper:
new Swiper('.project-cards', {
  parallax: true,
  speed: 1000,
  slidesPerView: "auto",

  breakpoints: {
    838: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 6
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperClients = new Swiper('.clients-wrapper', {
  enabled: false,
  loop: true,
  autoplay: {
    delay: 0
  },
  speed: 4500,
  slidesPerView: 3,

  breakpoints: {
    838: {
      enabled: true,
    },
    1200: {
      enabled: true,
    },
  },
})

const swiperReview = new Swiper('.review-slider', {
  parallax: true,
  navigator: true,
  slidesPerView: 1,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: ".swiper-pagination",
  },
})

import mobileNav from './modules/mobile-nav.js';
mobileNav();
