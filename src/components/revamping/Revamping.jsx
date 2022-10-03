import React from "react";
import "./revamping.css";
import { RiNavigationLine, RiMailSendFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

const Revamping = () => {
  return (
    <div className="revamp">
      {/* <IconContext.Provider value={{ className: "navIcon" }}>
        <RiNavigationLine />
      </IconContext.Provider> */}
     <div className="navmotion"> <img src="Images/navmotion.gif" alt="" /></div>
      <h1>Thinking of Revamping Your Website to Generate Real ROI?</h1>
      <p>
        Provide us with the following information and we'll send you your
        solution
      </p>
      <button>
        <IconContext.Provider value={{className:"buttonIcon"}}>
        <RiMailSendFill />

        </IconContext.Provider>
        Enquire now
      </button>
    </div>
  );
};

export default Revamping;
