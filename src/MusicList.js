import React from "react";
import MusicCard from "./MusicCard.js";
import "./MusicList.css";

function MusicList(props) {
  return (
    <div className="music-list">
      <ol className="item-container">
        {props.artists.map((artist) => (
          <div className="item" key={artist.id}>
            <MusicCard artist={artist} setArtists={props.setArtists} artists={props.artists} />
          </div>
        ))}
      </ol>
    </div>
  );
}

export default MusicList;
