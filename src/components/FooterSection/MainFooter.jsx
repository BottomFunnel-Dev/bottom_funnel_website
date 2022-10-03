import React from "react";
import FooterTable from "./FooterTable";
import "./mainFooter.css";
import { FiChevronDown } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
const MainFooter = () => {
  return (
    <div className="mainFooterSection">
      <div className="rightFooter">
        <div className="mapImageSection">
          <img src="Images/footer/whiteworld.png" alt="" />
        </div>

        <div className="footerLogo">
          <div className="logoBottom">
            <img src="Images/footer/whitelogo.png" alt="" />
          </div>

          <div className="footerAddress">
            <div className="footerMapContactSection">
              <li>+91 79 4032 4566</li>
              <li></li>
              <li>hr@bottomfunnel.net</li>
            </div>

            <div className="footerSocialMediaSection">
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <FaFacebookF />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <FaTwitter />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <FaLinkedin />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <AiFillInstagram />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <FaYoutube />
              </IconContext.Provider>
            </div>

            <div className="footerMapContactSection privacySection">
              <li>Privacy Policy</li>
              <li></li>
              <li>ISMS Policy</li>
            </div>
            <p>© 2022 bottom funnel technologies Private Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="leftFooter">
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="startWith">
          <h2>Start With Bottom Funnel Today</h2>
          <button>Plan Project</button>
        </div>

        <div className="footerServices">
          <FooterTable />
          <div className="moreServ">
            <div>More Services</div>
            <div>
              <FiChevronDown />
            </div>
          </div>
          <FooterTable/>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
