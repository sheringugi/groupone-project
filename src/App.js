import { BrowserRouter } from 'react-router-dom';
import React from "react";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";

function App() {
  return(
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
