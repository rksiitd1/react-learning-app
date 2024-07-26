import React, { useState } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);
  if (counter === 5) {
    throw new Error('I crashed!');
  }
  return <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>;
};

const ErrorBoundaryDemo = () => {
  return (
    <section>
      <h2>Error Boundary Demo</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </section>
  );
};

export default ErrorBoundaryDemo;