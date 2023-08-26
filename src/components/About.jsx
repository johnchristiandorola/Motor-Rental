import React from "react";
import { GiClick } from "react-icons/gi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
const About = () => {
  return (
    <div
      name="about"
      className="w-full text-gray-900  flex flex-col items-center justify-center"
    >
      <div className="max-w-[1240px] mx-auto px-6 ">
        <div className="w-full my-20">
          <div className="text-center">
            <h1 className="uppercase text-xl text-[#8A0000] font-semibold tracking-wide my-2">
              Motorcyle rentals in the Philippines
            </h1>
            <h1 className="font-bold tracking-widest text-3xl">
              Browse, Pick and Reserve.
            </h1>
            <p className="mt-12 text-lg">
              Motorent was founded by a group of motorcycle enthusiasts who
              share a passion for exploration and adventure. Our mission is to
              provide riders with a seamless renting experience and help them
              create unforgettable memories on the road.
            </p>
          </div>
          <div className="mt-16 text-center">
            <h1 className="text-[#8A0000] my-10 text-4xl font-bold uppercase ">
              Why Choose Us
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              <div className="flex flex-col items-center  gap-3">
                <div className="text-[#8A0000] bg-red-200 p-3 rounded-full">
                  <GiClick size={40} />
                </div>
                <h1 className="text-xl font-bold uppercase text-black tracking-wide   ">
                  Easy Renting
                </h1>
                <p className="font-semilight">
                  Our user-friendly online booking system ensures a hassle-free
                  experience, allowing you to reserve your dream bike in just a
                  few clicks.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-[#8A0000] bg-red-200 p-3 rounded-full">
                  <GiFullMotorcycleHelmet size={40} />
                </div>
                <h1 className="text-xl font-bold uppercase text-black tracking-wide   ">
                  Safety First
                </h1>
                <p className="font-semilight">
                  Your safety is our priority. All our motorcycles undergo
                  rigorous maintenance and inspection to guarantee a safe and
                  smooth ride.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-[#8A0000] bg-red-200 p-3 rounded-full">
                  <RiTeamFill size={40} />
                </div>
                <h1 className="text-xl font-bold uppercase text-black tracking-wide   ">
                  Experienced Team
                </h1>
                <p className="font-semilight">
                  Our team of motorcycle enthusiasts is here to assist you with
                  any inquiries and ensure you have an unforgettable journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
