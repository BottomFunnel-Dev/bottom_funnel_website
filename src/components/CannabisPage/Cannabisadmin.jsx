import React from "react";
import "./Cannabisadmin.css";

export default function Cannabisadmin() {
  return (
    <div className="szCannabisadmin">
      <div className="szCannabisadminsub">
        <div className="szCannabisadminleft">
          <div>
            <h1>Admin Panel</h1>
            <div className="cannabisAdminContent">
               <div className="cannabisAdminContentDiv">
                  <img src="Images/CannabisDevApp/icons/TaskCompleted.png"/>
                  <h4>DashBoard Management</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisAdminContentDiv">
                  <img src="Images/CannabisDevApp/icons/TaskCompleted-1.png"/>
                  <h4>Reports and Analytics</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
            <div className="cannabisAdminContent">
               <div className="cannabisAdminContentDiv">
                  <img src="Images/CannabisDevApp/icons/CardPayment.png"/>
                  <h4>Client Management</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisAdminContentDiv">
                  <img src="Images/CannabisDevApp/icons/TrackOrder.png"/>
                  <h4>Order Management</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
            <button className="cannabisadminbtn">Get started</button>
          </div>
        </div>
        <div className="szCannabisadminright">
          <div className="bluerectangle">
            <img src="Images/CannabisDevApp/banner& backgrounds/banner4.png" />
          </div>
          <div className="cannbistab">
            <img src="Images/CannabisDevApp/AdminScreens/Screen1.png" />
          </div>
          {/* <div className="pinkrectangle">
            <img src="Images/cannabisPhotos/pinkRectangle.png" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
