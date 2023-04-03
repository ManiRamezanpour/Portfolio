import React from 'react'
const ListsItem = ({ prop }) => {
   return (
      <li
         className="px-2 py-1 text-xl cursor-pointer hover:underline dark:text-light hover:text-primary dark:hover:text-primary text-dark underline-offset-8 hover: rounded-2xl "
      >
         {prop}
      </li>
   )
}

export default ListsItem
