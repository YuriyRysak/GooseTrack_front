import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    gap: 10px;
  }
`;
