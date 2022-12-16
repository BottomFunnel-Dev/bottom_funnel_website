import React from "react";
import "./Cannabissolution.css";

export default function Cannabissolution() {
  const cannabisSolution = [
    {
      //    img:"Images/cannabisPhotos/icons/Socialmedia.png",
      p: " Social media Integration",
    },
    {
      img: "Images/cannabisPhotos/icons/payment.png",
      p: "Documents sharing",
    },
    {
      img: "Images/cannabisPhotos/icons/reportsanalytics.png",
      p: "Sign up/log in",
    },
    {
      img: "Images/cannabisPhotos/icons/option.png",
      p: "Ratings",
    },
    {
      img: "Images/cannabisPhotos/icons/Hand.png",
      p: " Parental control",
    },
    {
      img: "Images/cannabisPhotos/icons/Speaker.png",
      p: "Live Streaming",
    },
  ];

  return (
    <div className="szmedicalsolution">
      <div className="szmedicalheading">
        {/* <div className="szrectanglebg">
          {" "}
          <img src="Images/CannabisDevApp/icons/solutionrectanglebg.png" />{" "}
        </div> */}
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
              <img src=" Images/CannabisDevApp/icons/Location.png" />{" "}
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
              <img src="Images/CannabisDevApp/icons/DebitCard.png" />{" "}
            </div>
            <h5>Multiple Payment Option</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src=" Images/CannabisDevApp/icons/ConclusionContract.png" />{" "}
            </div>
            <h5>Reports and Analytics</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/CannabisDevApp/icons/List.png" />{" "}
            </div>
            <h5>Manage Orders</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/CannabisDevApp/icons/Hand.png" />{" "}
            </div>
            <h5>Bettter ROI</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas quaerat, molestiae harum at delectus minus temporibus{" "}
          </p>
        </div>
        <div>
          <div className="greybg">
            <div className="szlocation">
              <img src="Images/CannabisDevApp/icons/Speaker.png" />{" "}
            </div>
            <h5>Promotes Bussiness Effectively</h5>
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

