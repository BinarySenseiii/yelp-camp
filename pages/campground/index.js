import React from 'react'
import { Navbar, Banner, Posts, Spinner } from '../../components'
import { useAuthContext } from '../../context/UserContext'

import { db } from '../../firebase/config'
import { collection, query, limit, startAfter } from 'firebase/firestore'
import { useFirestoreInfiniteQuery } from '@react-query-firebase/firestore'

const CampGround = () => {
   const { isAuthReady } = useAuthContext()
   const campCollection = collection(db, 'camps')
   const campQuery = query(campCollection, limit(1))

   const camps = useFirestoreInfiniteQuery('camps', campQuery, (snapshot) => {
      const lastDocument = snapshot.docs[snapshot.docs.length - 1]

      return query(campQuery, startAfter(lastDocument))
   })

   if (isAuthReady || camps.isLoading) {
      return <Spinner />
   }

   const campData = camps.data.pages[0].docs.map((document) => ({
      id: document.id,
      ...document.data(),
   }))

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <Banner />
         <Posts camps={campData} />
         <div className="text-center mb-12">
            <button
               disabled={camps.isLoading}
               onClick={() => camps.fetchNextPage()}
               className="bg-black font-headings py-2 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               show more
            </button>
         </div>
      </div>
   )
}

export default CampGround
