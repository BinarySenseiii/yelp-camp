import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import toast from 'react-hot-toast'

import { auth } from '../firebase/config'
import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth'

const LoginIn = () => {
   const mutation = useAuthSignInWithEmailAndPassword(auth)
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

   const SignInHandler = async (event) => {
      event.preventDefault()
      const { email, password } = input

      try {
         await mutation.mutate({
            email,
            password,
         })
         toast.loading('Redirecting.. please wait', {
            duration: 3000,
         })
         setTimeout(() => Router.push('/campground'), 3000)
      } catch (err) {
         toast.error(err.message)
      }
   }

   return (
      <div className="mt-14">
         <h1 className="text-2xl md:text-3xl font-[600]">
            Start Exploring camps from all <br /> around the world.
         </h1>
         <form className="mt-10" onSubmit={SignInHandler}>
            <div className="flex flex-col font-headings">
               <label htmlFor="email" className="text-lg text-gray-700">
                  Email
               </label>
               <input
                  className="mt-2 w-full px-4 h-[50px] bg-gray-200"
                  id="email"
                  type="text"
                  placeholder="test@test.com"
                  name="email"
                  value={input.email}
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
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={input.password}
                  onChange={onChangeHander}
               />
            </div>
            <button
               type="submit"
               className="bg-black w-full mt-6 font-headings py-3 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               {mutation.isLoading ? 'logging ..' : ' Login'}
            </button>
            <div className="font-headings mt-3 space-x-3">
               <span>Not a user yer?</span>
               <Link href="/signup">
                  <a className="text-blue-500 hover:text-blue-600 underline font-bold">
                     Create an account
                  </a>
               </Link>
            </div>
         </form>
      </div>
   )
}

export default LoginIn
