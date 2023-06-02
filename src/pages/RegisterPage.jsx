import { RegisterForm } from 'components/Auth';
import { RegisterPageContainer } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <h3>RegisterPage</h3>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
