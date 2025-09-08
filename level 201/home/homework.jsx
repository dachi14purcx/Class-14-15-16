import React, { useState } from "react";

/******************************
 * 1) Password Input with Show/Hide
 ******************************/
function PasswordInput() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-2xl shadow w-full max-w-sm">
      <input
        type={visible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="flex-1 px-3 py-2 border rounded-lg"
      />
      <button
        onClick={() => setVisible((v) => !v)}
        className="px-3 py-2 rounded-lg bg-gray-900 text-white"
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

/******************************
 * 2) Counter with Step
 ******************************/
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full max-w-sm space-y-3">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => c - step)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => setCount((c) => c + step)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +
        </button>
      </div>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value) || 1)}
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Step size"
      />
    </div>
  );
}

/******************************
 * 3) Search Filter Products
 ******************************/
function ProductSearch() {
  const products = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full max-w-sm space-y-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search product..."
        className="w-full px-3 py-2 border rounded-lg"
      />
      <ul className="list-disc pl-6">
        {filtered.length > 0 ? (
          filtered.map((p, i) => <li key={i}>{p}</li>)
        ) : (
          <li className="text-gray-500">No products found</li>
        )}
      </ul>
    </div>
  );
}

/******************************
 * Main App
 ******************************/
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">
      <PasswordInput />
      <Counter />
      <ProductSearch />
    </div>
  );
}
