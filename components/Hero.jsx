"use client";
import Image from "next/image";
import React from "react";
import HoroBanner from "../public/HoroBanner.png";
import { TypeAnimation } from "react-type-animation";


export const Hero = () => {
  return (
    <div
      className="  w-full h-full lg:h-screen"
      id="Hero"
    >
        <div className="w-full h-full mg:flex  py-20 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center text-white">
        <div className="text-center px-2 md:text-left">
          <div className="py-3 ">
            <h1 className="text-3xl">I am</h1>
            <h1 className="text-7xl font-bold">
              Seneth <span className="text-purple-500">.</span>{" "}
            </h1>
            <p className="tracking-widest capitalize">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Wake up to reality",
                  2000,
                  "",
                ]}
                wrapper="span"
                speed={5}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
                className="font-light text-md py-2"
              />
            </p>
          </div>
          <button className=" font-bold py-2 px-5 rounded-md duration-300 bg-gradient-to-r from-purple-500 to-purple-900 hover:from-cyan-500 hover:to-purple-500">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={HoroBanner}
            alt="horebanner"
            className="mx-auto w-auto h-auto"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="w-full h-auto text-left md:text-right px-4 sm:px-2 md:px-0">
          <p className="text-purple-500">Introduction</p>

          <h1 className="md:text-7xl text-[3.6rem] font-bold py-0 sm:py-2">
            Software Engineer,
          </h1>
          <h1 className="py-2 sm:py-3 text-xl">UX/UI Designer</h1>
          <p>
            To Secure a Challenging Positive in a reputable organization to
            expand my learning’s, knowledgeand and skills. Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company.
          </p>

          <a className="text-bold text-purple-600 tracking-wide my-6" href="">
            Lorem More
          </a>
        </div>
        </div>
      
    </div>
  );
};
