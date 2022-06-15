
let weightOfMark = 78;
let heightOfMark = 1.69;
let weightOfJohn = 92;
let heightOfJohn = 1.95;

let markBMI = weightOfMark / (heightOfMark ** 2);
let johnBMI = weightOfJohn / (heightOfJohn ** 2);
let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


