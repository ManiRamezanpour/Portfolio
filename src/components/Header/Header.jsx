import * as React from 'react'
import ListsItem from '../../Common/Link'
// import ThemeBtn from '../Buttons/ThemeBtn'
// const Header = () => {
//    let listItem = [{ name: 'Home' }, { name: 'About' }, { name: 'Expreince' }]
//    return (
//       <header className="flex items-center justify-between">
//          <h1 className="py-3 text-4xl font-bold text-primary">ManiRmp</h1>
//          <div>
//             <ul className="flex">
//                <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
//                   Home
//                </li>
//                <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
//                   About Me
//                </li>
//                <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
//                   Skills
//                </li>
//                <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
//                   Projects
//                </li>
//             </ul>
//          </div>
//       </header>
//    )
// }

// export default Header
// import Link from '../common/Link'
// import ThemeButton from './Themebutton'

import ThemeButton from '../Buttons/ThemeBtn'
const Header = () => {
   return (
      <header className="fixed flex items-center justify-between w-full px-10 py-2 text-center bg-white">
         <div className="flex">
            <span className="text-4xl dark:text-gray-400">{'<'}</span>{' '}
            <span className="text-4xl font-bold text-primary dark:text-white">
               Manirmp
            </span>
            <span className="text-4xl dark:text-gray-400 ">{'/>'}</span>{' '}
         </div>
         <div>
            <button className="block md:hidden">
               {/* <RxHamburgerMenu className="w-10 h-10 text-black dark:text-white" /> */}
            </button>
            <ul className="hidden md:flex">
               <ListsItem prop="Skills" />
               <ListsItem prop="Open Source" />
               <ListsItem prop="Contact Me" />
               {/* <li className="block pt-4 pb-4 pl-5 pr-5 cursor-pointer hover:bg-primary"> */}
               <li className="px-2 py-1 text-xl cursor-pointer hover:bg-primary hover:text-white rounded-2xl ">
                  <ThemeButton />
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header
