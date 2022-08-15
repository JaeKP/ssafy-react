const { expect, test } = require('./util-test');

/* Reducer function --------------------------------------------------------- */

function countReducer(state, action) {
  if (state === undefined) return 0;
  if (action.type === 'INCREMENT') return state + 1;
  if (action.type === 'DECREMENT') return state - 1;
  return state;
}

const countSwitchReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/* TEST --------------------------------------------------------------------- */

test('countReducer 상태 업데이트', () => {
  expect(countReducer(0, { type: 'INCREMENT' })).toEqual(1);
  expect(countReducer(2, { type: 'DECREMENT' })).toEqual(1);
  expect(countReducer(2, { type: 'UNKNOWN' })).toEqual(2);
  expect(countReducer(undefined, {})).toEqual(0);
  console.log('countReducer 테스트 통과');
});

test('countSwitchReducer 상태 업데이트', () => {
  expect(countSwitchReducer(0, { type: 'INCREMENT' })).toEqual(1);
  expect(countSwitchReducer(2, { type: 'DECREMENT' })).toEqual(1);
  expect(countSwitchReducer(2, { type: 'UNKNOWN' })).toEqual(2);
  expect(countSwitchReducer(undefined, {})).toEqual(0);
  console.log('countSwitchReducer 테스트 통과');
});
