import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SignUp } from '../../components'

const SignUpPage = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2">
         <div className="px-9">
            <div className="flex items-center justify-between">
               <Image
                  src="/assets/Logo.svg"
                  alt="logo not found"
                  height="120"
                  width="120"
               />
               <Link href="/campground">
                  <a className=" flex items-center cursor-pointer ml-6 text-lg font-medium text-gray-500 hover:text-gray-900 font-headings">
                     <span className="mr-3"> &#8592;</span>
                     Back to Campground
                  </a>
               </Link>
            </div>

            <SignUp />
         </div>
         <div className="h-[400px] mt-8 md:mt-0 md:min-h-screen w-full bg-[#F7EFEF] flex items-center justify-start px-10 md:px-20">
            <div>
               <h1 className="font-[500] text-lg xl:text-xl text-gray-800">
                  <blockquote>
                     “YelpCamp has honestly saved me hours of research time, and
                     the camps on here are definitely well picked and added.”
                  </blockquote>
               </h1>
               <div className="flex items-center space-x-5 mt-4">
                  <div>
                     <Image
                        alt="avatar not found"
                        height={40}
                        width={40}
                        src="/assets/User Testimonial.svg"
                     />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold">May Andrews</h3>
                     <p className="text-[14px] font-headings -mt-1">
                        Professional Hiker
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUpPage
