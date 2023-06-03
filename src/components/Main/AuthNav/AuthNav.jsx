import { CgLogIn } from 'react-icons/cg';
import { AuthLink } from 'utils/Buttons/MainButton.styled';
import { Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <AuthLink to={'/login'}>Sign up</AuthLink>
      <AuthLink to={'/register'} color="blue" colorbtn="white">
        Log in
        <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
      </AuthLink>
    </Wrapper>
  );
};
