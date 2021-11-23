import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Navbar } from '../../components'
import { useAuthContext } from '../../context/UserContext'
import Router from 'next/router'

import { db } from '../../firebase/config'
import { getDoc, doc, setDoc } from 'firebase/firestore'

const Comment = () => {
   const { user, campId } = useAuthContext()
   const [comment, setComment] = useState('')
   const [prevComments, setPrevComments] = useState(null)

   useEffect(() => {
      if (!user) {
         Router.replace('/login')
         return <h1 className="text-4xl m-5">Redirecting.. </h1>
      }

      getDoc(doc(db, 'comments', campId)).then((doc) => {
         setPrevComments({
            id: doc.id,
            ...doc.data(),
         })
      })
   }, [])

   const onSubmitHandler = async (event) => {
      event.preventDefault()

      if (!comment) {
         return toast.error('input field required')
      }

      if (prevComments) {
         await setDoc(doc(db, 'comments', campId), {
            feedbacks: [
               ...prevComments.feedbacks,
               {
                  name: user.email,
                  text: comment,
               },
            ],
         })
      }

      toast.loading("please wait we're adding your Feeback..", {
         duration: 2000,
      })

      setTimeout(() => Router.push(`/campground/${campId}`), 3000)
   }

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <div className=" w-full md:w-[568px] mx-auto">
            <form className="my-5" onSubmit={onSubmitHandler}>
               <h1 className="font-bold text-2xl md:text-3xl">Add Comment</h1>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="desc" className="text-lg text-gray-700">
                     Description
                  </label>
                  <textarea
                     className="mt-2 text-sm w-full px-4 h-[170px] py-3 bg-gray-100"
                     id="desc"
                     type="text"
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
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
