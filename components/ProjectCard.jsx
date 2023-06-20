import Image from "next/image";
import React from "react";

export const ProjectCard = ({ id, imgPath, name, title, date, lang }) => {
  return (
    <div className="hover:scale-105 max-h-[210px]  duration-300 shadow-xl hover:shadow-purple-500/95 w-full bg-white rounded-xl border text-black p-2 sm:px-3 sm:py-4">
      <div>
        <Image
          src={imgPath}
          alt="dp img"
          width={50}
          height={50}
          className="rounded-full w-auto h-auto shadow-md"
        />
        <p className="text-bold capitalize py-2 md:py-0">@ {name}</p>
      </div>
      <h1 className="font-3xl font-bold">
        {title}
      </h1>
      <h2 className="text-gray-400 capitalize">{date}</h2>
      <div className="md:py-0 py-2">
        <p className="font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-500 text-transparent"> {lang} </p>
      </div>
    </div>
  );
};
