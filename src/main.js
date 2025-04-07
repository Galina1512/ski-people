import 'normalize.css';
import './style.scss';
import { Navigation, Thumbs } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import { initRouter } from './js/router.js';

const init = () => {
    initRouter();
};
init();


const thumbnailsSlider = new Swiper(".slider-thumbnails", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const productSwiper = new Swiper(".mySwiper2 .product__slider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".product__slider-arrow_next",
      prevEl: ".product__slider-arrow_prev",
    },
    modules: [Navigation, Thumbs],
    thumbs: {
      swiper: thumbnailsSlider,
    },
  });
