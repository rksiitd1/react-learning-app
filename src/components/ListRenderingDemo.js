import React from 'react';

const ListRenderingDemo = () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <section>
      <h2>List Rendering Demo</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListRenderingDemo;