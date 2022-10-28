import React from "react";
import "./Datingfeature.css";

export default function Datingfeatures() {
  return (
    <div className="datingfeaturesdiv">
      <div>
        <h1>Features</h1>
        <p>
          You take care of the video quality and we take care of everything else
        </p>
      </div>

      <div className="datingfeaturessubdiv">
        <div className="updatediv">
          <h4>Update On Time</h4>
          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>

        {/* 
      ////////2option///////////// */}

        <div className="reminderdiv">
          <h4>Reminders</h4>
          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>

        <div className="updatediv">
          <h4>Social media Integration </h4>

          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>

        {/* 
      ////////2option///////////// */}

        <div className="reminderdiv">
          <h4>Push Notification</h4>
          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>

        <div className="updatediv">
          <h4>Ratings</h4>

          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>

        {/* 
      ////////2option///////////// */}

        <div className="reminderdiv">
          <h4>Live Chatting</h4>

          <p>
            Upload in bulk, organize content in categories , add custom filters
            & upload extras.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
