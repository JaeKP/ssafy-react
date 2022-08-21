import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const TodoList = lazy(() => import('pages/TodoList'));

function App() {
  return (
    <Suspense fallback={<div role="alert">페이지 로딩 중...</div>}>
      <Routes>
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/todo-list" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
