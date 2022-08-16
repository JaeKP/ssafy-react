import { v4 as uuid } from 'uuid';

const ADD_TODO = 'todo/add';
const TOGGLE_TODO = 'todo/toggle';

const addTodo = ({ id, doit }) => ({
  type: ADD_TODO,
  id: `${uuid()}_${id}`,
  doit,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          doit: action.doit,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

export { reducer, addTodo, toggleTodo };
