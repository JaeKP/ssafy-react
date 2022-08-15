'use strict';

const { test, expect, immutable } = require('./util-test');
const { isFrozen } = Object;

const mutableObject = {
  a: 1,
  b: {
    z: 'react',
    c: [
      3,
      false,
      null,
      () => {},
      {
        d: 100,
      },
    ],
  },
};

const immutableObject = immutable(mutableObject);

console.log(isFrozen(mutableObject));
console.log(isFrozen(immutableObject));
console.log(isFrozen(immutableObject));
console.log(isFrozen(immutableObject.b));
console.log(isFrozen(immutableObject.b.c));
console.log(isFrozen(immutableObject.b.c[4]));

immutableObject.b = null;
delete immutableObject.b.c;
