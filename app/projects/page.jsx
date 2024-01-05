import { projectData } from "@/data/ProjectsData";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PiArrowSquareOutFill } from "react-icons/pi";

export default function page() {
  return (
    <div>
      <div className="min-h-screen pt-10 mt-10 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className="text-2xl">Projects</h1>
          <p className="mt-5 tracking-wider">
            I have worked on various projects and had the opportunity to explore
            new technologies, while trying to solve new problems. This
            experience has been great and has helped me improve myself on a
            daily basis.
          </p>
        </div>

        <div className="p-3 mt-10 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-red-50  bg-transparent">
          {projectData.map((data, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer shadow-md hover:shadow-xl h-fit text-3xl flex flex-col justify-center items-center transition-all rounded-md m-5 projectDataSection`}
              >
                {/* <Image
                  src={data.image}
                  alt="Picture of the author"
                  width={1000}
                  height={1000}
                  className="w-full h-4/6 object-contain rounded-md px-10"
                /> */}
                <div className="bg-white w-full h-full p-5 rounded-md space-y-4">
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-xl tracking-widest my-6 font-medium">
                      {data.name}
                    </h4>
                    <div className="flex gap-2 items-center">
                      <Link href={`/projects/${data.id}`}>
                        <PiArrowSquareOutFill className="text-sm flex items-center gap-1" />
                      </Link>
                      {data.github && (
                        <Link
                          href={data.github}
                          className="text-sm flex items-center gap-1"
                        >
                          <FaGithub />
                        </Link>
                      )}
                      {data.websiteURL && (
                        <Link
                          href={data.websiteURL}
                          className="text-sm flex items-center gap-1"
                        >
                          <CiGlobe />
                        </Link>
                      )}
                    </div>
                  </div>

                  <h5 className="text-sm">{data.technology}</h5>
                  <div className="flex gap-4 items-center">
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
        <div className="text-center mb-20 mt-10">
          <button className="border-2 py-3 px-8 rounded-md border-indigo-600 text-indigo-600 hover:bg-violet-600 hover:text-white transition-all mt-5">
            <Link href={"/resume"}>Resume</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
