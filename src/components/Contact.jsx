import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-white text-gray-900 py-16 px-6 mx-auto"
    >
      <div className="max-w-[1240px] mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl  lg:text-5xl uppercase font-extrabold text-[#8A0000]">
              Get in Touch!
            </h1>
            <p className="text-lg">
              Have questions, need assistance, or ready to hit the road? We're
              here for you! Feel free to reach out to our dedicated team at
              MOTORENT for all your motorbike rental needs.
            </p>

            <div className="flex flex-col gap-3 my-4 justify-center items-center">
              <div className="flex gap-2 items-center">
                <AiFillPhone className="text-[#8A0000] text-xl" />
                <p className="text-lg font-semibold hover:text-[#8A0000] cursor-pointer duration-300">
                  0912-345-6789
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <AiFillMail className="text-[#8A0000] text-xl" />
                <p className="text-lg font-semibold hover:text-[#8A0000] cursor-pointer duration-300">
                  motorent.test@gmail.com
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ImLocation2 className="text-[#8A0000] text-xl" />
                <p className="text-lg font-semibold hover:text-[#8A0000] cursor-pointer duration-300">
                  City of General Trias, Cavite
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-xl w-full ">
            <form action="" className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl ">
                  Full Name <span className="text-[#8A0000]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="E.g: Tanggol Dalisay"
                  className="p-2 text-black border bg-zinc-50"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl ">
                  Email <span className="text-[#8A0000]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="youremail@example.com"
                  className="p-2 text-black border bg-zinc-50"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl ">
                  Tell us about it <span className="text-[#8A0000]">*</span>
                </label>
                <textarea
                  className="p-2 text-black border bg-zinc-50"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button className="bg-[#8A0000] font-semibold tracking-widest hover:bg-white hover:text-[#8A0000] hover:border-[#8A0000] duration-300 rounded p-3 text-white border ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
