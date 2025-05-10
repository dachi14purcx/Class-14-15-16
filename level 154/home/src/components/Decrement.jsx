import React from 'react'

const Decrement = (props) => {
  return (
    <button onClick={() => {
      props.setCount(prev => prev - 1);
       props.setHistory([...props.history, props.count + 1])}}
        className='bgb drop-shadow-xl w-20 h-36 pb-2 cursor-pointer text-6xl duration-150'> - </button>
  )
}

export default Decrement