import { ADD_TODO, TOGGLE_TODO } from '../actions/types.js';
import { todoReducer } from './todo.js';

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todoReducer(undefined, action)];
    case TOGGLE_TODO:
      return state.map((todo) => todoReducer(todo, action));
    default:
      return state;
  }
};
