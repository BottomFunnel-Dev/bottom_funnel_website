import React from "react";
import "./Keyarea.css";

export default function Keyarea() {
  return (
    <div className="szkeyareacontainer">
      <div className="szkeyareasub">
        <div className="szkeyarealeft">
          <div>
            <h2> Key Areas To Focus On During E-Scooter App Development </h2>
            <ul className="keyList">
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>{" "}
            </ul>
          </div>
        </div>
        <div className="szkeyarearight">
          <div className="szbigtriangle">
            <img src="Images/Escooter/bigtriangle.png" />
          </div>
          <div className="szkeymap">
            <img src="Images/Escooter/map.png" />
          </div>

          <div className="szkeyscooter">
            <img src="Images/Escooter/blackscooter.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
