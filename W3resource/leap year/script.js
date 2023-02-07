/*Write a JavaScript program to print the contents of the current window. */

'use strict';

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const year = document.querySelector('.year').value;
  const leapYear = document.querySelector('.leap-year');
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYear.textContent = `${year} is a leap year!`;
      } else {
        leapYear.textContent = `${year} is not a leap year!`;
      }
    } else {
      leapYear.textContent = `${year} is a leap year!`;
    }
  } else {
    leapYear.textContent = `${year} is not a leap year!`;
  }
});
