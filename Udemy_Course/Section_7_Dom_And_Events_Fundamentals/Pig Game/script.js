'use strict';

// Selecting elements
const scoreEl1 = document.getElementById('score--0');
const scoreEl2 = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//initialize
let score, currentScore, activePlayer, playing;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score = [0, 0];

  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Starting conditions
init();

//Rolling Dice
btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Current Score in total score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // current score 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (score[activePlayer] >= 100) {
      // if 100 finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEL.classList.add('hidden');
      playing = false;
    } else {
      // switch the player if score !== 100
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
