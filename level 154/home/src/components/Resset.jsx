import React from 'react'

const Resset = (props) => {
  return (
    <button onClick={() => props.setCount(0)} className='bgs drop-shadow-2xl p-7 cursor-pointer hover:scale-110 text-6xl duration-300 pt-6'>Resset</button>
  )
}

export default Resset