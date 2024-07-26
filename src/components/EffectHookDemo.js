import React, { useState, useEffect } from 'react';

const EffectHookDemo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => setData("Data loaded"), 1000);
  }, []);

  return (
    <section>
      <h2>useEffect Hook Demo</h2>
      <p>{data ? data : "Loading..."}</p>
    </section>
  );
};

export default EffectHookDemo;