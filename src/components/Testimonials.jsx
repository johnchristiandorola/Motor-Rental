import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { dataTestimonials } from "../data/data";

const Testimonials = () => {
  return (
    <div name="testimonials" className="w-full text-gray-900 bg-gray-100 py-16">
      <div className="max-w-[1240px] px-6 mx-auto">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-[#8A0000] text-2xl">
            Discover the Adventure
          </span>
          <br />
          Hear What Our Customers Have to Say
        </h1>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 my-10">
          {dataTestimonials.map((item, index) => (
            <div key={index} className="shadow-xl bg-white rounded-lg p-7  ">
              <div className="flex items-center gap-4 mb-4 ">
                <div className="text-2xl rounded-full p-2 bg-red-100 text-[#8A0000]">
                  <BsFillPersonFill />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">{item.person}</h1>
                  <p className="font-semibold ">{item.description}</p>
                </div>
              </div>
              <p className="italic ">"{item.line}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
