import React from "react";
import "./enquiry.css";
import lilly from "../Images/lilly.png";

const Enquiry = () => {
  return (
    <div className="enquirySection">
      <div id="partnerSection">
        <div>
          <h2>Our Partners</h2>
          <p>
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance.
          </p>
          <div className="partnerLogo">
            <div>
              <img src={lilly} alt="" />
            </div>
            <div>
              <img src={lilly} alt="" />
            </div>
            <div>
              <img src={lilly} alt="" />
            </div>
            <div>
              <img src={lilly} alt="" />
            </div>
            <div>
              <img src={lilly} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="formSection">
        <h1>Tell us about your project</h1>
        <p>
          This is the first item's accordion body. It is shown by default, until
          the collapse plugin adds the appropriate classes that.
        </p>
        <input className="inputsSection" type="text" placeholder="Your Name" />
        <input className="inputsSection" type="text" placeholder="Your Email" />
        <input
          className="inputsSection"
          type="number"
          placeholder="Phone Number"
        />
        <textarea
          className="inputsSection"
          name=""
          id=""
          cols="10"
          rows="7"
          placeholder="Message"
        ></textarea>

        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Enquiry;
