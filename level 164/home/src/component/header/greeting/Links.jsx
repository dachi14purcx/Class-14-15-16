import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import linkedIn from '../../../assets/Group 6.svg'
import facebook from '../../../assets/Group 7.svg'
import instagram from '../../../assets/Group 21.svg'

const Links = () => {
  return (
    <div className='flex gap-[3vw] mt-[5vw]'>
      <a href="/cv.pdf" download>
        <button className='gradient-border text-[1.1vw] flex items-center font-bold text-[#43CEA2] w-[12.5vw] justify-center h-[3.5vw]'>Download CV <HiOutlineDownload className='text-[#43CEA2] text-[1.5vw]'/></button>
      </a>
      <img src={linkedIn} alt=""  className='h-[3vw]'/>
      <img src={facebook} alt=""  className='h-[3vw]'/>
      <img src={instagram} alt="" className='h-[3vw]'/>
    </div>
  )
}

export default Links