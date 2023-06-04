import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TestPage from 'pages/TestPage';

const MainLayout = lazy(() => import('components/User/MainLayout'));
const Layout = lazy(() => import('utils/Layout'));

const MainPage = lazy(() => import('pages/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPagePage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="calendar" element={<MainLayout />}>
            <Route path="account" element={<AccountPage />} />
            <Route index element={<CalendarPage />} />
          </Route>
          <Route path="*" element={<NotFoundPagePage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </Suspense>
  );
};
