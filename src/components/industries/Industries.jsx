import React from "react";
import "./industries.css";
import { IconContext } from "react-icons/lib";
import { BsArrowRight } from "react-icons/bs";
export const Industries = () => {
  const industries = [
    {
      industryName: "Education",
      description:
        "Whether you need an Online Tutoring Platform, One to One, or Classroom Solution, Get benefitted from OB Education App & Web Development Expertise.",
      industryImage: "Images/industries/education.png",
    },
    {
      industryName: "Health & Fitness",
      description:
        "You start building shapes and let our experts reshape your online structure and presentation, and get benefitted from our proven revenue-driven techniques. ",
      industryImage: "Images/industries/health.png",
    },
    {
      industryName: "Social Networking",
      description:
        "You make relations, and we make the place to deal it. Get a social networking app with most likely & AI-powered features and let rule the world. ",
      industryImage: "Images/industries/socialnetworking.png",
    },
    {
      industryName: "OTT & VOD",
      description:
        "Develop an advanced, future-proof OTT & VOD application with us. Our team of experts offers scalable, robust, real-time analytics solutions in low capital investment. ",
      industryImage: "Images/industries/ott.png",
    },
    {
      industryName: "Travel & Tourism",
      description:
        "Revolutionize the travel industry by building powerful web, app, and software solutions. It helps you manage the operations effectively while increasing employee efficiency. ",
      industryImage: "Images/industries/travel.png",
    },
    {
      industryName: "Transport",
      description:
        "Get rid of the traditional transportation system. You deliver cackle, and we provide your online solutions. Get a highly fueled online appearance with Owebest",
      industryImage: "Images/industries/transport.png",
    },
    {
      industryName: "E-Commerce",
      description:
        "Looking for an AI-Powered Single Vendor or Multivendor Online Store?. Get a fantastic E-Commerce Website and Mobile Application with the expert team of Owebest ",
      industryImage: "Images/industries/ecommerce.png",
    },
    {
      industryName: "Food & Grocery",
      description:
        "Let your customer order the food or grocery from neat & clean web & mobile applications. Owebest makes it delicious and offers the best user experience to your customers. ",
      industryImage: "Images/industries/grocery-cart.png",
    },
    {
      industryName: "Classified & Directory",
      description:
        "Let us create the future-ready classified and directory websites and mobile applications for you and allow peers and businesses to globalize themselves. ",
      industryImage: "Images/industries/classified.png",
    },
    {
      industryName: "Fintech",
      description:
        "Get the best robust, feature-rich, high-end Fin-tech solution for your financial system while covering modern-day aspects. ",
      industryImage: "Images/industries/fintech.png",
    },
  ];

  return (
    <div className="industries">
      <div className="industriesService">
        <div className="industriesText">
          <p className="headingIndustries">Industries</p>
          <h1>What we do best</h1>
          <p>
            Whether you are a real estate company, an educational group, fitness
            freak, event organizer, filmmaker, transporter or an online
            e-commerce; Bottom Funnel's hand are highly successful to design &
            develop your idea. Let's discuss your project and let us make it
            appealing.
          </p>
        </div>
        <div className="logoImage">
          <img src="Images/funnel.png" alt="" />
        </div>
      </div>

      <div className="providedServices">
        {industries.map((item, i) => (
          <div key={i}>
            <div className="industryImage">
              <img src={item.industryImage} alt="" />
            </div>
            <h5>{item.industryName}</h5>
            <p>{item.description}</p>

            <IconContext.Provider value={{ className: "industrySectionIcon" }}>
              <BsArrowRight />
            </IconContext.Provider>
          </div>
        ))}
      </div>
    </div>
  );
};
