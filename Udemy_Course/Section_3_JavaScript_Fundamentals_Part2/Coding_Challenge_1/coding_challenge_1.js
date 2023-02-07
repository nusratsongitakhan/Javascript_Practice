'use strict';
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas}.)`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins}.)`;
    } else {
        return `No one wins with ${avgDolphins} vs ${avgKoalas}!`;
    }

}

//Test data 1
// const averageDolphins = calcAverage(44, 23, 71);
// const averageKaolas = calcAverage(65, 54, 49);
// console.log(checkWinner(averageDolphins, averageKaolas));

// Test data 2

const averageDolphins = calcAverage(85, 54, 41);
const averageKaolas = calcAverage(23, 34, 27);
console.log(checkWinner(averageDolphins, averageKaolas));
