import React from 'react';

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <input type="text" placeholder="SEARCH ARTIST..." value={searchTerm} onChange={onSearchTermChange} />
  );
}

export default SearchBar;
