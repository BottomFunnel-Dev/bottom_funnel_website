import React from "react";
import "./Politicscontainer.css";

export default function Politicscontainer() {
  return (
    <div className="politicscontainer">
      <div className="politicssub">
        <div className="politicsleft">
          <div>
            <h1> Politics</h1>
            <p>
              In today's world, your political stand and opinion matters a lot.
              You want to express yourself freely and loud, but do you know how
              important that is? If not, we have the perfect solution for you -
              it's called a web app!
            </p>
            <button className="politicsgetbtn">Get Started</button>
          </div>
        </div>
        <div className="politicsright">
          <div className="politicsimage">
            <img src="Images/Politics/politics.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
