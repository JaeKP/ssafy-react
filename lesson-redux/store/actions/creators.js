import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './types.js';

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const addTodo = ({ id, doit }) => ({
  type: ADD_TODO,
  id,
  doit,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
