import React from 'react'
import img from '../../assets/SVG/manOnTable.svg'
import UnFillbtn from '../Buttons/UnFillBtn'
const AboutME = () => {
   return (
      <section className="flex flex-col items-center justify-center w-full h-screen md:flex-row">
         <div>
            <img src={img} className="w-9xl" />
         </div>
         <div className="flex flex-col items-start justify-center px-20">
            <h4 className="font-sans text-secondary">Who Am I ?</h4>
            <h1 className="text-4xl font-bold text-primary">About Me</h1>
            <p className="font-sans text-secondary">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Repudiandae aliquid ad provident aut fuga animi soluta quae eos
               non cupiditate voluptates dolorem, doloremque quos dicta
               quibusdam impedit iure nemo a iste culpa! Quasi quibusdam hic
               recusandae delectus velit officiis explicabo voluptatibus! Nemo
               esse similique, voluptates labore distinctio, placeat explicabo
               facilis molestias, blanditiis culpa iusto voluptatem ratione
               eligendi a, quia temporibus velit vero ipsa sint ex voluptatum
               expedita aliquid! Debitis, nam!
            </p>
            <UnFillbtn value="Download CV" />
         </div>
      </section>
   )
}

export default AboutME
