import React from "react";
import { InterestsList } from "@/public/Index";
import { InterCard } from "./InterCard";

export const Interests = () => {
  return (
    <div className="w-full h-full md:h-screen text-center flex flex-col justify-center items-center">
      <div className="py-10">
        <h1 className="text-5xl text-purple-500 font-bold">Interesets</h1>
        <p>Things that I love to do in my free time</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {InterestsList.map((items)=>(
            <InterCard key={items.id} name={items.name} icon={items.icon} />
        ))}
      </div>
    </div>
  );
};
