import React from 'react'
import '../styles/global.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Component {...pageProps} />
      </div>
   )
}

export default MyApp
