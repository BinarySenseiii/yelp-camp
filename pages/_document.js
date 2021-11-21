import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html>
            <Head>
               <link
                  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap"
                  rel="stylesheet"
               />
               <link rel="icon" type="image/png" href="/assets/yelp.png" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
