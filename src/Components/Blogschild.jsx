import React from 'react'

export default function Blogschild(props) {
  return (
    <div>
        <div className='py-6 bg-[#FFF0F0] rounded-xl mb-8'>
            <div className="mx-5 overflow-hidden rounded-xl">
                <img src={props.data.image} className="w-full rounded-xl hover:scale-110 duration-100 "/>
            </div>
            <div className='flex items-center text-sm px-5 pt-5 text-[#5D6D80]'>
            <p>{props.data.title1}</p>
            <div className='text-2xl text-black'>{props.data.icon}</div>
            <p>{props.data.title3}</p>  
            </div>
            <h1 className='text-xl px-5 mt-3 hover:text-[#FA6060] hover:cursor-pointer duration-300 '>{props.data.title2}</h1>
        </div>
    </div>
  )
}
