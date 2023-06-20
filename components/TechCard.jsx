import React from "react";
import Image from "next/image";

export const TechCard = ({ id, name, logo }) => {
  return (
    <div className="w-full border-white backdrop-blur-lg rounded-lg  py-3 px-2 flex flex-row text-white/60  justify-between items-center  gap-2 border-2 hover:shadow-lg hover:shadow-purple-500/80">
      <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">{name}</h1>
      <Image src={logo} alt="logo" width={20} height={20} className="aspect-square h-auto w-auto object-contain" />
    </div>
  );
};
