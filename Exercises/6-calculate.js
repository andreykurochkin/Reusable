'use strict';

const pow = (base, power) => base ** power;
const square = (a) => pow(a, 2);

const cube = (a) => pow(a, 3);

const average = (a, b) => 0.5 * (a + b);

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(average(square(i) + cube(i));
  }
  return result;
};

module.exports = { square, cube, average, calculate };
