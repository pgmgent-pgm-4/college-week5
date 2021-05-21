import { ThemeContext, useThemeContext } from '../../contexts';
import './ThemedPanel.css';

const ThemedPanel = ({title = 'This is my header title', children}) => {
  const {isDarkMode} = useThemeContext();

  return (
    <div className={`panel ${isDarkMode ? 'panel--dark' : 'panel--light'}`}>
      <header>
        <h3>{title}</h3>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
};

export default ThemedPanel;