import React from "react";
import "./Cannabisadmin.css";

export default function Cannabisadmin() {
  return (
    <div className="szCannabisadmin">
      <div className="szCannabisadminsub">
        <div className="szCannabisadminleft">
          <div>
            <h2>Drive App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ex labore, quia corrupti veniam fugiat quae beatae, aspernatur
              odio iste perferendis, dolor eaque ducimus architecto modi vel hic
              perspiciatis accusamus!
            </p>
            <button className="cannabisadminbtn">Get started</button>
          </div>
        </div>
        <div className="szCannabisadminright">
          <div className="bluerectangle">
            <img src="Images/cannabisPhotos/blueRectangle.png" />
          </div>
          <div className="cannbistab">
            <img src="Images/cannabisPhotos/tab.png" />
          </div>
          <div className="pinkrectangle">
            <img src="Images/cannabisPhotos/pinkRectangle.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
