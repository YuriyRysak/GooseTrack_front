import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  /* Add after mixin onTablet */
  /* @include onTablet {
    padding-inline: 32px;
  } */

  /* Add after mixin onDesktop */
  /* @include onDesktop {
    max-width: 1440px;
    padding-inline: 128px;
  } */
`;
