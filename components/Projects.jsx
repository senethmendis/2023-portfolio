import { ProjectCard } from "./ProjectCard";
import React from "react";
import { ProjectList } from "@/public/Index";

export const Projects = () => {
  return (
    <div id="Work" className="w-full h-full md:h-screen flex flex-col justify-center items-center">
      
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-purple-500">Projects</h1>
        <p className="py-5">Projects I have completed so far</p>
      </div>

      <div
        className="  
      gap-4 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        {ProjectList.map((items) => (
          <ProjectCard
            key={items.id}
            imgPath={items.projectIcon}
            name={items.creator}
            title={items.name}
            date={items.subText}
            lang={items.langs}
          />
        ))}
      </div>
      
    </div>
  );
};
