import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation, Spinner } from 'components';

const TodoListPage = lazy(() => import('pages/TodoList'));
const BeverageListPage = lazy(() => import('pages/BeverageList'));
const BeverageDetailPage = lazy(() => import('pages/BeverageDetail'));
const SettingPage = lazy(() => import('pages/Setting'));

function App() {
  return (
    <>
      <Navigation
        navigationList={[
          { id: '/todo-list', text: 'Todo Link', to: '/todo-list' },
          { id: '/beverage-list', text: 'Beverage List', to: '/beverage-list' },
          { id: '/setting', text: 'Setting', to: '/setting' },
        ]}
      />
      <Suspense fallback={<Spinner>페이지 로딩 중...</Spinner>}>
        <Routes>
          <Route path="/todo-list" element={<TodoListPage />} />
          <Route path="/beverage-list" element={<BeverageListPage />} />
          <Route path="/beverage/:id" element={<BeverageDetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<Navigate to="/todo-list" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
