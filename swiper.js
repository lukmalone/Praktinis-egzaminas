"use strict";
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  initialSlide: 0,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

var buttons = document.getElementsByName("button");
swiper.on('slideChange', function () {
  for(var x of buttons){
    x.classList.remove("active");
  }
  var currentSlide = swiper.activeIndex;
  var activeButton = buttons[currentSlide];
  activeButton.classList.add("active");
});

// Price list
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowSlideNext: false,
      allowSlidePrev: false
    }
  }
});


// reviews
const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    }
  }
});
