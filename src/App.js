import React, {useEffect, useState} from 'react';
import './App.css';
import MusicList from './MusicList'
import SearchBar from "./SearchForm.js";



function App() {
  const [artists, setArtists]= useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const addFavourite = (artist) => {
    if (!artists.some((item) => item.id === artist.id)) {
      setArtists([...artists, artist]);
    }
  };
  useEffect(()=>{
    fetch("http://localhost:3000/artists")
    .then(res=>res.json())
    .then(response=>setArtists(response))
  },[]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredArtists = artists.filter(
    (artist) => artist.strArtist.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="App">
      <h1>MUSIC STORE</h1>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <MusicList artists={filteredArtists} setArtists={setArtists} addFavourite={addFavourite} />
    </div>
  );
}

export default App;
