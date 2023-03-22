import React from 'react'

const ListItem = ({ name }) => {
   return (
      <li className="p-2 text-2xl ease-in-out delay-100 rounded-lg hover:cursor-pointer hover:bg-primary hover:text-white hover:transition hover:scale-110">
         {name}
      </li>
   )
}

export default ListItem
