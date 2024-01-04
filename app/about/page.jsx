import React from "react";
import Image from "next/image";

export default function page() {
  const specialties = [
    {
      title: "Front end development",
    },
    {
      title: "React JS",
    },
    {
      title: "React Native",
    },
    {
      title: "Firebase",
    },
    {
      title: "WordPress",
    },
    {
      title: "WooCommerce",
    },
    {
      title: "Shopify Liquid (Theme Development)",
    },
    {
      title: "Supabase",
    },
  ];

  const timeout = () => {
    setTimeout(() => {
      console.log("Timeout");
    }, 3000);
  };

  timeout();

  return (
    <div className="max-w-7xl m-auto px-10 lg:px-0">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start ">
            <h1 className="title-font text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 text-gray-900">
              Hi there.
            </h1>
            <p className="mb-8 leading-10">
              My name is VinayPartap Singh and I am a web developer. Whether you
              need a simple website or a complex e-commerce platform, I have the
              skills and knowledge to bring your vision to life. Utilize my web
              development services to help your business grow. I specialize in
              Shopify, Wordpress, HTML, CSS, Javascript, React JS, React Native,
              and more.
            </p>
            <h5 className="text-xl">Specialties:</h5>
            <div>
              <ul className="flex flex-col gap-3 ml-8 mt-5">
                {specialties.map(({ title }, index) => {
                  return (
                    <li key={index} className="list-disc">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              {/* Social Media Links Here */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={"https://dummyimage.com/720x600"}
              width={720}
              height={600}
            />
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
