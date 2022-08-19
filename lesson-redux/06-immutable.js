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

// mutableObject를 불변화 한 후, immutableObject에 할당
const immutableObject = immutable(mutableObject);

console.log(isFrozen(mutableObject));
console.log(isFrozen(immutableObject));
console.log(isFrozen(immutableObject));
console.log(isFrozen(immutableObject.b));
console.log(isFrozen(immutableObject.b.c));
console.log(isFrozen(immutableObject.b.c[4]));

// immutableObject.a = null;
// delete immutableObject.b.c;

test('immutable 테스트', () => {
  expect(immutableObject.a).not.toBe(null);
  expect(immutableObject.b.c).not.toBe(undefined);
  console.log('immutable 테스트 통과!');
});
