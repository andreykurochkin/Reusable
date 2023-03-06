'use strict';

const fn = () => {
  const foo = { name: undefined };
  let bar = { name: undefined };
  foo.name = 'foo';
  bar.name = 'bbarbarbarbarar';
  bar = {};
  // foo = {};
};

module.exports = { fn };
