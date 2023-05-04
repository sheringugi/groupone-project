import React, { useState } from "react";
import MusicCard from "./MusicCard";
import "./MusicList.css";

function MusicList({ games }) {
const [selectedCategory, setSelectedCategory] = useState("All");
const [platformGames, setPlatformGames] = useState([]);
const [categoryGames, setCategoryGames] = useState([]);

const handleCategoryChange = async (event) => {
setSelectedCategory(event.target.value);
if (event.target.value === "Platform") {
const url =
"https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc";
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
setPlatformGames(result);
} catch (error) {
console.error(error);
}
} else if (event.target.value === "Category or Tag") {
const url =
"https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter";
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
setCategoryGames(result);
} catch (error) {
console.error(error);
}
} else {
setCategoryGames([]);
setPlatformGames([]);
}
};

const filteredGames1 =
selectedCategory === "All"
? games
: selectedCategory === "Platform"
? platformGames
: selectedCategory === "Category or Tag"
? categoryGames
: games.filter((item) => item.category === selectedCategory);

return (
<div className="music-list">
<div className="Filter">
<select
       name="filter"
       value={selectedCategory}
       onChange={handleCategoryChange}
     >
<option value="All">Filter Games</option>
<option value="Category or Tag">Category or Tag</option>
<option value="Platform">Platform</option>
</select>
</div>
<ol className="item-container">
{filteredGames1.map((data) => (
<MusicCard key={data.id} data={data}/>
))}
</ol>
</div>
);
}

export default MusicList;






