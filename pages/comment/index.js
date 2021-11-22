import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import { useAuthContext } from '../../context/UserContext'
import Router from 'next/router'

const Comment = () => {
   const { user } = useAuthContext()

   useEffect(() => {
      if (!user) {
         Router.replace('/login')
         return <h1 className="text-4xl m-5">Redirecting.. </h1>
      }
   }, [])

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <div className=" w-full md:w-[568px] mx-auto">
            <form className="my-5">
               <h1 className="font-bold text-2xl md:text-3xl">Add Comment</h1>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="desc" className="text-lg text-gray-700">
                     Description
                  </label>
                  <textarea
                     className="mt-2 text-sm w-full px-4 h-[170px] py-3 bg-gray-100"
                     id="desc"
                     type="text"
                     placeholder="This was probably the best camp i've visited this past year. definitely recommended visiting any time soon ."
                  />
               </div>
               <button
                  type="submit"
                  className="bg-black w-full mt-6 font-headings py-3 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
               >
                  Comment
               </button>
            </form>
         </div>
      </div>
   )
}

export default Comment
