import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./MusicList.css";
import NavBar from "./NavBar";

function MOBA() {
  const [MOBAGames, setMOBAGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=MOBA";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMOBAGames(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
    <NavBar/>
    <div className="music-list">
      <ol className="item-container">
        {MOBAGames.map((data) => (
          <GameCard key={data.id} data={data} />
        ))}
      </ol>
    </div>
    </>
  );
}

export default MOBA;
