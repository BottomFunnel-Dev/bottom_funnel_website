import React from "react";
import "./Cannabiscontainer.css";

export default function Cannabiscontainer() {
  return (
    <div className="cannabiscontainer">
      <div className="cannabissubcontainer">
        <div className="cannabisleft">
          <div>
            <h1>Medical Cannabis Delivery App</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ducimus impedit explicabo laboriosam corrupti nostrum veritatis
              labore, iste id reprehenderit aspernatur voluptates est quia
              voluptatibus quos, illum iure nesciunt delectus.
            </p>
            <button className="szcannabisbtn">Get Started</button>
          </div>
        </div>
        <div className="cannabisright">
          {/* <div className="szmapel"> */}
            {/* {" "} */}
            <img src="Images/CannabisDevApp/banner& backgrounds/CannabisBanner.png" />{" "}
          {/* </div> */}
          {/* <div className="szcubba">
            {" "}
            <img src="Images/cannabisPhotos/cubba.png" />{" "}
          </div>
          <div className="szandroid">
            {" "}
            <img src="Images/cannabisPhotos/android.png" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
