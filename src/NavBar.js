import { Link } from 'react-router-dom';
import React from "react";
import SearchBar from './SearchForm';

function NavBar({searchTerm, onSearchTermChange}) {
  return (
    <div class="topnav">
    <ul className="navBar">    
      <li className="nav-item active">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/gameprofiles">Game Profiles</Link>
       </li> 
       <li className="nav-item">
        <Link to="/playgame">Play Game</Link>
       </li>
       <div class="topnav-right">
       <li className='search'><SearchBar/></li>
       </div>
        
       <input type="text" placeholder="SEARCH ARTIST..." value={searchTerm} onChange={onSearchTermChange} />
    </ul>
    </div>
  );
}

export default NavBar;

