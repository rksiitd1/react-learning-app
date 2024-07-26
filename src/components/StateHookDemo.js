import React, { useState } from 'react';

const StateHookDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>useState Hook Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
};

export default StateHookDemo;