'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}

function updateNumber() {
  let numberValue = number.value;
  number.innerHTML = numberValue;
  console.log(numberValue);
}

button.addEventListener('click', updateNumber);
