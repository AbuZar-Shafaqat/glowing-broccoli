import React from 'react'

export default function Resumechild(props) {

  return (
    <div>
    <div>
      { props.data.val===1 &&  <div className='flex ' >
        <div className=" px-2 text-[#F95054] text-3xl pb-4">{props.data.icon}</div>
        <h1 className=" font-semibold text-2xl px-2 pb-4">{props.data.title1}</h1>
      </div>
}
      <div className={`${props.data.color} mt-5 rounded-3xl px-3 `}>
          <p className=" text-[#5D6D80] text-sm px-2 pt-5 pb-3">{props.data.title2}</p>
          <h1 className="text-lg px-2 pb-2">{props.data.title3}</h1>
          <h1 className="text-lg px-2 pb-5">{props.data.title4}</h1>
        </div>
    </div>
    </div>
  )
}
