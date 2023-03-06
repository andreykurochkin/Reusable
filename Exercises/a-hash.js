'use strict';

const phonebook = {
  a: 123,
  b: 3,
};

const findPhoneByName = (name) => phonebook()[name];

module.exports = { phonebook, findPhoneByName };
