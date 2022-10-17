import React from "react";
import "./revamping.css";
import { RiNavigationLine, RiMailSendFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

const Revamping = () => {
  return (
    <div className="revamp">
      <div className="revampback">
        <img src="Images/revamp/final2.png" alt="" />
      </div>
      <div className="textlayer">
        <div className="navmotion">
          <img src="Images/revamp/navigation.gif" alt="" />
        </div>
        <h1>Need an expert advice on your technical queries?</h1>
        <p>
          Fill the required information about your query and we will send you
          your solution.
        </p>
        <button>
          <IconContext.Provider value={{ className: "buttonIcon" }}>
            <RiMailSendFill />
          </IconContext.Provider>
          Enquire now
        </button>
      </div>
    </div>
  );
};

export default Revamping;
