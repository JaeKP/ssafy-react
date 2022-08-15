const { StrictMode, useEffect, useRef, useMemo } = React;
const { createRoot } = ReactDOM;
const { createStore, combineReducers } = Redux;

/* Reducers ----------------------------------------------------------------- */

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        doit: action.doit,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

const initialTodoList = [
  { id: 'learn-react', doit: 'React 학습', completed: true },
  { id: 'learn-redux', doit: 'Redux 학습', completed: false },
];

const todoListReducer = (state = initialTodoList, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todoReducer(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map((todo) => todoReducer(todo, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

/* Root Reducer ------------------------------------------------------------- */

const todoListAppReducer = combineReducers({
  todoList: todoListReducer,
  visibilityFilter,
});

/* Store -------------------------------------------------------------------- */

const store = createStore(todoListAppReducer);

/* TodoListApp Components --------------------------------------------------- */

const TodoListApp = ({ todos, visibilityFilter }) => {
  useEffect(() => {
    const changeVisibleFilter = (filter) => {
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter,
      });
    };

    const handleShortcut = (e) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case '1':
            changeVisibleFilter('SHOW_ALL');
            break;
          case '2':
            changeVisibleFilter('SHOW_ACTIVED');
            break;
          case '3':
            changeVisibleFilter('SHOW_COMPLETED');
        }
      }
    };

    document.addEventListener('keyup', handleShortcut);

    return () => document.removeEventListener('keyup', handleShortcut);
  }, []);

  const renderAddTodo = useMemo(() => <AddTodo />, []);
  const renderShowVisibleFilter = useMemo(
    () => <ShowVisibleFilter filter={visibilityFilter} />,
    [visibilityFilter]
  );
  const renderTodoList = useMemo(
    () => <TodoList todos={todos} filter={visibilityFilter} />,
    [todos, visibilityFilter]
  );
  return (
    <div className="todoListApp">
      {renderAddTodo}
      {renderShowVisibleFilter}
      {renderTodoList}
    </div>
  );
};

const AddTodo = () => {
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
    store.dispatch({
      type: 'ADD_TODO',
      doit: value,
      id: idRef.current++,
    });
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

const ShowVisibleFilter = ({ filter }) => {
  return (
    <span className="showVisibleFilter">
      <FilterLink href="#all" filter="SHOW_ALL" currentFilter={filter}>
        모두
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#actived" filter="SHOW_ACTIVED" currentFilter={filter}>
        활성 상태만
      </FilterLink>{' '}
      /{' '}
      <FilterLink
        href="#completed"
        filter="SHOW_COMPLETED"
        currentFilter={filter}
      >
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

const FilterLink = ({ filter, currentFilter, children, ...restProps }) => {
  return currentFilter === filter ? (
    <span className="filterActived">{children}</span>
  ) : (
    <a
      onClick={() => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
      }}
      {...restProps}
    >
      {children}
    </a>
  );
};

const TodoList = ({ todos, filter }) => {
  return (
    <ul className="todoList">
      {filterTodoList(todos, filter).map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
          onClick={() => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id: todo.id,
            });
          }}
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

function filterTodoList(todoList, filter) {
  switch (filter) {
    default:
    case 'SHOW_ALL':
      return todoList;
    case 'SHOW_COMPLETED':
      return todoList.filter((todo) => todo.completed);
    case 'SHOW_ACTIVED':
      return todoList.filter((todo) => !todo.completed);
  }
}

/* Render React App --------------------------------------------------------- */

const reactDomRoot = createRoot(document.getElementById('root'));

function render() {
  const { todoList, visibilityFilter } = store.getState();
  reactDomRoot.render(
    <StrictMode>
      <TodoListApp todos={todoList} visibilityFilter={visibilityFilter} />
    </StrictMode>
  );
}

render();

/* Redux Store Subscription ------------------------------------------------- */

store.subscribe(render);
