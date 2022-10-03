// import React, { useState } from "react";
// import "./footer.css";
// import { BsChevronDown } from "react-icons/bs";
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { IconContext } from "react-icons";

// const Footer = () => {
//   const [footerToggle, setFooterToggle] = useState(false);

//   const footerServises = () => {
//     footerToggle ? setFooterToggle(false) : setFooterToggle(true);
//   };

//   return (
//     <div className="footerSection">
//       <div className="mapSection">
//         <div className="worldMapSection">
//           <img src="Images/whiteworldmap.png" alt="" />
//         </div>

//         <OverlayTrigger
//           placement="bottom"
//           overlay={
//             <div className="tooltipCustomised">
//               <h5>India</h5>
//               <h6>Jaipur</h6>
//               <p>
//                 422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017
//               </p>
//             </div>
//           }
//         >
//           <div id="indiaBranch" className="mapPointers"></div>
//         </OverlayTrigger>
//         <OverlayTrigger
//           placement="bottom"
//           overlay={
//             <div className="tooltipCustomised">
//               <h5>UAE</h5>
//               <h6>Dubai</h6>
//               <p>
//                 422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017
//               </p>
//             </div>
//           }
//         >
//           <div id="dubaiBranch" className="mapPointers"></div>
//         </OverlayTrigger>
//         <OverlayTrigger
//           placement="bottom"
//           overlay={
//             <div className="tooltipCustomised">
//               <h5>Germany</h5>
//               <h6>Berlin</h6>
//               <p>
//                 422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017
//               </p>
//             </div>
//           }
//         >
//           <div id="germanyBranch" className="mapPointers"></div>
//         </OverlayTrigger>
//         <OverlayTrigger
//           placement="bottom"
//           overlay={
//             <div className="tooltipCustomised">
//               <h5>USA</h5>
//               <h6>New York</h6>
//               <p>
//                 422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017
//               </p>
//             </div>
//           }
//         >
//           <div id="newYorkBranch" className="mapPointers"></div>
//         </OverlayTrigger>
//         <OverlayTrigger
//           placement="bottom"
//           overlay={
//             <div className="tooltipCustomised">
//               <h5>UK</h5>
//               <h6>Manchester</h6>
//               <p>
//                 422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017
//               </p>
//             </div>
//           }
//         >
//           <div id="manchesterBranch" className="mapPointers"></div>
//         </OverlayTrigger>

//         {/* <div className="mapPointers pointer2"></div> */}

//         {/* <div className="mapPointers"></div> */}
//         <div>
//           <div className="footerMapContactSection">
//             <li>+91 79 4032 4566</li>
//             <li></li>
//             <li>hello@uplers.com</li>
//           </div>

//           <div className="footerSocialMediaSection">
//             <IconContext.Provider value={{ className: "socialIcons" }}>
//               <FaFacebookF />
//             </IconContext.Provider>
//             <IconContext.Provider value={{ className: "socialIcons" }}>
//               <FaTwitter />
//             </IconContext.Provider>
//             <IconContext.Provider value={{ className: "socialIcons" }}>
//               <FaLinkedin />
//             </IconContext.Provider>
//             <IconContext.Provider value={{ className: "socialIcons" }}>
//               <FaInstagram />
//             </IconContext.Provider>
//             <IconContext.Provider value={{ className: "socialIcons" }}>
//               <FaYoutube />
//             </IconContext.Provider>
//           </div>

//           <div className="footerMapContactSection privacySection">
//             <li>Privacy Policy</li>
//             <li></li>
//             <li>ISMS Policy</li>
//           </div>
//           <p>© 2022 Uplers Solutions Private Limited. All rights reserved.</p>
//         </div>
//       </div>
//       <div className="mainFooter">
//         <div className="innerFooterPart">
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//         </div>

//         <div onClick={footerServises} className="moreSection">
//           <p>More Services</p>
//           <BsChevronDown
//             className={footerToggle ? "iconRotation" : "downIcon"}
//           />
//         </div>

//         <div className={footerToggle ? "innerFooterPart" : "moreServices"}>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//           <div>
//             <h3>About</h3>
//             <ul>
//               <li>About Us</li>
//               <li>Vetting Process</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//               <li>How it Works</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
