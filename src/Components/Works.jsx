import React from 'react'
import RightsReserved from './RightsReserved'
import Worksportfolio from './Worksportfolio'
export default function Works() {
  return (
    <div>
      <div className='lg:container mx-auto bg-white pt-14 rounded-2xl  mb-14'>
      
      <div className='flex items-center lg:mx-20 md:mx-10 mx-3'>
          <h1 className='text-4xl font-bold '>Portfolio</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>


      <div>
        <ul className='text-[#5D6D80] flex md:justify-end justify-start lg:mx-20 md:mx-10 mx-3 mt-12'>
          <li className='md:mx-4 mx-0 hover:text-[#FA6060] cursor-pointer  duration-300'>All</li>
          <li className='md:mx-4 mr-1 hover:text-[#FA6060] cursor-pointer duration-300'>Video</li>
          <li className='md:mx-4 mx-1 hover:text-[#FA6060] cursor-pointer duration-300'>Web Design</li>
          <li className='md:mx-4 mx-2 hover:text-[#FA6060] cursor-pointer duration-300'>Logo</li>
          <li className=' hover:text-[#FA6060] cursor-pointer mr-2'>Graphic Design</li>
        </ul>
      </div>

      <div>
      <Worksportfolio/>
      </div>

      <RightsReserved data={{color:"bg-[#212425]"}}/>



      </div>
    </div>
  )
}
