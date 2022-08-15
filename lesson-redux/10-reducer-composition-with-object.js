const { expect } = require('expect');
const immutable = require('deepfreeze');
const { createStore } = require('redux');
const todoListReducer = require('./reducers/todoList');
const visibilityFilter = require('./reducers/visibilityFilter');

/* Reducer Composition with Object ------------------------------------------ */

const todoListAppReducer = (state = {}, action) => ({
  todoList: todoListReducer(state.todoList, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
});

/* -------------------------------------------------------------------------- */

const store = createStore(todoListAppReducer);

const printStoreItems = (status = '초기 상태') => {
  const state = store.getState();
  console.log(JSON.stringify(state, null, 2));
};

printStoreItems();

console.log('------------------------------');

console.log('ADD_TODO 액션 디스패치');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  doit: 'React 학습',
});

printStoreItems('업데이트 상태');

console.log('------------------------------');

console.log('ADD_TODO 액션 디스패치');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  doit: 'Redux 학습',
});

printStoreItems('업데이트 상태');

console.log('------------------------------');

console.log('TOGGLE_TODO 액션 디스패치');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
});

printStoreItems('업데이트 상태');

console.log('------------------------------');

console.log('SET_VISIBILITY_FILTER 액션 디스패치');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
});

printStoreItems('업데이트 상태');

console.log('------------------------------');
