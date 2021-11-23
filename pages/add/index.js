import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { Navbar } from '../../components'
import toast from 'react-hot-toast'

import { uuid } from '../../helpers'

// authContext
import { useAuthContext } from '../../context/UserContext'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const randomID = uuid()

const NewCampPage = () => {
   const { user } = useAuthContext()

   const [input, setInput] = useState({
      name: '',
      price: '',
      image: '',
      description: '',
   })

   useEffect(() => {
      if (!user) {
         Router.replace('/login')
         return <h1 className="text-4xl m-5">Redirecting.. </h1>
      }
   }, [])

   const onChangeHandler = (e) => {
      setInput((old) => ({
         ...old,
         [e.target.name]: e.target.value,
      }))
   }

   const submitCampHandler = async (e) => {
      e.preventDefault()
      const { name, price, image, description } = input

      if (!name || !price || !image || !description) {
         return toast.error('input fields required')
      }

      // Add a new document in collection "cities"
      await setDoc(doc(db, 'camps', randomID), {
         name,
         price: `$ ${price}`,
         image: input.image.includes('cloudinary')
            ? image
            : 'https://res.cloudinary.com/deweqyyjt/image/upload/v1637688937/wallpaperflare.com_wallpaper_mlxz0m.jpg',
         description,
         email: user.email,
      })

      await setDoc(doc(db, 'comments', randomID), {
         feedbacks: [],
      })

      toast.loading("please wait we're adding your camp..", {
         duration: 2000,
      })

      setTimeout(() => Router.push('/campground'), 3000)
   }

   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <div className="w-full md:w-[568px] mx-auto">
            <form className="my-5" onSubmit={submitCampHandler}>
               <h1 className="font-bold text-2xl md:text-3xl">
                  Add New Campground
               </h1>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="campName" className="text-lg text-gray-700">
                     Campground Name
                  </label>
                  <input
                     className="mt-2 text-sm w-full px-4 h-[50px] bg-gray-100"
                     id="campName"
                     type="text"
                     value={input.name}
                     name="name"
                     onChange={onChangeHandler}
                     placeholder="Seven Sisters Waterfall"
                  />
               </div>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="price" className="text-lg text-gray-700">
                     Price
                  </label>
                  <input
                     className="mt-2 text-sm w-full px-4 h-[50px] bg-gray-100"
                     id="price"
                     type="text"
                     value={input.price}
                     name="price"
                     onChange={onChangeHandler}
                     placeholder="$149"
                  />
               </div>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="image" className="text-lg text-gray-700">
                     Image
                  </label>
                  <input
                     className="mt-2 text-sm w-full px-4 h-[50px] bg-gray-100"
                     id="image"
                     type="text"
                     value={input.image}
                     name="image"
                     onChange={onChangeHandler}
                     placeholder="www.thepinnoytraveler.com/2019/01/mt-ulap.diy-dayhike.html"
                  />
                  <p className="text-red-500 text-xs mt-4">
                     <strong>Note:-</strong> only{' '}
                     <a
                        href="https://cloudinary.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        title="images and videos upload storage, optimization and cdn"
                     >
                        cloudinary
                     </a>{' '}
                     images work otherwise your picture will not appear{' '}
                  </p>
               </div>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="desc" className="text-lg text-gray-700">
                     Description
                  </label>
                  <textarea
                     className="mt-2 text-sm w-full px-4 h-[170px] py-3 bg-gray-100"
                     id="desc"
                     type="text"
                     value={input.description}
                     name="description"
                     onChange={onChangeHandler}
                     placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerforden in Stranda Municipality in More og Romsdal country Norway."
                  />
               </div>
               <button
                  type="submit"
                  className="bg-black w-full mt-6 font-headings py-3 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
               >
                  Add Campground
               </button>
            </form>
         </div>
      </div>
   )
}

export default NewCampPage
