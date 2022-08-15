import { todoListReducer } from './reducers/todoList.js';
import { visibilityFilter } from './reducers/visibilityFilter.js';

const { createStore, combineReducers } = Redux;

const todoListAppReducer = combineReducers({
  todoList: todoListReducer,
  visibilityFilter,
});

export const store = createStore(todoListAppReducer);
