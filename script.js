

document.addEventListener('DOMContentLoaded', function() {
  // Ajoute la classe 'loading' au body pour activer le loader et l'overlay
  document.body.classList.add('loading');
});

window.addEventListener('load', function() {
  // Attendez 2 secondes avant de masquer le loader et l'overlay
  setTimeout(function() {
    // Supprime la classe 'loading' du body pour masquer le loader et l'overlay
    document.body.classList.remove('loading');
    document.querySelector('.loader').classList.add('hidden');
    // Vous pouvez également ajouter une transition ou une animation ici pour masquer/disparaître le loader et l'overlay en douceur
  }, 2000);

  
});





const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
// pour le slider 2ème page
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

//loader

