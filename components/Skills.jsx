import React from "react";

export default function Skills() {
  const skills = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "Javascript",
    },
    {
      skill: "React JS",
    },
    {
      skill: "React Native",
    },
    {
      skill: "Firebase",
    },
    {
      skill: "Supabase",
    },
    {
      skill: "Next JS",
    },
    {
      skill: "WordPress",
    },
    {
      skill: "Shopify",
    },
    {
      skill: "Liquid",
    },
    {
      skill: "Shopify Theme Development",
    },
    {
      skill: "Figma",
    },
    {
      skill: "Adobe XD",
    },
    {
      skill: "Canva",
    },
    {
      skill: "Excel",
    },
    {
      skill: "MS Word",
    },
    {
      skill: "MS PowerPoint",
    },
  ];
  return (
    <div>
      <div className="max-w-4xl m-auto mt-32">
        <h1 className="text-2xl">Skills</h1>
        <div className="flex flex-wrap justify-between gap-x-14 pt-32 gap-y-6">
          {skills.map(({ skill }, index) => {
            return (
              <p
                key={index}
                className="border px-6 py-2 cursor-pointer hover:border-indigo-500 hover:text-indigo-500 transition-all"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
