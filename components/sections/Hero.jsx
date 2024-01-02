import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <div className="p-4 flex items-center max-w-5xl m-auto min-h-[80vh]">
        <div className="space-y-6">
          <h5 className="text-2xl">👋 Hey There, I'm Vinay</h5>
          <h3 className="text-4xl leading-[2.9rem]">
            A <span className="text-indigo-600">Web Developer</span> changing
            the world one <br /> pixel at a time.
          </h3>
          <h5 className="text-xl text-gray-400">
            Currently working at Oplakart. Previously at Codepaper & Kide Learn.
          </h5>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <IoIosArrowDown className="text-3xl" />
      </div>
    </div>
  );
}
