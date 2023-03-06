'use strict';

const phonebook = [
  { name: 'A', phone: '123' },
  { name: 'B', phone: '111' },
];

const findPhoneByName = (name) => {
  for (const x of phonebook()) {
    if (x.name === name) return x;
  }
};

module.exports = { phonebook, findPhoneByName };
