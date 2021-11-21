import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Sidebar from './Sidebar'
import Button from './Button'

const Navbar = () => {
   const [isOpen, setIsOpen] = React.useState(false)

   return (
      <nav className="flex h-[100px] relative items-center justify-between container mx-auto">
         <div className="flex items-center">
            <Image
               src="/assets/Logo.svg"
               alt="logo not found"
               height="120"
               width="120"
            />
            <Link href="/">
               <a className="cursor-pointer ml-6 text-lg font-medium text-gray-500 hover:text-gray-900 font-headings">
                  Home
               </a>
            </Link>
         </div>
         <div
            className="cursor-pointer block md:hidden"
            onClick={() => setIsOpen((old) => !old)}
         >
            {!isOpen ? (
               <Image
                  src="/assets/Hamburger Menu.svg"
                  alt="logo not found"
                  height="30"
                  width="30"
               />
            ) : (
               <Image
                  src="/assets/close.svg"
                  alt="logo not found"
                  height="20"
                  width="20"
               />
            )}
         </div>
         <Sidebar isOpen={isOpen} />
         <div className="hidden md:flex items-center space-x-7">
            <Link href="/login">
               <a className="cursor-pointer ml-6 text-lg font-medium text-gray-500 hover:text-gray-900 font-headings">
                  Login
               </a>
            </Link>
            <Button text="Create an account" path="/signUp" />
         </div>
      </nav>
   )
}

export default Navbar

// {
//    /* <Link href="/">
//       <a className="cursor-pointer ml-6 text-lg font-light text-gray-500 hover:text-gray-900 font-headings">
//           Logout
//         </a>
//     </Link> */
// }
