import * as React from 'react'
import AboutME from '../components/Aboutme'
import Landing from '../components/Landing'
import Skilss from '../components/Skills'
import MainLayout from '../Layout/Main'

export default function IndexPage() {
   return (
      <MainLayout>
         <Landing />
         <AboutME />
         <Skilss />
      </MainLayout>
   )
}
