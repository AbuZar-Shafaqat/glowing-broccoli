import React from "react";
import Resumebutton from "./Resumebutton";

export default function Resumechild2() {
  return (
    <div>
      <div className=" bg-[#F8FBFB]  grid md:grid-cols-2 grid-cols-1  mb-14">
        
        <div className="px-5">
          <h1 className="text-3xl py-10">Working Skills</h1>
          
          <div className="pb-9">
          <div className="flex justify-between  text-lg">
            <p>Web Design</p>
            <p>90%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[90%] bg-[#FF6464] rounded-2xl " />
          </div>
        </div>

        <div className=" pb-9">
          <div className="flex justify-between  text-lg">
            <p>Mobile App</p>
            <p>80%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[80%] bg-[#9272D4] rounded-2xl" />
          </div>
        </div>


        <div className=" pb-9">
          <div className="flex justify-between  text-lg">
            <p>Illustrator</p>
            <p>65%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[65%] bg-[#5185D4] rounded-2xl" />
          </div>
        </div>

        <div className=" md:pb-9 pb-4">
          <div className="flex justify-between  text-lg">
            <p>Photoshope</p>
            <p>75%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[75%] bg-[#CA56F2] rounded-2xl" />
          </div>
        </div>



        </div>
        
        
        
        
        <div>
          <h1 className="text-3xl py-10 ml-5">Knowledges</h1>
    
        <div className="flex flex-wrap pb-10">
      <Resumebutton data={{button:"Digital Design"}}/>
      <Resumebutton data={{button:"Marketing"}}/>
      <Resumebutton data={{button:"Social Media"}}/>
      <Resumebutton data={{button:"Print"}}/>
      <Resumebutton data={{button:"Time Management"}}/>
      <Resumebutton data={{button:"Flexibility"}}/>
      <Resumebutton data={{button:"Print"}}/>
      <Resumebutton data={{button:"Tours"}}/>
      <Resumebutton data={{button:"Travelling"}}/>
      <Resumebutton data={{button:"Writting"}}/>
      <Resumebutton data={{button:"Games"}}/>
        </div>
      
        </div>

      </div>
    </div>
  );
}
