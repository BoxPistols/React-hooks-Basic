import * as React from 'react';
import { useState } from 'react';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(100);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>CountUp</button>
    </div>
  );
}
