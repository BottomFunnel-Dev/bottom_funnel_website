import React from "react";
import "./Flutterdevelopmentbanner.css";
export const Flutterdevelopmentbanner = () => {
  return (
    <div className="_Flutterbanner">
      <div className="flutterText">
        <h1>Flutter App Developement Company</h1>
        <p>
          Flutter is an open-source UI software development kit created by
          Google. Flutter allows developers to build cross-platform applications
          for Android, iOS, Linux, macOS, Windows, Google Fuchsia and web from a
          single codebase. Flutter applications run natively on the platform of
          your choice and deliver a great user experience with minimal resource
          consumption.
        </p>
        <button>Get Started</button>
      </div>
      <div className="flutterImage">
        <img src="Images/flutter/banner.gif" alt="banner.gif" />
      </div>
    </div>
  );
};
