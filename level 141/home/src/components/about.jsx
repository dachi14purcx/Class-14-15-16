import React from 'react'

const About = () => {
    const btn = () => {
        console.log("contact")
    }
    
  return (


    <div className='bg-white border-gray-200 rounded-xl p-6 shadow-md w-[700px] flex flex-col items-center gap-2 m-4'>
        <h1 className=' font-bold text-2xl'>About</h1>
        <p className="text-emerald-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius eligendi ad magnam fugit ea provident, nemo cupiditate voluptas explicabo amet voluptatibus a laboriosam nesciunt nihil dolorem nobis veniam culpa.</p>
        <button onClick={btn} className='bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-lg mt-4'>Click Me</button>
    </div>
  )
}

export default About