import { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];
    case 'Toggle':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'Remove':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [input, setInput] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'Add', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <h1>📝 To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task..."
      />
      <button onClick={handleAdd}>➕ Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => dispatch({ type: 'Toggle', payload: todo.id })}
          >
            {todo.text}
            <button
              style={{ marginLeft: '10px' }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: 'Remove', payload: todo.id });
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;