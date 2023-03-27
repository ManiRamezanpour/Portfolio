import React from 'react'
const ListsItem = ({ prop }) => {
   return (
      <li className="px-2 py-1 text-xl cursor-pointer dark:text-white hover:bg-primary hover:text-white rounded-2xl ">
         {prop}
      </li>
   )
}

export default ListsItem
