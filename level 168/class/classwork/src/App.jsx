import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleClick = () => {
    const result = text * Number(text2);
    setText3(result);
  };

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter number 1"/>
      <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Enter number 2"/>
      <button onClick={handleClick}>submit</button>
      <p>{text3}</p>
    </>
  );
}

export default App;