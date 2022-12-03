import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./ContactUS.css";
import { ContactUSBanner } from "./ContactUSBanner/ContactUSBanner";
import { ContactUSForm } from "./ContactUSForm/ContactUSForm";

// ----- Other requried react components -----
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const ContactUS = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us | Bottom Funnel</title>
        <meta
          name="description"
          content="We understand that your time is precious, and we want to make sure you
          get the best possible response."
        />
      </Helmet>
      <div className="ContactUS-container">
        <ContactUSBanner />
        {/* --------------- Contact form from home page and other pages will come here ----------- */}
        <ContactUSForm />
        <MainFooter />
      </div>
    </div>
  );
};
