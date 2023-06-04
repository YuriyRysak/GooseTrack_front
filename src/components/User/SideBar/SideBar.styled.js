import styled from '@emotion/styled';

export const SideBarWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 1px solid blue;
  height: 100vh;
  padding: 24px 20px;

  @media screen and (min-width: 375px) {
    width: 225px;
  }
  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
  }
`;

export const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.accent};

  margin: 0;
  font-family: 'Coolvetica';
  font-size: 16px;
  line-height: 1.375;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 122px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 156px;
  }

  @media screen and (min-width: 1440px) {
    width: 201px;
  }
`;

export const SideBarImg = styled.picture`
  width: 36px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;

export const LogoutButton = styled.button`
  height: 46px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  border-radius: 16px;
  border-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 131px;
  position: absolute;
  bottom: 24px;

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 56px;
    margin-top: 48px;
    font-size: 18px;
    line-height: 1.33;
    width: 141px;
  }
`;
