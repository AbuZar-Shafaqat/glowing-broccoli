import React from "react";
import {RiContactsBookLine} from "react-icons/ri";
import {SiRobotframework} from "react-icons/si";
import {ImBlogger2} from "react-icons/im";
import {AiOutlineHome} from "react-icons/ai"
import {BsList,BsPerson,BsNewspaper} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../Pictures/download.png";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 text-gray-700 pt-8 pb-14 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative  flex justify-between lg:w-auto lg:static lg:block lg:justify-start mt-4 ">
            <img src={logo} className=" lg:h-12 w-36 " />
            <button
              className=" bg-[#dd2476] text-white rounded-full cursor-pointer text-2xl mt-3 leading-none px-[7px] py-1 border border-solid h-10 w-10 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <BsList/>
            {/* <div className="text-2xl px-2 py-2 rounded-full mx-2 bg-white h-10 w-10 border border-black hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300"><FiMoon/></div> */}

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:items-center lg:flex-row list-none lg:ml-auto text-lg lg:w-auto md:mt-4">
            
            <Link to="/">
            <li className="flex items-center mx-2 py-2 px-4 text-white  bg-gradient-to-r from-[#fa5252] to-[#dd2476] rounded ">
            <div className="text-xl pr-2"><AiOutlineHome/></div>
            <a href="#" className="text-sm " >HOME</a>
            </li>
            </Link>
            <Link to="/about">
            <li className="flex items-center mx-2 py-2 px-4 rounded  bg-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300">
            <div className="text-xl pr-2"><BsPerson/></div>
            <a href="#" className="text-sm " >ABOUT</a>
            </li>
            </Link>
            <Link to="/resume">
            <li className="flex items-center mx-2 py-2 px-4  bg-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300 rounded ">
            <div className="text-xl pr-2"><BsNewspaper/></div>
            <a href="#" className="text-sm " >RESUME</a>
            </li>
            </Link>
            <Link to="/works">
            <li className="flex items-center mx-2 py-2 px-4  bg-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300 rounded ">
            <div className="text-xl pr-2"><SiRobotframework/></div>
            <a href="#" className="text-sm " >WORKS</a>
            </li>
            </Link>
            <Link to="/blogs">
            <li className="flex items-center mx-2 py-2 px-4  bg-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300 rounded ">
            <div className="text-xl pr-2"><ImBlogger2/></div>
            <a href="#" className="text-sm " >BLOGS</a>
            </li>
            </Link>
            <Link to="/contact">
            <li className="flex items-center mx-2 py-2 px-4  bg-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white duration-300 rounded">
            <div className="text-xl pr-2"><RiContactsBookLine/></div>
            <a href="#" className="text-sm " >CONTACT</a>
            </li>
            </Link>
        
      
            </ul>      
          
          </div>       

        </div>
      </nav>
    </>
  );
}