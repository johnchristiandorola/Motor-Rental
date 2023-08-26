import React from "react";

const Overlay = () => {
  return (
    <div className="w-full h-screen bg-black/70 z-10 relative top-0 left-0  p-6">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="max-w-[1240px] w-full  mx-auto">
          <div className="flex flex-col w-full mb-10 p-5 rounded-lg shadow-lg bg-white hover:cursor-pointer">
            <img
              src="https://warungasep.net/wp-content/uploads/2022/12/Honda-Click-125-2023-putih.png"
              alt=""
              className="mx-auto"
            />
            <h1 className="text-xl font-bold uppercase text-left">
              Honda Click 125i
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
