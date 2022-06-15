const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
    return tip;
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
    return average;
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    let total = bills[i] + tip;
    totals.push(total);
}

console.log(tips, totals);
console.log(calcAverage(totals));
