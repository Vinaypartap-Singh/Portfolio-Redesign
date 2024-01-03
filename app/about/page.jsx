import React from "react";

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
  }

  timeout();


  return (
    <div className="max-w-7xl m-auto">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 text-gray-900">
              Hi there.
            </h1>
            <p class="mb-8 leading-10">
              I am VinayPartap Singh.Whether you're looking for a
              straightforward website or a sophisticated e-commerce platform, I
              have the knowledge and expertise required to realise your vision.
              Utilize my web development services to help you grow your company.
              Specialised in Shopify, Wordpress, HTML, CSS, Javascript, React
              JS, React Native, and more.
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
            <div class="flex justify-center mt-10">
              {/* Social Media Links Here */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
