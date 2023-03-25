import React from 'react'

const unFillbtn = ({ value }) => (
   <button className="p-2 mt-3 transition ease-in-out bg-transparent border text-primary border-primary hover:bg-primary hover:text-white rounded-2xl w-max h-max hover:scale-110">
      {value}
   </button>
)

export default unFillbtn
