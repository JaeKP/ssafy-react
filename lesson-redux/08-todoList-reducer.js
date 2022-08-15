const { expect } = require('expect');
const immutable = require('deepfreeze');

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          doit: action.doit,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

/* -------------------------------------------------------------------------- */

const addTodoTest = () => {
  const todoListBefore = [];

  const action = {
    type: 'ADD_TODO',
    id: 0,
    doit: 'Redux 학습',
  };

  const todoListAfter = [
    {
      id: 0,
      doit: 'Redux 학습',
      completed: false,
    },
  ];

  immutable(todoListBefore);
  immutable(action);

  expect(todoListReducer(todoListBefore, action)).toEqual(todoListAfter);
};

addTodoTest();

console.log('addTodo 테스트 통과!');

/* -------------------------------------------------------------------------- */

const toggleTodoTest = () => {
  const todoListBefore = [
    {
      id: 0,
      doit: 'React 학습',
      completed: true,
    },
    {
      id: 1,
      doit: 'Redux 학습',
      completed: false,
    },
  ];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };

  const todoListAfter = [
    {
      id: 0,
      doit: 'React 학습',
      completed: true,
    },
    {
      id: 1,
      doit: 'Redux 학습',
      completed: true,
    },
  ];

  immutable(todoListBefore);
  immutable(action);

  expect(todoListReducer(todoListBefore, action)).toEqual(todoListAfter);
};

toggleTodoTest();

console.log('toggleTodo 테스트 통과!');
