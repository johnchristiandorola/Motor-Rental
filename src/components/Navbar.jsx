import React, { useState } from "react";
import { MdOutlineTwoWheeler } from "react-icons/md";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full fixed h-[80px] px-6 pr-10 mx-auto bg-white shadow text-gray-900 z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto">
          {/* MOBILE */}
          <a href="/">
            <div className="flex items-center gap-2 cursor-pointer pt-1 lg:pt-0">
              <MdOutlineTwoWheeler size={50} className="text-[#8A0000]" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-2xl uppercase">Motorent</h1>
              </div>
            </div>
          </a>
          <div
            onClick={handleChange}
            className="cursor-pointer lg:hidden hover:text-[#8A0000] z-20 duration-300"
          >
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>

          {/* lg SCREENS */}
          <ul className="hidden lg:flex font-semibold">
            <li className="">
              <Link to="home" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="book" smooth={true} offset={-250} duration={500}>
                Book
              </Link>
            </li>
            <li>
              <Link to="models" smooth={true} offset={-10} duration={500}>
                Models
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-80} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} offset={-90} duration={500}>
                Testimonials
              </Link>
            </li>

            <li className="pr-0">
              <Link to="contact" smooth={true} offset={0} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex gap-3">
            <button className="py-2 px-6 shadow-lg rounded border border-gray-900 hover:text-white hover:bg-gray-900 duration-300 font-semibold">
              Log in
            </button>
            <button className="py-2 px-6 shadow-lg rounded border border-[#8A0000] hover:bg-white hover:text-[#8A0000] bg-[#8A0000] text-white duration-300 font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE LIST  */}
      <div
        className={
          nav
            ? "lg:hidden absolute z-10 w-full h-screen bg-zinc-100 top-0 left-0 px-6 pr-10 flex items-center justify-center mx-auto"
            : "hidden"
        }
      >
        <ul className="w-full h-full flex flex-col justify-center items-center gap-5 text-4xl font-semibold px-6 mx-auto">
          <li className="">
            <Link
              onClick={handleChange}
              to="home"
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleChange}
              to="book"
              smooth={true}
              offset={-250}
              duration={500}
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              onClick={handleChange}
              to="models"
              smooth={true}
              offset={-10}
              duration={500}
            >
              Models
            </Link>
          </li>
          <li>
            <Link
              onClick={handleChange}
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleChange}
              to="testimonials"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Testimonials
            </Link>
          </li>

          <li className="pr-0">
            <Link
              to="contact"
              onClick={handleChange}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </li>

          <button className="p-2 shadow-lg rounded border bg-zinc-200 border-gray-900 hover:text-white hover:bg-gray-900  duration-300 max-w-sm w-full">
            Log in
          </button>
          <button className="p-2 shadow-lg rounded border border-[#8A0000] hover:bg-white hover:text-[#8A0000] bg-[#8A0000] text-white duration-300 max-w-sm w-full">
            Register
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
