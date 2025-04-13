import React from 'react'

const Contact = () => {
  const btn = () => {
    console.log("contact")
  }

  return (
    <div className='bg-white border-gray-200 rounded-xl p-6 shadow-md w-[700px] flex flex-col items-center gap-2 m-4'>
      <h1 className=' font-bold text-2xl'>Contact</h1>

      <p className="text-emerald-500">Facebook: Fefefe</p>
      <p className="text-emerald-500">Gmail: fefefe@gmail.com</p>
      <p className="text-emerald-500">Insagram: fefefe</p>

      <button onClick={btn} className='bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-lg mt-4'> Click me</button>
    </div>
  )
}

export default Contact