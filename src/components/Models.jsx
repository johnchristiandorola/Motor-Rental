import React from "react";

import Honda from "./Honda";
import Yamaha from "./Yamaha";
const Models = () => {
  return (
    <div name="models" className="w-full text-gray-900 bg-gray-100 py-12">
      <div className="max-w-[1240px] px-6 mx-auto my-24">
        <div>
          <h1 className="text-center text-3xl lg:text-5xl font-bold tracking-wide uppercase mb-10 text-[#8A0000] ">
            Motorcycle Models
          </h1>
          <h1 className="text-xl lg:text-3xl font-bold text-center">
            HONDA SCOOTERS
          </h1>
          <Honda />
          <h1 className="text-xl lg:text-3xl font-bold text-center mt-10">
            YAMAHA SCOOTERS
          </h1>
          <Yamaha />
        </div>
      </div>
    </div>
  );
};

export default Models;
