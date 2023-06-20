import React from 'react'

export const InterCard = ({id,name,icon}) => {
  return (
    <div className="w-full h-40 border-white bg-white backdrop-blur-lg rounded-lg capitalize  
    py-4 px-2 flex flex-col text-gray-500  justify-center items-center  gap-2 border-2 hover:shadow-lg hover:shadow-purple-500/80">
      <h1 className="text-2xl font-semibold tracking-wider">{name}</h1>
      <h1 className="aspect-square object-contain text-purple-500" >{icon}</h1>
    </div>
  )
}
