import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Singnin = (props) => {
  const theme = useContext(ThemeContext)

  const handleSubmit = (formData) => {
    localStorage.setItem('name', formData.get('name'));
    localStorage.setItem('password', formData.get('password'));
    props.setShow(false);
    localStorage.setItem('signed in', 'signed in');
  };

  return (
    <form
      action={handleSubmit}
      className={
        'flex flex-col gap-4 rounded-xl shadow-md p-8 w-full max-w-sm ' +
        (theme ? 'bg-slate-800 text-white' : 'bg-white text-black')
      }
    >
      <input
        type="text"
        name="name"
        placeholder="Username"
        required
        className={
          'px-4 py-2 border rounded-md ' +
          (theme
            ? 'border-slate-600 bg-slate-700 placeholder-slate-400'
            : 'border-slate-300 bg-white placeholder-slate-500')
        }
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        required
        className={
          'px-4 py-2 border rounded-md ' +
          (theme
            ? 'border-slate-600 bg-slate-700 placeholder-slate-400'
            : 'border-slate-300 bg-white placeholder-slate-500')
        }
      />
      <button
        className={
          'px-4 py-2 rounded-md font-semibold transition ' +
          (theme
            ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white')
        }
      >
        Sign in
      </button>
    </form>
  );
};

export default Singnin;