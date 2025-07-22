import React from 'react'
import logo from '../assets/logo.svg'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'

const Header = () => {
  return (
    <div className='w-[1400px] flex bg-gradient-to-r from-[#2C303E] to-[#232633] justify-between p-5 mt-8 rounded-2xl'>
        <img src={logo} alt="" />

        <img src={sun} alt="" className='bg-[#2C303E] p-3 rounded-xl'/>
    </div>
  )
}

export default Header