const forecastTemperature1 = [17, 21, 23];
const forecastTemperature2 = [12, 5, -5, 0, 4];

let forcastString = '...';
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    forcastString = forcastString + `${arr[i]}"C in ${i + 1} days...`;
  }

  console.log(forcastString);
  forcastString = '...';
};

printForecast(forecastTemperature1);
printForecast(forecastTemperature2);
