import React from "react";

function MusicCard({artist, addFavourite}){
    const handleAddFavourite = () => {
        addFavourite(artist);
      };
   
    return(
        <>
        <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
        <li key={artist.idArtist}>{artist.strArtist}</li>
        <button onClick={handleAddFavourite}>Add to Favourites</button>
        </>
    )
}
export default MusicCard;