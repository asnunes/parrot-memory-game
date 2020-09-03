document.addEventListener("DOMContentLoaded", function () {
  var parrots = ['bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn', 'bobross', 'explody', 'fiesta', 'revertit', 'triplets', 'unicorn'];
  var randomParrots = parrots.sort(function () { return Math.random() - 0.5 });

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
    card.addEventListener('click', function () {
      this.classList.toggle("flipped");
    });
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

  renderCards(randomParrots);
});