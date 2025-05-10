import React from 'react'

const History = (props) => {
  return (
    <div className='flex flex-col gap-10'>
      <h1>History</h1>

      <div className='bg drop-shadow-2xl p-2 pl-5 h-89 text-6xl flex flex-col gap-2 overflow-hidden'>
        {[...props.history].reverse().map((el, index) => <p key={index}>{el} </p>)}
      </div>
    </div>
  )
}

export default History