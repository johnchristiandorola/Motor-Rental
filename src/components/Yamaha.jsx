import React from "react";
import { dataYamaha } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Yamaha = () => {
  return (
    <div className="cursor-pointer">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {dataYamaha.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col w-full mb-10 p-5 rounded-lg shadow-lg h-screen bg-white hover:cursor-pointer"
          >
            <img src={item.img} alt="" className="mx-auto" />
            <h1 className="text-xl font-bold uppercase text-left">
              {item.motor}
            </h1>

            <p className="text-left">from</p>
            <div className="flex  justify-between items-center">
              <h1 className="text-lg text-[#8A0000] font-bold">
                P500{" "}
                <span
                  className="text-gray-700  font-normal
                       text-md"
                >
                  /day
                </span>
              </h1>
              <button className="bg-[#8A0000] hover:text-[#8A0000] hover:bg-white border border-[#8A0000] duration-300 text-white py-1 px-5 rounded text-lg">
                Rent
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Yamaha;
