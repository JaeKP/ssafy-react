/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useSelector, useDispatch } from 'react-redux';
import { filterTodoList, toggleTodo } from '@/store';

export const TodoList = () => {
  const { todos, filter } = useSelector(({ todoList, visibilityFilter }) => ({
    todos: todoList,
    filter: visibilityFilter,
  }));

  const dispatch = useDispatch();

  return (
    <ul className="todoList">
      {filterTodoList(todos, filter).map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          <button
            type="button"
            className="checkmarkButton"
            title={todo.completed ? '미완료 상태로 전환' : '완료 상태로 전환'}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-label={
                todo.completed ? '미완료 상태로 전환' : '완료 상태로 전환'
              }
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d={
                  todo.completed
                    ? 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z'
                    : 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
                }
              />
            </svg>
          </button>
          {todo.doit}
        </li>
      ))}
    </ul>
  );
};
