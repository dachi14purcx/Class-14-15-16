import React from 'react'
import image from '../assets/download2.jpeg'

const About = () => {
  return (
    <div className='flex flex-col flex-wrap h-[44.5vw] justify-center ml-[5vw] mt-[10vw] relative'>
        <div className="introduction w-[45vw] mb-[8vw]" >
            <h2 className="int-header text-[4vw] font-bold mb-[1vw]" >Introduction</h2>
            <p className=' text-[1vw]'>Welcome to my portfolio! Here, you'll find a curated collection of my work, showcasing my skills, creativity, and dedication to web development. Each piece represents not just my technical abilities but also my passion for web development and my commitment to excellence.</p>
        </div>

        <img src={image} alt="computer image" className="introduction-img w-[35vw] absolute right-[5vw]" id="about-me" /> 

        <div className='text-[1vw] flex gap-[3vw]'>
            <div className="about-me w-[20vw]">
                <h3 className="about-me-header text-[2.5vw] font-semibold mb-[1vw]">About me</h3>
                <p>Hi, I’m Dachi, a passionate and dedicated future Web Developer. I specialize in creating websites that captivate, inspire, and deliver results.</p>
            </div>

            <div className="about-portfolio w-[20vw]">
                <h3 className="about-me-header text-[2.5vw] font-semibold mb-[1vw]">About Portfolio</h3>
                <p>This is my first portfolio. I am not good at introducing, but I’ll try to introduce my work to you and all of my web vewers</p>
            </div>
        </div>

        <div className="introduction-hr w-[16vw] h-[0.2vw] bg-white rounded-4xl relative top-[-24.5vw]"></div>
        <div className="about-hr w-[8.5vw] h-[0.2vw] bg-white rounded-4xl absolute top-[30.2vw]"></div>
        <div className="about-hr w-[10vw] h-[0.2vw] bg-white rounded-4xl absolute top-[30.2vw] left-[23vw]"></div>
    </div>
  )
}

export default About