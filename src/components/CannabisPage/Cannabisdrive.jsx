import React from "react";
import "./Cannabisdrive.css";
export default function Cannabisdrive() {
  return (
    <div className="szCannabisdrive">
      <div className="szCannabisdrivesub">
        <div className="szCannabisdriveleft">
          <div className="triangle">
            {" "}
            <img src="Images/CannabisDevApp/banner& backgrounds/banner3.png" />{" "}
          </div>
          <div className="category">
            {" "}
            <img src="Images/CannabisDevApp/driverScreens/DriverProfile.png" />{" "}
          </div>
        </div>
        <div className="szCannabisdriveright">
          <div>
            <h1>Drive App</h1>
            <div className="cannabisDriverContent">
               <div className="cannabisDriverContentDiv">
                  <img src="Images/CannabisDevApp/icons/TaskCompleted-2.png"/>
                  <h4>Driver's Profile</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisDriverContentDiv">
                  <img src="Images/CannabisDevApp/icons/TaskCompleted-3.png"/>
                  <h4>Dialy Earnings and Reports</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
            <div className="cannabisDriverContent">
               <div className="cannabisDriverContentDiv">
                  <img src="Images/CannabisDevApp/icons/CardPayment-1.png"/>
                  <h4>Cutomer Order Details</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisDriverContentDiv">
                  <img src="Images/CannabisDevApp/icons/TrackOrder-1.png"/>
                  <h4>Track Order</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
            <button className="cannabisdrivebtn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
