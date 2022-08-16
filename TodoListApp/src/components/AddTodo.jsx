import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const idRef = useRef(0);

  const handleAddTodo = () => {
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
