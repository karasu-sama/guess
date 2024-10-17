'use strict';
const body = document.querySelector('.body');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
let currentScore = 20;
const highScore = document.querySelector('.highscore');

let randomNumbers = Math.floor(Math.random() * 20) + 1;

btnCheck.addEventListener('click', function () {
  const guessInput = guess.value;
  if (!guessInput) {
    message.textContent = 'guess a number idiot❗';
  } else if (guessInput == randomNumbers) {
    body.style.backgroundColor = '#60b347';
    number.textContent = guessInput;
    message.textContent = 'You won!🎉';
    highScore.textContent = currentScore;
  } else if (guessInput > 20 || guessInput < 0) {
    message.textContent = '(between 1 - 20)';
  } else if (currentScore > 1) {
    const wrong =
      guessInput > randomNumbers
        ? ((message.textContent = 'too high⬆️'), currentScore--)
        : ((message.textContent = 'too low⬇️'), currentScore--);
    score.textContent = currentScore;
    console.log(currentScore);
  } else {
    body.style.backgroundColor = 'red';
    message.textContent = 'you lost❗';
    score.textContent = '0';
  }
});

btnAgain.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  currentScore = 20;
  score.textContent = 0;
  message.textContent = 'Start guessing...';
  randomNumbers = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
