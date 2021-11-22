import React from 'react'
import router from 'next/router'
import { Spinner } from './Spinner'
import { useAuthContext } from '../context/UserContext'

export default function ProtectedRoute(Component) {
   return function WithProtected(props) {
      const { user } = useAuthContext()

      if (!user) {
         router.replace('/login')
         return <Spinner />
      }

      return <Component user={user} {...props} />
   }
}
