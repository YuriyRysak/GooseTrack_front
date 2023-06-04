import styled from '@emotion/styled';

export const ListDay = styled.ul`
  list-style: none;
  width: 100%;
  border-radius: 8px;
  background-color: '#';
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const ItemDay = styled.li``;

export const DayBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.loaderWrapper};
  &:nth-of-type(n + 6) {
    color: ${({ theme }) => theme.colors.accent};
  }
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.1;
  padding: 16px 0px;
`;
