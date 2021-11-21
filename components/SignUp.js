import React, { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { uuid } from '../helpers'
import Router from 'next/router'

// firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const SignUp = () => {
   const [input, setInput] = useState({
      email: '',
      password: '',
   })

   const onChangeHander = (e) => {
      setInput((oldValues) => ({
         ...oldValues,
         [e.target.name]: e.target.value,
      }))
   }

   const signUpHandler = async (event) => {
      event.preventDefault()
      const { email, password } = input

      if (!email || !password) {
         toast.error('input fields required')
         return
      }

      try {
         const userCrediential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         )

         if (userCrediential) {
            const campRef = await doc(db, 'camps', userCrediential.user.uid)
            await setDoc(campRef, {
               id: uuid(),
               name: '',
               text: '',
               image: '',
               timeStamp: userCrediential.user.metadata.creationTime,
            })
            Router.replace('/campground')
         }
      } catch (err) {
         toast.error(err.message)
      }
   }

   return (
      <div className="mt-14">
         <h1 className="text-2xl md:text-3xl font-[600]">
            Start Exploring camps from all <br /> around the world.
         </h1>
         <form className="mt-10" onSubmit={signUpHandler}>
            <div className="flex flex-col font-headings">
               <label htmlFor="email" className="text-lg text-gray-700">
                  Email
               </label>
               <input
                  className="mt-2 w-full px-4 h-[50px] bg-gray-200"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="test@test.com"
                  onChange={onChangeHander}
               />
            </div>
            <div className="flex flex-col font-headings mt-6">
               <label htmlFor="pass" className="text-lg text-gray-700">
                  Password
               </label>
               <input
                  className="mt-2 w-full px-4 h-[50px] bg-gray-200"
                  id="pass"
                  type="text"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={onChangeHander}
               />
            </div>
            <button
               type="submit"
               className="bg-black w-full mt-6 font-headings py-3 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               Create an account
            </button>
            <div className="font-headings mt-3 space-x-3">
               <span>Already a user?</span>
               <Link href="/login">
                  <a className="text-blue-500 hover:text-blue-600 underline font-bold">
                     Sign in
                  </a>
               </Link>
            </div>
         </form>
      </div>
   )
}

export default SignUp
