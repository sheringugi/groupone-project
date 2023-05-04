import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "./MusicList.css"


function GameProfiles(){
    const [platformGames, setPlatformGames] = useState([]);
    useEffect(() => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser';
  const options = {
    method: 'GET',
    headers: {
        "X-RapidAPI-Key": "3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    }
  };
  
  fetch(url, options)
  .then(response => response.json())
  .then(data =>setPlatformGames(data))
     }, []);
     return (
        <>
        <NavBar/>
        <div> 
          <h1>Game Profiles</h1>
          <div>
            {platformGames.map(game => (
              <div key={game.id}>
                <img src={game.thumbnail} alt={game.title} />
              </div>
            ))}
          </div>
        </div>
        </>
      );
      

}
export default GameProfiles
