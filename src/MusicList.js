import React, { useState } from "react";
import GameCard from "./GameCard";
import "./MusicList.css";


function MusicList({ games }) {
const [selectedCategory, setSelectedCategory] = useState("All");
const [platformGames, setPlatformGames] = useState([]);
const [shooterGames, setShooterGames] = useState([]);
const [MMORPGGames, setMMORPGGames] = useState([]);
const [MOBAGames, setMOBAGames] = useState([]);
const [MMOGames, setMMOGames] = useState([]);
const [fightingGames, setfightingGames] = useState([]);
const [strategyGames, setstrategyGames] = useState([]);


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
} else if (event.target.value === "Shooter") {
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
setShooterGames(result);
} catch (error) {
console.error(error);
}
}else if (event.target.value === "MMORPG") {
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
}else if (event.target.value === "MOBA") {
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
}else if (event.target.value === "MMO") {
  const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMO";
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
  setMMOGames(result);
  } catch (error) {
  console.error(error);
  }
}else if (event.target.value === "Fighting") {
  const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting";
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
  setfightingGames(result);
  } catch (error) {
  console.error(error);
  }
}else if (event.target.value === "Strategy") {
  const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy";
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
  setstrategyGames(result);
  } catch (error) {
  console.error(error);
  }
} else {
setShooterGames([]);
setPlatformGames([]);
setMMORPGGames([]);
setMOBAGames([]);
setMMOGames([]);
setfightingGames([]);
setstrategyGames([]);
}
};


const filteredGames1 =
selectedCategory === "All"
? games
: selectedCategory === "Platform"
? platformGames
: selectedCategory === "Shooter"
? shooterGames
: selectedCategory === "MMORPG"
? MMORPGGames
: selectedCategory === "MOBA"
? MOBAGames
: selectedCategory === "MMO"
? MMOGames
: selectedCategory === "Fighting"
? fightingGames
: selectedCategory === "Strategy"
? strategyGames


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
<option value="Shooter">Shooter</option>
<option value="MMORPG">MMORPG</option>
<option value="MOBA">MOBA</option>
<option value="MMO">MMO</option>
<option value="Fighting">Fighting</option>
<option value="Strategy">Strategy</option>
<option value="Platform">Platform</option>
</select>
</div>
<ol className="item-container">
{filteredGames1.map((data) => (
<GameCard key={data.id} data={data}/>
))}
</ol>
</div>
);
}


export default MusicList;






















































// import React, { useState } from "react";
// import MusicCard from "./MusicCard";
// import "./MusicList.css";

// function MusicList({ games }) {
// const [selectedCategory, setSelectedCategory] = useState("All");
// const [platformGames, setPlatformGames] = useState([]);
// const [categoryGames, setCategoryGames] = useState([]);

// const handleCategoryChange = async (event) => {
// setSelectedCategory(event.target.value);
// if (event.target.value === "Platform") {
// const url =
// "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc";
// const options = {
// method: "GET",
// headers: {
// "X-RapidAPI-Key": "3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c",
// "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
// },
// };
// try {
// const response = await fetch(url, options);
// const result = await response.json();
// setPlatformGames(result);
// } catch (error) {
// console.error(error);
// }
// } else if (event.target.value === "Category or Tag") {
// const url =
// "https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting";
// const options = {
// method: "GET",
// headers: {
// "X-RapidAPI-Key": "3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c",
// "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
// },
// };
// try {
// const response = await fetch(url, options);
// const result = await response.json();
// setCategoryGames(result);
// } catch (error) {
// console.error(error);
// }
// } else {
// setCategoryGames([]);
// setPlatformGames([]);
// }
// };

// const filteredGames1 =
// selectedCategory === "All"
// ? games
// : selectedCategory === "Platform"
// ? platformGames
// : selectedCategory === "Category or Tag"
// ? categoryGames
// : games.filter((item) => item.category === selectedCategory);

// return (
// <div className="music-list">
// <div className="Filter">
// <select
//        name="filter"
//        value={selectedCategory}
//        onChange={handleCategoryChange}
//      >
// <option value="All">Filter Games</option>
// <option value="Category or Tag">Category or Tag</option>
// <option value="Platform">Platform</option>
// </select>
// </div>
// <ol className="item-container">
// {filteredGames1.map((data) => (
// <MusicCard key={data.id} data={data}/>
// ))}
// </ol>
// </div>
// );
// }

// export default MusicList;






