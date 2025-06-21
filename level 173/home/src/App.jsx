import React, { useState, useRef } from 'react';

function ProjectWithVariable() {
  let count = 0;
  const [, forceRender] = useState(0); // რენდისთვის

  const increment = () => {
    count += 1;
    console.log("Incremented (variable):", count);
  };

  const logCount = () => {
    console.log("Count (variable) is:", count);
  };

  const render = () => {
    forceRender(n => n + 1);
  };

  return (
    <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
      <h3>ჩვეულებრივი ცვლადი (normal variable)</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={logCount}>Console Log</button>{' '}
      <button onClick={render}>Render</button>
    </div>
  );
}

function ProjectWithState() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const logCount = () => console.log("Count (useState) is:", count);
  const render = () => setCount(c => c); // აიძულებს რენდერს

  return (
    <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
      <h3>useState</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={logCount}>Console Log</button>{' '}
      <button onClick={render}>Render</button>
    </div>
  );
}

function ProjectWithRef() {
  const count = useRef(0);
  const [, setRender] = useState(false);

  const increment = () => {
    count.current += 1;
    console.log("Incremented (useRef):", count.current);
  };

  const logCount = () => {
    console.log("Count (useRef) is:", count.current);
  };

  const render = () => {
    setRender(r => !r); // აიძულებს რენდერს
  };

  return (
    <div style={{border: '1px solid #ccc', padding: '10px'}}>
      <h3>useRef</h3>
      <p>Count: {count.current}</p>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={logCount}>Console Log</button>{' '}
      <button onClick={render}>Render</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{maxWidth: 400, margin: '20px auto', fontFamily: 'Arial, sans-serif'}}>
      <h2>სამი პროექტი - count სხვადასხვა ტიპის ცვლადებით</h2>
      <ProjectWithVariable />
      <ProjectWithState />
      <ProjectWithRef />
    </div>
  );
}