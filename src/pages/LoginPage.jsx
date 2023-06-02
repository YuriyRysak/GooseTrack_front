import { LoginForm } from 'components/Auth';
import { LoginPageContainer } from './LoginPage.styled';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <img
        // src={}
        // srcset=""
        alt="Goose"
      />
      <LoginForm />
      <NavLink to={'/register'}>Sign Up</NavLink>
    </LoginPageContainer>
  );
};

export default LoginPage;
