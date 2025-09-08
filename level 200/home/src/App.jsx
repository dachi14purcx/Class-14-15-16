import React from "react";
import { useState, useEffect } from "react";

/****************************
 * useToggle — Custom Hook
 ****************************/
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

/****************************
 * useWindowSize — Custom Hook
 ****************************/
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

/****************************
 * useFetch — Custom Hook
 ****************************/
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error fetching data");
        const json = await res.json();
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}

/****************************
 * Demo Component
 ****************************/
export default function App() {
  const [isOpen, toggleOpen] = useToggle();
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 space-y-8">
      <h1 className="text-2xl font-bold">Custom Hooks Demo</h1>

      {/* useToggle */}
      <section className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">useToggle</h2>
        <button
          onClick={toggleOpen}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
        {isOpen && <p className="mt-2">This content is toggled!</p>}
      </section>

      {/* useWindowSize */}
      <section className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">useWindowSize</h2>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </section>

      {/* useFetch */}
      <section className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">useFetch</h2>
        {loading && <p>Loading users…</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {data && (
          <ul className="list-disc pl-6">
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

