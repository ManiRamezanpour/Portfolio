import * as React from 'react'
import AboutME from '../components/Aboutme'
import { ScrollToTop } from '../components/Buttons/scrollToTop'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Skilss from '../components/Skills'
import MainLayout from '../Layout/Main'

export default function IndexPage() {
   return (
      <MainLayout>
         <ScrollToTop/>
         <Landing />
         <AboutME />
         <Skilss />
         {/* <Projects /> */}
      </MainLayout>
   )
}
