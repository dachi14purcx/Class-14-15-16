import React, { useState } from "react";

// SearchInput კომპონენტი
function SearchInput({ items }) {
  const [query, setQuery] = useState("");

  // ფილტრაცია
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full max-w-sm space-y-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 py-2 border rounded-lg"
      />
      <ul className="list-disc pl-6">
        {filtered.length > 0 ? (
          filtered.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li className="text-gray-500">No products found</li>
        )}
      </ul>
    </div>
  );
}

// მთავარი App კომპონენტი
export default function App() {
  const products = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <SearchInput items={products} />
    </div>
  );
}
