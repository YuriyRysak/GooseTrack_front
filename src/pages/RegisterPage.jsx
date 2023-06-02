import { RegisterForm } from 'components/Auth';
import { RegisterPageContainer } from './RegisterPage.styled';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
<img
  // src={}
  // srcset=""
  alt="Goose"
/>
      <RegisterForm />
      <NavLink to={ '/login'} >Log In</NavLink>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
