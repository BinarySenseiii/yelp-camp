import React from 'react'

const Search = () => {
   return (
      <form>
         <div className="flex flex-col md:flex-row items-center md:space-x-5 mt-5">
            <input
               placeholder="🔍 Search for Camps"
               required
               className="w-full md:w-[300px] py-2 px-5 font-headings border-2 border-gray-300"
            />
            <button
               type="submit"
               className="bg-black w-full md:w-[100px]  mt-2 md:mt-0 font-headings py-2 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               Search
            </button>
         </div>
      </form>
   )
}

export default Search
