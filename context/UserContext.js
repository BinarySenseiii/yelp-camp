import React, { createContext, useContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useAuthUser } from '@react-query-firebase/auth'
import { auth } from '../firebase/config'

const userContext = createContext({})

const reducer = (state, action) => {
   switch (action.type) {
      case 'INIT_USER':
         return {
            ...state,
            ...action.payload,
         }
      case 'CAMP_ID':
         return {
            ...state,
            campId: action.payload,
         }
      default:
         return state
   }
}

export default function UserProvider({ children }) {
   const user = useAuthUser(['user'], auth)
   const [state, dispatch] = useReducer(reducer, {
      user: null,
      isAuthReady: false,
      campId: null,
   })

   useEffect(() => {
      dispatch({
         type: 'INIT_USER',
         payload: {
            ...state,
            user: user.data,
            isAuthReady: user.isLoading,
         },
      })
   }, [user.data])

   return (
      <userContext.Provider value={{ ...state, dispatch }}>
         {children}
      </userContext.Provider>
   )
}

UserProvider.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
   ]).isRequired,
}

// make sure u use
export const useAuthContext = () => {
   const context = useContext(userContext)

   if (context === undefined) {
      throw new Error('Auth Context must be used within a AuthProvider')
   }

   return context
}
