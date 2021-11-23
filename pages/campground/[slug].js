import React from 'react'
import Image from 'next/image'

import { Navbar, Button } from '../../components'
import { comments } from '../../data'

const CampDetail = () => {
   return (
      <div className="container mx-auto px-8 mb-12">
         <Navbar />
         <div className="md:grid grid-cols-3 gap-4 mt-6">
            <div className="mt-6">
               <iframe
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=ebed"
               >
                  <a href="https://www.gps.ie/car-satnav-gps/">car gps</a>
               </iframe>
            </div>
            <div className="col-span-2 mt-6">
               <div className="border-2 border-gray-100 px-6 py-4">
                  <div className="relative h-[350px] w-full">
                     <Image
                        alt="camp not found"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        src="/assets/Camp Images/High Quality Images/Latik Riverside.jpg"
                     />
                  </div>
                  <div className="flex mt-5 items-center justify-between">
                     <h1 className="font-bold text-2xl">Mount Ulap</h1>
                     <span className="font-headings font-normal">
                        $103.99/night
                     </span>
                  </div>
                  <p className="mt-5 font-headings">
                     Mount Ulap is a 7.7 Kilometer moderately trafficked
                     point-to-point trail located near Tub. Benguet, Phillipines
                     that offers the chance to see wildlige and is reated as
                     moderate, the trails is primarily used for hiking.
                  </p>
                  <p className="mt-3">
                     Submitted by
                     <i className="font-bold ml-1">Andrew Mike</i>
                  </p>
               </div>

               {/* Comments */}
               <div className="border-2 border-gray-100 px-6 py-4 my-6">
                  {comments.map(({ id, name, timeStamp, text }) => (
                     <div key={id} className="border-b-2 pb-5">
                        <div className="flex mt-5 items-center justify-between">
                           <h1 className="font-bold text-xl">{name}</h1>
                           <span className="font-headings font-normal">
                              {timeStamp}
                           </span>
                        </div>
                        <p className="mt-5 font-headings">{text}</p>
                     </div>
                  ))}
                  <div className="text-right mt-12 mb-4">
                     <Button icon text="Leave a Review" path="/comment" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CampDetail
