import React from 'react';

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <input type="text" placeholder="SEARCH GAME..." value={searchTerm} onChange={onSearchTermChange} />
  );
}

export default SearchBar;
