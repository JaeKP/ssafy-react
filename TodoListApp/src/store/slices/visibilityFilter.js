export const SHOW_ALL = 'filter/all';
export const SHOW_ACTIVED = 'filter/actived';
export const SHOW_COMPLETED = 'filter/completed';
export const SET_VISIBILITY_FILTER = 'filter/setting';

export const reducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const filterTodoList = (todoList, filter) => {
  switch (filter) {
    default:
    case SHOW_ALL:
      return todoList;
    case SHOW_COMPLETED:
      return todoList.filter((todo) => todo.completed);
    case SHOW_ACTIVED:
      return todoList.filter((todo) => !todo.completed);
  }
};
