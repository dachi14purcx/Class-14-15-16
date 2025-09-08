import { useState, useEffect, useRef } from "react";

/******************************
 * 1) useLocalStorage
 ******************************/
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}

/******************************
 * 2) usePrevious
 ******************************/
export function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/******************************
 * 3) useDebounce
 ******************************/
export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

/******************************
 * Demo App
 ******************************/
export default function App() {
  // useLocalStorage demo
  const [name, setName] = useLocalStorage("username", "");

  // usePrevious demo
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  // useDebounce demo
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="p-4 bg-white shadow rounded-2xl space-y-2">
        <h2 className="font-bold">useLocalStorage</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          className="border px-3 py-2 rounded-lg"
        />
        <p>Saved value: {name}</p>
      </div>

      <div className="p-4 bg-white shadow rounded-2xl space-y-2">
        <h2 className="font-bold">usePrevious</h2>
        <p>Current: {count}</p>
        <p>Previous: {prevCount ?? "None"}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            -
          </button>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            +
          </button>
        </div>
      </div>

      <div className="p-4 bg-white shadow rounded-2xl space-y-2">
        <h2 className="font-bold">useDebounce</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border px-3 py-2 rounded-lg"
        />
        <p>Debounced value (1s delay): {debouncedText}</p>
      </div>
    </div>
  );
}
