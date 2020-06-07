import React from "react";

const SearchBox = ( { searchField, searchChange } ) => {
  return (
    <div className="search-box-container w-100">
      <input type="search" 
        placeholder="search robots" 
        className="search-box" 
        onChange={ searchChange }
        />
    </div>
  );
};

export default SearchBox;
