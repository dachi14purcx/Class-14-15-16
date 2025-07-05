import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Userpanel = ({ count }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        'p-6 rounded-xl shadow-md max-w-md w-full ' +
        (theme ? 'bg-slate-800 text-white' : 'bg-white text-black')
      }
    >
      <h2 className="mb-2">Username: {localStorage.getItem('name')}</h2>
      <h2 className="mb-2">Password: {localStorage.getItem('password')}</h2>
      <h2 className="mb-2">Score: {count}</h2>
      <h2>Last Seen: {localStorage.getItem('time') || 'First Time Here'}</h2>
    </div>
  );
};

export default Userpanel;
