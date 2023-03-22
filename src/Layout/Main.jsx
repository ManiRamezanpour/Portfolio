import * as React from 'react'
import Header from '../components/Header/Header'

const MainLayout = ({ children, pageTitle }) => {
   return (
      <main className="w-full h-screen px-32">
         <Header />
         {children}
      </main>
   )
}
export default MainLayout
