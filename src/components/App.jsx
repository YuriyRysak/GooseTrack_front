import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { MainLayout } from 'components/User';
import { Layout } from 'utils/Layout/Layout';

const MainPage = lazy(() => import('pages/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPagePage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="calendar" element={<MainLayout />}>
            <Route path="account" element={<AccountPage />} />
            <Route index element={<CalendarPage />} />
          </Route>
          <Route path="*" element={<NotFoundPagePage />} />
        </Route>
      </Routes>
    </>
  );
};
