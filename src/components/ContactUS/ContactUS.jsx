import React from "react";
import MainFooter from "../FooterSection/MainFooter";
import "./ContactUS.css";
import { ContactUSBanner } from "./ContactUSBanner/ContactUSBanner";
import { ContactUSForm } from "./ContactUSForm/ContactUSForm";

export const ContactUS = () => {
  return (
    <div>
      <div className="ContactUS-container">
        <ContactUSBanner />
        {/* --------------- Contact form from home page and other pages will come here ----------- */}
        <ContactUSForm />
        <MainFooter/>
      </div>
    </div>
  );
};
