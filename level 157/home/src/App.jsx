// Parts.js
const parts = [
  { id: 1, name: "Graphics Card", price: 250, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Processor", price: 300, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Motherboard", price: 150, image: "https://via.placeholder.com/150" },
  { id: 4, name: "RAM 16GB", price: 80, image: "https://via.placeholder.com/150" },
  { id: 5, name: "SSD 1TB", price: 120, image: "https://via.placeholder.com/150" }
];

// App.jsx (Updated)
import { useState } from 'react';
import parts from './Parts';

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id]--;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">🛒 Online PC Parts Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {parts.map(part => (
          <div key={part.id} className="border rounded shadow-md p-4 bg-white">
            <img src={part.image} alt={part.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-bold">{part.name}</h2>
            <p className="mb-2">💵 ${part.price}</p>
            <button
              onClick={() => addToCart(part.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to cart
            </button>
            {cart[part.id] && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm">Quantity: {cart[part.id]}</p>
                <button
                  onClick={() => removeFromCart(part.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">🧾 Cart Summary</h2>
        {Object.keys(cart).length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="list-disc list-inside">
            {Object.entries(cart).map(([id, quantity]) => {
              const part = parts.find(p => p.id === parseInt(id));
              return (
                <li key={id}>{part.name} — {quantity}x (${part.price * quantity})</li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
