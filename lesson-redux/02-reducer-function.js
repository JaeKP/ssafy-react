const { expect, test } = require('./util-test');

/* Reducer function --------------------------------------------------------- */

function countReducer() {
  
}

const countSwitchReducer = () => {
  
};

/* TEST --------------------------------------------------------------------- */

const incrementAction = {};
const decrementAction = {};
const unknownAction = {};
const emptyObject = {};

test('countReducer 상태 업데이트', () => {
  expect(countReducer(0, incrementAction)).toBe(1);
  expect(countReducer(2, decrementAction)).toBe(1);
  expect(countReducer(2, unknownAction)).toBe(2);
  expect(countReducer(undefined, emptyObject)).toBe(0);
  console.log('countReducer 테스트 통과');
});

test('countSwitchReducer 상태 업데이트', () => {
  expect(countSwitchReducer(0, incrementAction)).toBe(1);
  expect(countSwitchReducer(2, decrementAction)).toBe(1);
  expect(countSwitchReducer(2, unknownAction)).toBe(2);
  expect(countSwitchReducer(undefined, emptyObject)).toBe(0);
  console.log('countSwitchReducer 테스트 통과');
});
