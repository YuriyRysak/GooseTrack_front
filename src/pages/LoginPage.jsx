import { LoginForm } from 'components/Auth';
import { LoginPageContainer } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <h3>LoginPage</h3>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
