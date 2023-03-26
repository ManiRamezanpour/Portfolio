import React from 'react'
const Box = ({ imgUrl, title, describ }) => {
   return (
      <div className="flex border h-72 border-primary rounded-2xl">
         <img src={imgUrl} alt="" className="w-1/6 h-full rounded-l-2xl" />
         <div className="flex flex-col mt-2">
            <h1 className="text-5xl">{title}</h1>
            <p className="text-secondary">{describ}</p>
         </div>
      </div>
   )
}

export default Box
