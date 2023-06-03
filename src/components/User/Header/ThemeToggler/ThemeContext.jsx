import { createContext, useState, useEffect, useContext } from 'react';
import { themes, dark } from 'styles/themes';

const ThemeContext = createContext();
export const useThemeColors = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [type, setType] = useState(
    () => window.localStorage.getItem('theme') ?? 'themes'
  );
  const [theme, setTheme] = useState(themes);
  console.log('ThemeContextProvider  theme:', theme);

  useEffect(() => {
    window.localStorage.theme = type;
    if (type === 'themes') {
      setTheme(themes);
    } else if (type === 'dark') {
      setTheme(dark);
    }
    console.log('useEffect  dark:', dark);
  }, [type]);

  const changeTheme = () => {
    if (type === 'themes') {
      setType('dark');
    } else if (type === 'dark') {
      setType('themes');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, type, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
