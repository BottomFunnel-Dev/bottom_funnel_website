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
          Our Ionic app developer team develop Ionic apps from scratch or add
          the framework to your existing application with a single-point agenda
          to expedite your app delivery without adding any extra Ionic app
          development cost.
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
          Ionic application development comes with a number of benefits for SMEs
          and Enterprises alike, but the framework doesn’t fit all development
          scenarios. Our Ionic mobile app developer sits with you to understand
          your product vision and find the best way in which Ionic can be
          aligned with your business goals.
        </p>

        <h2>
          <FcIdea className="fcideaicon" /> App Development With{" "}
          <i style={{ color: "#498aff" }}>Ionic</i>{" "}
        </h2>
        <p>
          Ionic application development comes with a number of benefits for SMEs
          and Enterprises alike, but the framework doesn’t fit all development
          scenarios. Our Ionic mobile app developer sits with you to understand
          your product vision and find the best way in which Ionic can be
          aligned with your business goals.
        </p>

        <h2>
          <i style={{ color: "#498aff" }}>
            <FcIdea className="fcideaicon" /> Ionic
          </i>{" "}
          Migration
        </h2>
        <p>
          We help you migrate your current iOS or Android application into a
          Ionic application with our migration expertise. Our Ionic mobile app
          development company deployment experts ensure that your users’
          performance remains glitch-free as we take your app to other mobile
          platforms, web, and smart devices.
        </p>

        <h2>
          <i style={{ color: "#498aff" }}>
            <FcIdea className="fcideaicon" /> Ionic
          </i>{" "}
          Support & Maintenance
        </h2>
        <p>
          Ionic application development comes with a number of benefits for SMEs
          and Enterprises alike, but the framework doesn’t fit all development
          scenarios. Our Ionic mobile app developer sits with you to understand
          your product vision and find the best way in which Ionic can be
          aligned with your business goals.
        </p>
      </div>
    </div>
  );
};
