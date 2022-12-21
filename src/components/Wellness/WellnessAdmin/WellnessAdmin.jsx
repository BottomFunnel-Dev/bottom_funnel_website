import React from "react";
import "./WellnessAdmin.css";

export const WellnessAdmin = () => {

  return (
      <>
       <div className="wellnessAdminMainDiv">
         <div className="wellnessAdminContainer">
            <div className="wellnessAdminContent">
                <h1>Admin Panel</h1>
                <div className="wellnessAdminContentdata">
               <div className="wellnessAdminContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-2.png"/> */}
                  <h4>Driver's Profile</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessAdminContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-3.png"/> */}
                  <h4>Dialy Earnings and Reports</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
                <div className="wellnessAdminContentdata">
               <div className="wellnessAdminContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/CardPayment-1.png"/> */}
                  <h4>Cutomer Order Details</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessAdminContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TrackOrder-1.png"/> */}
                  <h4>Track Order</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
            </div>
            <div className="wellnessAdminImage">
                <div className="wellnessAdminImage2">
                 <img src="/Images/WellnessDevApp/AdminScreens/DoctorManagement.png"/>
                </div>
            </div>
         </div>
       </div>
      </>
  );
};
