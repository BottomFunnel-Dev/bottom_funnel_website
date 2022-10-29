import React from "react";
import "./Cannabisdrive.css";
export default function Cannabisdrive() {
  return (
    <div className="szCannabisdrive">
      <div className="szCannabisdrivesub">
        <div className="szCannabisdriveleft">
          <div className="triangle">
            {" "}
            <img src="Images/cannabisPhotos/triangle.png" />{" "}
          </div>
          <div className="category">
            {" "}
            <img src="Images/cannabisPhotos/category.png" />{" "}
          </div>
        </div>
        <div className="szCannabisdriveright">
          <div>
            <h2>Drive App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ex labore, quia corrupti veniam fugiat quae beatae, aspernatur
              odio iste perferendis, dolor eaque ducimus architecto modi vel hic
              perspiciatis accusamus!
            </p>
            <button className="cannabisdrivebtn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
