import React from 'react'

const Search = () => {
   return (
      <form>
         <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-5 mt-5">
            <input
               placeholder="🔍 Search for Camps"
               required
               className="w-full md:w-[300px] py-2 px-5 font-headings border-2 border-gray-300"
            />
            <button
               type="submit"
               className="bg-black w-full md:w-[100px] font-headings py-2 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
            >
               Search
            </button>
         </div>
      </form>
   )
}

export default Search
