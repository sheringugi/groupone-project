import React, { useState } from "react";
import GameCard from "./GameCard";
import "./MusicList.css";


function MusicList({ games }) {
;

return (
<div className="music-list">
<ol className="item-container">
{games.map((data) => (
<GameCard key={data.id} data={data}/>
))}
</ol>
</div>
);
}

export default MusicList;
