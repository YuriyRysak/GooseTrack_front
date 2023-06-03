import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import { themes } from 'styles/themes';
export const RegisterPageContainer = styled.div`
  background-color: ${themes.colors.backgroundAuth};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterPageWrap = styled.div`
text-align: center;

`;
export const StyledNavLink = styled(Link)`
  display: block;
  margin-top: ${themes.fontSizes.l};
  color:${themes.colors.accent};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.17;
  text-decoration-line: underline;
  cursor: pointer;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: ${themes.fontSizes.xxl};
  }

  :hover {
    color: #2c66bc;
  }
`;

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 400px;
    height: 416px;
    position: absolute;
    left: 49px;
    bottom: 0;
  }
`;


