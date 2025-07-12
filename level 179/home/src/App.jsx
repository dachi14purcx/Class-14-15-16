import { useEffect, useState, createContext } from 'react';
import './App.css';
import Singnin from './components/Singnin';
import Counter from './components/counter';
import Userpanel from './components/Userpanel';

export const ThemeContext = createContext()

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(Number(localStorage.getItem('count')));
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    const now = date + ' ' + time;
    localStorage.setItem('time', now);
  }, []);

  !localStorage.getItem('signed in') && localStorage.clear();

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={
          'min-h-screen flex items-center justify-center transition-colors duration-300 ' +
          (theme ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-br from-slate-100 to-slate-300 text-slate-900')
        }
      >
        <div className="absolute top-4 right-4 flex gap-4 font-semibold">
          <button
            onClick={() => setTheme(false)}
            className={
              'px-4 py-2 rounded ' +
              (!theme ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-900')
            }
          >
            Light
          </button>
          <button
            onClick={() => setTheme(true)}
            className={
              'px-4 py-2 rounded ' +
              (theme ? 'bg-blue-700 text-white' : 'bg-blue-200 text-blue-900')
            }
          >
            Dark
          </button>
        </div>

        {show && !localStorage.getItem('signed in') ? (
          <Singnin setShow={setShow} />
        ) : (
          <div className="flex flex-col items-center gap-8">
            <Userpanel count={count} />
            <Counter count={count} setCount={setCount} />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;