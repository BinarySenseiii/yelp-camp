import React from 'react'
import { Navbar } from '../../components'

const NewCampPage = () => {
   return (
      <div className="container mx-auto px-8">
         <Navbar />
         <div className="w-full md:flex justify-center">
            <form className="my-5">
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
                     placeholder="www.thepinnoytraveler.com/2019/01/mt-ulap.diy-dayhike.html"
                  />
               </div>
               <div className="flex flex-col font-headings mt-6">
                  <label htmlFor="desc" className="text-lg text-gray-700">
                     Description
                  </label>
                  <textarea
                     className="mt-2 text-sm w-full px-4 h-[170px] py-3 bg-gray-100"
                     id="desc"
                     type="text"
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
