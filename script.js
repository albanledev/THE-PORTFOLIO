window.addEventListener('load', () => {
  document.body.classList.add('resize');
});

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


//animation Welcome 

var textElement = document.getElementById('typed-text');
var strings = ["Bienvenue", "Welcome"];
var index = 0;
var charIndex = 0;
var delay = 100; // Délai entre chaque frappe (en ms)
var initialDelay = 3000; // Délai initial avant de commencer l'animation (en ms)

function typeNextChar() {
  var currentString = strings[index];

  if (charIndex < currentString.length) {
    textElement.innerHTML += currentString.charAt(charIndex);
    charIndex++;
    setTimeout(typeNextChar, delay);
  } else {
    setTimeout(deleteText, delay * 10); // Délai avant de supprimer le texte
  }
}

function deleteText() {
  if (charIndex > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    charIndex--;
    setTimeout(deleteText, delay);
  } else {
    index = (index + 1) % strings.length;
    setTimeout(typeNextChar, delay); // Délai avant de commencer la frappe du prochain texte
  }
}

setTimeout(typeNextChar, initialDelay); // Commence l'animation après le




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



// Sélectionnez tous les éléments avec la classe 'bloc'


// A décocher !!!!
// var blocSections = document.querySelectorAll('.bloc');

// Ajoutez des variables pour stocker l'index de la section active et la direction du défilement
var activeSectionIndex = 0;
var scrollDirection = 0;

// Fonction pour gérer le défilement vers le haut
function scrollToPrevSection() {
  activeSectionIndex = Math.max(0, activeSectionIndex - 1);
  blocSections[activeSectionIndex].scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour gérer le défilement vers le bas
function scrollToNextSection() {
  activeSectionIndex = Math.min(activeSectionIndex + 1, blocSections.length - 1);
  blocSections[activeSectionIndex].scrollIntoView({ behavior: 'smooth' });
}

// Parcourez chaque section et ajoutez des gestionnaires d'événements pour les événements wheel (molette de souris) et keydown (touches du clavier)
blocSections.forEach(function(section, index) {
  section.addEventListener('wheel', function(event) {
    
    event.preventDefault(); // Empêche le comportement par défaut du défilement de la molette de souris

    // Vérifiez la direction du défilement de la molette de souris
    scrollDirection = event.deltaY > 0 ? 1 : -1;

    // Mettez à jour l'index de la section active en fonction de la direction du défilement
    activeSectionIndex = Math.max(0, Math.min(activeSectionIndex + scrollDirection, blocSections.length - 1));

    // Faites défiler la fenêtre jusqu'à la section active avec une animation fluide
    blocSections[activeSectionIndex].scrollIntoView({ behavior: 'smooth' });
    
  });

  section.addEventListener('keydown', function(event) {
    // Vérifiez si la touche enfoncée est la touche "Haut" (ArrowUp)
    if (event.key === 'ArrowUp') {
      event.preventDefault(); // Empêche le comportement par défaut du défilement de la touche "Haut"
      scrollToPrevSection();
    }
    
    // Vérifiez si la touche enfoncée est la touche "Bas" (ArrowDown)
    if (event.key === 'ArrowDown') {
      event.preventDefault(); // Empêche le comportement par défaut du défilement de la touche "Bas"
      scrollToNextSection();
    }
  });
});

// Gestionnaire d'événement pour le défilement sur le trackpad (pour les navigateurs qui le prennent en charge)
window.addEventListener('wheel', function(event) {
  // Vérifiez si la molette de la souris n'a pas été utilisée simultanément
  if (scrollDirection === 0) {
    if (window.innerWidth > 1000) {
    event.preventDefault(); // Empêche le comportement par défaut du défilement du trackpad

    // Vérifiez la direction du défilement du trackpad
    scrollDirection = event.deltaY > 0 ? 1 : -1;

    // Mettez à jour l'index de la section active en fonction de la direction du défilement
    activeSectionIndex = Math.max(0, Math.min(activeSectionIndex + scrollDirection, blocSections.length - 1));

    // Faites défiler la fenêtre jusqu'à la section active avec une animation fluide
    blocSections[activeSectionIndex].scrollIntoView({ behavior: 'smooth' });

    // Réinitialisez la direction du défilement après une courte période
    setTimeout(function() {
      scrollDirection = 0;
    }, 0);
  }
  }


});

// Gestionnaire d'événement pour le défilement avec les touches "Haut" (ArrowUp) et "Bas" (ArrowDown) du clavier
window.addEventListener('keydown', function(event) {
  // Vérifiez si la touche enfoncée est la touche "Haut" (ArrowUp)
  if (event.key === 'ArrowUp') {
    event.preventDefault(); // Empêche le comportement par défaut du défilement de la touche "Haut"
    scrollToPrevSection();
  }
  
  // Vérifiez si la touche enfoncée est la touche "Bas" (ArrowDown)
  if (event.key === 'ArrowDown') {
    event.preventDefault(); // Empêche le comportement par défaut du défilement de la touche "Bas"
    scrollToNextSection();
  }
});



// clic sur bouton

// Récupérez tous les boutons de la page
var buttons = document.getElementsByTagName("button");

// Parcourez chaque bouton et ajoutez un écouteur d'événement pour le clic
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Effectuez une action lorsque le bouton est cliqué
    console.log("Button clicked!");
    // Vous pouvez également ajouter d'autres actions que vous souhaitez exécuter ici
  });
}



document.addEventListener('DOMContentLoaded', function() {
  disableTextSelection();
});

function disableTextSelection() {
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
}






var swiper;

function initSwiper() {
  swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: getSlidesPerView(),
    speed: 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });
}

function getSlidesPerView() {
  return window.innerWidth < 1050 ? 1 : 2;
}

function updateSwiper() {
  swiper.params.slidesPerView = getSlidesPerView();
  swiper.update();
}

window.addEventListener("load", function () {
  initSwiper();
  updateSwiper();
});

window.addEventListener("resize", updateSwiper);















function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Ajoutez une classe spéciale pour déclencher l'animation
      const h1 = entry.target.querySelector('.animate-on-scroll h1');
      h1.classList.add('animate');
      // Arrêtez d'observer le h1 après avoir déclenché l'animation
      observer.unobserve(entry.target);
    }
  });
}

// Options pour l'Intersection Observer
const options = {
  root: null, // Utilise le viewport comme root
  rootMargin: '0px', // Pas de margin autour du root
  threshold: 0.5 // Le h1 est considéré comme visible quand 50% ou plus est dans le viewport
};

// Créer l'Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Ciblez la div parente du h1 que vous souhaitez observer
const h1Container = document.querySelector('.animate-on-scroll');

// Commencez à observer la div parente du h1
observer.observe(h1Container);