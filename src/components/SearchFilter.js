import React from 'react'

const SearchFilter = ({  }) => {
    return(
        <div>Search/Filter Component
         <label>
            <select onChange={(e) => console.log(e.target.value)}>
              <strong>Filter: </strong>
              <option value="Tech">Tech</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Finance">Finance</option>
              <option value="All">All</option>
            </select>
         </label>
        </div>
    )
}

export default SearchFilter