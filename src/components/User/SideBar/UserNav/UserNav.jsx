import { CgUser, CgCalendar } from 'react-icons/cg';
import { UserNavWrap, UserNavTitle, UserNavItem } from './UserNav.styled';

export const UserNav = () => {
  return (
    <UserNavWrap>
      <UserNavTitle>User Panel </UserNavTitle>
  
      <UserNavItem to="/calendar/account"><CgUser style={{ marginRight: 8, width: 20, height: 20 }} /> My account</UserNavItem>
      <UserNavItem to="/calendar"><CgCalendar style={{ marginRight: 8, width: 20, height: 20 }} /> Calendar</UserNavItem>
    
    </UserNavWrap>
  );
};
