"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Phone from "./Phone";

export const Footer = () => {
  return (
    <div className="w-full h-screen" id="Contact">
      <div className="w-full h-full flex-col md:flex-row flex">
        <div className="w-full h-full md:w-1/2 py-10">
          <Canvas>
            <Stage environment="studio" intensity={0.6}>
              <Phone />
            </Stage>
            <OrbitControls autoRotate={true} enableZoom={false} />
          </Canvas>
        </div>
        <div className="w-full md:w-1/2 flex py-10 sm:py-0 flex-col sm:flex-row px-10">
          <form
            action=""
            className="flex flex-col gap-2 justify-start ease-in-out duration-200 m-auto sm:max-w-[75%] w-full"
          >
            <h1 className="text-2xl font-bold  py-3">Contact Me 📞</h1>
            <input
              type="text"
              placeholder="john Cena"
              className="p-2 rounded-md focus:outline-2 outline-purple-500  "
            />
            <input
              type="email"
              placeholder="example@email.com"
              className="p-2 rounded-md focus:outline-2 outline-purple-500  "
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message .. "
              className="p-2 rounded-md focus:outline-2 outline-purple-500  "
            ></textarea>
            <button
              type="submit"
              className="py-3 px-5 rounded-lg bg-purple-500 hover:bg-purple-800 font-bold tracking-widest"
            >
              Send
            </button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};
