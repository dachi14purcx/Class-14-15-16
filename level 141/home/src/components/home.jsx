import React from 'react'

const Home = () => {
    const btn = () => {
        console.log("contact")
    }

  return (
    <div className='bg-white border-gray-200 rounded-xl p-6 shadow-md w-[700px] flex flex-col items-center gap-2 m-4'>
        <h1 className=' font-bold text-2xl'>Home</h1>
        <p className="text-emerald-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, atque. Totam reiciendis incidunt ipsum eius maiores doloribus placeat architecto mollitia beatae! Debitis quod voluptates alias impedit animi quidem adipisci voluptate!</p>

        <button onClick={btn} className='bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-lg mt-4'>Click Me</button>
    </div>
  )
}

export default Home