import { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { present, future } = state;

  switch (action.type) {
    case 'submit':
      return {
        present: [...present, action.payload],
        future: [],
      };

    case 'undo':
      return {
        present: present.slice(0, -1),
        future: [present[present.length - 1], ...future],
      };

    case 'redo':
      if (future.length < 1) return state
      return {
        present: [...present, future[0]],
        future: future.slice(1),
      };
  }
};

function App() {
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    present: [],
    future: [],
  });

  const handleSubmit = () => {
    if (input.trim()) {
      dispatch({ type: 'submit', payload: input });
      setInput('');
    }
  };

  const current = state.present[state.present.length - 1] || '';

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center gap-10">
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2 rounded-md h-10 w-90 outline-none p-1 mr-10"/>
        <button onClick={handleSubmit} className="text-xl font-semibold">Submit</button>
      </div>
      
      <div>
        <button onClick={() => dispatch({ type: 'undo' })} className="text-xl font-semibold mr-20">Undo</button>
        <button onClick={() => dispatch({ type: 'redo' })} className="text-xl font-semibold">Redo</button>
      </div>

      <p className="text-2xl font-semibold">{current}</p>
    </div>
  );
}

export default App;