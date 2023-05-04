import React, { useState, useEffect } from 'react';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://www.freetogame.com/api-doc')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {games.map(game => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <img src={game.thumbnail} alt={game.title} />
          <p>{game.short_description}</p>
          <a href={game.game_url}>Play Now</a>
        </div>
      ))}
    </div>
  );
}

export default GameList;