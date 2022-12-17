import React from "react";
import "./Cannabiancustomer.css";

export default function Cannabiscustomersection() {
  return (
    <div className="Cannabiscustomersection">
      <div className="Cannabissubcustomer">
        <div className="Cannabissubcustomerleft">
          <div className="heartimage">
            <img src="Images/CannabisDevApp/banner& backgrounds/banner2.png" />
          </div>
          <div className="heartmobile">
            <img src="Images/CannabisDevApp/Customerscreens/Component.png" />
          </div>
        </div>
        <div className="Cannabissubcustomerright">
          <div>
            <h1>Customer App</h1>
            <div className="cannabisCustomerContent">
               <div className="cannabisCustomerContentDiv">
                  <img src="Images/CannabisDevApp/icons/easy.png"/>
                  <h4>Easy App Onboarding</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisCustomerContentDiv">
                  <img src="Images/CannabisDevApp/icons/Categories.png"/>
                  <h4>Browse By Categories</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
            <div className="cannabisCustomerContent">
               <div className="cannabisCustomerContentDiv">
                  <img src="Images/CannabisDevApp/icons/chat.png"/>
                  <h4>In App Chat</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="cannabisCustomerContentDiv">
                  <img src="Images/CannabisDevApp/icons/order.png"/>
                  <h4>Track Order</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
