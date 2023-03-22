import React from 'react'
const Landing = () => {
   return (
      <section className="flex flex-col items-start justify-center w-full h-screen text-black">
         <h1 className="text-6xl font-bold text-[#5C5D62]">Hi!</h1>
         <h1 className="font-extrabold text-7xl text-secondary">
            I am John Doe
         </h1>
         <h1 className="font-sans text-3xl">FRONTEND WEB DESIGNER</h1>
         <button className='p-2 mt-3 text-white transition ease-in-out rounded-2xl w-max h-max bg-primary hover:scale-110'>Visit My Works</button>
      </section>
   )
}

export default Landing
