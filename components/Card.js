import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, title, url, text }) => {
   return (
      <div className="relative border-2 p-3">
         <div className="relative w-full h-[200px]">
            <Image
               src={url}
               alt={`${title} not found`}
               layout="fill"
               objectFit="cover"
            />
         </div>
         <h1 className="text-xl font-bold mt-5 ">{title}</h1>
         <p className="font-headings">{text}</p>
         <Link href={`/campground/${id}`}>
            <a className="border-2 mt-4 w-full block text-center py-2 transition-all duration-[0.3s] ease-out rounded-md hover:text-white hover:bg-black font-headings">
               View Campground
            </a>
         </Link>
      </div>
   )
}

Card.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
}

export default Card
