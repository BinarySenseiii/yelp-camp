import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Navbar, Button } from '../../components'
import { comments } from '../../data'

import { db } from '../../firebase/config'
import { getDoc, doc } from 'firebase/firestore'
import { useAuthContext } from '../../context/UserContext'

const CampDetail = () => {
   const { query } = useRouter()
   const [camp, setCamp] = React.useState(null)
   const { user } = useAuthContext()

   React.useEffect(() => {
      const ref = doc(db, 'camps', query.slug)
      getDoc(ref).then((doc) => {
         setCamp({
            id: doc.id,
            ...doc.data(),
         })
      })
   }, [])

   if (!camp) {
      return <p>loading...</p>
   }

   return (
      <div className="container mx-auto px-8 mb-12">
         <Navbar />
         <div className="md:grid grid-cols-3 gap-4 mt-6">
            <div className="-mt-3 relative w-full h-[600px]">
               <Image
                  src="/assets/Map.png"
                  layout="fill"
                  objectFit="contain"
                  alt="map not found"
               />
            </div>
            <div className="col-span-2 mt-6">
               <div className="border-2 border-gray-100 px-6 py-4">
                  <div className="relative h-[350px] w-full">
                     <Image
                        alt="camp not found"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        src={camp.image}
                     />
                  </div>
                  <div className="flex mt-5 items-center justify-between">
                     <h1 className="font-bold text-2xl">{camp.name}</h1>
                     <span className="font-headings font-normal">
                        {camp.price}/night
                     </span>
                  </div>
                  <p className="mt-5 font-headings">{camp.description}</p>
                  <p className="mt-3">
                     Submitted by
                     <i className="font-bold ml-1">{user.email}</i>
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
