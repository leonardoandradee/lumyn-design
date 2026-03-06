const duration = 4000;

const bars = document.querySelectorAll(".progress-bar");
const count = document.querySelector(".count");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: duration,
    disableOnInteraction: false,
  },

  on: {
    slideChange() {
      const index = swiper.realIndex;

      bars.forEach((bar, i) => {
        bar.style.transition = "none";
        bar.style.width = i < index ? "100%" : "0%";
      });

      const activeBar = bars[index];

      setTimeout(() => {
        activeBar.style.transition = `width ${duration}ms linear`;
        activeBar.style.width = "100%";
      }, 50);

      count.innerHTML = `0${index + 1} / 03`;
    },
  },
});

window.addEventListener("load", () => {
  bars[0].style.transition = `width ${duration}ms linear`;
  bars[0].style.width = "100%";
});
