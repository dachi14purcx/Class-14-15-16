import { useEffect, useRef, useState } from "react";

function App() {
  // --- 1) Counter ---
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("");
  const prevCount = useRef(0);

  const handleIncrease = () => {
    setDirection("up");
    prevCount.current = count;
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setDirection("down");
    prevCount.current = count;
    setCount(count - 1);
  };

  // --- 2) Save name to localStorage without useEffect on load ---
  const [name, setName] = useState("");
  const hasSubmitted = useRef(false);

  const handleSaveName = () => {
    if (!hasSubmitted.current && name.trim() !== "") {
      localStorage.setItem("name", name);
      hasSubmitted.current = true;
      alert("Name saved!");
    }
  };

  // --- 3) Scroll direction detection ---
  const [scrollDir, setScrollDir] = useState("");
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current) setScrollDir("down");
      else if (currentY < prevScrollY.current) setScrollDir("up");
      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 4) Log input value with useEffect (skip first render) ---
  const [value, setValue] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("Value updated:", value);
  }, [value]);

  return (
    <div className="p-8 font-sans space-y-24">
      {/* 1. Counter */}
      <section className="p-6 rounded-2xl shadow bg-white max-w-md mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-700">1. Counter</h2>
        <h1 className="text-4xl font-bold">{count}</h1>
        <p className="text-lg text-gray-500">{direction}</p>
        <div className="space-x-4">
          <button
            onClick={handleIncrease}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
          >
            Increase
          </button>
          <button
            onClick={handleDecrease}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
          >
            Decrease
          </button>
        </div>
      </section>

      {/* 2. Save Name */}
      <section className="p-6 rounded-2xl shadow bg-white max-w-md mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-700">2. Save Name</h2>
        <div className="flex justify-center items-center space-x-2">
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button
            onClick={handleSaveName}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </section>

      {/* 3. Scroll Direction */}
      <section className="p-6 rounded-2xl shadow bg-white max-w-md mx-auto text-center space-y-4 mt-[150vh]">
        <h2 className="text-xl font-bold text-gray-700">3. Scroll Direction</h2>
        <h1 className="text-3xl font-semibold text-purple-600">{scrollDir}</h1>
        <p className="text-gray-500">Scroll the page to see up/down direction</p>
      </section>

      {/* 4. useEffect + Input */}
      <section className="p-6 rounded-2xl shadow bg-white max-w-md mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-700">4. useEffect Input</h2>
        <input
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something"
        />
        <p className="text-sm text-gray-400">Check console for updates</p>
      </section>
    </div>
  );
}

export default App;