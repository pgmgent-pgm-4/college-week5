import { ThemeContext, useThemeContext } from "../../contexts";

const ThemeToggle = () => {
  const {isDarkMode, handleThemeChange} = useThemeContext();

  return (
    <button onClick={() => handleThemeChange(!isDarkMode)}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
  )
};

export default ThemeToggle;