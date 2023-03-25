import React from 'react'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
const Footer = () => {
   const date = new Date()
   return (
      <>
         <hr className="w-full" />
         <footer className="flex items-center justify-between">
            <div>
               <h1>Create by Mani with love in {date.getFullYear()}</h1>
            </div>
            <div className="flex">
               <FaLinkedinIn />
               <FaTelegramPlane />
               <SiGmail />
            </div>
         </footer>
      </>
   )
}

export default Footer
