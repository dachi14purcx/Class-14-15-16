import React from 'react'
import Greeting from './greeting/Greeting'
import img from '../../assets/image.svg'

const Header = () => {
  return (
    <div className='w-[92%] h-[46vw] flex items-end ml-[6vw]'>
        <Greeting />
        <img src={img} alt="" className='absolute right-[6vw] top-[8.5vw] w-[24.5vw] z-[-1]'/>
    </div>
  )
}

export default Header