import { TodoListApp } from 'components';
import { css } from '@emotion/css';

const todoListPageStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
`;

function TodoList() {
  return (
    <div className={todoListPageStyle}>
      <TodoListApp />
    </div>
  );
}

export default TodoList;
