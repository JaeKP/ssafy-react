import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

export const addTodo = ({ id, doit }) => ({
  type: ADD_TODO,
  id: id,
  doit: doit,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
