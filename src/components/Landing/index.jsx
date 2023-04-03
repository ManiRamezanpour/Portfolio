import FillableBtn from '../Buttons/FillableBtn'
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow'
import { IoMdMailOpen } from '@react-icons/all-files/io/IoMdMailOpen'
import { VscGithub } from '@react-icons/all-files/vsc/VscGithub'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import myImage from '../../images/manirmp-removebg-preview.png'
// import myImage from '../../images/Mr.Ramzi pour_2.jpg'

import React from 'react'
const Landing = () => {
   return (
      <section className="flex flex-col items-center justify-center pl-12 md:pt-56 font-Montserrat md:flex-row md:justify-between md:px-32">
         <div className="flex flex-col items-center justify-start md:items-start">
            <h1 className="text-6xl font-bold text-[#5C5D62] dark:text-primary">
               Hi 👋 !
            </h1>
            <h1 className="font-extrabold text-7xl text-primary dark:text-light">
               I am Mani Rmp
            </h1>
            <h1 className="font-sans text-3xl tracking-primary text-gray dark:text-primary">
               FRONT-END DEVELOPER{' '}
            </h1>
            <div className="flex justify-center my-4 md:justify-start">
               <a href="https://github.com/Maniramzanpoor">
                  <VscGithub className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition bg-[#333333] text-light p-2 w-10 h-10" />
               </a>
               <a href="https://www.linkedin.com/in/mani-ramezanpour-38770a237/">
                  <FaLinkedinIn className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#0D76A8] text-light p-2" />
               </a>
               <IoMdMailOpen className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#EA4335] text-light p-2" />
               <FaTelegramPlane className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#3C5997] text-light p-2" />
               <FaStackOverflow className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#F48023] text-light p-2" />
            </div>
            <a href="https://github.com/Maniramzanpoor">
               <FillableBtn value="Visit My Works" />
            </a>
         </div>
      </section>
   )
}

export default Landing
