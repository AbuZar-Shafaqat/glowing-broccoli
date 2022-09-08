import React from 'react'

export default function RightsReserved(props) {
  return (
    <div>
        <div className={` ${props.data.color} flex justify-center p-6 rounded-b-2xl text-[#3F4F61] mt-10`}>
            <h1>© 2022 All Rights Reserved by Abu Zar.</h1>
        </div>
    </div>
  )
}
