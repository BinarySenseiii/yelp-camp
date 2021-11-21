import React from 'react'
import Link from 'next/link'

const LoginIn = () => {
   return (
      <div className="mt-14">
         <h1 className="text-2xl md:text-3xl font-[600]">
            Start Exploring camps from all <br /> around the world.
         </h1>
         <form className="mt-10">
            <div className="flex flex-col font-headings">
               <label htmlFor="username" className="text-lg text-gray-700">
                  Username
               </label>
               <input
                  className="mt-2 w-full px-4 h-[50px] bg-gray-200"
                  id="username"
                  type="text"
                  placeholder="johndoe_91"
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
                  placeholder="Enter your Password"
               />
            </div>
            <button
               type="submit"
               className="bg-black w-full mt-6 font-headings py-3 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               Login
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
