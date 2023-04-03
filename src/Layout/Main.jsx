import * as React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import { ThemeProvider } from '../context/ThemeContext'
const MainLayout = ({ children, pageTitle }) => {
   return (
      <ThemeProvider>
         <main className="w-full h-screen bg-light bg-center bg-cover dark:bg-dark">
            <Header />
            {children}
            <Footer />
         </main>
      </ThemeProvider>
   )
}
export default MainLayout
