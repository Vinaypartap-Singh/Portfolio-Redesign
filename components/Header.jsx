import React from "react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      title: "My Work",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Resume",
      url: "/resume",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center p-8 sm:flex-row max-w-7xl justify-between m-auto">
        <Link href={"/"} className="uppercase text-lg font-semibold">Vinaypartap Singh</Link>
        <div>
          <ul className="flex gap-14 mt-5 sm:mt-0">
            {navItems.map((data, index) => {
              return (
                <li key={index}>
                  <Link
                    className="font-light uppercase text-xs hover:text-base transition-all hover:underline"
                    href={data.url}
                  >
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
