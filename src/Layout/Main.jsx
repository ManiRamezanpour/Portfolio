import * as React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'

const MainLayout = ({ children, pageTitle }) => {
   return (
      <main className="w-full h-screen bg-center bg-cover px-44">
         <Header />
         {children}
         <Footer />
      </main>
   )
}
export default MainLayout
