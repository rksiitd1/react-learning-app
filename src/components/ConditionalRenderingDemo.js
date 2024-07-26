import React, { useState } from 'react';

const ConditionalRenderingDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <section>
      <h2>Conditional Rendering Demo</h2>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </section>
  );
};

export default ConditionalRenderingDemo;