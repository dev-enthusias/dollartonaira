'use strict';

const inputNaira = document.querySelector('.naira--input');
const inputDollar = document.querySelector('.dollar--input');
const btnConverter = document.querySelector('.convert');

btnConverter.addEventListener('click', function () {
  if (!inputDollar.value && !inputNaira.value)
    alert('Enter a number into one of the fields');
  if (inputDollar.value && inputNaira.value) alert('Select only one field');
  if (inputDollar.value && inputDollar.value > 0)
    inputNaira.value = (+inputDollar.value / 605).toFixed(2);
  if (inputNaira.value)
    inputDollar.value = (+inputNaira.value * 605).toFixed(2);
});
