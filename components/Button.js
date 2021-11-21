import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Button = ({ text, path, icon }) => {
   return (
      <Link href={path} passHref>
         <a
            className={`bg-black font-headings py-2 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer ${
               icon && 'flex items-center w-[200px] ml-auto'
            }`}
         >
            {icon && (
               <span className="mr-3 mt-2">
                  <Image
                     alt="icon not found"
                     height={20}
                     width={20}
                     src="/assets/Chat Bubble.svg"
                  />
               </span>
            )}
            {text}
         </a>
      </Link>
   )
}

Button.propTypes = {
   text: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   icon: PropTypes.bool,
}

export default Button
