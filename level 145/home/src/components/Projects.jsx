import React from 'react'
import image from '../assets/image.png'

const Projects = () => {
  return (
    <div className='flex h-[44.5vw] items-center mt-[10vw] relative gap-[0.3vw]' id='projects'>

        <div className="left-hr w-[14vw] h-[0.2vw] bg-white"></div>
        <img src={image} alt="GitHub img" className="project-img w-[28vw]" />
        <div className="hr w-[14vw] h-[0.2vw] bg-white"></div>

        <div className="projects flex flex-col items-center w-[28vw]">
            <h2 className="project-header text-[4vw] font-bold m-0">Projects</h2>

            <div className="projects-hr w-[28vw] h-[0.2vw] bg-white m-[2.5vw]"></div>

            <p className=' text-center text-[0.9vw] m-0'>I have started learning in GOA several months ago. I have been studying by passion and have made all of the projects I had for homework and classwork. They are too much to show separately so I will link my git hub and you can see it all by yourselves</p>

            <div className="project-hr project-hr w-[28vw] h-[0.2vw] bg-white m-[2.5vw] mb-[8vw]"></div>

            <a href="https://github.com/dachi14purcx" target="_blank"><button className="projects-btn bg-white p-[0.7vw] font-bold text-black text-[1.8vw] w-[10vw] mt-[1vw] hover:opacity-90 hover:scale-105 duration-300 shadow-xl shadow-gray-950 rounded-[1vw] absolute bottom-[0vw] right-[23.5vw]">GitHub</button></a>
       </div>

        <div className="right-hr w-[14vw] h-[0.2vw] bg-white"></div>
    </div>
  )
}

export default Projects