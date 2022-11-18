import React from "react";
import { IconContext } from "react-icons";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import "./AIForm.css";

import { countrycodes, interested, budget } from "./countrycode";

export const AIForm = () => {
  return (
    <div className="AIForm-container">
      <div className="AIForm-stats">
        <h1>Hire Dedicated Big Data Service</h1>
        <div>
          <div>
            <h1>$999</h1>
            <h3>Full Time Monthly</h3>
          </div>
          <div>
            <h1>$10/hr</h1>
            <h3>Week Basis</h3>
          </div>
          <div>
            <h1>$15</h1>
            <h3>Hourly Basis</h3>
          </div>
        </div>
      </div>
      <div className="AIForm-main">
        <div className="AIForm-form-outer-main">
          <h1>Get Started Now!</h1>
          <div className="AIForm-form">
            <div className="AIForm-formSection">
              <div className="AIForm-inputWithIcon">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <input
                  type="text"
                  className="AIForm-inputPart"
                  placeholder="Name"
                />
              </div>
              <div className="AIForm-inputWithIcon">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <AiTwotoneMail />
                </IconContext.Provider>
                <input
                  type="text"
                  className="AIForm-inputPart"
                  placeholder="Email"
                />
              </div>
              <div className="AIForm-phoneClass">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <BsFillTelephoneFill />
                </IconContext.Provider>
                <select className="AIForm-countryCode" name="" id="">
                  {countrycodes.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code} {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                className="AIForm-phoneNumber"
                type="number"
                placeholder="Phone Number"
              />
              <div className="AIForm-selectClass">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <CgMenuGridR />
                </IconContext.Provider>
                <select className="AIForm-selectPart" name="" id="">
                  <option value="Select">Interested In*</option>
                  {interested.map((item, i) => (
                    <option key={i} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="AIForm-selectClass">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <BsCurrencyDollar />
                </IconContext.Provider>
                <select className="AIForm-selectPart" name="" id="">
                  <option value="Select">Your Budget</option>
                  {budget.map((item, i) => (
                    <option key={i} value={item.budget}>
                      {item.budget}
                    </option>
                  ))}
                </select>
              </div>
              <div className="AIForm-inputWithIcon">
                <IconContext.Provider value={{ className: "AIForm-formIcon" }}>
                  <RiMessage2Fill />
                </IconContext.Provider>
                <input
                  type="text"
                  className="AIForm-inputPart"
                  placeholder="Skype/Whatsapp"
                />
              </div>
              <div className="AIForm-textareaClass">
                <IconContext.Provider
                  value={{ className: "AIForm-formMessageIcon" }}
                >
                  <BiMessage />
                </IconContext.Provider>
                <label htmlFor="textarea"> Message</label>
                <textarea
                  className="AIForm-messagePart"
                  name="textarea"
                  id=""
                  cols="15"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="AIForm-robotCaptcha">
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="AIForm-feature-main">
          <h1>Features</h1>
          <ul>
            <li>
              We work in real-time to ensure a smooth transitioning process as
              well as prompt and timely deliveries.
            </li>
            <br />
            <li>
              Our work in multiple domains with a diverse clients based in every
              corner of the globe gives us an unparalleled perspective
            </li>
            <br />
            <li>
              We adopt proven industry concepts such as Convention over
              Configuration and DRY (Do not Repeat Yourself)
            </li>
            <br />
            <li>
              We offer dependable support and maintenance services across all
              our projects and ensure long-term client satisfaction.
            </li>
            <br />
            <li>
              We offer dependable support and maintenance services across all
              our projects and ensure long-term client satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
