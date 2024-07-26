import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default NavBar;