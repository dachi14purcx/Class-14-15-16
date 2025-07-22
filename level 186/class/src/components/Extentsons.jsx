import React from 'react'
import { data } from '../data'

const Extentsons = () => {
  return (
    <div className='mt-15 w-[1400px]'>
        <div className='flex justify-between'>
            <p className='text-4xl font-semibold'>Extensions List</p>
            <div className='gap-5 flex'>
                <button className='bg-[#2C303E] text-xl rounded-full px-6 py-3'>All</button>
                <button className='bg-[#2C303E] text-xl rounded-full px-6 py-3'>Active</button>
                <button className='bg-[#2C303E] text-xl rounded-full px-6 py-3'>Inactive</button>
            </div>
        </div>

        <div className='flex gap-2 flex-wrap'>
            {data.map((e, i) => <div className='bg-[#2C303E] w-[460px] p-4'>
                <div className='flex gap-3'>
                    <img src={e.logo} alt="" className=''/>
                    <div>
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                    </div>
                </div>

                <div className='flex'>
                    <button>Remove</button>
                    <div className='w-10 h-5 bg-[#555861] rounded-full flex items-center p-[2px]'>
                        <div className='w-4 h-4 bg-[#ffffff] rounded-full'></div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Extentsons