import {
  ToggleThemeBtn,
  IconLight,
  IconDark,
} from 'utils/Buttons/MainButton.styled';
import { useThemeColors } from './ThemeContext';

export const ThemeToggler = () => {
  const changeTheme = useThemeColors().changeTheme;

  const handlerChangeTheme = () => {
    changeTheme();
  };
  const type = useThemeColors().type;
  return (
    <>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {type === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </>
  );
};
