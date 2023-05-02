import React from "react";

function MusicCard({album}) {
    
  return (
    <div className="Album">
      <h1>{album.title}</h1>
      <p>{album.artist}</p>
      <ul>
        {album}
      </ul>
    </div>
  );
}

export default MusicCard;
