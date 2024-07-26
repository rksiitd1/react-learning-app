import React from 'react';

const CompositionDemo = () => {
  const Box = ({ children }) => (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );

  return (
    <section>
      <h2>Composition Demo</h2>
      <Box>
        <h3>This is inside a box</h3>
        <p>Composition allows flexible and reusable component structures.</p>
      </Box>
    </section>
  );
};

export default CompositionDemo;