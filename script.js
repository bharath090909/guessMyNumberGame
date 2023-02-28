'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //This called state variable as it is part of so-called application state.
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  // No input
  if (!guess) {
    displayMessage('⛔️ No Number!');
    // Correct input
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //Here we should put it as string and with units included.
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High...' : '📉 Too Low..');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  
});

document.querySelector('.again').addEventListener('click', function () {
  // Score
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  // Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // Input field
  document.querySelector('.guess').value = '';
  // Number
  document.querySelector('.number').textContent = '?';
  // Secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
