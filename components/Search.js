import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ camps, setSearchtext }) => {
   const [text, setText] = React.useState('')
   const [results, setResults] = React.useState([])
   const [isSearchDone, setIsSearchDone] = React.useState(false)

   const searchCampHandler = (e) => {
      const searchValue = e.target.value.toLowerCase()
      setText(searchValue)
      setIsSearchDone(false)

      const matchingResults = []

      if (searchValue.length) {
         for (const camp of camps) {
            if (matchingResults.length >= 5) {
               break
            }

            const matchResult = camp.name.toLowerCase().startsWith(searchValue)

            if (matchResult) {
               const campData = {
                  ...camp,
                  slug: `${camp.name.toLowerCase().replace(/ /g, '-')}-${
                     camp.id
                  }`,
               }
               matchingResults.push(campData)
            }
         }
      }

      return setResults(matchingResults)
   }

   const resetSearch = (text) => {
      setResults([])
      setText(text)
      setIsSearchDone(true)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      setSearchtext(text)
      setText('')
   }
   return (
      <form onSubmit={submitHandler}>
         <div className="flex flex-col md:flex-row items-center md:space-x-5 mt-5 relative">
            <div className="relative w-full md:w-[300px]">
               <input
                  value={text}
                  onChange={searchCampHandler}
                  placeholder="🔍 Search for Camps"
                  required
                  className="w-full md:w-[300px] py-2 px-5 font-headings border-2 border-gray-300"
               />
               {text.length ? (
                  <ul className="absolute flex items-start justify-center flex-col bg-white w-full rounded-lg shadow-md">
                     {results.length > 0 ? (
                        results.map((result) => (
                           <li
                              onClick={() => resetSearch(result.name)}
                              key={result.slug}
                              className="hover:bg-gray-100 px-4 py-2 border-b-2 border-gray-200 z-50 w-full rounded-md cursor-pointer"
                           >
                              {result.name}
                           </li>
                        ))
                     ) : (
                        <>
                           {!isSearchDone && (
                              <li className=" px-4 py-2 border-b-2 border-gray-200 z-50 w-full">
                                 Camp not found!
                              </li>
                           )}
                        </>
                     )}
                  </ul>
               ) : (
                  ''
               )}
            </div>
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

Search.propTypes = {
   camps: PropTypes.array.isRequired,
   setSearchtext: PropTypes.func.isRequired,
}

export default Search
