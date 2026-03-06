var slide_cases = new Swiper(".slide-cases", {
  slidesPerView: 1,
  pagination: {
    el: ".s-cases .top-container .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-cases .top-container .btn-next",
    prevEl: ".s-cases .top-container .btn-prev",
  },
  speed: 600,
});
