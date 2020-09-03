document.addEventListener("DOMContentLoaded", function () {
  var parrots = ['bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn', 'bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn'];
  var randomParrots = parrots.sort(function () { return Math.random() - 0.5 });
  window.firstCard = null;
  window.freezeBoard = false;

  function renderCards(randomParrots) {
    for (var i = 0; i < randomParrots.length; i++) {
      renderCard(randomParrots, i);
    }
  }

  function renderCard(randomParrots, index) {
    var parrot = randomParrots[index];

    var card = document.querySelectorAll('.card')[index];
    card.dataset.parrot = parrot;
    card.addEventListener('click', onCardClick);

    var frontFace = card.querySelector('.front-face').firstElementChild;
    frontFace.setAttribute('src', "assets/images/front.png");

    var backFace = card.querySelector('.back-face').firstElementChild;
    backFace.setAttribute('src', "assets/images/" + parrot + "parrot.gif");
  }

  function onCardClick() {
    if (window.freezeBoard) return;
    window.freezeBoard = true;

    var card = this;
    card.classList.toggle("flipped");

    if (!window.firstCard) {
      window.firstCard = card;
      window.freezeBoard = false;
    } else if (window.firstCard.dataset.parrot !== card.dataset.parrot) {
      setTimeout(function () {
        window.firstCard.classList.remove("flipped");
        card.classList.remove("flipped");
        window.firstCard = undefined;
        window.freezeBoard = false;
      }, 1000);
    } else {
      window.firstCard.removeEventListener('click', onCardClick);
      card.removeEventListener('click', onCardClick);
      window.firstCard = undefined;
      window.freezeBoard = false;
    }
  }

  renderCards(randomParrots);
});