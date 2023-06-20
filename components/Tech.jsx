import React from "react";
import { TechCard } from "./TechCard";
import { TechList, ToolsList2 } from "@/public/Index";
import { ToolsList } from "@/public/Index";

export const Tech = () => {
  return (
    <div
      id="Tech"
      className="w-full h-full flex justify-center items-center flex-col"
    >
      <div className="py-10 text-center sm:py-5 md:py-0 lg:py-10">
        <h1 className="text-4xl font-bold text-purple-500 ">Technologies</h1>
        <p className="py-2">Tech and libraries I use</p>
      </div>
      <div className=" w-full h-full">
        <div className="gap-4 grid px-2 justify-center items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TechList.map((card) => (
            <TechCard key={card.id} logo={card.logo} name={card.name} />
          ))}
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className=" w-full ">
          
            <h1 className="text-4xl text-center font-bold text-purple-500 py-10">
              Diagram and Wireframe Design
            </h1>
          

          <div className="grid px-2 justify-center items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ToolsList.map((items) => (
              <TechCard key={items.id} name={items.name} logo={items.icon} />
            ))}
          </div>
        </div>

        <div className="w-full">
          
            <h1 className="text-4xl text-center py-10 font-bold text-purple-500 ">IDE and OS</h1>
          

          <div className="grid px-2 justify-center items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ToolsList2.map((items) => (
              <TechCard key={items.id} name={items.name} logo={items.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
