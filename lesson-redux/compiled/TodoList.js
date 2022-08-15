import { filterTodoList, toggleTodo } from '../store/index.js';
var _ReactRedux = ReactRedux,
    useSelector = _ReactRedux.useSelector,
    useDispatch = _ReactRedux.useDispatch;
export var TodoList = function TodoList() {
  var _useSelector = useSelector(function (_ref) {
    var todoList = _ref.todoList,
        visibilityFilter = _ref.visibilityFilter;
    return {
      todos: todoList,
      filter: visibilityFilter
    };
  }),
      todos = _useSelector.todos,
      filter = _useSelector.filter;

  var dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("ul", {
    className: "todoList"
  }, filterTodoList(todos, filter).map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id,
      style: {
        textDecoration: todo.completed ? 'line-through' : null
      },
      onClick: function onClick() {
        return dispatch(toggleTodo(todo.id));
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "checkmarkButton",
      title: todo.completed ? '미완료 상태로 전환' : '완료 상태로 전환'
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      "aria-label": todo.completed ? '미완료 상태로 전환' : '완료 상태로 전환'
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: todo.completed ? 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z' : 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
    }))), todo.doit);
  }));
};