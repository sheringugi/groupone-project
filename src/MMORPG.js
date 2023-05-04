import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./GameList.css";
import NavBar from "./NavBar";

function MMORPG() {
  const [MMORPGGames, setMMORPGGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMORPG";
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
        setMMORPGGames(result);
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
        {MMORPGGames.map((data) => (
          <GameCard key={data.id} data={data} />
        ))}
      </ol>
    </div>
    </>
  );
}

export default MMORPG;
