import React, { useState } from 'react'
import logo from '../assets/Group 3.svg'

const Navbar = () => {
  let [place, setPlace] = useState('header');

  return (
    <div className='text-white flex justify-center gap-[22vw] items-center text-[1.3vw] fixed w-[100%] nav'>
      <img src={logo} alt="" className='w-[3.3vw]' />

      <div className='flex gap-[2vw] font-semibold items-center text-[#5A5959] pl-[4vw]'>
        <h2 onClick={() => setPlace('header')}className={`cursor-pointer transition-all duration-500 ease-in-out ${place === 'header' ? 'scale-130  text-white' : ''}`}>Header</h2>
        <h2 onClick={() => setPlace('hero')} className={`cursor-pointer transition-all duration-500 ease-in-out ${place === 'hero' ? 'scale-130  text-white' : ''}`}>Hero</h2>
        <h2 onClick={() => setPlace('about')} className={`cursor-pointer transition-all duration-500 ease-in-out ${place === 'about' ? 'scale-130 text-white' : ''}`}>About</h2>
        <h2 onClick={() => setPlace('skills')} className={`cursor-pointer transition-all duration-500 ease-in-out ${place === 'skills' ? 'scale-130 text-white' : ''}`}>Skills</h2>
        <h2 onClick={() => setPlace('projects')} className={`cursor-pointer transition-all duration-500 ease-in-out ${place === 'projects' ? 'scale-130 text-white' : ''}`}
        >Projects</h2>
      </div>

      <button className='bg w-[10vw] h-[3.5vw] text-[1.2vw] font-bold rounded-[0.7vw]'>Contact me</button>
    </div>
  );
};

export default Navbar