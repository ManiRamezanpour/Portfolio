import * as React from 'react'
import AboutME from '../components/Aboutme'
import { ScrollToTop } from '../components/Buttons/scrollToTop'
import Landing from '../components/Landing'
import Skilss from '../components/Skills'
import MainLayout from '../Layout/Main'

export default function IndexPage() {
   return (
      <MainLayout>
         <main className='bg-light dark:bg-dark'>
         <ScrollToTop/>
         <Landing />
         <AboutME />
         <Skilss />
         {/* <Projects /> */}
         </main>
      </MainLayout>
   )
}
