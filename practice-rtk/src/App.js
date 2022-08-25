import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import store from 'store';

const TodoList = lazy(() => import('pages/TodoList'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div role="alert">페이지 로딩 중...</div>}>
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="*" element={<Navigate to="/todo-list" />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
