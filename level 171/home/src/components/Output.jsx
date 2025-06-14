import React from 'react'

const Output = (props) => {
  return (
    <div className="w-[500px] h-24 bg-slate-900 text-white text-end p-6 rounded-xl text-5xl font-bold mb-4 shadow-black drop-shadow-2xl">
      {props.resState ? `${props.a} ${props.op} ${props.b}` : props.res}
    </div>
  )
}

export default Output