import React from "react";
import "./Flutterservices.css";
import { FcIdea } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
export const Flutterservices = () => {
  return (
    <div className="_Flutterservices">
      <div className="_Flutterservices1">
        <h1>
          <i style={{ color: "#EF4C23" }}>Flutter</i> App
          <br />
          Development Services
        </h1>
        <p>
          Our Flutter app development team builds Flutter apps from scratch or
          adds frameworks to existing applications to speed up app delivery
          without adding Flutter app development costs.
        </p>
        <h5>
          Start Building Your React-Native App <BsArrowRight />
        </h5>
      </div>
      <div className="_Flutterservices2">
        <h2>
          <i style={{ color: "#EF4C23" }}>
            <FcIdea className="fcideaicon" /> Flutter
          </i>{" "}
          App Ideation & Consulting
        </h2>
        <p>
          Flutter application development offers many benefits for both SMBs and
          enterprises, but frameworks do not fit all development scenarios. Our
          Flutter mobile app developer will meet with you to understand your
          product vision and how best to align Flutter with your business goals.
        </p>

        <h2>
          <FcIdea className="fcideaicon" /> App Development With{" "}
          <i style={{ color: "#EF4C23" }}>Flutter</i>{" "}
        </h2>
        <p>
          Flutter application development offers many benefits for both SMBs and
          enterprises, but frameworks do not fit all development scenarios. Our
          Flutter mobile app developer will speak with you to understand your
          product vision and how best to align Flutter with your business goals.
        </p>

        <h2>
          <i style={{ color: "#EF4C23" }}>
            <FcIdea className="fcideaicon" /> Flutter
          </i>{" "}
          Migration
        </h2>
        <p>
          We provide migration expertise to migrate your current iOS or Android
          application to a Flutter application. Flutter mobile app development
          company's delivery experts ensure flawless user performance when
          deploying your app to other mobile platforms, web and smart devices.
        </p>

        <h2>
          <i style={{ color: "#EF4C23" }}>
            <FcIdea className="fcideaicon" /> Flutter
          </i>{" "}
          Support & Maintenance
        </h2>
        <p>
          Flutter application development offers many benefits for both SMBs and
          enterprises, but frameworks do not fit all development scenarios. Our
          Flutter mobile app developer will meet with you to understand your
          product vision and how best to align Flutter with your business goals.
        </p>
      </div>
    </div>
  );
};
