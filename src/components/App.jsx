import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from '../components/User/MainLayout';

const MainPage = lazy(() => import('../Pages/MainPage'));
const AccountPage = lazy(() => import('../Pages/AccountPage'));
const CalendarPage = lazy(() => import('../Pages/CalendarPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const NotFoundPagePage = lazy(() => import('../Pages/NotFoundPagePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
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
