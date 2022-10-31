import React from "react";
import "./Cannabissolution.css";

export default function Cannabissolution() {
  const cannabisSolution = [
    {
      //    img:"Images/cannabisPhotos/Socialmedia.png",
      p: " Social media Integration",
    },
    {
      img: "Images/cannabisPhotos/payment.png",
      p: "Documents sharing",
    },
    {
      img: "Images/cannabisPhotos/reportsanalytics.png",
      p: "Sign up/log in",
    },
    {
      img: "Images/cannabisPhotos/option.png",
      p: "Ratings",
    },
    {
      img: "Images/cannabisPhotos/CoininHand.png",
      p: " Parental control",
    },
    {
      img: "Images/cannabisPhotos/Speaker.png",
      p: "Live Streaming",
    },
  ];

  return (
    <div className="szmedicalsolution">
      <div className="szmedicalheading">
        <div className="szrectanglebg">
          {" "}
          <img src="Images/cannabisPhotos/solutionrectanglebg.png" />{" "}
        </div>
        <h2> Medical Cannabis Delivery Solution</h2>
        <p>
          Deliver Medical Cannabis to users all around the world and make
          Millions !
        </p>
      </div>
      <div className="szmedicalsub">
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src=" Images/cannabisPhotos/Location.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/cannabisPhotos/payment.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src=" Images/cannabisPhotos/reportsanalytics.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/cannabisPhotos/order.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/cannabisPhotos/coininHand.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/cannabisPhotos/Speaker.png" />{" "}
            </div>
            <h5>Real-Time Tracking</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
