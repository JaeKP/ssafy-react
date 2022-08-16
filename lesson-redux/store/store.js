import { todoListReducer } from './reducers/todoList.js';
import { visibilityFilter } from './reducers/visibilityFilter.js';

const { createStore, combineReducers } = Redux;

const todoListAppReducer = combineReducers({
  todoList: todoListReducer,
  visibilityFilter,
});

const preloadedState = {
  todoList: [
    { id: 'learn-react', doit: 'React 학습', completed: true },
    { id: 'learn-redux', doit: 'Redux 학습', completed: false },
  ],
};

export const store = createStore(todoListAppReducer, preloadedState);
