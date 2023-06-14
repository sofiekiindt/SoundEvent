// Slider
let slides = document.querySelectorAll(".slides");

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});

let currentSlide = 0;
let maxSlide = slides.length - 1;

function slider() {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
}

window.setInterval(slider, 5000)