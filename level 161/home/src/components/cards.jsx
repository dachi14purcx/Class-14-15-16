import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
