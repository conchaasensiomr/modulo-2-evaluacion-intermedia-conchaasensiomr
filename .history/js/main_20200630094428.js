'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');
const clue = document.querySelector('.');
let randomNumber = getRandomNumber(100);
let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function compareNumber() {
  let numberValue = number.value;
  //number.innerHTML = numberValue;
  console.log(numberValue);

  if (numberValue < randomNumber) {
  }
}

button.addEventListener('click', compareNumber);
