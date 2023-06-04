import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from 'styles/mediaVeriables';
import { ReactComponent as IconLightTheme } from 'images/svg/light-theme.svg';
import { ReactComponent as IconDarkTheme } from 'images/svg/dark-theme.svg';

// !після того як всі ростягнуть свої елементи ListLink треба видалить
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
  width: 320px;
  padding: 0px 20px;
`;

export const AuthLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${props =>
    props.colorbtn === 'white'
      ? ({ theme }) => theme.fontSizes.s
      : ({ theme }) => theme.fontSizes.xs};
  line-height: ${props => (props.colorbtn === 'white' ? 1.3 : 1.2)};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: ${props => props.colorbtn && `none`};
  text-shadow: ${({ theme }) => theme.shadows.authHeading};
  color: ${props =>
    props.color === 'blue'
      ? ({ theme }) => theme.colors.accent
      : ({ theme }) => theme.colors.white};
  background-color: ${props =>
    props.colorbtn === 'white'
      ? ({ theme }) => theme.colors.white
      : 'transparent'};
  &:hover {
    color: ${props =>
      props.color === 'blue'
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.hovered};

    background-color: ${props =>
      props.color === 'blue'
        ? ({ theme }) => theme.colors.accent
        : ({ theme }) => theme.colors.white};
    background-color: ${props =>
      props.colorbtn === 'blue' && `${({ theme }) => theme.colors.hovered}`};
  }
  @media ${device.tabletOnly} {
    font-size: ${props =>
      props.colorbtn === 'white'
        ? ({ theme }) => theme.fontSizes.s
        : ({ theme }) => theme.fontSizes.l};
    line-height: 1.3;
    padding: 14px 22px;
  }
`;

export const MainBtn = styled.button`
  border-radius: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: ${props => (props.padding === '50' ? '14px 50px' : '14px 28px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.authButton};
  transition: background-color
    ${(({ theme }) => theme.animations.duration,
    ({ theme }) => theme.animations.cubicBezier)};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tabletOnly} {
    font-size: ${props =>
      props.padding === '50'
        ? `${({ theme }) => theme.fontSizes.s}`
        : `${({ theme }) => theme.fontSizes.l}`};
    padding: ${props => (props.padding === '50' ? '15px 84px' : '16px 23px')};
  }
`;

export const WrapperSecondBtn = styled.div`
  display: flex;
  gap: 8px;
`;

export const SecondBtn = styled.button`
  border-radius: ${props => (props.radius === '10' ? '10px' : '8px')};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
  padding: ${props => (props.radius === '10' ? `8px 20px` : `12px 0px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props =>
    props.btn === 'cancel'
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};

  background-color: ${props =>
    props.btn === 'cancel'
      ? ({ theme }) => theme.colors.canceled
      : ({ theme }) => theme.colors.accent};

  transition: background-color
    ${(({ theme }) => theme.animations.duration,
    ({ theme }) => theme.animations.cubicBezier)};

  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tabletOnly} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: ${props => (props.radius === '10' ? `12px 32px` : `15px 0px`)};
    border-radius: ${props => props.radius === '10' && '14px'};
  }
`;

export const CancelBtn = styled.button`
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props =>
    props.btn === 'cancel'
      ? ({ theme }) => theme.colors.textCancelBtn
      : ({ theme }) => theme.colors.textCancelBtnIntodo};

  background-color: ${props =>
    props.btn === 'cancel'
      ? ({ theme }) => theme.colors.canceled
      : ({ theme }) => theme.colors.canceledInTodo};

  transition: background-color ${({ theme }) => theme.animations.duration},
    ${({ theme }) => theme.animations.cubicBezier};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tabletOnly} {
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: 15px 0px;
  }
`;

export const AddTaskBtn = styled.button`
  border-radius: 10px;
  border: 1px dashed ${({ theme }) => theme.colors.borderBtnAddTask};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background-color: ${({ theme }) => theme.colors.backColorBtnAddTask};
  transition: background-color
    ${(({ theme }) => theme.animations.duration,
    ({ theme }) => theme.animations.cubicBezier)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  @media ${device.tabletOnly} {
    padding: 14px 0px;
  }
`;

export const MonthDayBtn = styled.button`
  border: none;
  width: 76px;
  padding: 8px 0px;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.2;
  border-top-left-radius: ${props => (props.swith === 'day' ? 'none' : `8px`)};
  border-bottom-left-radius: ${props =>
    props.swith === 'day' ? 'none' : `8px`};
  border-top-right-radius: ${props => (props.swith === 'day' ? '8px' : `none`)};
  border-bottom-right-radius: ${props =>
    props.swith === 'day' ? '8px' : `none`};
  border-right: ${props =>
    props.swith === 'day'
      ? 'none'
      : `1px solid ${({ theme }) => theme.colors.accentText}`};
  background-color: ${({ theme }) => theme.colors.ligthBlue};
  color: ${({ theme }) => theme.colors.accent};
  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
  @media ${device.tabletOnly} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    width: 82px;
  }
`;

export const ToggleThemeBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const IconLight = styled(IconLightTheme)`
  fill: ${({ theme }) => theme.colors.accent};
  width: 24px;
  height: 24px;
`;
export const IconDark = styled(IconDarkTheme)`
  fill: ${({ theme }) => theme.colors.accent};
  width: 24px;
  height: 24px;
`;
