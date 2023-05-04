import { Link } from 'react-router-dom';
import React from "react";

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
        <Link to="/shooter">SHOOTER</Link>
       </li>
       <li className="nav-item">
        <Link to="/mmorpg">MMORPG</Link>
       </li>
       <li className="nav-item">
        <Link to="/moba">MOBA</Link>
       </li>
       <li className="nav-item">
        <Link to="/mmo">MMO</Link>
       </li>
       <li className="nav-item">
        <Link to="/fighting">FIGHTING</Link>
       </li>
       <li className="nav-item">
        <Link to="/strategy">STRATEGY</Link>
       </li>
        
       <input type="text" placeholder="SEARCH ARTIST..." value={searchTerm} onChange={onSearchTermChange} />
    </ul>
    </div>
  );
}

export default NavBar;

