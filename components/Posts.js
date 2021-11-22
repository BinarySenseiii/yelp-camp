import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Posts = ({ camps, searchText }) => {
   const [campData, setCampData] = React.useState({
      isFilter: false,
      camps,
   })

   React.useEffect(() => {
      if (searchText) {
         setCampData((old) => ({
            isFilter: true,
            camps: old.camps.filter((c) => c.name === searchText),
         }))
      }
   }, [searchText])

   const clearFilters = () => {
      setCampData((old) => ({
         isFilter: false,
         camps,
      }))
   }

   return (
      <>
         {campData.isFilter ? (
            <div className="text-right mt-5">
               <button
                  className="bg-black w-full md:w-[200px]  mt-2 md:mt-0 font-headings py-2 px-5 hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
                  onClick={clearFilters}
               >
                  Clear filters
               </button>
            </div>
         ) : null}
         <div className="grid grid-cols-1 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
            {campData.camps.map((camp) => (
               <Card key={camp.id} {...camp} />
            ))}
         </div>
      </>
   )
}

Posts.propTypes = {
   camps: PropTypes.array.isRequired,
   searchText: PropTypes.string.isRequired,
}

export default Posts
