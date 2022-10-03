import React from "react";
import "./ondemandSection.css";
import { IconContext } from "react-icons/lib";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { NavItem } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const OndemandSection = () => {
  const ondemandSol = [
    {
      solutionName: "Mobile App Solution",
      logoImgageOrange:'Images/ondemand/mobileAppOrange.png',
      logoImgageWhite:'Images/ondemand/mobileAppWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Software Solutions",
      logoImgageOrange:'Images/ondemand/softwareSolutionsOrange.png',
      logoImgageWhite:'Images/ondemand/softwareSolutionsWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "UI UX Designs",
      logoImgageOrange:'Images/ondemand/uiOrange.png',
      logoImgageWhite:'Images/ondemand/uiWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Food Delivery App",
      logoImgageOrange:'Images/ondemand/foodDeliveryOrange.png',
      logoImgageWhite:'Images/ondemand/foodDeliveryWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Beauty & Salon App",
      logoImgageOrange:'Images/ondemand/beautyOrange.png',
      logoImgageWhite:'Images/ondemand/beautyWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Marketplace App",
      logoImgageOrange:'Images/ondemand/marketOrange.png',
      logoImgageWhite:'Images/ondemand/marketWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Cannabis Delivery App",
      logoImgageOrange:'Images/ondemand/cannabisOrange.png',
      logoImgageWhite:'Images/ondemand/cannabisWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Digital Marketing Solutions",
      logoImgageOrange:'Images/ondemand/digitalOrange.png',
      logoImgageWhite:'Images/ondemand/digitalWhite.png',
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
  ];
  return (
    <div className="ondemandSection">
      <h1>On-demand Solutions</h1>
      <div className="mainOndemand">
        {ondemandSol.map((item, index) => (
          <div key={index} className="ondemandInner">
            <img className="solImage" src="Images/profile2.jpg" alt="" />
            <div className="solText">
              <div className="solLogos">
               <img className="orangeImage" src={item.logoImgageOrange} alt="" />
               <img className="whiteImage" src={item.logoImgageWhite} alt="" />
              </div>
             
              <h4>{item.solutionName}</h4>
              <p>{item.description}</p>
              <IconContext.Provider value={{ className: "arrowIcon" }}>
                {item.actionArrow}
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OndemandSection;
