import React from 'react'
import hassan from "../Pictures/Hassan.jpg"
import pic1 from "../Pictures/down.png"
import {BsTwitter} from "react-icons/bs"
import {RiFacebookFill} from "react-icons/ri"
import {GrLinkedinOption} from "react-icons/gr"
import {AiOutlineDribbble} from "react-icons/ai"


export default function Home() {
  return (
    <div>
        <div className='flex flex-col items-center'>
        <div>
          <img src={hassan} className="h-[16rem] w-[16rem] rounded-full" />
        </div>
        <div className='font-extrabold text-4xl mt-3'>Monalisa Ashley</div>
        <div className='text-lg my-3'>Full Stack Developer</div>
          <div className='flex  items-center '>
          <div className=' bg-white rounded text-blue-700 px-2 py-2 text-xl mx-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300'><RiFacebookFill/></div>
          <div className=' bg-white rounded text-sky-600 px-2 py-2 text-xl mx-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300'><BsTwitter/></div>
          <div className=' bg-white rounded text-[#dd2476] px-2 py-2 text-xl mx-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300'><AiOutlineDribbble/></div>
          <div className=' bg-white rounded text-blue-800 px-2 py-2 text-xl mx-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300'><GrLinkedinOption/></div>
        </div>
        <div className="flex items-center mx-2 py-3 px-8 mt-5 mb-11 text-white  bg-gradient-to-r from-[#fa5252] to-[#dd2476] rounded-full">
            <div><img src={pic1} className="pr-2" /></div>
            <div className='text-xl'>Download CV</div>
          
            
        </div>
        </div>
      </div>
  )
}
