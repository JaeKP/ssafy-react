const { expect, test } = require('./util-test');

/* action types ------------------------------------------------------------- */

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
const RESET = 'counter/reset';

/* Reducer function --------------------------------------------------------- */
let initialState = 0;
function countReducer(state = initialState, action /* { type } */) {
  // state 업데이트 (값 증가, 감소, 값 그대로 반환)
  if (action.type === INCREMENT) {
    return state + 1;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }
  if (action.type === RESET) {
    return initialState;
  }
  return state;
}

const countSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

/* TEST --------------------------------------------------------------------- */

const incrementAction = {
  type: 'counter/increment',
};
const decrementAction = {
  type: 'counter/decrement',
};
const unknownAction = {
  type: 'unknown',
};
const emptyObject = {};

// TDD
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
