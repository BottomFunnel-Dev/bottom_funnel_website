import React from "react";
import "./OurProcess.css";
import { OurProcessPush } from "./OurProcessPush/OurProcessPush";

export const OurProcess = () => {
  return (
    <div className="about-us-ourprocess">
      <div className="OurProcess-aboutUs-main">
        <div className="OurProcess-aboutUs-content">
          <p>WHO WE ARE</p>
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolorum iusto aut sapiente provident ducimus quisquam ut porro
            dolorem! Quis, atque modi! Delectus corporis optio quas, laborum
            illo culpa tempore.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam dolorum iusto aut sapiente provident
            ducimus quisquam ut porro dolorem! Quis, atque modi! Delectus
            corporis optio quas, laborum illo culpa tempore.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veniam dolorum iusto aut
            sapiente provident ducimus quisquam ut porro dolorem! Quis, atque
            modi! Delectus corporis optio quas, laborum illo culpa tempore.
          </p>
          <button>Read More</button>
        </div>
        <div className="OurProcess-aboutUs-image">
          <img src="Images/aboutusImage/meeting.png" alt="about us main div" />
        </div>
      </div>
      <OurProcessPush />
    </div>
  );
};
