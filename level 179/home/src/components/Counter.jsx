import React, { useEffect } from 'react';
import { useState } from 'react';

const Counter = ({ count, setCount }) => {
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700"
    >
      count is {count}
    </button>
  );
};

export default Counter;