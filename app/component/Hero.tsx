import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular, FaReact, FaFigma } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    // <div className={`bg-[#5e4154] ${roboto.className} h-screen w-full m-0 lg:px-24 `}>
    <section
      className={`sticky bg-[#F6F0F4] ${roboto.className} top-0 mx-auto  h-screen max-w-[98%] items-center justify-between lg:px-24`}>
      <div className=" h-full w-full justify-between items-center  lg:flex ">
        <div id="boi" className="flex h-[50%] w-full flex-col items-center justify-center lg:mt-10  lg:px-16 ">
          
          <div className="bg-gradient-to-r from-[#2B2620]  to-[#F49F37] bg-clip-text ">
         
            <h1 className="ml-4 lg:ml-0 md:ml-0 text-3xl font-bold text-[#2B2620] lg:text-6xl text-transparent">
              Frontend React & Angular <span className="mx-28 lg:m-0 md:m-0">Developer</span>
            </h1>
          </div>

        <div className="mx-2 ">
          <div className="flex items-center ">
            <p className="mx-8 mb-10 mt-2 font-semibold text-[#F49F37] lg:mx-0">
              Hi, i&lsquo;m Isaac david. A result oriented React
              front-end developer based in Lagos. Nigeria.
            </p>
          </div>

          <div id="stack" className="flex justify-center lg:w-full md:justify-center lg:justify-start ">
            <ul className="m-2 flex list-none gap-4 text-white " >
              <li className="mr-6 text-sm font-semibold text-[#2B2620] ">
                Stack:
              </li>
              <li>
                <AiFillHtml5 className="text-xl text-[#F49F37]" />
              </li>
              <li>
                <SiTypescript className="text-xl text-sky-500" />
              </li>
              <li>
                <FaReact className="text-xl text-cyan-500" />
              </li>
              <li>
                <TbBrandNextjs className="text-xl text-black" />
              </li>
              <li>
                <FaAngular className="text-xl text-red-900" />
              </li>
              <li>
                <SiTailwindcss className="text-xl text-cyan-300" />
              </li>
              <li>
                <FaFigma className="text-xl text-[#2B2620]" />
              </li>
            </ul>
          </div>
       </div>
        </div>

        <div id="image" className="flex h-[50%] w-[100%] items-baseline justify-center lg:items-center md:items-center md:w-full transition-all duration-500 ">
          <Image
            className="rounded-full"
            alt="profile pix"
            width={200}
            height={200}
            priority
            src="/profile_pix.JPG"
          />
        </div>
      </div>
    </section>
  );
}
