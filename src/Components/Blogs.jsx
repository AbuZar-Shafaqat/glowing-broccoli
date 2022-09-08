import React from 'react'
import Blogschild from './Blogschild'
import pic1 from "../Pictures/b1.jpg"
import pic2 from "../Pictures/b2.jpg"
import pic3 from "../Pictures/b3.jpg"
import pic4 from "../Pictures/b4.jpg"
import pic5 from "../Pictures/b5.jpg"
import pic6 from "../Pictures/b6.jpg"
import {BsDot} from "react-icons/bs" 
import RightsReserved from './RightsReserved'

export default function Blogs() {
  return (
    <div>

<div className='lg:container mx-auto bg-white pt-14 rounded-2xl  mb-14'>
      
      <div className='flex items-center lg:mx-20 md:mx-10 mx-3'>
          <h1 className='text-4xl font-bold '>Blogs</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>

        <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 mt-16 lg:mx-20 md:mx-10 mx-3  '>
        <Blogschild data={{image:pic1,title1:"177 April",icon:<BsDot/>,title3:"Inspiration",title2:"How to Own Your Audience by Creating an Email List."}}/> 
        <Blogschild data={{image:pic2,title1:"000 April",icon:<BsDot/>,title3:"Inspiration",title2:"Everything You Need to Know About Web Accessibility."}}/> 
        <Blogschild data={{image:pic3,title1:"21 April",icon:<BsDot/>,title3:"Web Design",title2:"The window know to say beside you"}}/> 
        <Blogschild data={{image:pic4,title1:"27 April",icon:<BsDot/>,title3:"Inspiration",title2:"Top 10 Toolkits for Deep Learning in 2021."}}/> 
        <Blogschild data={{image:pic5,title1:"27 April",icon:<BsDot/>,title3:"Inspiration",title2:"How to Own Your Audience by Creating an Email List."}}/> 
        <Blogschild data={{image:pic6,title1:"27 April",icon:<BsDot/>,title3:"Inspiration",title2:"Everything You Need to Know About Web Accessibility."}}/> 

        
        </div>

      <RightsReserved data={{color:"bg-[#212425]"}}/>
</div>

    </div>
  )
}
