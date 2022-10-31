import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import { NavbarMain } from "./Components/Navbar/Navbar";
import { ALLroutes } from "./routes";

function App() {
  const URLpath = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [URLpath]);

  return (
    <div className="App">
      <NavbarMain />
      <ALLroutes />
    </div>
  );
}

export default App;
