import { useMemo } from 'react';
import { useShortcut } from '@/hooks/useShortcut';
import { ShowVisibleFilter } from './ShowVisibleFilter';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

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
