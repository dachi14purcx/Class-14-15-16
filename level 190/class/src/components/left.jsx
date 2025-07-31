import React from 'react'
import sedan from '../images/icon-sedans.svg'

const Left = () => {
  return (
    <div className="flex-1 p-8 rounded-lg text-white" style={{ backgroundColor: "#e38826" }}>
      <div className="mb-6">
        <div className="w-10 h-10 mb-4">🚗</div>
        <h2 className="text-xl font-bold uppercase">Sedans</h2>
      </div>
      <p className="mb-8 text-sm leading-relaxed">
        Choose a sedan for its affordability and excellent fuel economy.
        Ideal for cruising in the city or on your next road trip.
      </p>
      <button className="bg-white text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition">
        Learn More
      </button>
    </div>
  )
}

export default Left