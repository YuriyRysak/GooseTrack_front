
import { Outlet } from 'react-router-dom';
import { SideBar } from 'components/User/SideBar';
// import { Header } from 'components/User/Header';
import { MainLayoutWrap } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <MainLayoutWrap>
      <SideBar />
      <Outlet />
    </MainLayoutWrap>
  );
};
