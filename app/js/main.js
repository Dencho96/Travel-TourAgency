var mySwiper = new Swiper('.hot__slider', {
    slidesPerView: 3,
    loop: 'true',
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
      },
    direction: 'horizontal',
});

var mySwiper1 = new Swiper('.testimonials__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: 'true',
  direction: 'horizontal',
    autoplay: {
    delay: 4000,
  },
  
  navigation: {
    nextEl: '.testimonials__btn--next',
    prevEl: '.testimonials__btn--prev',
  },
});