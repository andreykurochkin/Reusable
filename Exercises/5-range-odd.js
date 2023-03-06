'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result.filter((x) => x % 2 !== 0);
};

module.exports = { rangeOdd };
