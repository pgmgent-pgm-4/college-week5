import { ThemeContext, useThemeContext } from '../../contexts';
import './ThemedButton.css';

const ThemedButton = () => {
  const {isDarkMode} = useThemeContext();

  return (
    <button className={`btn ${isDarkMode ? 'btn--dark' : 'btn--light'}`}>STYLED BUTTON</button>
  )
};

export default ThemedButton;