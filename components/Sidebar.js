import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen }) => {
   return (
      <div
         className={`flex md:hidden flex-col transition-all duration-150 ease-in-out bg-gray-100 w-full border-b-2 z-50 border-gray-500 shadow-md absolute min-h-[300px] top-full justify-center py-12 items-center space-y-7 ${
            !isOpen ? 'right-0' : '-right-[120%]'
         }`}
      >
         <Link href="/">
            <a className="cursor-pointer border-b-2 w-full text-center pb-3 text-lg font-medium text-gray-500 hover:text-gray-900 font-headings">
               Johndoe
            </a>
         </Link>
         <Link href="/">
            <a className="cursor-pointer border-b-2 w-full text-center pb-3 text-lg font-light text-gray-500 hover:text-gray-900 font-headings">
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
