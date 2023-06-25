

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
    var strings = ["Bienvenue", "Bienvenidos", "Welcome"];
    var index = 0;
    var charIndex = 0;
    var delay = 100; // Délai entre chaque frappe (en ms)

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

    typeNextChar(); // Commence l'animation




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
var blocSections = document.querySelectorAll('.bloc');

// Ajoutez des variables pour stocker l'index de la section active et la direction du défilement
var activeSectionIndex = 0;
var scrollDirection = 0;

// Parcourez chaque section et ajoutez un gestionnaire d'événement pour l'événement wheel (molette de souris)
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
});