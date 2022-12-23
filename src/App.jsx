import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import { ContactMain } from "./components/Contact/Contact";
import { NavbarMain } from "./components/Navbar/Navbar";
import { ALLroutes } from "./routes";
import { ProductsNavbar } from "./components/Navbar/ProductsNavbar/ProductsNavbar";

function App() {
  const URLpath = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [URLpath]);

  return (
    <div className="App">
      {/* <ContactMain /> */}
      <NavbarMain />
      {/* <ProductsNavbar /> */}
      <ALLroutes />
    </div>
  );
}

export default App;
