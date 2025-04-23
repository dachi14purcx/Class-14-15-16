import React from 'react'

const Navbar = () => {
  return (
    <div class="nav flex justify-end gap-7 h-[4vw] w-[100vw] items-center pr-[2.5vw] text-[1.1vw] m-0 z-50 fixed">
      <h3 class="dp absolute left-[2.5vw] font-extrabold">Dachi Purtskhvanidze</h3>

      <a href="#home" className="nav-text font-bold hover:scale-110 duration-100">Home</a>  
      <a href="#about-me" className="nav-tex font-bold hover:scale-110 duration-100">About me</a>
      <a href="#projects" className="nav-text font-bold hover:scale-110 duration-100">Project</a>
      <a href="#contact" className="nav-text font-bold hover:scale-110 duration-100">Contact</a>
    </div>
  )
}

export default Navbar