import React from "react";
import Left from "./components/left";
import Center from "./components/center";
import Right from "./components/right";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;