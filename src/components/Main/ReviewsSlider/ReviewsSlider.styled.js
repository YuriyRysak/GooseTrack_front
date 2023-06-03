import styled from '@emotion/styled';

import { ReactComponent as Left } from 'images/svg/slider-left.svg';
import { ReactComponent as Right } from 'images/svg/slider-right.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReviewsTitle = styled.h3`
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const ReviewsItem = styled.li`
  box-sizing: border-box;
  padding: 24px;
  max-width: 335px;
  height: 194px;

  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;

  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 32px 32px 50px;
    max-width: 580px;
    height: 187px;
  }
`;

export const AuthorTop = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 18px;
  }
`;

export const AuthorTopRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorPhoto = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const AuthorTitle = styled.h4`
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.black};
`;

export const AuthorRating = styled.div`
  display: flex;
  gap: 10px;
`;

export const AuthorReview = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-left: 68px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const SliderLeft = styled(Left)`
  width: 50px;
  height: 50px;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0, 0.11, 0.35, 2);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 61px;
    height: 61px;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const SliderRight = styled(Right)`
  width: 50px;
  height: 50px;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0, 0.11, 0.35, 2);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 61px;
    height: 61px;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
