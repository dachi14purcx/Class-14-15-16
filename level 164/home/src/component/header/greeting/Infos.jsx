import React from 'react'
import Figma from '../../../assets/image 1.svg'
import Html from '../../../assets/image 2.svg'
import Css from '../../../assets/image 3.svg'
import Js from '../../../assets/image 4.svg'

const Infos = () => {
  return (
    <div className='flex gap-[7vw] mt-[6.5vw] tracking-widest'>
      <div className='gradient-border flex pr-[0.6vw] pl-[1vw] h-[6vw]'>
        <img src={Figma} alt="" className='w-[4vw]'/>
        <img src={Html}  alt="" className='w-[4.5vw]'/>
        <img src={Css}   alt="" className='w-[3.5vw]'/>
        <img src={Js}    alt="" className='w-[4.5vw]'/>
      </div>

      <div className='flex gap-[1vw] items-center mb-[1vw]'>
        <h2 className='text text-[4vw] font-bold '>02+</h2>
        <p className='text text-[1.3vw] font-bold w-[8vw]'>Years Of experience</p>
      </div>

      <div className='flex gap-[1vw] items-center mb-[1vw]'>
        <h2 className='text text-[4vw] font-bold '>40+</h2>
        <p className='text text-[1.3vw] font-bold w-[8vw]'>Project completed</p>
      </div>

      <div className='flex gap-[1vw] items-center mb-[1vw]'>
        <h2 className='text text-[4vw] font-bold '>20+</h2>
        <p className='text text-[1.3vw] font-bold w-[8vw]'>Happy Clients</p>
      </div>
    </div>
  )
}

export default Infos