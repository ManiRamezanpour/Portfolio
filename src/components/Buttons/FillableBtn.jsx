import React from 'react'

const FillableBtn = ({ value }) => (
   <button className="p-2 mt-3 text-white transition ease-in-out rounded-2xl w-max h-max bg-primary hover:scale-110">
      {value}
   </button>
)

export default FillableBtn
