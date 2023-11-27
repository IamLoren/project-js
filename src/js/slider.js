const images = document.querySelectorAll('.slider-container picture');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current++;
  if (current === images.length) {
    current = 0;
  }
  images[current].classList.add('active');
}, 4000);
