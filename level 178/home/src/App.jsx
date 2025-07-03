import { useEffect, useRef, useState } from "react";

export default function App() {
  const clickRef = useRef(0);
  const keyRef = useRef(0);
  const [clicks, setClicks] = useState(0);
  const [keys, setKeys] = useState(0);
  const inputRef = useRef();

  // კლიკების მონიტორინგი
  useEffect(() => {
    const handleClick = () => {
      clickRef.current++;
      setClicks(clickRef.current);
      console.log("დაკლიკების რაოდენობა:", clickRef.current);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // კლავიშების თვლა მხოლოდ input-ზე ფოკუსისას
  const handleKeyDown = () => {
    if (document.activeElement === inputRef.current) {
      keyRef.current++;
      setKeys(keyRef.current);
      console.log("კლავიშების რაოდენობა input-ში:", keyRef.current);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-teal-100 to-pink-100 flex flex-col items-center justify-center gap-10 p-6"
      onKeyDown={handleKeyDown}
      tabIndex={0} // რათა body-ზე keydown მუშაობდეს
    >
      {/* კლიკების რაოდენობა */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-rose-600">დაკლიკების რაოდენობა</h2>
        <p className="text-4xl font-mono text-blue-600 mt-2">{clicks}</p>
        <p className="text-sm text-gray-500 mt-1">საიტზე ნებისმიერი ადგილის დაჭერის რაოდენობა</p>
      </div>

      {/* კლავიშების რაოდენობა input-ში */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-purple-600">input-ზე კლავიშები</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="დაწერე რამე..."
          className="w-full px-4 py-2 mt-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <p className="text-3xl font-mono text-purple-500 mt-4">{keys}</p>
        <p className="text-sm text-gray-500 mt-1">input-ის შიგნით კლავიშების რაოდენობა</p>
      </div>
    </div>
  );
}