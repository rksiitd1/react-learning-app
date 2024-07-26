import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ContextDemo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h2>Context Demo</h2>
      <p>Current theme: {theme}</p>
    </section>
  );
};

export default ContextDemo;