import React from "react";
import { CiDesktopMouse1 } from "react-icons/ci";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaMouse,
} from "react-icons/fa";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMouse } from "react-icons/md";

export default function Hero() {
  return (
    <div>
      <div className="p-4 flex items-center max-w-5xl m-auto min-h-[80vh]">
        <div className="space-y-6">
          <h5 className="text-2xl">👋 Hey There, I&apos;m Vinay</h5>
          <h3 className="text-4xl leading-[2.9rem]">
            A <span className="text-indigo-600">Web Developer</span> changing
            the world one <br /> pixel at a time.
          </h3>
          <h5 className="text-xl text-gray-400">
            Currently working at Oplakart. Previously at Codepaper & Kide Learn.
          </h5>
          <div className="flex gap-8 items-center">
            <FaGithub className="text-2xl text-[#2e2e2e]" />
            <FaLinkedin className="text-2xl text-[#2e2e2e]" />
            <FaInstagram className="text-2xl text-[#2e2e2e]" />
            <FaFacebook className="text-2xl text-[#2e2e2e]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="#skills">
          <h6 className="flex items-center gap-2 text-gray-400">
            Scroll Down <MdOutlineMouse className="font-bold" />
          </h6>
        </a>
      </div>
    </div>
  );
}
