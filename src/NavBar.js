import { Link } from 'react-router-dom';
import React from "react";

function NavBar() {
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
        
      
    </ul>
  );
}

export default NavBar;
