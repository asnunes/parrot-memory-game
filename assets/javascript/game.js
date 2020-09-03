document.addEventListener("DOMContentLoaded", function () {
  var parrots = ['bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn', 'bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn'];
  var randomParrots = parrots.sort(function () { return Math.random() - 0.5 });
  window.firstCard = null;
  window.freezeBoard = false;


  console.log(randomParrots);

  function renderCards(randomParrots) {
    var memoryGame = document.querySelector('.memory-game');

    for (var i = 0; i < randomParrots.length; i++) {
      renderCard(memoryGame, randomParrots[i]);
    }
  }

  function renderCard(memoryGame, parrot) {
    var card = document.createElement('div');
    card.classList.add("card");
    card.dataset.parrot = parrot;
    card.addEventListener('click', onCardClick);
    memoryGame.appendChild(card);

    var frontFace = document.createElement('img');
    frontFace.setAttribute('src', "assets/images/front.png");
    frontFace.setAttribute('alt', "front card face");
    frontFace.classList.add("front-face");
    card.appendChild(frontFace);

    var backFace = document.createElement('img');
    backFace.setAttribute('src', "assets/images/" + parrot + "parrot.gif");
    backFace.setAttribute('alt', "back card face");
    backFace.classList.add("back-face");
    card.appendChild(backFace);
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