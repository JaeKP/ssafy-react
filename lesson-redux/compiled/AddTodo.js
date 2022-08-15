import { addTodo } from '../store/index.js';
var _React = React,
    useRef = _React.useRef;
var _ReactRedux = ReactRedux,
    useDispatch = _ReactRedux.useDispatch;
export var AddTodo = function AddTodo() {
  var dispatch = useDispatch();
  var inputRef = useRef(null);
  var idRef = useRef(0);

  var handleAddTodo = function handleAddTodo(e) {
    var inputNode = inputRef.current;
    var value = inputNode.value.trim();

    if (value.length === 0) {
      alert('새로운 Todo 값이 비었습니다.');
      inputNode.focus();
      inputNode.value = '';
      return;
    }

    dispatch(addTodo({
      doit: value,
      id: idRef.current++
    }));
    inputNode.value = '';
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "addTodoControl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "formControl"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "newTodo"
  }, "\uC0C8\uB85C\uC6B4 Todo"), /*#__PURE__*/React.createElement("input", {
    id: "newTodo",
    type: "text",
    ref: inputRef,
    onKeyPress: function onKeyPress(e) {
      return /enter/i.test(e.key) && handleAddTodo();
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button",
    onClick: handleAddTodo
  }, "Todo \uCD94\uAC00"));
};