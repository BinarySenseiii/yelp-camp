import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ id, name, image, description }) => {
   return (
      <div className="relative border-2 p-3">
         <div className="relative w-full h-[200px]">
            <Image
               src={image}
               alt={`${name} not found`}
               layout="fill"
               objectFit="cover"
               placeholder="blur"
               blurDataURL={image}
            />
         </div>
         <h1 className="text-xl font-bold mt-5 ">{name}</h1>
         <p className="font-headings">{description.substring(0, 70)}...</p>
         <Link href={`/campground/${id}`} passHref>
            <a className="border-2 mt-4 w-full block text-center py-2 transition-all duration-[0.3s] ease-out rounded-md hover:text-white hover:bg-black font-headings">
               View Campground
            </a>
         </Link>
      </div>
   )
}

Card.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
}

export default Card
