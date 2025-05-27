import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/300x200?sig=1",
  "https://source.unsplash.com/random/300x200?sig=2",
  "https://source.unsplash.com/random/300x200?sig=3",
  "https://source.unsplash.com/random/300x200?sig=4",
  "https://source.unsplash.com/random/300x200?sig=5",
  "https://source.unsplash.com/random/300x200?sig=6",
];

export default function RandomImage() {
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);

  const handleClick = () => {
    const index = Math.floor(Math.random() * images.length);
    setImage(images[index]);
    setId(index + 1);
  };

  return (
    <div className="max-w-md mx-auto text-center p-4 bg-white rounded-2xl shadow-xl">
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-indigo-600 transition"
        onClick={handleClick}
      >
        შემთხვევითი ფოტო
      </button>
      {image && (
        <div>
          <img src={image} alt="random" className="rounded-lg mx-auto" />
          <p className="mt-2 text-sm text-gray-600">ID: {id}</p>
        </div>
      )}
    </div>
  );
}
