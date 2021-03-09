'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🙌🙌 Correct Number!!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;

// document.querySelector('.guess').textContent = 25;
// console.log(document.querySelector('.guess').nodeValue);

// secret number
let secretNumber = Math.trunc(Math.random() * 10) + 1;

// score
let score = 10; // state variable - relevant to the application - all the data available to the all the application

// highscore
let highscore = 0;

// event handling --- chheckking the guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when guess is not a number
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⚠ No Number')
    );
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌🙌 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // implementing high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when player guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😆😆😆You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when player guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😆😆😆You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// event handling --- playing again or Resetting the whole game
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // manipulating css in DOM
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
