import React from 'react'

export default function Resumebutton(props) {
  return (
    <div >
        <button  className="bg-[#EDF2F2] text-[#5D6D80] px-5 py-3 rounded-xl ml-5 mt-5">{props.data.button}</button>
    </div>
  )
}

