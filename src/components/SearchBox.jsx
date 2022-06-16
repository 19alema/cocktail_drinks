import React from 'react'
function SearchBox({setSearch}) {    
  return (
      <div className="flex shadow-md align-center m-auto max-w-[500px] justify-center my-6 bg-white rounded">
          <div className="container text-center py-10 px-4">
            <input
                type="text"
                name="text"
                id="text"
                placeholder="Search cocktail"
                onChange={(e) => {
                  e.preventDefault()
                  setSearch(e.target.value)
                }}
                className="py-2 border-2 border-zinc-400 w-[100%] rounded px-3 cursor-text"
            /> 
          </div>
    </div>
  )
}

export default SearchBox