import React from "react";
import "./Taxibookingadmin.css";

export default function Taxibookingadmin() {
  return (
    <div className="sztaxiadmincontainer">
      <div className="sztaxiadminsub">
        <div className="sztaxiadminleft">
          <div>
            <h2> Admin panel </h2>
            <ul>
              <li>Real-Time Ride Update</li>
              <li>Driver Management</li>
              <li>Flexible Price Slabs</li>
              <li>Create offers and Discounts</li>
              <li>Create Sub Admins</li>
              <li>Reports and Analytics</li>
            </ul>
          </div>
          <button className="taxiadminbtn"> Get started</button>
        </div>

        <div className="sztaxiadminright">
          <div className="sztaxiadmin">
            <img src="Images/Taxibooking/admin.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
