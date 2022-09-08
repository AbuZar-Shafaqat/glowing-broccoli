import React from 'react'
import {MdOutlineSchool} from "react-icons/md";
import Resumechild from './Resumechild';
import {VscBriefcase} from "react-icons/vsc"
import {FaAward} from "react-icons/fa"
import Resumechild2 from './Resumechild2';
import RightsReserved from './RightsReserved';

export default function Resume() {
  return (
    <div>

      <div className='lg:container mx-auto  bg-white pt-14 rounded-2xl pb-1 mb-14'>
        
        <div className='flex items-center lg:mx-20 md:mx-10 mx-8'>
          <h1 className='text-4xl font-bold '>Resume</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>

      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 bg-white gap-x-6  pb-10 pt-14 lg:mx-20 md:mx-10 mx-8'>
        <div>
        <Resumechild data={{val:1,icon:<MdOutlineSchool/>,color:"bg-[#FFF4F4]",title1:"Education",title2:"July 2019 - Dec 2019",title3:"Computer Programming Languages Certification",title4:"International College of Technical Education"}}/>
        <Resumechild data={{color:"bg-[#FFF4F4]",title2:"Jan 2020 - June 2020",title3:"Web Designing Certification",title4:"International College of Technical Education"}}/>
        <Resumechild data={{color:"bg-[#FFF4F4]",title2:"Jan 2020 - June 2020",title3:"Microsoft Power BI Training",title4:"International College of Technical Education"}}/>
        </div>
        
        
        <div className='md:pt-0 pt-7'>
        <Resumechild data={{val:1,icon:<VscBriefcase/>,color:"bg-[#EEF5FA]",title1:"Experience",title2:"May 2020 - Sep 2020",title3:"Intern Business Analyst Information System",title4:"MICRORAGE SOLUTIONS"}}/>
        <Resumechild data={{color:"bg-[#EEF5FA]",title2:"Oct 2020 - Dec 2021 ",title3:"Junior Business Analyst Information System",title4:"MICRORAGE SOLUTIONS"}}/>
        <Resumechild data={{color:"bg-[#EEF5FA]",title2:"Dec 2021 - Present",title3:"Teacher Assistant",title4:"Vvork Cloud Technologies"}}/>
        </div>
        
        <div className='lg:pt-0 pt-7'>
        <Resumechild data={{val:1,icon:<FaAward/>,color:"bg-[#FCF4FF]",title1:"Awards",title2:"May 2020 - Sep 2020",title3:"Jr. Web Designer",title4:"MICRORAGE SOLUTIONS"}}/>
        <Resumechild data={{color:"bg-[#FCF4FF]",title2:"Oct 2020 - Dec 2021",title3:"Graphic Designer",title4:"MICRORAGE SOLUTIONS"}}/>
        <Resumechild data={{color:"bg-[#FCF4FF]",title2:"Dec 2021 - Present",title3:"Excellence In Teaching",title4:"Vvork Cloud Technologies"}}/>
        </div>
        </div>
      
      
      <Resumechild2/>
      <RightsReserved data={{color:"bg-white"}} />
      </div>
    </div>
  )
}
