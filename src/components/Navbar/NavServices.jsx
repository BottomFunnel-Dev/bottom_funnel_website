// import React from "react";
// import "./navServices.css";
// import { Link } from "react-router-dom";
// const NavServices = () => {
//   const webservice = [
//     { dropContent: "PHP Development" },
//     { dropContent: "MERN Stack Development" },
//     { dropContent: "MEAN Stack Development" },
//     { dropContent: "ASP.NET Development" },
//     { dropContent: "Java Development" },
//     { dropContent: "Python Development" },
//     { dropContent: "Ruby on Rails Development" },
//     { dropContent: "Golang Development" },
//     { dropContent: "Javascript Development" },
//   ];

//   const appservice = [
//     { dropContent: "Andriod App Development" },
//     { dropContent: "IOS App Development" },
//     { dropContent: "Kotlin App Development" },
//     { dropContent: "Flutter App Development" },
//     { dropContent: "React Native App Development" },
//     { dropContent: "Xamarian App Development" },
//     { dropContent: "Ionic App Development" },
//     { dropContent: "Wearable App Development" },
//     { dropContent: "Mobile UI UX " },
//   ];
//   const digitalmarket = [
//     { dropContent: "SEO Services", path: "seo" },
//     { dropContent: "Local SEO Services", path: "local-seo" },
//     { dropContent: "SEM Services", path: "seo-sem" },
//     { dropContent: "SMM Services", path: "seo-sem" },
//     { dropContent: "PPC Management Services", path: "seo-ppc" },
//     { dropContent: "Guest Posting Services", path: "seo-guest-post" },
//     { dropContent: "Link Building Services", path: "seo-link-building" },
//     { dropContent: "Email Marketing Services", path: "" },
//   ];
//   const trendingTech = [
//     { dropContent: "Big Data Services" },
//     { dropContent: "Blockchain Services" },
//     { dropContent: "Machine Learning" },
//     { dropContent: "Artificial Intelligence" },
//     { dropContent: "Data Analytics" },
//     { dropContent: "Crypto currency Development" },
//     { dropContent: "Customised Web App Development" },
//     { dropContent: "Virtual Reality Development" },
//     { dropContent: "Augmented Reality" },
//     { dropContent: "NFT Development" },
//     { dropContent: "IoT Development" },
//     { dropContent: "StartUp Solutions" },
//     { dropContent: "Enterprise Solutions" },
//     { dropContent: "Metaverse Services" },
//   ];

//   return (
//     <div className="dropdownSection">
//       <div className="serviceDropdownContent">
//         <h4>Web Development</h4>
//         <div className="listItems">
//           {webservice.map((item, i) => (
//             <p key={i}>{item.dropContent}</p>
//           ))}
//         </div>
//       </div>
//       <div className="serviceDropdownContent">
//         <h4>App Development</h4>
//         <div className="listItems">
//           {appservice.map((item, j) => (
//             <p key={j}>{item.dropContent}</p>
//           ))}
//         </div>
//       </div>
//       <div className="serviceDropdownContent">
//         <h4>Digital Marketing</h4>
//         <div className="listItems">
//           {digitalmarket.map((item, l) => (
//             <Link to={item.path} className="servicesP">
//               <p key={l}>{item.dropContent}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div id="serviceDropContent" className="serviceDropdownContent">
//         <h4>Trending Technologies</h4>
//         <div className="trendListItems">
//           {trendingTech.map((item, m) => (
//             <p key={m}>{item.dropContent}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavServices;
