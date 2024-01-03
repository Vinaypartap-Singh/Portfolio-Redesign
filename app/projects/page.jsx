import { projectData } from "@/data/ProjectsData";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function page() {
  return (
    <div>
      <div className="min-h-screen pt-10 mt-24 max-w-4xl m-auto">
        <h1 className="text-2xl">Projects</h1>
        <p className="mt-5 tracking-wider">
          I have worked on various projects and had the opportunity to explore
          new technologies, while trying to solve new problems. This experience
          has been great and has helped me improve myself on a daily basis.
        </p>
        <div className="p-3 mt-10 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-red-50  bg-transparent">
          {projectData.map((data, index) => {
            return (
              <div
                key={index}
                className={`shadow-md h-fit text-3xl flex flex-col justify-center items-center transition-all rounded-md pt-10 m-5 projectDataSection`}
              >
                <Image
                  src={data.image}
                  alt="Picture of the author"
                  width={1000}
                  height={1000}
                  className="w-full h-4/6 object-contain rounded-md px-10"
                />
                <div className="bg-white w-full h-full mt-10 p-5 rounded-md space-y-2">
                  <h5 className="text-sm">{data.technology}</h5>
                  <h4 className="text-lg tracking-widest">{data.name}</h4>
                  <div className="flex gap-2 items-center">
                    {data.github && (
                      <Link
                        href={data.github}
                        className="text-sm flex items-center gap-1"
                      >
                        Github <FaGithub />
                      </Link>
                    )}
                    {data.websiteURL && (
                      <Link
                        href={data.websiteURL}
                        className="text-sm flex items-center gap-1"
                      >
                        Visit Now <CiGlobe />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
