import { LoginForm } from 'components/Auth';

import normalImage from '../images/others/desktop/rocket1x.png';
import retinaImage from '../images/others/desktop/rocket2x.png';
import superRetinaImage from '../images/others/desktop/rocket3x.png';
import { RegisterPageContainer, RegisterPageWrap, StyledNavLink } from './RegisterPage.styled';
import { Img } from './LoginPage.styled';



const LoginPage = () => {
  return (
    <RegisterPageContainer>
      <Img
        src={normalImage}
        srcset={`${normalImage} 1x, ${retinaImage} 2x, ${superRetinaImage} 3x`}
        alt="Goose in rocket"
      />
      <RegisterPageWrap>
      <LoginForm />
      <StyledNavLink to={'/register'}>Sign Up</StyledNavLink>
      </RegisterPageWrap>
    </RegisterPageContainer>
  );
};

export default LoginPage;
