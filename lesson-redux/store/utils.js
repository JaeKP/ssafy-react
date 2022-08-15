import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from './actions/types.js';

export function filterTodoList(todoList, filter) {
  switch (filter) {
    default:
    case SHOW_ALL:
      return todoList;
    case SHOW_COMPLETED:
      return todoList.filter((todo) => todo.completed);
    case SHOW_ACTIVED:
      return todoList.filter((todo) => !todo.completed);
  }
}
