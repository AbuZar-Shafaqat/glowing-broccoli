import React from 'react'
import {AiFillHtml5} from "react-icons/ai"
import {IoLogoJavascript} from "react-icons/io";
import {SiReact,SiTailwindcss,SiBootstrap,SiJquery} from "react-icons/si";
import Whatchild from './Whatchild'
export default function Whatido() {
  return (
    <div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 bg-white gap-x-9  gap-y-8 mb-12'>
        <Whatchild data={{magic:"text-orange-500 ",icon:<AiFillHtml5/>,color:"bg-[#FCF4FF]",title1:"Html & Css",title2:"HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices."}}/>
        <Whatchild data={{icon:<SiBootstrap/>,magic:"text-purple-700",color:"bg-[#FEFAF0]",title1:"Bootstrap",title2:"Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."}}/>
        <Whatchild data={{icon:<IoLogoJavascript/>,magic:"text-yellow-400",color:"bg-[#FCF4FF]",title1:"Javascript",title2:"Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.JavaScript is so popular that it's the most used programming language in the world,used as a programming language."}}/>
        <Whatchild data={{icon:<SiJquery/>,magic:"text-sky-800",color:"bg-[#FFF4F4]",title1:"jQuerry",title2:"jQuery is a lightweight, write less, do more, JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website.jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish."}}/>
        <Whatchild data={{icon:<SiReact/>,magic:"text-sky-400",color:"bg-[#FFF4F4]",title1:"React",title2:"React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike."}}/>
        <Whatchild data={{icon:<SiTailwindcss/>,magic:"text-sky-400",color:"bg-[#F3FAFF]",title1:"Tailwind CSS",title2:"Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to do many things."}}/>

        </div>

    </div>
  )
}
