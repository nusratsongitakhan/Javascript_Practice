/*Write a JavaScript program to print the contents of the current window. */

'use strict';

// Write a JavaScript program to get the current date.

const today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

console.log(`${dd}-${mm + 1}-${yyyy} , ${dd}/${mm + 1}/${yyyy}`);
