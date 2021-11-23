import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

const Sidebar = ({ isOpen }) => {
   const signOutHandler = async () => {
      await signOut(auth)
      Router.push('/')
   }

   return (
      <div
         className={`flex md:hidden flex-col transition-all duration-250 ease-in-out bg-gray-100 w-48 border-b-2 z-50 border-t-2 border-gray-500 right-0 shadow-lg absolute min-h-[200px] top-full justify-center py-12 items-center space-y-7 ${
            isOpen
               ? 'opacity-100 pointer-events-auto'
               : 'opacity-0 pointer-events-none'
         }`}
      >
         <Link href="/">
            <a
               onClick={signOutHandler}
               className="cursor-pointer border-b-2 w-full text-center pb-3 text-lg font-light text-gray-500 hover:text-gray-900 font-headings"
            >
               Logout
            </a>
         </Link>
      </div>
   )
}

Sidebar.propTypes = {
   isOpen: PropTypes.bool.isRequired,
}

export default Sidebar
