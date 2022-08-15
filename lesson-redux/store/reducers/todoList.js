import { ADD_TODO, TOGGLE_TODO } from '../actions/types.js';
import { todoReducer } from './todo.js';

const initialTodoList = [
  { id: 'learn-react', doit: 'React 학습', completed: true },
  { id: 'learn-redux', doit: 'Redux 학습', completed: false },
];

export const todoListReducer = (state = initialTodoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todoReducer(undefined, action)];
    case TOGGLE_TODO:
      return state.map((todo) => todoReducer(todo, action));
    default:
      return state;
  }
};
