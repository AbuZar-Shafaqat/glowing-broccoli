import React from "react";

export default function Whatchild(props){
  return (
    <div>
      <div className={`${props.data.color} flex rounded-3xl`}>
        <div className={`${props.data.magic} text-6xl px-2 py-5`}>{props.data.icon}</div>
        <div className="">
          <h1 className="font-semibold text-2xl px-2 py-5 ">{props.data.title1}</h1>
          <p className="text-[#5D6D80] text-sm px-2 pb-5">{props.data.title2}</p>
        </div>
      </div>
    </div>
  );
}
