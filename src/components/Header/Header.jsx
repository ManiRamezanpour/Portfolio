import * as React from 'react'
import ThemeBtn from '../Buttons/ThemeBtn'
import ListItem from '../List'
const Header = () => {
   let listItem = [{ name: 'Home' }, { name: 'About' }, { name: 'Expreince' }]
   return (
      <header className="flex flex-row items-center justify-between h-16 px-5 mt-10 rounded-2xl">
         <ul className="flex items-center justify-center">
            {listItem.map((item) => (
               <ListItem name={item.name} />
            ))}
         </ul>
         <div>
            <ThemeBtn />
         </div>
      </header>
   )
}

export default Header
