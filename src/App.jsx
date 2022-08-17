import { useState } from 'react';
import { BaseLayout } from 'layouts';
import { Route, Routes } from 'react-router-dom';

/* pages -------------------------------------------------------------------- */

import Landing from 'pages/Landing/Landing';
import Dashboard from 'pages/Dashboard/Dashboard';
import Products from 'pages/Products/Products';

/* app ---------------------------------------------------------------------- */

export default function App() {
  const [navigation] = useState([
    { id: 'home', href: '/', text: '홈' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
    {
      id: 'products',
      href: '/products',
      text: '프로덕트',
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

  return (
    <BaseLayout navigation={navigation}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BaseLayout>
  );
}
