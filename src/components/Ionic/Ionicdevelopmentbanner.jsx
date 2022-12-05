import React from "react";
import "./Ionicdevelopmentbanner.css";

export const Ionicdevelopmentbanner = () => {
  return (
    <div className="Ionic-development-main">
      <div className="Ionic-developmentText">
        <div>
          <h1>Ionic App Developement Company</h1>
          <p>
            Ionic is the perfect choice for building native-feeling mobile
            applications. Ionic Capacitor is a cross-platform native bridge that
            allows you to turn any web project into a native iOS or Android
            mobile application. With Ionic, you can use familiar web libraries,
            frameworks, and languages such as AngularJS, React Native and others
            to build powerful mobile apps on the go. As an added benefit, Ionic
            Capacitor also provides tools for building mobile-ready Progressive
            Web Apps (PWA).
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="Ionic-developmentImage">
        <div className="Ionic-development-mobileimage">
          <img src="Images/ionic/banner.gif" alt="macbook air animation gif" />
        </div>
      </div>
    </div>
  );
};
