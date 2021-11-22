import React from 'react'
import { Navbar, Banner, Posts, Spinner } from '../../components'
import { useAuthContext } from '../../context/UserContext'

import { db } from '../../firebase/config'
import { collection, query } from 'firebase/firestore'
import { useFirestoreQuery } from '@react-query-firebase/firestore'

const CampGround = () => {
   const { isAuthReady } = useAuthContext()
   const ref = query(collection(db, 'camps'))
   const { isLoading, data } = useFirestoreQuery(['camps'], ref)

   if (isAuthReady || isLoading) {
      return <Spinner />
   }

   const snapshot = data

   const campData = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
   }))

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <Banner />
         <Posts camps={campData} />
      </div>
   )
}

export default CampGround
