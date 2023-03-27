// import React from 'react'
// import img from "../../assets/SVG/programmer.svg"
import FillableBtn from '../Buttons/FillableBtn'
// const Landing = () => {
//    return (
//       <section className="flex flex-col items-center justify-center w-full h-screen text-black md:flex-row">
//          <div className='flex flex-col items-center justify-start md:items-start'>
//             <h1 className="text-6xl font-bold text-[#5C5D62]">Hi!</h1>
//             <h1 className="font-extrabold text-7xl text-secondary">
//                I am Mani Rmp
//             </h1>
//             <h1 className="font-sans text-3xl tracking-primary">
//                FRONT-END DEVELOPER
//             </h1>
//             <FillableBtn value="Visit My Works" />
//          </div>
//          <div>
//             <img src={img} className="w-[40rem] px-10" />
//          </div>
//       </section>
//    )
// }

// export default Landing
// import manOnTable from '../../assets/SVG/manOnTable.svg'
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow'
import { IoMdMailOpen } from '@react-icons/all-files/io/IoMdMailOpen'
import { VscGithub } from '@react-icons/all-files/vsc/VscGithub'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import myImage from '../../images/Mr.Ramzi pour_2.jpg'
import React from 'react'
const Landing = () => {
   return (
      <section className="flex flex-col items-center justify-center pl-12 font-Montserrat md:flex-row md:justify-between md:px-32">
         <div className="flex flex-col items-center justify-start md:items-start">
            <h1 className="text-6xl font-bold text-[#5C5D62] dark:text-white">Hi!</h1>
            <h1 className="font-extrabold text-7xl text-secondary dark:text-white">
               I am Mani Rmp
            </h1>
            <h1 className="font-sans text-3xl tracking-primary">
               FRONT-END DEVELOPER{' '}
            </h1>
            <div className="flex justify-center my-4 md:justify-start">
               <VscGithub className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition bg-[#333333] text-white p-2 w-10 h-10" />
               <FaLinkedinIn className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#0D76A8] text-white p-2" />
               <IoMdMailOpen className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#EA4335] text-white p-2" />
               <FaTelegramPlane className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#3C5997] text-white p-2" />
               <FaStackOverflow className="mx-1 text-3xl rounded-full hover:cursor-pointer hover:scale-110 delay-75 ease-in-out transition w-10 h-10 bg-[#F48023] text-white p-2" />
            </div>
            <FillableBtn value="Visit My Works" />
         </div>
         <div>
            <img src={myImage} alt="" className="rounded-full shadow-2xl shadow-primary w-144 h-144" />
         </div>
      </section>
   )
}

export default Landing
