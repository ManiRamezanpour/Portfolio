import * as React from 'react'
import ListsItem from '../../Common/Link'
import ThemeButton from '../Buttons/ThemeBtn'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
const Header = () => {
   return (
      <header className="fixed flex items-center justify-between w-full px-10 py-2 text-center text-light bg-light dark:bg-dark">
         <div className="flex">
            <span className="text-4xl text-dark dark:text-light">{'<'}</span>{' '}
            <span className="text-4xl font-bold text-primary">Manirmp</span>
            <span className="text-4xl text-dark dark:text-light">
               {'/>'}
            </span>{' '}
         </div>
         <div>
            <button className="block md:hidden" >
               <GiHamburgerMenu className="w-10 h-10 text-black dark:text-light" />
            </button>
            <ul className="hidden md:flex">
               <ListsItem prop="Skills" />
               <ListsItem prop="Open Source" />
               <ListsItem prop="Contact Me" />
                  <ThemeButton />
            </ul>
         </div>
      </header>
   )
}

export default Header
