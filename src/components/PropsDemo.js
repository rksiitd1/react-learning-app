import React from 'react';

const PropsDemo = ({ title = "Default Title" }) => (
  <section>
    <h2>Props Demo</h2>
    <p>This component receives a prop: {title}</p>
  </section>
);

export default PropsDemo;
