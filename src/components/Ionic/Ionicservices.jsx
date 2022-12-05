import React from "react";
import "./Ionicservices.css";
import { FcIdea } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
export const Ionicservices = () => {
  return (
    <div className="_Ionicservices">
      <div className="_Ionicservices1">
        <h1>
          <i style={{ color: "#498aff" }}>Ionic</i> App
          <br />
          Development Services
        </h1>
        <p>
          Our Ionic app development team builds Ionic apps from the ground up or
          adds frameworks to existing applications, making them a central topic
          in accelerating app delivery without incurring additional Ionic app
          development costs. increase.
        </p>
        <h5>
          Start Building Your React-Native App <BsArrowRight />
        </h5>
      </div>
      <div className="_Ionicservices2">
        <h2>
          <i style={{ color: "#498aff" }}>
            <FcIdea className="fcideaicon" /> Ionic
          </i>{" "}
          App Ideation & Consulting
        </h2>
        <p>
          Ionic application development offers many advantages for both SMBs and
          enterprises, but the framework does not fit all development scenarios.
          Our Ionic mobile app developer will work with you to understand your
          product vision and determine how best to align Ionic with your
          business goals.
        </p>

        <h2>
          <FcIdea className="fcideaicon" /> App Development With{" "}
          <i style={{ color: "#498aff" }}>Ionic</i>{" "}
        </h2>
        <p>
          Ionic application development offers many advantages for both SMBs and
          enterprises, but the framework does not fit all development scenarios.
          Our Ionic mobile app developer will work with you to understand your
          product vision and determine how best to align Ionic with your
          business goals.
        </p>

        <h2>
          <i style={{ color: "#498aff" }}>
            <FcIdea className="fcideaicon" /> Ionic
          </i>{" "}
          Migration
        </h2>
        <p>
          We provide migration expertise to migrate your current iOS or Android
          application to an Ionic application. Ionic's mobile app development
          company's delivery experts ensure flawless user performance when
          deploying your app to other mobile platforms, the web, and smart
          devices.
        </p>

        <h2>
          <i style={{ color: "#498aff" }}>
            <FcIdea className="fcideaicon" /> Ionic
          </i>{" "}
          Support & Maintenance
        </h2>
        <p>
          Ionic application development offers many advantages for both SMBs and
          enterprises, but the framework does not fit all development scenarios.
          Our Ionic mobile app developer will work with you to understand your
          product vision and determine how best to align Ionic with your
          business goals.
        </p>
      </div>
    </div>
  );
};
