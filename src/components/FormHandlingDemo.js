import React, { useState } from 'react';

const FormHandlingDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${inputValue}`);
  };
  return (
    <section>
      <h2>Form Handling Demo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormHandlingDemo;