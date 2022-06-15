'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(number);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number, the number should be bigger than 0!');
  } else if (guess === number) {
    displayMessage('🎉 Correct Anwer!!');
    document.querySelector('.numberH2').textContent = `${number}`;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.numberH2').style.fontSize = '45px';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = `${highScore}`;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number
          ? 'Need a more low number!!'
          : 'Need a more high number!!'
      );
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('Something is Wrong!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numberH2').textContent = '?';
  document.querySelector('.numberH2').style.fontSize = '35px';
  score = 20;
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
