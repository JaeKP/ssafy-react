const { expect, immutable } = require('./util-test');

/* -------------------------------------------------------------------------- */
/* Avoiding Array Mutations                                                   */
/* -------------------------------------------------------------------------- */

const addCounter = (list, newItem) => {
  list.push(newItem);
  return list;
};

const addCounterTest = () => {
  const listBefore = [];
  const listAfter = [1];

  immutable(listBefore);

  expect(addCounter(listBefore, 1)).toEqual(listAfter);
};

addCounterTest();

console.log('addCounter 테스트 통과!');

/* -------------------------------------------------------------------------- */

const removeCounter = (list, removeIndex) => {
  return list.splice(removeIndex, 1);
};

const removeCounterTest = () => {
  const listBefore = [2, 1, 0];
  const listAfter = [2, 0];

  immutable(listBefore);

  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

removeCounterTest();

console.log('removeCunter 테스트 통과!');

/* -------------------------------------------------------------------------- */

const incrementCounter = (list, index) => {
  list[index]++;
  return list;
};

const testIncrementTest = () => {
  const listBefore = [10, 20, 30];
  const listAfter = [10, 21, 30];

  immutable(listBefore);

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testIncrementTest();

console.log('incrementCounter 테스트 통과!');

/* -------------------------------------------------------------------------- */
/* Avoiding Object Mutations                                                  */
/* -------------------------------------------------------------------------- */

const toggleTodo = (todo) => {
  todo.completed = !todo.completed;
  return todo;
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 1,
    doit: 'Redux 학습',
    completed: false,
  };

  const todoAfter = {
    id: 1,
    doit: 'Redux 학습',
    completed: true,
  };

  immutable(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();

console.log('toggleTodo 테스트 통과!');
