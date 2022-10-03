import React from "react";
import "./contectForm.css";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const ContectForm = () => {
  return (
    <div className="mainLeadform">
      <div className="backgroundDiv">
      <div className="formHeader">
            <h1>Interested in working with us?</h1>
            <h5>Let's talk and get started</h5>
          </div>
      </div>
          
      <div className="contectSection">
        <div className="addressSection">
          <img src="Images/services/service.jpg" alt="" />
          <div>
          <div className="mailAddress">
            <IconContext.Provider value={{ className: "mailIcon" }}>
              <BsFillPersonFill />
            </IconContext.Provider>

            <div>
              <p>Mail to our sales department</p>
              <h3>sales@bottomFunnel.net</h3>
            </div>
          </div>
          <div className="mailAddress">
            <IconContext.Provider value={{ className: "mailIcon" }}>
              <BsFillPersonFill />
            </IconContext.Provider>

            <div>
              <p>Mail to our sales department</p>
              <h3>sales@bottomFunnel.net</h3>
            </div>
          </div>

          <div className="assistanceSection">
            <h3>& What you will get:</h3>
            <ul>
              <li>On-call inquiry assistance</li>
              <li>Project consulting by experts</li>
              <li>Detailed project estimation</li>
            </ul>
          </div>
          </div>
        </div>
        <div className="formPart">
          <div className="formSection">
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsFillPersonFill />
              </IconContext.Provider>
              <input type="text" className="inputPart" placeholder="Name" />
            </div>
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <AiTwotoneMail />
              </IconContext.Provider>
              <input type="text" className="inputPart" placeholder="Email" />
            </div>
            <div className="phoneClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsFillTelephoneFill />
              </IconContext.Provider>
              <select className="countryCode" name="" id="">
                <option value="+91">IN +91</option>
                <option value="+91">IN +91</option>
                <option value="+91">IN +91</option>
                <option value="+91">IN +91</option>
                <option value="+91">IN +91</option>
              </select>
            </div>
            <input
              className="phoneNumber"
              type="number"
              placeholder="Phone Number"
            />
            <div className="selectClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <CgMenuGridR />
              </IconContext.Provider>
              <select className="selectPart" name="" id="">
                <option value="Select">Interested In*</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
              </select>
            </div>
            <div id="budgetSelect" className="selectClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsCurrencyDollar />
              </IconContext.Provider>
              <select className="selectPart" name="" id="">
                <option value="Select">Your Budget</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
              </select>
            </div>
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <RiMessage2Fill />
              </IconContext.Provider>
              <input
                type="text"
                className="inputPart"
                placeholder="Skype/Whatsapp"
              />
            </div>
            <div className="textareaClass">
              <IconContext.Provider value={{ className: "formMessageIcon" }}>
                <BiMessage />
              </IconContext.Provider>
              <label htmlFor="textarea"> Message</label>
              <textarea
                className="messagePart"
                name="textarea"
                id=""
                cols="15"
                rows="5"
              ></textarea>
            </div>
            <input type="checkbox" />{" "}
            <strong>
              Yes, Send Me A Mutual NDA (Non-Disclosure Agreement)
            </strong>
          </div>
          <div className="robotCaptcha">
            <button>SEND YOUR INQUIRY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectForm;
