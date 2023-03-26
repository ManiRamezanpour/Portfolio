import React from 'react'
import Box from '../../Common/Box'
const Projects = () => {
   const projects = [
      {
         imgUrl: '../../images/web-developer-portfolio.png',
         title: 'Freelancer',
         describe:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime repellendus iure possimus quaerat saepe non similique unde quod iusto ea numquam reiciendis, recusandae, facere, dolores laboriosam eius aliquam.',
      },
   ]
   return (
      <section className="w-full">
         {projects.map((item) => (
            <Box
               imgUrl={item.imgUrl}
               title={item.title}
               describ={item.describe}
            />
         ))}
      </section>
   )
}

export default Projects
