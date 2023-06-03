import {
  ToggleThemeBtn,
  IconLight,
  IconDark,
} from 'utils/Buttons/MainButton.styled';
import { useTheme } from '@emotion/react';
import { useThemeColors } from './ThemeContext';

export const ThemeToggler = () => {
  
  const changeTheme = useThemeColors().changeTheme;
  // const theme = useTheme();
  const theme = useThemeColors().theme;
  const handlerChangeTheme = () => {
    changeTheme();
    console.log(type);
  };
  const type = useThemeColors().type;
  console.log('Потрібний лог:');
  console.log(theme);
  return (
    <>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {type === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </>
  );
};
