import React, { useState } from "react";
import "./popup.css";

import { IconContext } from "react-icons/lib";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { interested, budget, countrycodes } from "../ContectForm/countrycode";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const PopupForm = ( {formStyle}) => {
  const form = useRef();

  const serviceID = "service_219qjzb";
  const template = "template_0fxfi75";
  const publicKey = "w37MD2W3eugHo9N6r";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("email sent successfully");
      },
      (error) => {
        console.log(error.text);
        console.log("failed");
      }
    );
    form.current.reset()
  };


  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="popupformPart">
        <div className="popupformSection">
          <div className="popupinputWithIcon">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <BsFillPersonFill />
            </IconContext.Provider>
            <input
              type="text"
              className="popupinputPart"
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
          <div className="popupinputWithIcon">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <AiTwotoneMail />
            </IconContext.Provider>
            <input
              type="text"
              className="popupinputPart"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className="popupphoneClass">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <BsFillTelephoneFill />
            </IconContext.Provider>
            <select
              className="popupcountryCode"
              name="country_code"
              required
              id=""
            >
              {countrycodes.map((item, i) => (
                <option key={i} value={item.code}>
                  {item.code} {item.dial_code}
                </option>
              ))}
            </select>
          </div>
          <input
            className="popupphoneNumber"
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            required
          />
          <div className="popupselectClass">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <CgMenuGridR />
            </IconContext.Provider>
            <select className="popupselectPart" name="interest" required id="">
              <option value="Select">Interested In*</option>
              {interested.map((item, i) => (
                <option key={i} value={item.service}>
                  {item.service}
                </option>
              ))}
            </select>
          </div>
          <div id="budgetSelect" className="popupselectClass">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <BsCurrencyDollar />
            </IconContext.Provider>
            <select className="popupselectPart" name="budget" required id="">
              <option value="Select">Your Budget</option>
              {budget.map((item, i) => (
                <option key={i} value={item.budget}>
                  {item.budget}
                </option>
              ))}
            </select>
          </div>
          <div className="popupinputWithIcon">
            <IconContext.Provider value={{ className: "popupformIcon" }}>
              <RiMessage2Fill />
            </IconContext.Provider>
            <input
              type="text"
              className="popupinputPart"
              placeholder="Skype/Whatsapp"
              name="whatsapp_number"
              required
            />
          </div>
          <div className="popuptextareaClass">
            <IconContext.Provider value={{ className: "popupformMessageIcon" }}>
              <BiMessage />
            </IconContext.Provider>
            <label htmlFor="textarea"> Message</label>
            <textarea
              className="popupmessagePart"
              name="message"
              placeholder="write your requirement (100-150 words)"
              id=""
              cols="15"
              rows="5"
            ></textarea>
          </div>
          {/* <input type="checkbox" />{" "}
            <strong>
              Yes, Send Me A Mutual NDA (Non-Disclosure Agreement)
            </strong> */}
        </div>
        <div className="popuprobotCaptcha">
          <input type="submit" value="Send Your Enquiry" />
        </div>
      </form>
    </div>
  );
};
