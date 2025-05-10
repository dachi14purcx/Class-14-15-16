import React, { useState } from "react";

// 1️⃣ Static Array Render
const StaticList = ({ items }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <h1 key={index} className="text-xl font-bold text-blue-700">{item}</h1>
    ))}
  </div>
);

// 2️⃣ Box Component with random number & color
const Box = ({ number, color }) => (
  <div
    className="w-24 h-24 flex items-center justify-center text-white font-bold rounded shadow-md"
    style={{ backgroundColor: color }}
  >
    {number}
  </div>
);

const BoxList = () => {
  const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
  const boxes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    number: Math.floor(Math.random() * 100),
    color: randomColor(),
  }));

  return (
    <div className="grid grid-cols-5 gap-4">
      {boxes.map(box => (
        <Box key={box.id} number={box.number} color={box.color} />
      ))}
    </div>
  );
};

// 3️⃣ Input + Text sync
const TextInput = ({ value, onChange }) => (
  <input
    className="border p-2 rounded w-full mb-2"
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

const TextDisplay = ({ text }) => (
  <p className="text-lg font-medium">{text}</p>
);

// 4️⃣ Render 100 true/false as 1/0
const BooleanArrayRender = () => {
  const boolArray = Array.from({ length: 100 }, () => Math.random() > 0.5);

  return (
    <div className="flex flex-wrap gap-2">
      {boolArray.map((val, idx) => (
        <span
          key={idx}
          className="px-2 py-1 bg-gray-200 rounded text-sm"
        >
          {val ? 1 : 0}
        </span>
      ))}
    </div>
  );
};

// 5️⃣ Profile Card with toggle favorite
const ProfileCard = ({ profile, toggleFavorite }) => (
  <div className="p-4 border rounded-lg shadow flex items-center space-x-4">
    <img
      src={profile.image}
      alt={profile.name}
      className="w-16 h-16 rounded-full border"
    />
    <div className="flex-1">
      <h3 className="font-bold text-lg">{profile.name}</h3>
      <p className="text-sm text-gray-500">📞 {profile.phone}</p>
      <p className="text-sm text-gray-500">✉️ {profile.email}</p>
    </div>
    <button onClick={() => toggleFavorite(profile.id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={profile.isFavorite ? "yellow" : "black"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.335 24 12 19.771 4.665 24 6 15.6 0 9.75l8.332-1.595z" />
      </svg>
    </button>
  </div>
);

const ProfileList = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Nino Beridze",
      phone: "+995 599 123456",
      email: "nino@example.com",
      image: "https://i.pravatar.cc/150?img=11",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Giorgi Kapanadze",
      phone: "+995 577 654321",
      email: "giorgi@example.com",
      image: "https://i.pravatar.cc/150?img=12",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Tamar Lomidze",
      phone: "+995 595 789123",
      email: "tamar@example.com",
      image: "https://i.pravatar.cc/150?img=13",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProfiles(prev =>
      prev.map(p => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p)
    );
  };

  return (
    <div className="space-y-3">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

// App Component
export default function App() {
  const [inputText, setInputText] = useState("");
  const staticItems = ["First Item", "Second Item", "Third Item"];

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-10">
      <StaticList items={staticItems} />
      <BoxList />

      <div>
        <TextInput value={inputText} onChange={setInputText} />
        <TextDisplay text={inputText} />
      </div>

      <BooleanArrayRender />
      <ProfileList />
    </div>
  );
}