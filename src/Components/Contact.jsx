import React from 'react'
import pic1 from "../Pictures/c1.png"
import pic2 from "../Pictures/c2.png"
import pic3 from "../Pictures/c3.png"
import RightsReserved from './RightsReserved'

export default function Contact() {
  return (
    <div>

<div className='lg:container mx-auto bg-white pt-14 rounded-2xl  mb-14'>
      
      <div className='flex items-center lg:mx-20 md:mx-10 mx-3'>
          <h1 className='text-4xl font-bold '>Contact</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>

        <div className=' grid lg:grid-cols-3 gap-x-10 mt-16 lg:mx-20 md:mx-10 sm:mx-5  '>
        
        <div className='lg:col-span-1 col-span-3'>
        
        <div className='rounded-2xl py-1 bg-[#FCF4FF] w-full '> 
        <div className='sm:flex mx-7  my-8 '>
          <div>
            <img src={pic1} className="h-8 mt-2"/>
          </div>
          <div className='sm:ml-2'>
            <h1 className='font-extrabold text-2xl sm:mt-0 mt-2'>Phone :</h1>
            <p className='text-[#5D6D80] my-2'>+92-322-80388-08</p>
            <p className='text-[#5D6D80]'>+92-311-63636-93</p>
          </div>
        </div>
        </div>
        
        <div className=' rounded-2xl p-1 bg-[#EEFBFF] mt-6 w-full' >
        <div className='sm:flex  mx-7  my-8 '>
          <div>
            <img src={pic2} className="h-8 mt-2"/>
          </div>
          <div className='sm:ml-2'>
            <h1 className='font-extrabold text-2xl sm:mt-0 mt-2'>Email :</h1>
            <p className='text-[#5D6D80] my-2'>qwertyuiop20@gmail.com</p>
            <p className='text-[#5D6D80]'>asdfghjklzxcv@gmail.com</p>
          </div>
        </div>
        </div>
        

        <div className=' rounded-2xl p-1  bg-[#F2F4FF] mt-6'>
        <div className='sm:flex mx-7  my-8 '>
          <div>
            <img src={pic3} className="h-8 mt-2"/>
          </div>
          <div className='sm:ml-2'>
            <h1 className='font-extrabold text-2xl sm:mt-0 mt-2'>Address :</h1>
            <p className='text-[#5D6D80] my-2'>73-E-1 Hali Rd</p>
            <p className='text-[#5D6D80]'>Gulberg III, Lahore</p>
          </div>
        </div>
        </div>
        
        </div>
        
        <div className=' lg:col-span-2 col-span-3 bg-[#F8FBFB] rounded-2xl lg:mt-0 mt-8 '>
           <h1 className='text-[#5D6D80] text-3xl mx-12 mt-12'>I'm always open to discussing product</h1>
          <h1 className='font-extrabold text-3xl mx-12'>design work or partnerships.</h1>
        
        {/* <div className=' grid grid-cols-1 mt-16 mx-12'>
          <input type="text" placeholder='Name *'  className='bg-[#F8FBFB] border-b-2 border-gray-400 py-2 placeholder-black outline-none'/>
          <input type="email" placeholder='Email *' className='mt-12 bg-[#F8FBFB] border-b-2 border-gray-400 placeholder-black py-2 outline-none'/>
          <input type="text" placeholder='Message *' className='mt-12 bg-[#F8FBFB] border-b-2 border-gray-400 placeholder-black py-2 outline-none'/>
        </div> */}
          
        <div class="relative z-0 mb-6  group grid grid-cols-1 mt-16 mx-12   ">
    <input type="Text" name="floating_Name" class="py-[4px] w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-400  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required />
    <label for="floating_name" class="absolute text-lg  text-black duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name *</label>
        </div>

        <div class="relative z-0 mb-6  group grid grid-cols-1 mt-11 mx-12   ">
    <input type="Text" name="floating_Email" class="py-[4px] w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-400  focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " required />
    <label for="floating_Email" class="absolute text-lg  text-black duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
        </div>
      
        <div class="relative z-0 mb-6  group grid grid-cols-1 mt-11 mx-12   ">
    <input type="Text" name="floating_Message" class="py-[4px] w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-400  focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " required />
    <label for="floating_Message" class="absolute text-lg  text-black duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message *</label>
        </div>
      


        <button className='mb-10 mt-10 font-semibold px-6 py-2 rounded-xl hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300 mx-12 border-2 border-[#B5B5B5]'>Submit</button>
        </div>
        

        </div>

<RightsReserved data={{color:"bg-[#212425]"}}/>
</div>

    </div>
  )
}
