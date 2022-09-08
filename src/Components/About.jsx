import React from 'react';
import hassan from "../Pictures/about.jpg";
import {MdPhoneIphone,MdLocationOn,MdEmail} from "react-icons/md";
import {GoCalendar} from "react-icons/go"
import Whatido from './Whatido';
import RightsReserved from './RightsReserved';
import Aboutswiper from './Aboutswiper';

export default function About() {
  return (
    <div>
      <div className='lg:container mx-auto bg-white lg:px-20 md:px-10 px-8 pt-14 rounded-2xl mb-14 '>
        <div className='flex items-center '>
          <h1 className='text-4xl font-bold'>About Me</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>

        <div className='grid md:grid-cols-3  mt-10 '>
        <div className=' md:col-span-1 col-span-3 lg:py-0 md:py-14 '> 
          <img src={hassan} className="md:w-[19rem] w-full lg:h-[26rem] md:h-[27rem] h-[50rem]  rounded-3xl" />
        </div>
        <div className=' col-span-2 lg:pl-5 md:pl-5'>
          <h1 className='text-2xl font-semibold md:mt-0 mt-3'>Who am i?</h1>
        <p className='text-[#5D6D80] text-lg pt-3'>I'm Full Stack Developer from Pakistan working in Web Development <br />
            and Vvork Cloud & Technology. I enjoy turning complex problems into simple,<br />
            beautiful and intuitive designs. <br /></p>
            <p className='text-[#5D6D80] text-lg pt-3'>
            My aim is to bring across your message and identity in the most creative way. <br />
            I created web design for many famous brand companies.</p>
            <h1 className='text-2xl font-semibold pt-6 pb-8'>Personal Info</h1>
            
            
            <div className='grid sm:grid-cols-2 grid-cols-1 py-55 gap-y-7'>
              <div className='flex items-center  '>
              <div className=' bg-white rounded
                 text-pink-700 px-3 py-3 text-2xl shadow shadow-gray-500  '><MdPhoneIphone/></div>
                <div className='pl-3'>
                  <p className='text-[#5D6D80] text-sm'>Phone</p>
                  <h1 className='lg:text-base md:text-sm'>+92-322-80388-08</h1>
                </div>
                </div>
              

                <div className='flex items-center'>
          <div className=' bg-white rounded
           text-pink-500 px-3 py-3 text-2xl  shadow shadow-gray-500 '><MdLocationOn/></div>
                <div className='pl-3'>
                  <p className='text-[#5D6D80] text-sm'>Location</p>
                  <h1 className='lg:text-base md:text-sm'>Pakistan</h1>
                </div>
                </div>

                <div className='flex items-center  '>
          <div className='shadow shadow-gray-500 bg-white rounded
           text-pink-500 px-3 py-3 text-2xl b '><MdEmail/></div>
                <div className='pl-3'>
                  <p className='text-[#5D6D80] text-sm'>Email</p>
                  <h1 className='lg:text-base md:text-xs'>abcdefghijk20@gmail.com</h1>
                </div>
                </div>


                <div className='flex items-center'>
          <div className='shadow shadow-gray-500 bg-white rounded
           text-purple-600 px-3 py-3 text-2xl  '><GoCalendar/></div>
          
                <div className='pl-3'>
                  <p className='text-[#5D6D80] text-sm'>Birthday</p>
                  <h1 className='lg:text-base md:text-sm'>April 25,1999</h1>
                </div>
                </div>
        </div>            
        </div>
        </div>
      <div className='text-4xl font-bold pt-14 pb-8 '>What I do!</div>
      <div><Whatido/></div>

      <Aboutswiper/>

      <RightsReserved data={{color:"bg-white"}}/>
      </div>

    </div>
  )
}
