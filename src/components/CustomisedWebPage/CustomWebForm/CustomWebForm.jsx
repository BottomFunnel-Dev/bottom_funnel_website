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
import "./CustomWebForm.css";

import { countrycodes, interested, budget } from "./countrycode";

export const CustomWebForm = () => {
  return (
    <div className="CustomWebForm-container">
      <div className="CustomWebForm-stats">
        <h1>Hire Dedicated Customised Web Development Service</h1>
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
      <div className="CustomWebForm-main">
        <div className="CustomWebForm-form-outer-main">
          <h1>Get Started Now!</h1>
          <div className="CustomWebForm-form">
            <div className="CustomWebForm-formSection">
              <div className="CustomWebForm-inputWithIcon">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <BsFillPersonFill />
                </IconContext.Provider>
                <input
                  type="text"
                  className="CustomWebForm-inputPart"
                  placeholder="Name"
                />
              </div>
              <div className="CustomWebForm-inputWithIcon">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <AiTwotoneMail />
                </IconContext.Provider>
                <input
                  type="text"
                  className="CustomWebForm-inputPart"
                  placeholder="Email"
                />
              </div>
              <div className="CustomWebForm-phoneClass">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <BsFillTelephoneFill />
                </IconContext.Provider>
                <select className="CustomWebForm-countryCode" name="" id="">
                  {countrycodes.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code} {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                className="CustomWebForm-phoneNumber"
                type="number"
                placeholder="Phone Number"
              />
              <div className="CustomWebForm-selectClass">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <CgMenuGridR />
                </IconContext.Provider>
                <select className="CustomWebForm-selectPart" name="" id="">
                  <option value="Select">Interested In*</option>
                  {interested.map((item, i) => (
                    <option key={i} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="CustomWebForm-selectClass">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <BsCurrencyDollar />
                </IconContext.Provider>
                <select className="CustomWebForm-selectPart" name="" id="">
                  <option value="Select">Your Budget</option>
                  {budget.map((item, i) => (
                    <option key={i} value={item.budget}>
                      {item.budget}
                    </option>
                  ))}
                </select>
              </div>
              <div className="CustomWebForm-inputWithIcon">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formIcon" }}
                >
                  <RiMessage2Fill />
                </IconContext.Provider>
                <input
                  type="text"
                  className="CustomWebForm-inputPart"
                  placeholder="Skype/Whatsapp"
                />
              </div>
              <div className="CustomWebForm-textareaClass">
                <IconContext.Provider
                  value={{ className: "CustomWebForm-formMessageIcon" }}
                >
                  <BiMessage />
                </IconContext.Provider>
                <label htmlFor="textarea"> Message</label>
                <textarea
                  className="CustomWebForm-messagePart"
                  name="textarea"
                  id=""
                  cols="15"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="CustomWebForm-robotCaptcha">
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="CustomWebForm-feature-main">
          <h1>Features</h1>
          <ul>
            <li>
              We work in real time to ensure a smooth transition process and
              fast, on-time delivery.
            </li>
            <br />
            <li>
              Working in multiple disciplines with diverse clients from all over
              the world gives us an unparalleled perspective.
            </li>
            <br />
            <li>
              We adopt proven industry concepts such as construction rules and
              DRY (don't repeat yourself).
            </li>
            <br />
            <li>
              We provide reliable support and maintenance for every project and
              ensure long-term customer satisfaction.
            </li>
            <br />
            <li>
              Our team of expert technicians is skilled in a wide variety of
              disciplines, so we're able to tackle any task with speed and
              professionalism.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
