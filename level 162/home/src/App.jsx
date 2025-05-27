import { useState } from "react";
import RandomImage from "./components/RandomImage";

export default function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    if (name && info) {
      setCards([...cards, { id: Date.now(), name, info }]);
      setName("");
      setInfo("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Შეიყვანე ინფორმაცია</h1>
        <input
          className="w-full p-2 mb-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="სახელი"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="ინფორმაცია"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button
          className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <div className="mt-6 space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-purple-100 p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold text-purple-800">{card.name}</h2>
              <p className="text-purple-700">{card.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <RandomImage />
      </div>
    </div>
  );
};