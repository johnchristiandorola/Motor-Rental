import React from "react";
import { dataYamaha, dataHonda } from "../data/data";
import { MdOutlineTwoWheeler } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
const Book = () => {
  return (
    <div name="book">
      <div className="w-full bg-white text-gray-900">
        <div className="flex flex-col items-center justify-center my-32">
          <div className="max-w-[1240px] w-full px-6">
            <div className="bg-gray-100 rounded p-12 shadow-xl ">
              <h1 className="text-2xl font-bold uppercase text-[#8A0000] text-center mb-10">
                Book a Motorcycle
              </h1>
              <form
                action=""
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                <div className="flex flex-col gap-2">
                  <label
                    className="ml-1 font-semibold flex items-center gap-2"
                    htmlFor=""
                  >
                    <MdOutlineTwoWheeler
                      size={25}
                      className=" text-[#8A0000]"
                    />
                    Select your Motorcycle
                  </label>
                  <select name="" id="" className="p-3 ">
                    <option value="">Select your motorcycle</option>
                    {dataHonda.map((item, index) => (
                      <option key={index} value="">
                        {item.motor}
                      </option>
                    ))}

                    {dataYamaha.map((item, index) => (
                      <option key={index} value="">
                        {item.motor}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="ml-1 font-semibold flex items-center gap-2"
                    htmlFor=""
                  >
                    <BsFillPersonFill size={20} className=" text-[#8A0000]" />
                    Name
                  </label>
                  <input
                    className="p-3  focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900  rounded border"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="ml-1 font-semibold flex items-center gap-2"
                    htmlFor=""
                  >
                    <MdMail size={20} className=" text-[#8A0000]" />
                    Email
                  </label>
                  <input
                    className="p-3  focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900  rounded border"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="ml-1 font-semibold flex items-center gap-2"
                    htmlFor=""
                  >
                    <BiSolidContact size={20} className=" text-[#8A0000]" />
                    Contact Number
                  </label>
                  <input
                    className="p-3  focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900  rounded border"
                    type="tel"
                    pattern="[0-9] {11}"
                    required
                    placeholder="09XX-XXX-XXXX"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="ml-1 font-semibold flex items-center gap-2"
                    htmlFor=""
                  >
                    <BsFillCalendar2CheckFill
                      size={20}
                      className=" text-[#8A0000]"
                    />
                    Pick-up Date
                  </label>
                  <input
                    className="p-3  focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900  rounded border"
                    type="date"
                    placeholder="Choose a date:"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="md:mt-8 bg-[#8A0000] font-semibold tracking-widest hover:bg-white hover:text-[#8A0000] hover:border-[#8A0000] duration-300 rounded p-3 text-white border"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
