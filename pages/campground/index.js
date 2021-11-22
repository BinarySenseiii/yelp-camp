import React from 'react'
import { Navbar, Banner, Posts, Button, Spinner } from '../../components'
import { useAuthContext } from '../../context/UserContext'

const CampGround = () => {
   const { isAuthReady } = useAuthContext()
   console.log(isAuthReady)

   if (isAuthReady) {
      return <Spinner />
   }

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <Banner />
         <Posts />
         <div className="text-center mb-12">
            <Button text="Show more" path="/more" />
         </div>
      </div>
   )
}

export default CampGround
