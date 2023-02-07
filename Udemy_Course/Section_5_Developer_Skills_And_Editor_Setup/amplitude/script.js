const amplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let presentIndex = temp[i];
    if (typeof presentIndex !== 'number') continue;
    if (presentIndex > max) max = presentIndex;
    if (presentIndex < min) min = presentIndex;
  }
  console.log(max);
  const amplitude = max - min;
  console.log(max, min);

  return amplitude;
};

console.log(amplitude([0, 3, 5, 'error'], [1, 2, 4]));
