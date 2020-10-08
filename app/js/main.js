var mySwiper = new Swiper('.hot__slider', {
    slidesPerView: 3,
    loop: 'true',
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
      },
    direction: 'horizontal',
    breakpoints: {
        992: {
          slidesPerView: 3,
        },
        770: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
    }
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

$(".header__btn").click(function(){
    $(".header__btn").toggleClass("is-active");
});

$('.header__btn').on('click', function() {
    $('.header__nav').slideToggle();
});

// flatpickr('.flatpickr.js-flatpickr-dateTime',{
//     enableTime: true,
//     altInput: true,
// });

$('.flatpickr.js-flatpickr-dateTime').flatpickr({
    minDate: "today",
});