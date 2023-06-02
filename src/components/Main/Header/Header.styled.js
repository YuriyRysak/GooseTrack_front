import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};

  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: 44px;
  line-height: 1.09;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;
export const StyledImg = styled.picture`
  width: 142px;

  @media screen and (min-width: 375px) {
    width: 150px;
  }
`;
