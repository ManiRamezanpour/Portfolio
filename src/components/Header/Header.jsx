import * as React from 'react'
import ThemeBtn from '../Buttons/ThemeBtn'
import ListItem from '../List'
const Header = () => {
   let listItem = [{ name: 'Home' }, { name: 'About' }, { name: 'Expreince' }]
   return (
      <header className="flex flex-row items-center justify-around h-16 mt-10 text-white bg-secondary rounded-2xl">
         <h1 className="py-3 text-4xl font-bold text-white">ManiRmp</h1>
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
