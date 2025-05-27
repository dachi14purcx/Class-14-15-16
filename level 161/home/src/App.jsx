import React from "react";
import Card from "./components/cards";
import { cardsData } from "./components/data";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">ჩემი სასწავლო ბარათები</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;
