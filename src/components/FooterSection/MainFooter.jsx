import React, { useState } from "react";
import FooterTable from "./FooterTable";
import "./mainFooter.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [whatsapp, setWhatsapp] = React.useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    // boxShadow: 24,
    backgorund: "green",
    p: 1,
    borderRadius: 2,
  };

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
            <i className="taglinefooter">"Build Your Brands Presence"</i>
          </div>

          <div className="footerAddress">
            <div className="footerMapContactSection">
              <li>
                <FaPhoneAlt /> +91 8209366227
              </li>
              <li></li>
              <li
                onMouseEnter={() => setWhatsapp(() => true)}
                onMouseLeave={() => setWhatsapp(() => false)}
              >
                <FaWhatsapp
                  fontSize="30px"
                  color="#ef4c34"
                  cursor={"pointer"}
                />
              </li>
              <li>
                <FaWhatsapp fontSize="20px" /> +254 787 213 522
              </li>
              <li>
                {" "}
                <AiOutlineMail fontSize="20px" /> hr@bottomfunnel.net
              </li>
            </div>
            <div
              style={{ display: whatsapp ? "flex" : "none" }}
              onMouseEnter={() => setWhatsapp(true)}
              onMouseLeave={() => setWhatsapp(false)}
              className="MainFooter-whatsapp-container"
            >
              <div>
                <h1>UAE</h1>
                <h3>+971553070316</h3>
                <h3>+971585978776</h3>
                <h3>+971 -56 566 4624</h3>
              </div>
              <div>
                <h1>India</h1>
                <h3>+918209366227</h3>
                <h3>+917877680588</h3>
              </div>
              <div>
                <h1>USA</h1>
                <h3>+19176956550</h3>
              </div>
              <div>
                <h1>Kenya</h1>
                <h3>+254 787 213 522</h3>
              </div>
            </div>

            <div className="footerSocialMediaSection">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100075774771610"
              >
                <IconContext.Provider value={{ className: "socialIcons" }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              <a target="_blank" href="https://twitter.com/BottomFunnel">
                <IconContext.Provider value={{ className: "socialIcons" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bottomfunnel/mycompany/verification/"
              >
                <IconContext.Provider value={{ className: "socialIcons" }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/bottomfunnelmarketing/"
              >
                <IconContext.Provider value={{ className: "socialIcons" }}>
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC-zyghDYFUgRSUlKTadvJuQ"
              >
                <IconContext.Provider value={{ className: "socialIcons" }}>
                  <FaYoutube />
                </IconContext.Provider>
              </a>
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
          <h3>Start With Bottom Funnel Today</h3>
          <button onClick={handleOpen}>Plan Project</button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className="popform">
                  <PopupForm />
                </div>
              </Typography>
            </Box>
          </Modal>
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
