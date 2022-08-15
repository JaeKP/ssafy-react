import { useShortcut } from '../store/index.js';
import { ShowVisibleFilter } from './ShowVisibleFilter.js';
import { TodoList } from './TodoList.js';
import { AddTodo } from './AddTodo.js';
var _React = React,
    useMemo = _React.useMemo;
export var TodoListApp = function TodoListApp() {
  useShortcut();
  var renderAddTodo = useMemo(function () {
    return /*#__PURE__*/React.createElement(AddTodo, null);
  }, []);
  var renderShowVisibleFilter = useMemo(function () {
    return /*#__PURE__*/React.createElement(ShowVisibleFilter, null);
  }, []);
  var renderTodoList = useMemo(function () {
    return /*#__PURE__*/React.createElement(TodoList, null);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "todoListApp"
  }, renderAddTodo, renderShowVisibleFilter, renderTodoList);
};