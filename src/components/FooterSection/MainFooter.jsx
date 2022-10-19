import React, { useState } from "react";
import FooterTable from "./FooterTable";
import "./mainFooter.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import MoreServices from "./MoreServices";
const MainFooter = () => {
  const [more, setMore] = useState(false);
  const address = [
    {
      address: "800 3rd Ave New York, NY 10022 United States",
      className: "newYorkLocation",
    },
    {
      address: "House No, 3 Nkanchibaya Rd, Lusaka, Zambia",
      className: "zambiaLocation",
    },
    {
      address: "422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017",
      className: "germanyLocation",
    },
    {
      address: "Jtm Mall, Office no 422, 4th Floor, Jaipur Rajasthan, 302025",

      className: "indiaLocation",
    },
    {
      address: "1210, The Regal Tower, Near Business Bay, Dubai, U.A.E.",
      className: "uaeLocation",
    },
  ];

  const moreServices = () => {
    more ? setMore(false) : setMore(true);
  };

  return (
    <div className="mainFooterSection">
      <div className="rightFooter">
        <div className="mapImageSection">
          {address.map((item, i) => (
            <OverlayTrigger
              key={i}
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <div className="tooltipCustomised">
                  <div className="indicate"></div>
                  <p>{item.address}</p>
                </div>
              }
            >
              <div key={i} className={item.className}></div>
            </OverlayTrigger>
          ))}

          <img src="Images/footer/gg.gif" alt="" />
        </div>

        <div className="footerLogo">
          <div className="logoBottom">
            <img src="Images/footer/whitelogobottom.png" alt="" />
          </div>

          <div className="footerAddress">
            <div className="footerMapContactSection">
              <li>
                <FaPhoneAlt /> +91 8209366227
              </li>
              <li></li>
              <li>
                <FaWhatsapp fontSize="20px" /> +91 7877680588
              </li>
              <li>
                {" "}
                <AiOutlineMail fontSize="20px" /> hr@bottomfunnel.net
              </li>
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
            <p>
              © 2022 bottom funnel technologies Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="leftFooter">
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
        <div className="startWith">
          <h2>Start With Bottom Funnel Today</h2>
          <button>Plan Project</button>
        </div>

        <div className="footerServices">
          <FooterTable />
          <div onClick={moreServices} className="moreServ">
            <div>More Services</div>
            <div>
              <FiChevronDown />
            </div>
          </div>
          {more && <MoreServices />}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
