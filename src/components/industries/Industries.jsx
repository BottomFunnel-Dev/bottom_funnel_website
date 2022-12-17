import React from "react";
import "./industries.css";
import { IconContext } from "react-icons/lib";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Industries = () => {
  const industries = [
    {
      industryName: "Education",
      description:
        "Get an Online Tutoring Platform that caters to all your tutoring needs. The One-to-One tutoring solution is perfect for individuals or groups. Your classroom solution will help you get more out of your lessons by providing a digital platform for you and your students.",
      industryImage: "Images/industries/education.png",
      link: "/education",
    },
    {
      industryName: "Health & Fitness",
      description:
        "Let's build a website designed for people who want to take control of their lives and their health.Shape your health and fitness website with our proven revenue driven techniques and online structures to help you reach your target audience.",
      industryImage: "Images/industries/health.png",
      link:"/wellness",
    },
    {
      industryName: "Social Networking",
      description:
        "We will build a platform that will help you better manage your relationships, by making sure that your website is optimized for user engagement, so that you can focus on what you do best building your business!",
      industryImage: "Images/industries/socialnetworking.png",
      link:"/Social-Media",
    },
    {
      industryName: "OTT & VOD",
      description:
        "Our OTT & VOD website development services enable you to develop a world-class, intuitive and user-friendly application which will manage your streaming data, grow your audience and monetize your content.",
      industryImage: "Images/industries/ott.png",
    },
    {
      industryName: "Travel & Tourism",
      description:
        "Let our skilled web developers and designers create a bespoke and customer-centric travel website for you that caters to the demands of both leisure and business travellers while also improving user experience by providing them with easy trip planning tools.",
      industryImage: "Images/industries/travel.png",
      link:"/travel",
    },
    {
      industryName: "Transport",
      description:
        "Get the best online transportation system in the market with Bottom Funnel. We provide you with a high-fuelled online appearance, transport solutions and digital marketing services that will help to promote your business.",
      industryImage: "Images/industries/transport.png",
      link:"/Logistics",
    },
    {
      industryName: "E-Commerce",
      description:
        "Stay ahead of the competition and build an e-commerce website that stands out from the rest. Our AI-Powered Single Vendor or Multivendor Online Store will help you increase sales and streamline your business.",
      industryImage: "Images/industries/ecommerce.png",
      link:"/ecommerce",
    },
    {
      industryName: "Food & Grocery",
      description:
        "Let us build a web and mobile application for your food and grocery business. Keep it fresh and delicious for your users with our attention to detail and experience in the food and grocery industry.",
      industryImage: "Images/industries/grocery-cart.png",
      link:"/food-delivery",
    },
    {
      industryName: "Classified & Directory",
      description:
        "Connect with millions of people around the world. Increase brand awareness and reach with a global classified and directory website that is future-ready, compliant with all legal requirements, and easy to use.",
      industryImage: "Images/industries/classified.png",
    },
    {
      industryName: "Fintech",
      description:
        "We offer a wide range of fintech solutions that are tailored to your needs. We use latest technologies to build the most comprehensive solution for your financial system. Let us build a fintech website for your company.",
      industryImage: "Images/industries/fintech.png",
      link:"/Fintech-solution",
    },
  ];

  return (
    <div className="industries">
      <div className="industriesService">
        <div className="industriesText">
          <p className="headingIndustries">Industries</p>
          <h1>What we do best</h1>
          <p>
            Bottom Funnel provides a variety of IT services to meet variety of
            business needs, so whether you need a website or a bespoke
            application, we're here to help your business grow. Let's discuss
            your project and let us make it come alive!
          </p>
        </div>
        <div className="logoImage">
          <img src="Images/funnel.png" alt="" />
        </div>
      </div>


      <div className="providedServices">
        {industries.map((item, i) => (
          <div key={i}>
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <div className="industryImage">
                <img src={item.industryImage} alt="" />
              </div>
              <h5 style={{color:"#ef4c23",marginTop:"50px"}}>{item.industryName}</h5>
              <p style={{color:"#393939"}}>{item.description}</p>

              <IconContext.Provider value={{ className: "industrySectionIcon" }}>
                <BsArrowRight />
              </IconContext.Provider>
            </Link>
          </div>
        ))}
      </div>
    </div >
  );
};
