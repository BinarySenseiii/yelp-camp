import React from 'react'
import { useAuthContext } from '../context/UserContext'
import router from 'next/router'

export default function ProtectedRoute(Component) {
   return function WithProtected(props) {
      const { user } = useAuthContext()

      if (!user) {
         router.replace('/login')
         return <h1>Redirecting please wait.. </h1>
      }

      return <Component user={user} {...props} />
   }
}
