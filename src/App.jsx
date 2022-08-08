import { lazy } from '@loadable/component';
import { useState, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner, WireframeBox, ProtectedRoute } from 'components';
import { useAuth } from 'contexts';
import { BaseLayout } from 'layouts';

/* pages -------------------------------------------------------------------- */

const Landing = lazy(() => import('pages/Landing/Landing'));
const Products = lazy(() => import('pages/Products/Products'));
const ProductDetail = lazy(() => import('pages/Products/ProductDetail'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('pages/Dashboard/Profile'));
const SettingList = lazy(() => import('pages/Dashboard/SettingList'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

/* app ---------------------------------------------------------------------- */

export default function App() {
  const [navigation] = useState([
    { id: 'home', href: '/', text: '홈' },
    { id: 'products', href: '/products', text: '프로덕트' },
    {
      id: 'dashboard',
      href: '/dashboard',
      text: '대시보드',
      children: [
        {
          id: 'profile',
          href: 'profile',
          text: '프로필',
        },
        {
          id: 'settings',
          href: 'settings',
          text: '설정',
        },
      ],
    },
  ]);

  const { currentUser, permission } = useAuth();

  return (
    <Router>
      <HelmetProvider>
        <BaseLayout navigation={navigation}>
          <Suspense
            fallback={
              <Spinner
                stroke="rgba(38, 227, 192, 0.65)"
                messages={{
                  begin: '페이지 이동 중입니다.',
                  finish: '페이지 이동이 완료되었습니다.',
                }}
              />
            }
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute
                    isAllowed={currentUser && permission === 'admin'}
                  >
                    <Dashboard
                      nestedNavigation={
                        navigation.find(({ id }) => id === 'dashboard')
                          .children ?? []
                      }
                    />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <WireframeBox>프로필 또는 설정을 선택합니다.</WireframeBox>
                  }
                />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<SettingList />} />
              </Route>
              <Route path="/products" element={<Products />} />
              <Route path="/product/:uid" element={<ProductDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BaseLayout>
      </HelmetProvider>
    </Router>
  );
}
