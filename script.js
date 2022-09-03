'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/
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
    // document.querySelector('.message').textContent = '⛔️ No Number!';
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
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High...' : '📉 Too Low...';
      displayMessage(guess > secretNumber ? '📈 Too High...' : '📉 Too Low..');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost The Game';
      displayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // Score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Message
  // document.querySelector('.message').textContent = 'Start guessing...';
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
