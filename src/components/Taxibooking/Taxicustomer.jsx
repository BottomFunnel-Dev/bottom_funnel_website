import React from "react";
import "./Taxicustomer.css";

export default function Taxicustomer() {
  return (
    <div className="sztaxicustomercontainer">
      <div className="sztaxicustomersub">
        <div className="sztaxicustomerleft">
          <div>
            <h2>Customer App</h2>
            <ul>
              <li> Accept/Reject Booking</li>
              <li>Simplified Navigation</li>
              <li>Real time Ride Updates</li>
              <li>Earning & summary</li>
              <li>Easy calling</li>
            </ul>
          </div>
          <button className="taxicustomerbtn"> Get started</button>
        </div>
        <div className="sztaxicustomerright">
          <div className="szyellowtriangle">
            <img src="Images/Taxibooking/lefttriangle.png" />
          </div>
          <div className="szcaricon">
            {" "}
            <img src="Images/Taxibooking/splash screen.png" />
          </div>
          <div className="sztaxidrive">
            <img src="Images/Taxibooking/taxi driver.png" />
          </div>

          <div className="sztaxiarive">
            <img src="Images/Taxibooking/driverarriving.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
