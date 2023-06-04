import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserInfo, ThemeToggler, AddFeedbackModal } from '../Header';
import { HeaderWrap, BtnAddFeedback, HeaderTitle, MenuBtn, UserInfoTest } from './Header.styled';
import { ReactComponent as BurgerMenu } from '../../../images/svg/burger.svg';

export const Header = () => {
  let locationPath = useLocation().pathname;
  const [isAccPage, setisAccPage] = useState(false);
  
  useEffect(() => {
    if (locationPath.includes('account')) {
      setisAccPage(true);
    } else {setisAccPage(false);}
  }, [locationPath]);

  return (
    <HeaderWrap>
      <HeaderTitle>{isAccPage ? 'User Profile' : 'Calendar' }</HeaderTitle>
      <MenuBtn><BurgerMenu /></MenuBtn>
      {!isAccPage && <BtnAddFeedback type='button'>Feedback</BtnAddFeedback>}
      <ThemeToggler />
      {/* <AddFeedbackModal /> */}
      <UserInfoTest>User Info</UserInfoTest>
       {/* <UserInfo /> */}
    </HeaderWrap>
  );
};
