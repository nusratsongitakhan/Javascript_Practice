// Test Data 1:

let weightOfMark = 78;
let heightOfMark = 1.69;
let weightOfJohn = 92;
let heightOfJohn = 1.95;

let markBMI = weightOfMark / (heightOfMark ** 2);
let johnBMI = weightOfJohn / (heightOfJohn ** 2);
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// Test Data 2:

weightOfMark = 95;
heightOfMark = 1.88;
weightOfJohn = 85;
heightOfJohn = 1.76;

markBMI = weightOfMark / (heightOfMark ** 2);
johnBMI = weightOfJohn / (heightOfJohn ** 2);
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);