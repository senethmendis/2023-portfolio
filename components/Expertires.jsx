import React from "react";
import { ExpertList } from "@/public/Index";
export const Expertires = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-purple-500">Experties</h1>
      <p className="py-3">
        Programming languages, frameworks liberies I use for my projects{" "}
      </p>
      <div className="w-full my-4 py-4  grid grid-cols-1 p-3 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ExpertList.map((listItems) => (
          <div
            key={listItems.id}
            className="hover:scale-105 hover:text-white hover:bg-gradient-to-t from-purple-600 to-purple-400 duration-300 ease-in-out flex flex-col justify-center items-center gap-3 py-6 rounded-lg bg-slate-200 text-black"
          >
            {listItems.icon}
            <h1 className="text-2xl font-bold">{listItems.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
