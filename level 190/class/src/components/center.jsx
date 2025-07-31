import React from 'react'
import SUVS from '../images/icon-suvs.svg'

const Center = () => {
  return (
    <div className="flex-1 p-8 text-white" style={{ backgroundColor: "#006970" }}>
      <div className="mb-6">
        <img src={SUVS} alt="" />
        <h2 className="text-4xl font-bold uppercase">SUVs</h2>
      </div>
      <p className="mb-8 text-xl">
        Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures.
      </p>
      <button className="bg-white text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition">
        Learn More
      </button>
    </div>
  )
}

export default Center