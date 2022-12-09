import React from "react";
import "./Taxibookingcontainer.css";

export default function Taxibookingcontainer() {
  return (
    <div className="sztaxicontainer">
      <div className="sztaxisubcontainer">
        <div className="sztaxileft">
          <div>
            <h1>Taxi booking App</h1>
            <p>
              After a long day of work, you're looking for an easy way to get
              home. To make things less stressful, you decide to book a cab
              online. But this time, it's not just any taxi booking app that'll
              do. It has to be the one that knows your city like the back of its
              hand! And with Bottom Funnel's Taxi Booking app, you can be sure
              that your ride is safe and well-maintained by drivers who know
              every nook and cranny like the back of their hands.
            </p>
            <button className="sztaxibtn">Get Started</button>
          </div>
        </div>

        <div className="sztaxiright">
          <div className="szrectangleyellow">
            <img src="Images/Taxibooking/rectangleyellow.png" />
          </div>
          <div className="sztaxi1">
            <img src="Images/Taxibooking/taxi2.png" />
          </div>
          <div className="sztaxi2">
            <img src="Images/Taxibooking/Taxi1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
