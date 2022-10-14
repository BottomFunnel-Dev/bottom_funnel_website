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
      bg: "Images/ondemand/mobile.png",
      logoImgageOrange: "Images/ondemand/mobileAppOrange.png",
      logoImgageWhite: "Images/ondemand/mobileAppWhite.png",
      description:
        "Our mobility solutions allow people to connect and share information from the most remote of places, even if they're on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Software Solutions",
      bg: "Images/ondemand/webdev.png",

      logoImgageOrange: "Images/ondemand/softwareSolutionsOrange.png",
      logoImgageWhite: "Images/ondemand/softwareSolutionsWhite.png",
      description:
        "our software solutions allow you to perform all the time-consuming tasks and automate regular tasks to cater to your needs and make your life easier.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "UI UX Designs",
      bg: "Images/ondemand/uiuxdesign.png",
      logoImgageOrange: "Images/ondemand/uiOrange.png",
      logoImgageWhite: "Images/ondemand/uiWhite.png",
      description:
        "Our UI UX designs are designed to make interacting with products easy. We reduce cognitive load by making interfaces consistent.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Food Delivery App",
      bg: "Images/ondemand/fooddelivery.png",
      logoImgageOrange: "Images/ondemand/foodDeliveryOrange.png",
      logoImgageWhite: "Images/ondemand/foodDeliveryWhite.png",
      description:
        "With our branded food delivery app, your customers will be able to order and have delicious meals delivered to them at any time.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Beauty & Salon App",
      bg: "Images/ondemand/beauty.png",
      logoImgageOrange: "Images/ondemand/beautyOrange.png",
      logoImgageWhite: "Images/ondemand/beautyWhite.png",
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Marketplace App",
      bg: "Images/ondemand/marketplace.png",
      logoImgageOrange: "Images/ondemand/marketOrange.png",
      logoImgageWhite: "Images/ondemand/marketWhite.png",
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Cannabis Delivery App",
      bg: "Images/ondemand/cannabis.png",
      logoImgageOrange: "Images/ondemand/cannabisOrange.png",
      logoImgageWhite: "Images/ondemand/cannabisWhite.png",
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Digital Marketing Solutions",
      bg: "Images/ondemand/digitalmarketing.png",
      logoImgageOrange: "Images/ondemand/digitalOrange.png",
      logoImgageWhite: "Images/ondemand/digitalWhite.png",
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    {
      solutionName: "Pharmacy Delivery App",
      bg: "Images/ondemand/pharmacy.png",
      logoImgageOrange: "Images/ondemand/pharmacyorange.png",
      logoImgageWhite: "Images/ondemand/pharmacywhite.png",
      description:
        "Our mobility solutions allow mobile users to effectively develop, share or consume required information while on the move.",
      actionArrow: <BsArrowRight />,
    },
    { 
      solutionName: "Taxi Booking App",
      bg: "Images/ondemand/taxibooking.png",
      logoImgageOrange: "Images/ondemand/taxiorange.png",
      logoImgageWhite: "Images/ondemand/taxiwhite.png",
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
            <img className="solImage" src={item.bg} alt="" />
            <div className="solText">
              <div className="solLogos">
                <img
                  className="orangeImage"
                  src={item.logoImgageOrange}
                  alt=""
                />
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
