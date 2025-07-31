import React from 'react'

const Right = () => {
  return (
    <div className="flex-1 p-8 rounded-lg text-white" style={{ backgroundColor: "#004241" }}>
      <div className="mb-6">
        <div className="w-10 h-10 mb-4">🏎️</div>
        <h2 className="text-xl font-bold uppercase">Luxury</h2>
      </div>
      <p className="mb-8 text-sm leading-relaxed">
        Cruise in the best car brands without the bloated prices.
        Enjoy the enhanced comfort of a luxury rental and arrive in style.
      </p>
      <button className="bg-white text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition">
        Learn More
      </button>
    </div>
  )
}

export default Right