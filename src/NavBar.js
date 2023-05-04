import { Link } from 'react-router-dom';
import React from "react";

function NavBar({searchTerm, onSearchTermChange}) {
  return (
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
        
       <input type="text" placeholder="SEARCH ARTIST..." value={searchTerm} onChange={onSearchTermChange} />
    </ul>
  );
}

export default NavBar;
