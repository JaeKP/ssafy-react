import { ADD_TODO, TOGGLE_TODO } from '../actions/types.js';

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        doit: action.doit,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) return state;
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};
