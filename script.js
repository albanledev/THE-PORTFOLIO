const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function startSlider() {
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].classList.add('animation-out');
    sliderItems[nextIndex].classList.add('animation-in');
    sliderItems[nextIndex].classList.add('active');

    setTimeout(() => {
      sliderItems[currentIndex].classList.remove('active', 'animation-out');
      sliderItems[nextIndex].classList.remove('animation-in');
      currentIndex = nextIndex;
    }, 1000);
  }, 4000);
}

startSlider();