// src/App.js
import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import NavBar from './components/NavBar';
import FunctionalComponentDemo from './components/FunctionalComponentDemo';
import ClassComponentDemo from './components/ClassComponentDemo';
import PropsDemo from './components/PropsDemo';
import StateHookDemo from './components/StateHookDemo';
import EffectHookDemo from './components/EffectHookDemo';
import ContextDemo from './components/ContextDemo';
import ConditionalRenderingDemo from './components/ConditionalRenderingDemo';
import ListRenderingDemo from './components/ListRenderingDemo';
import FormHandlingDemo from './components/FormHandlingDemo';
import CompositionDemo from './components/CompositionDemo';
import ErrorBoundaryDemo from './components/ErrorBoundaryDemo';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <NavBar />
        <main>
          <FunctionalComponentDemo />
          <ClassComponentDemo />
          <PropsDemo />
          <StateHookDemo />
          <EffectHookDemo />
          <ContextDemo />
          <ConditionalRenderingDemo />
          <ListRenderingDemo />
          <FormHandlingDemo />
          <CompositionDemo />
          <ErrorBoundaryDemo />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;