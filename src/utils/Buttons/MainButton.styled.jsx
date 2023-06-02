import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { themes } from 'styles/themes';
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
  &.active {
    color: ${props =>
      props.color === 'blue'
        ? `${themes.colors.accent}`
        : `${themes.colors.white}`};
    color: ${props => props.colorbtn === 'blue' && `${themes.colors.white}`};
    background-color: ${props =>
      props.colorbtn === 'white' && `${themes.colors.white}`};
    background-color: ${props =>
      props.colorbtn === 'blue' && `${themes.colors.accent}`};
  }
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
`;

export const MainBtn = styled.button`
  border-radius: 16px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.s};
  line-height: 1.2;
  padding: ${props => (props.padding === '50' ? '14px 50px' : '14px 28px')};
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};
  box-shadow: ${themes.shadows.authButton};
  transition: background-color
    ${(themes.animations.duration, themes.animations.cubicBezier)};
  &:hover {
    background-color: ${themes.colors.hovered};
  }
`;

export const WrapperSecondBtn = styled.div`
  display: flex;
  gap: 8px;
`;

export const SecondBtn = styled.button`
  border-radius: 10px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.3;
  padding: ${props => (props.btn === 'edit' ? `13px 0px` : `8px 20px`)};
  display: flex;
  justify-content: center;
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
  &:hover {
    background-color: ${themes.colors.hovered};
  }
`;

export const AddTaskBtn = styled.button`
  border-radius: 10px;
  border: 1px dashed ${themes.colors.bordColorBtnAddTask};
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.3;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  color: ${themes.colors.black};

  background-color: ${themes.colors.ligthBlue};
  transition: background-color
    ${(themes.animations.duration, themes.animations.cubicBezier)};
  &:hover {
    background-color: ${themes.colors.hovered};
  }
`;

export const MonthDayBtn = styled.button`
  width: 76px;
  padding: 8px 0px;
  font-weight: ${themes.fontWeight.sb};
  font-size: ${themes.fontSizes.xs};
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
`;
