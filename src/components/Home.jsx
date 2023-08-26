import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineTwoWheeler } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col justify-center bg-zinc-100 text-gray-900"
    >
      <div className="max-w-[1240px] mx-auto px-6 ">
        <div className="flex flex-col lg:flex-row justify-center gap-2 items-center lg:justify-between w-full">
          <div div className="flex flex-col">
            <h1 className="text-2xl xl:text-3xl font-semibold text-[#8A0000]">
              Ride the Thrill: Motorcycle Rentals
            </h1>
            <h1 className="text-4xl xl:text-5xl font-bold my-2">
              Elevate Your Journey: Ride with Freedom and Style!
            </h1>
            <p className="text-lg my-2">
              Ready to embark on an unforgettable journey? Choose your ride from
              our premium selection of motorcycles and experience the road like
              never before. Your next adrenaline-filled escapade is just a click
              away. Let's ride together!!!
            </p>
            <div className="flex items-center gap-4 mt-4">
              <button className="py-3 px-7 shadow-lg rounded border border-[#8A0000] hover:bg-white hover:text-[#8A0000] bg-[#8A0000] text-white duration-300 font-semibold flex items-center gap-2">
                Rent Now{" "}
                <span>
                  <MdOutlineTwoWheeler size={20} />
                </span>
              </button>
              <button className="py-3 px-7 border border-gray-900 font-semibold rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 duration-300 flex items-center gap-2 shadow-lg group">
                Learn More
                <span className="group-hover:rotate-90 duration-300">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>

          <img
            src="https://www.yamaha-motor.co.id/all-new-aerox-connected/images/Std-S-Silver.png"
            alt=""
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
