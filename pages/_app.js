import React from 'react'
import Router from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import UserProvider from '../context/UserContext'

// toast
import { Toaster } from 'react-hot-toast'

import '../styles/global.css'

const progress = new ProgressBar({
   size: 4,
   color: '#FE595E',
   className: 'z-50',
   delay: 100,
})

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
   const queryClient = new QueryClient()

   React.useEffect(() => {
      Router.events.on('routeChangeStart', progress.start)
      Router.events.on('routeChangeComplete', progress.finish)
      return () => {
         Router.events.off('routeChangeStart', progress.start)
         Router.events.off('routeChangeComplete', progress.finish)
      }
   }, [])

   return (
      <UserProvider>
         <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
         </QueryClientProvider>
      </UserProvider>
   )
}

export default MyApp
