import {
  ToggleThemeBtn,
  IconLight,
  IconDark,
} from 'utils/Buttons/MainButton.styled';
import { useTheme } from '@emotion/react';
import { useThemeColors } from './ThemeContext';

export const ThemeToggler = () => {
  const changeTheme = useThemeColors().changeTheme;
  const theme = useTheme();
  const handlerChangeTheme = () => {
    changeTheme();
    console.log(theme);
  };
  console.log(theme);
  return (
    <>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {theme === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </>
  );
};
