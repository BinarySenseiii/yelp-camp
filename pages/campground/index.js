import React, { useState, memo } from 'react'
import Head from 'next/head'
import { Navbar, Banner, Posts, Spinner } from '../../components'
import { useAuthContext } from '../../context/UserContext'

import { db } from '../../firebase/config'
import { collection, query } from 'firebase/firestore'
import { useFirestoreQuery } from '@react-query-firebase/firestore'

const CampGround = () => {
   const [searchText, setSearchtext] = useState(null)

   const { isAuthReady } = useAuthContext()
   const ref = query(collection(db, 'camps'))
   const { isLoading, data } = useFirestoreQuery(['camps'], ref)

   if (isAuthReady || isLoading) {
      return <Spinner />
   }

   const snapshot = data

   const results = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
   }))

   return (
      <div className="container mx-auto px-8">
         <Head>
            <title>Yelp Camp</title>
         </Head>
         <Navbar />
         <Banner camps={results} setSearchtext={setSearchtext} />
         {results.length > 0 ? (
            <Posts camps={results} searchText={searchText} />
         ) : (
            <h1 className="text-2xl mt-5">Camps not found</h1>
         )}
      </div>
   )
}

export default memo(CampGround)
