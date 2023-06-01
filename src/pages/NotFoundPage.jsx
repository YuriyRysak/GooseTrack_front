import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import animation from 'images/others/404-page-animation.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  height: 100vh;
  width: 100%;
  max-width: 1400px;
`;

const Img = styled.img`
  display: block;
  width: 50%;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding: 0 20px;

  font-family: Inter;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  text-align: center;
`;

const Btn = styled(Link)`
  padding: 16px 23px;

  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  text-decoration: none;

  background-color: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2b78ef;
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Img src={animation} alt="" />
      <Title>Oops! Page not found</Title>
      <Btn to="/">Go back to homepage</Btn>
    </Wrapper>
  );
};

export default NotFoundPage;
