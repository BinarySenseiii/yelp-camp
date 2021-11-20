import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { suggestions } from '../data'
import { Button } from '../components'

const Home = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Yelpcamp - Home</title>
         </Head>
         <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
            <div className="lg:px-10 min-h-screen block lg:flex flex-col md:justify-center lg:items-start items-center lg:text-left">
               <div className="lg:-mt-7  px-5 lg:px-0 -mt-9">
                  <Image
                     src="/assets/Logo.svg"
                     alt="logo not found"
                     height={150}
                     width={150}
                  />
               </div>
               <div className="relative block lg:hidden w-full h-[250px] -mt-8">
                  <Image
                     src="/assets/Hero Image (Tablet and Mobile).jpg"
                     alt="logo not found"
                     layout="fill"
                     objectFit="cover"
                  />
               </div>
               <div className="relative mt-9 lg:-mt-2 px-5 lg:px-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800">
                     Explore the best <br className="hidden lg:block" /> camps{' '}
                     <br className="block lg:hidden" /> on Earth.
                  </h1>
                  <p className="mt-4 md:mt-5 text-lg md:text-xl text-primary">
                     YelpCamp is a curated list of the best camping spots{' '}
                     <br className="hidden lg:block" /> on Earth. Unfiltered and{' '}
                     unbiased reviews.
                  </p>
                  <ul className="mt-5 w-full mx-auto">
                     {suggestions.map(({ id, text }) => (
                        <li
                           key={id}
                           className="text-xl font-headings text-black flex w-96 items-center mb-2"
                        >
                           <div>
                              <Image
                                 src="/assets/Checkmark.svg"
                                 alt="logo not found"
                                 height={20}
                                 width={20}
                              />
                              <span className="ml-4">{text}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8">
                     <Button text="View Campgrounds" path="/campground" />
                  </div>
                  <div className="mt-9 font-medium">
                     <h4>Partnered With</h4>
                     <div className="-mt-8 -ml-6">
                        <Image
                           src="/assets/airbnb.svg"
                           alt="booking not found"
                           height={120}
                           width={120}
                        />
                        <Image
                           src="/assets/Booking.svg"
                           alt="booking not found"
                           height={120}
                           width={120}
                        />
                        <Image
                           src="/assets/plum-guide.svg"
                           alt="booking not found"
                           height={120}
                           width={120}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative hidden lg:block max-h-screen w-full">
               <Image
                  src="/assets/hero-image.jpg"
                  alt="hero-img not found"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
               />
            </div>
         </div>
      </React.Fragment>
   )
}

export default Home
