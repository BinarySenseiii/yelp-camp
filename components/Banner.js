import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import Search from './Search'

const Banner = ({ camps, setSearchtext }) => {
   return (
      <div className="min-h-[300px] w-full bg-[#F7EFEF] rounded-md flex flex-col justify-center px-8">
         <div>
            <h1 className="font-bold text-3xl md:text-4xl">
               Welcome to YelpCamp!
            </h1>
            <p className="text-sm  font-headings mt-2">
               View our hand-picked campgrounds from all over <br /> the world,
               or add your own.
            </p>
            <Search camps={camps} setSearchtext={setSearchtext} />
            <Link href="/add">
               <a className="underline font-headings mt-3 block text-[#464646cc] hover:text-gray-500 hover:no-underline">
                  Or add your own Campground
               </a>
            </Link>
         </div>
      </div>
   )
}

Banner.propTypes = {
   camps: PropTypes.array.isRequired,
   setSearchtext: PropTypes.func.isRequired,
}

export default Banner
