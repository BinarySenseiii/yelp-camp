import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const userContext = createContext()

const reducer = (state, action) => {
   switch (action.type) {
      default:
         return state
   }
}

export default function UserProvider({ children }) {
   const [state, dispatch] = useReducer(reducer, {
      user: null,
      isAuthReady: false,
   })

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
export const useAuthContext = () => useContext(userContext)
