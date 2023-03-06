'use strict';
const square = (x) => x * x;
const cube = (x) => x ** 3;

const average = (a, b) => 0.5 * (a + b);

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const x = average(square(i), cube(i));
    result.push(x);
  }
  return result;
};

module.exports = { square, cube, average, calculate };
