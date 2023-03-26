import React, { useEffect, useState } from 'react'
import { BiArrowFromBottom } from '@react-icons/all-files/bi/BiArrowFromBottom'

import { classNames } from '../../utils/ClassName'

export const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false)

   const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)

      return () => {
         window.removeEventListener('scroll', toggleVisibility)
      }
   }, [])

   return (
      <div className="fixed bottom-2 right-2">
         <button
            type="button"
            onClick={scrollToTop}
            className={classNames(
               isVisible ? 'opacity-100' : 'opacity-0',
               'bg-primary hover:bg-pink-700 focus:ring-primary inline-flex items-center rounded-full p-3 mx-2 my-2 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}
         >
            <BiArrowFromBottom className="w-6 h-6" aria-hidden="true" />
         </button>
      </div>
   )
}
