import React from 'react'
import img from '../../assets/SVG/manOnTable.svg'
import UnFillbtn from '../Buttons/UnFillBtn'
const AboutME = () => {
   return (
      <section className="flex flex-col items-center justify-center w-full h-screen px-10 md:flex-row">
         <div className='ml-10'>
            <img src={img} />
         </div>
         <div className="flex flex-col items-start justify-center px-20">
            <h4 className="font-sans text-secondary">Who Am I ?</h4>
            <h1 className="text-4xl font-bold text-primary">About Me</h1>
            <p className="block mt-5 text-xl font-thin text-gray-400 md:text-3xl aboutme">
               A Junior Front-end Developer
               <br />
               🚀 having an experience of building Web applications with
               JavaScript / Reactjs and some other cool libraries and
               frameworks.
            </p>
            <UnFillbtn value="Download CV" />
         </div>
      </section>
   )
}

export default AboutME
