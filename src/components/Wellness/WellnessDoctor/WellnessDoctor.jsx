import React from "react";
import "./WellnessDoctor.css";

export const WellnessDoctor = () => {

  return (
      <>
       <div className="wellnessDoctorMainDiv">
         <div className="wellnessDoctorContainer">
            <div className="wellnessDoctorImage">
                <div className="wellnessDoctorImage2">
                 <img src="/Images/WellnessDevApp/DoctorScreens/PatientRecord.png"/>
                </div>
            </div>
            <div className="wellnessDoctorContent">
                <h1>Doctor App</h1>
                <div className="wellnessDoctorContentdata">
               <div className="wellnessDoctorContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-2.png"/> */}
                  <h4>Doctor's Profile</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessDoctorContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-3.png"/> */}
                  <h4>Appointments Management</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
                <div className="wellnessDoctorContentdata">
               <div className="wellnessDoctorContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/CardPayment-1.png"/> */}
                  <h4>Patient Record</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessDoctorContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TrackOrder-1.png"/> */}
                  <h4>Prescription</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
            </div>
         </div>
       </div>
      </>
  );
};
