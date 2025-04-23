import React from 'react'
import image1 from '../assets/image 1.png'
import image2 from '../assets/image 2.png'
import image3 from '../assets/image 3.png'
import image4 from '../assets/image 4.png'

const Contact = () => {
  return (
    <div className='flex h-[40.5vw] mt-[10vw] relative overflow-hidden'>
        <div className="thanks flex flex-col w-[50vw] items-center" id="contact">
            <div className="top-hr h-[13vw] w-[0.2vw] bg-white"></div>

            <h2 className="thank-you text-[4vw] font-bold">Thank you</h2>
            <div className="thanks-hr h-[0.2vw] w-[21vw] m-[1vw] bg-white"></div>
            <p className='w-[23vw] text-[1vw] text-center mt-[1vw] mb-[0.5vw]'>Thank you for reading my portfolio, Hope you enjoyed reading it. I wish that you would like to cooperate with me and make crazy websites if it will be like this here are my contact informations</p>            
            
            <div className="bottom-hr h-[13vw] w-[0.2vw] bg-white"></div>
        </div>

        <div className="center-hr bg-white h-[44.5vw] w-[0.2vw]"></div>

        <div className="contacts flex flex-col justify-center items-center w-[50vw] text-[1.2vw]">
            <h2 className="contact text-[4vw] font-bold">Contact</h2>
            <div className="contact-hr h-[0.2vw] w-[15vw] bg-white mb-[2vw]"></div>

            <div className=' ml-[7vw] flex flex-col gap-[2vw]'>
                <div className='flex items-center gap-[1vw]'>
                    <img src={image1} alt="facebook logo" className="facebook w-3vw" />
                    <p className="info">Dachi Purcxvanidze</p>
                </div>

                <div className='flex items-center gap-[1vw]'>
                    <img src={image2} alt="gmail logo" className="gmail w-4vw" />
                    <p className="info">dachipurtskhvanidze2@gmail.com</p>
                </div>
                
                <div className='flex items-center gap-[1vw]'>
                    <img src={image3} alt="phone logo" className="call w-3vw" />
                    <p className="info">+995 574 16 45 61</p>
                </div>
                
                <div className='flex items-center gap-[1vw]'>
                    <img src={image4} alt="insta logo" className="insta w-3vw" />
                    <p className="info">dachipurtskhvanidze</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact