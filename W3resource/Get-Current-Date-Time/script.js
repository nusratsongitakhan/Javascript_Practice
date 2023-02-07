/* Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */


'use strict';
let today = new Date();
let day = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();

let M = hour > 12 ? 'PM' : 'AM';
let fixedHour = hour > 12 ? hour - 12 : hour;

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Satarday',
];
console.log(`Today is : ${days[day]}.
Current time is : ${fixedHour} ${M}: ${minute} : ${seconds}`);
