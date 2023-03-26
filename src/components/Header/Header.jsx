import * as React from 'react'
import ThemeBtn from '../Buttons/ThemeBtn'
const Header = () => {
   let listItem = [{ name: 'Home' }, { name: 'About' }, { name: 'Expreince' }]
   return (
      <header className="flex items-center justify-between">
         <h1 className="py-3 text-4xl font-bold text-primary">ManiRmp</h1>
         <div>
            <ul className="flex">
               <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
                  Home
               </li>
               <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
                  About Me
               </li>
               <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
                  Skills
               </li>
               <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
                  Projects
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header
