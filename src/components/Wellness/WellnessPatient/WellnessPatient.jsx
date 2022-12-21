import React from "react";
import "./WellnessPatient.css";

export const WellnessPatient = () => {

  return (
      <>
       <div className="wellnessPatientMainDiv">
         <div className="wellnessPatientheading">
            <h1>Must have Features of HealthCare Apps</h1>
         </div>
         <div className="wellnessPatientContainer">
            <div className="wellnessPatientContent">
                <h1>Patient App</h1>
                <div className="wellnessPatientContentdata">
               <div className="wellnessPatientContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-2.png"/> */}
                  <h4>Find a Doctor</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessPatientContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TaskCompleted-3.png"/> */}
                  <h4>Esay Appointments</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
                <div className="wellnessPatientContentdata">
               <div className="wellnessPatientContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/CardPayment-1.png"/> */}
                  <h4>Doctor's Details</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
               <div className="wellnessPatientContentDiv">
                  {/* <img src="Images/CannabisDevApp/icons/TrackOrder-1.png"/> */}
                  <h4>In App live Chat</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem odio suscipit quas nihil asperiores consequatur.</p>
               </div>
                </div>
            </div>
            <div className="wellnessPatientImage">
                <div className="wellnessPatientImage1">
                  <img src="/Images/WellnessDevApp/Banners/banner2.png"/>
                </div>
                <div className="wellnessPatientImage2">
                 <img src="/Images/WellnessDevApp/PatientScreens/DoctorDetailsScreen.jpg"/>
                </div>
            </div>
         </div>
       </div>
      </>
  );
};
