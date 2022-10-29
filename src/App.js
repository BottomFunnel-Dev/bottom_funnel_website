import "./App.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import { ALLroutes } from "./routes";

function App() {
  const URLpath = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [URLpath]);

  return (
    <div className="App">
      <Navbar />
      <ALLroutes />
    </div>
  );
}

export default App;
