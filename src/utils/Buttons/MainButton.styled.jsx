import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from 'styles/mediaVeriables';
import { themes } from 'styles/themes';
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
  font-weight: ${themes.fontWeight.sb};
  font-size: ${props =>
    props.colorbtn === 'white'
      ? `${themes.fontSizes.s}`
      : `${themes.fontSizes.xs}`};
  line-height: ${props => (props.colorbtn === 'white' ? 1.3 : 1.2)};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: ${props => props.colorbtn && `none`};
  text-shadow: ${themes.shadows.authHeading};
  color: ${props =>
    props.color === 'blue'
      ? `${themes.colors.accent}`
      : `${themes.colors.white}`};
  color: ${props => props.colorbtn === 'blue' && `${themes.colors.white}`};
  background-color: ${props =>
    props.colorbtn === 'white' && `${themes.colors.white}`};
  background-color: ${props =>
    props.colorbtn === 'blue' && `${themes.colors.accent}`};
  &:hover {
    color: ${props =>
      props.color === 'blue'
        ? `${themes.colors.white}`
        : `${themes.colors.hovered}`};

    background-color: ${props =>
      props.color === 'blue'
        ? `${themes.colors.accent}`
        : `${themes.colors.white}`};
    background-color: ${props =>
      props.colorbtn === 'blue' && `${themes.colors.hovered}`};
  }
  @media ${device.tabletOnly} {
    font-size: ${props =>
      props.colorbtn === 'white'
        ? `${themes.fontSizes.s}`
        : `${themes.fontSizes.l}`};
    line-height: 1.3;
    padding: 14px 22px;
  }
`;

export const MainBtn = styled.button`
  border-radius: 16px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.3;
  padding: ${props => (props.padding === '50' ? '14px 50px' : '14px 28px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};
  box-shadow: ${themes.shadows.authButton};
  transition: background-color
    ${(themes.animations.duration, themes.animations.cubicBezier)};
  border: none;
  &:hover {
    background-color: ${themes.colors.hovered};
  }
  @media ${device.tabletOnly} {
    font-size: ${props =>
      props.padding === '50'
        ? `${themes.fontSizes.s}`
        : `${themes.fontSizes.l}`};
    padding: ${props => (props.padding === '50' ? '15px 84px' : '16px 23px')};
  }
`;

export const WrapperSecondBtn = styled.div`
  display: flex;
  gap: 8px;
`;

export const SecondBtn = styled.button`
  border-radius: ${props => (props.radius === '10' ? '10px' : '8px')};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.3;
  padding: ${props => (props.btn === 'edit' ? `13px 0px` : `8px 20px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props =>
    props.btn === 'cancel'
      ? `${themes.colors.black}`
      : `${themes.colors.white}`};

  background-color: ${props =>
    props.btn === 'cancel'
      ? `${themes.colors.canceled}`
      : `${themes.colors.accent}`};
  transition: background-color
    ${(themes.animations.duration, themes.animations.cubicBezier)};
  border: none;
  &:hover {
    background-color: ${themes.colors.hovered};
  }
  @media ${device.tabletOnly} {
    font-size: ${themes.fontSizes.s};
    padding: ${props => (props.btn === 'edit' ? `15px 0px` : `12px 32px`)};
    border-radius: ${props => props.radius === '10' && '14px'};
  }
`;

export const AddTaskBtn = styled.button`
  border-radius: 10px;
  border: 1px dashed ${themes.colors.borderBtnAddTask};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${themes.colors.black};
  background-color: ${themes.colors.backColorBtnAddTask};
  transition: background-color
    ${(themes.animations.duration, themes.animations.cubicBezier)};
  &:hover {
    background-color: ${themes.colors.hovered};
  }
  @media ${device.tabletOnly} {
    padding: 14px 0px;
  }
`;

export const MonthDayBtn = styled.button`
  border: none;
  width: 76px;
  padding: 8px 0px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.2;
  border-top-left-radius: ${props => (props.swith === 'day' ? 'none' : `8px`)};
  border-bottom-left-radius: ${props =>
    props.swith === 'day' ? 'none' : `8px`};
  border-top-right-radius: ${props => (props.swith === 'day' ? '8px' : `none`)};
  border-bottom-right-radius: ${props =>
    props.swith === 'day' ? '8px' : `none`};
  border-right: ${props =>
    props.swith === 'day' ? 'none' : `1px solid ${themes.colors.accentText}`};
  background-color: ${themes.colors.ligthBlue};
  color: ${themes.colors.accent};
  &:active {
    background-color: ${themes.colors.darkBlue};
  }
  @media ${device.tabletOnly} {
    font-size: ${themes.fontSizes.m};
    width: 82px;
  }
`;

export const ToggleThemeBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const IconLight = styled(IconLightTheme)`
  fill: ${themes.colors.accent};
  width: 24px;
  height: 24px;
`;
export const IconDark = styled(IconDarkTheme)`
  fill: ${themes.colors.accent};
  width: 24px;
  height: 24px;
`;
