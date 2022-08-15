import { useShortcut } from '../store/index.js';
import { ShowVisibleFilter } from './ShowVisibleFilter.js';
import { TodoList } from './TodoList.js';
import { AddTodo } from './AddTodo.js';

const { useMemo } = React;

export const TodoListApp = () => {
  useShortcut();

  const renderAddTodo = useMemo(() => <AddTodo />, []);
  const renderShowVisibleFilter = useMemo(() => <ShowVisibleFilter />, []);
  const renderTodoList = useMemo(() => <TodoList />, []);

  return (
    <div className="todoListApp">
      {renderAddTodo}
      {renderShowVisibleFilter}
      {renderTodoList}
    </div>
  );
};
