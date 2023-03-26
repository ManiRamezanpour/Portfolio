import React from 'react'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
const Footer = () => {
   const date = new Date()
   return (
      <>
         {/* <hr className="w-full" /> */}
         <footer className="flex items-center justify-between py-2 border-t">
            <div>
               <h1 className="text-xl text-secondary">
                  Create by Mani with love in {date.getFullYear()}
               </h1>
            </div>
            <div className="flex">
               <FaLinkedinIn className="mx-3 cursor-pointer w-7 h-7 hover:text-primary" />
               <FaTelegramPlane className="cursor-pointer w-7 h-7 hover:text-primary" />
               <SiGmail className="mx-3 cursor-pointer w-7 h-7 hover:text-primary" />
            </div>
         </footer>
      </>
   )
}

export default Footer
