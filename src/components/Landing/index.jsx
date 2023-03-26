import React from 'react'
import img from "../../assets/SVG/programmer.svg"
import FillableBtn from '../Buttons/FillableBtn'
const Landing = () => {
   return (
      <section className="flex flex-col items-center justify-center w-full h-screen text-black md:flex-row">
         <div className='flex flex-col items-center justify-start md:items-start'>
            <h1 className="text-6xl font-bold text-[#5C5D62]">Hi!</h1>
            <h1 className="font-extrabold text-7xl text-secondary">
               I am Mani Rmp
            </h1>
            <h1 className="font-sans text-3xl tracking-primary">
               FRONT-END DEVELOPER
            </h1>
            <FillableBtn value="Visit My Works" />
         </div>
         <div>
            <img src={img} className="w-[40rem] px-10" />
         </div>
      </section>
   )
}

export default Landing
