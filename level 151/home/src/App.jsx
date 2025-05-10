import React, { useState } from "react";

// 1️⃣ ProfileCard Components
const Name = ({ fullName }) => <h2 className="text-xl font-bold">{fullName}</h2>;
const Description = ({ text }) => <p className="text-gray-600">{text}</p>;
const Avatar = ({ src }) => (
  <img
    src={src}
    alt="avatar"
    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
  />
);

const ProfileCard = ({ fullName, description, avatar }) => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4">
      <Avatar src={avatar} />
      <Name fullName={fullName} />
      <Description text={description} />
      <button
        className={`px-4 py-2 rounded-full text-white transition-colors ${
          following ? "bg-green-500" : "bg-blue-500"
        }`}
        onClick={() => setFollowing(!following)}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

// 2️⃣ Product List Components
const ProductItem = ({ name, price, inStock }) => (
  <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center mb-2">
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500">${price}</p>
    </div>
    <span className={`px-2 py-1 rounded text-white text-sm ${inStock ? "bg-green-500" : "bg-red-500"}`}>
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  </div>
);

const ProductList = ({ products }) => (
  <div className="my-6">
    <h2 className="text-2xl font-bold mb-4">Products</h2>
    {products.map(product => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);

// 3️⃣ UserStatus Component
const UserStatus = ({ loggedIn }) => (
  <div className="my-6 text-xl font-semibold">
    {loggedIn ? "Welcome back!" : "Please Register"}
  </div>
);

// 4️⃣ Task Component
const Task = ({ name, time }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-sm mb-3">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-500">Due: {time}</p>
      <button
        onClick={() => setCompleted(true)}
        className={`mt-2 px-3 py-1 rounded ${completed ? "bg-green-500 text-white" : "bg-blue-500 text-white"}`}
        disabled={completed}
      >
        {completed ? "Completed" : "Complete"}
      </button>
    </div>
  );
};

// 5️⃣ Student List Components
const StudentCard = ({ name, age, image }) => (
  <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm mb-2">
    <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-500">Age: {age}</p>
    </div>
  </div>
);

const StudentList = ({ students }) => (
  <div className="my-6">
    <h2 className="text-2xl font-bold mb-4">Students</h2>
    {students.map(student => (
      <StudentCard key={student.name} {...student} />
    ))}
  </div>
);

// App Component
export default function App() {
  const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 499, inStock: false },
    { id: 3, name: "Headphones", price: 199, inStock: true },
  ];

  const students = [
    { name: "Nino", age: 20, image: "https://i.pravatar.cc/150?img=3" },
    { name: "Giorgi", age: 22, image: "https://i.pravatar.cc/150?img=5" },
    { name: "Tamar", age: 19, image: "https://i.pravatar.cc/150?img=6" },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <ProfileCard
        fullName="John Doe"
        description="Frontend Developer passionate about React and Tailwind CSS."
        avatar="https://i.pravatar.cc/150?img=1"
      />

      <button
        onClick={() => setLoggedIn(!loggedIn)}
        className="px-4 py-2 bg-purple-500 text-white rounded-full"
      >
        Toggle Login
      </button>
      <UserStatus loggedIn={loggedIn} />

      <ProductList products={products} />

      <Task name="Finish React Project" time="2025-05-15" />
      <Task name="Prepare Conference Slides" time="2025-05-20" />

      <StudentList students={students} />
    </div>
  );
}