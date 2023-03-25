import { AiFillHtml5 } from '@react-icons/all-files/ai/AiFillHtml5'
import { DiCss3 } from '@react-icons/all-files/di/DiCss3'
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { SiReact } from '@react-icons/all-files/si/SiReact'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { SiRedux } from '@react-icons/all-files/si/SiRedux'
import img from '../../assets/SVG/3426526.jpg'
import { FaDatabase } from '@react-icons/all-files/fa/FaDatabase'
import { DiMysql } from '@react-icons/all-files/di/DiMysql'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import React from 'react'
const Skilss = () => {
   return (
      <section className="flex items-center justify-center w-full h-screen">
         <div>
            <img src={img} alt="" className="h-96" />
         </div>
         <div className="px-10">
            <h4 className="font-sans ">What Is My Skills ?</h4>
            <h1 className="text-4xl font-bold text-primary">My Skills</h1>
            <p className="font-sans text-xl">
               CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY
               <br /> TECH STACK
            </p>
            <div className="relative grid grid-cols-7 mt-5 right-6 text-center-center">
               <div className="flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <AiFillHtml5 className="w-12 h-12" />
                  <span className="my-3 text-xs">html-5</span>
               </div>
               <div className="flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <DiCss3 className="w-12 h-12" />
                  <span className="my-3 text-xs">css-3</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <SiTailwindcss className="w-12 h-12" />
                  <span className="my-3 text-xs">Tailwindcss</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <SiJavascript className="w-12 h-12" />
                  <span className="my-3 text-xs">Javascript</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <SiRedux className="w-12 h-12" />
                  <span className="my-3 text-xs">Redux</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <SiReact className="w-12 h-12" />
                  <span className="my-3 text-xs">ReactJs</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <FaNodeJs className="w-12 h-12" />
                  <span className="my-3 text-xs">NodeJs</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <FaDatabase className="w-12 h-12" />
                  <span className="my-3 text-xs">database</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <SiMongodb className="w-12 h-12" />
                  <span className="my-3 text-xs">Mongodb</span>
               </div>
               <div className="mx-3 flex flex-col justify-center items-center text-gray-400 hover:text-primary dark:hover:text-[#635AEB]">
                  <DiMysql className="w-12 h-12" />
                  <span className="my-3 text-xs">MySQL</span>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Skilss
