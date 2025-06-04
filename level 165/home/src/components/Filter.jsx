import React from 'react'

const Filter = ({setFilterMode}) => {
  return (
    <div className='absolute top-10 right-10'>
      <button onClick={() => setFilterMode("all")} className="px-4 py-2 bg-gray-300 rounded">All</button>
      <button onClick={() => setFilterMode("favorites")} className="px-4 py-2 bg-yellow-300 rounded">Favorites</button>
      <button onClick={() => setFilterMode("nonFavorites")} className="px-4 py-2 bg-blue-300 rounded">Non-Favorites</button>
    </div>
  )
}

export default Filter