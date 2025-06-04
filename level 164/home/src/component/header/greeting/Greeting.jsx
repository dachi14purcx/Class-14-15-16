import React from 'react'
import Links from './Links'
import Infos from './infos'

const Greeting = () => {
  return (
    <div>
        <h2 className='text text-[2.5vw] tracking-wider font-bold w-[14vw]'>I am Dachi</h2>
        <h1 className='heading text-[3.9vw] tracking-wider font-bold w-[55vw] shadow-text'>Passionate Web Developer and UI/UX Designer</h1>
        <Links />
        <Infos />
    </div>
  )
}

export default Greeting