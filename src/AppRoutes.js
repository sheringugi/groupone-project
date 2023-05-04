import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Home";
import GameProfiles from "./GameProfiles";
import PlayGame from "./PlayGame"


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameprofiles" element={<GameProfiles />} />
      <Route path="/playgame" element={<PlayGame />} />

    </Routes>
  );
}

export default AppRoutes;


