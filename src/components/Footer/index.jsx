import React from 'react'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
const Footer = () => {
   const date = new Date()
   return (
      <>
         <footer className="flex items-center justify-between px-16 py-2 bg-light border-t dark:bg-dark">
            <div>
               <h1 className="text-xl text-dark dark:text-light">
                  Create by Mani with love in {date.getFullYear()}
               </h1>
            </div>
            <div className="flex">
               <FaLinkedinIn className="mx-3 cursor-pointer text-priamry dark:text-light w-7 h-7 hover:text-primary" />
               <FaTelegramPlane className="cursor-pointer text-priamry dark:text-light w-7 h-7 hover:text-primary" />
               <SiGmail className="mx-3 cursor-pointer text-priamry dark:text-light w-7 h-7 hover:text-primary" />
            </div>
         </footer>
      </>
   )
}

export default Footer
