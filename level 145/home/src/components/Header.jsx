import React from 'react'
import image from '../assets/download.jpeg'

const Header = () => {
  return (
    <div className='h-[44.3vw] flex flex-wrap flex-col relative top-[4vw]' id='home'>
        <img src={image} alt="" className='header-img w-[39.8vw]'/>
        <h1 className=' text-[8vw] mr-[10vw] font-sans mb-0 mt-[2vw]'>My</h1>
        <h1 className=' text-[8vw] mr-[10vw] font-sans mt-[-1vw]'>Portfolio</h1>
        <div className='header-hr w-[95vw] h-[0.1vw] bg-white absolute right-[0vw] top-[9.5vw]'></div>

        <div className="overflow-hidden mt-[3vw] w-[44vw] ml-[5vw]">
            <p className=' text-[1.3vw] w-[43vw] '>This is my portfolio where I will write about myself, my future profession and my path to this.</p>
            <div className="skills flex gap-[1vw] text-black text-[1.5vw] mt-[3vw] w-[43.5vw] whitespace-nowrap relative left-[-20vw]">
                <p className='bg-white p-[0.8vw] font-semibold'>JavaScript</p>
                <p className='bg-white p-[0.8vw] font-semibold'>Python</p>            
                <p className='bg-white p-[0.8vw] font-semibold'>Html</p>
                <p className='bg-white p-[0.8vw] font-semibold'>CSS</p>
                <p className='bg-white p-[0.8vw] font-semibold'>Front end</p>
                <p className='bg-white p-[0.8vw] font-semibold'>3D Modeling</p>
                <p className='bg-white p-[0.8vw] font-semibold'>UI/UX design</p>
            </div>
        </div>
    </div>
  )
}

export default Header