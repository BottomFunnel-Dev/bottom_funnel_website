import React from "react";
import "./SeoServices.css";
import { BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineAudit, AiOutlinePlusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons/lib";

export default function SeoLocalServices() {
  const [more, setmore] = useState(false);
  const [num, setnum] = useState();
  const [a, seta] = useState();

  const arr1 = [
    {
      servicename: "Local Seo Audits",
      icons: <BsSearch />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Google My Business Optimization & Management",
      icons: <IoLocationSharp />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Citation Audit and Cleanup Service",
      icons: <SiGoogleanalytics />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Local Map Search Optimization",
      icons: <ImLink />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Local Business Optimization for Multilocation",
      icons: <AiOutlineAudit />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Monthly Local Seo Reporting",
      icons: <FaShoppingCart />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  const handleTrigger = (i) => {
    console.log(i);
  };

  return (
    <div className="_Seoservicesmaindiv">
      <h2>OUR SERVICES INCLUDES</h2>
      <div className="_Seoservicesslider">
        {arr1.map((items, i) => {
          return (
            <div key={i} className=" _SeoServicesnames">
              <div className="frontServiceText">
                <IconContext.Provider value={{ className: "seoServicesIcon" }}>
                  {items.icons}
                </IconContext.Provider>
                <h4>{items.servicename}</h4>
              </div>

              <div className="hiddenSeo">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto, expedita molestias, suscipit natus itaque, maiores
                  officiis deleniti quaerat ducimus at animi ex. Quod harum
                  voluptatem eos dolore, a repellendus quis minus consequuntur
                  voluptatem eos dolore, a repellendus quis minus consequuntur
                </p>
              </div>

              <div
                onClick={(items, i) => {
                  handleTrigger(i);
                }}
                className="pointTrigger"
              >
                <IconContext.Provider value={{ className: "pluscircle" }}>
                  <AiOutlinePlusCircle />
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
