/* Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

'use strict';

//initialization
let s, areaOfTriangle;

let btn = document.querySelector('.button');
let aEL = document.getElementById('a');
let bEL = document.getElementById('b');
let cEL = document.getElementById('c');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');

const area = function (a, b, c) {
  s = (a + b + c) / 2;
  areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return areaOfTriangle;
};

btn.addEventListener('click', function () {
  const a = Number(aEL.value);
  const b = Number(bEL.value);
  const c = Number(cEL.value);
  const A = area(a, b, c);
  document.querySelector('.area').classList.remove('hidden');
  document.querySelector('.area').textContent = `${A}`;
});

aEL.addEventListener('keydown', function (e) {
  Number(e.key) % 1 === 0
    ? (error1.textContent = '')
    : (error1.textContent = 'Write a number');
});
bEL.addEventListener('keydown', function (e) {
  Number(e.key) % 1 === 0
    ? (error2.textContent = '')
    : (error2.textContent = 'Write a number');
});
cEL.addEventListener('keydown', function (e) {
  Number(e.key) % 1 === 0
    ? (error3.textContent = '')
    : (error3.textContent = 'Write a number');
});





// call by value
// const a = 5;
//  const abc = (a) =>{
//    a= a+10;
//    console.log(a);
//  }
//  abc(a);
//  console.log(a);
 

