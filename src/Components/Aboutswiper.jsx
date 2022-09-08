import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import swiper1 from "../Pictures/swiper1.png"
import swiper2 from "../Pictures/swiper2.png"
import swiper3 from "../Pictures/swiper3.png"
import swiper4 from "../Pictures/swiper4.png"
import swiper5 from "../Pictures/swiper5.png"


export default function Aboutswiper() {
  return (
    <div>
        <div className='bg-[#F8FBFB] rounded-2xl font-extrabold pb-14'>
        <div className='flex justify-center pt-16 pb-8'>
        <h1 className='text-3xl'>Clients</h1>
        </div>
        
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiper1} className="mx-12"/>
          <img src={swiper2} className="mx-12"/>
          <img src={swiper3} className="mx-12"/>
          <img src={swiper4} className="mx-12"/>
          <img src={swiper5} className="mx-12"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper1} className="mx-12"/>
          <img src={swiper2} className="mx-12"/>
          <img src={swiper3} className="mx-12"/>
          <img src={swiper4} className="mx-12"/>
          <img src={swiper5} className="mx-12"/>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
  )
}
