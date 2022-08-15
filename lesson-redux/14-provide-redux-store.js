import {
  store,
  StoreContext,
  useSelector,
  useDispatch,
  useShortcut,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  filterTodoList,
  SHOW_ALL,
  SHOW_ACTIVED,
  SHOW_COMPLETED,
} from './store/index.js';

const { StrictMode, useRef, useMemo } = React;
const { createRoot } = ReactDOM;

/* TodoListApp Components --------------------------------------------------- */

const TodoListApp = () => {
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

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const idRef = useRef(0);

  const handleAddTodo = (e) => {
    const { current: inputNode } = inputRef;
    let value = inputNode.value.trim();
    if (value.length === 0) {
      alert('새로운 Todo 값이 비었습니다.');
      inputNode.focus();
      inputNode.value = '';
      return;
    }

    dispatch(
      addTodo({
        doit: value,
        id: idRef.current++,
      })
    );
    inputNode.value = '';
  };

  return (
    <div className="addTodoControl">
      <div className="formControl">
        <label htmlFor="newTodo">새로운 Todo</label>
        <input
          id="newTodo"
          type="text"
          ref={inputRef}
          onKeyPress={(e) => /enter/i.test(e.key) && handleAddTodo()}
        />
      </div>
      <button type="button" className="button" onClick={handleAddTodo}>
        Todo 추가
      </button>
    </div>
  );
};

const ShowVisibleFilter = () => {
  return (
    <span className="showVisibleFilter">
      <FilterLink href="#all" filter={SHOW_ALL}>
        모두
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#actived" filter={SHOW_ACTIVED}>
        활성 상태만
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#completed" filter={SHOW_COMPLETED}>
        완료된 상태만
      </FilterLink>{' '}
      보기
      <br />
      <span className="shortcut">
        단축키: <code>ctrl + 1, 2, 3</code>
      </span>
    </span>
  );
};

const FilterLink = ({ filter, children, ...restProps }) => {
  const currentFilter = useSelector(({ visibilityFilter }) => visibilityFilter);
  const dispatch = useDispatch();

  return currentFilter === filter ? (
    <span className="filterActived">{children}</span>
  ) : (
    <a onClick={() => dispatch(setVisibilityFilter(filter))} {...restProps}>
      {children}
    </a>
  );
};

const TodoList = () => {
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

/* Render React App --------------------------------------------------------- */

const reactDomRoot = createRoot(document.getElementById('root'));

function render() {
  reactDomRoot.render(
    <StrictMode>
      <StoreContext.Provider value={store.getState()}>
        <TodoListApp />
      </StoreContext.Provider>
    </StrictMode>
  );
}

render();

/* Redux Store Subscription ------------------------------------------------- */

store.subscribe(render);
