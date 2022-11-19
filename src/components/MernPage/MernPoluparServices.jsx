import React from "react";
import "./mernPopularservices.css";
import { useState } from "react";
export const MernPoluparServices = ({ popularservice }) => {
  const [toggle, setToggle] = useState(0);

  const handletoggle = (ele) => {
    setToggle(ele);
  };
  console.log(toggle);
  console.log(popularservice);
  return (
    <div className="mernpopularservices">
      <h1>{popularservice.head}</h1>
      <div className="mernServices">
        <div className="mern-popular">
          {popularservice.services.map((item, index) => (
            <div
              onMouseEnter={() => {
                handletoggle(index);
              }}
              key={index}
              className="serviceContent"
              style={toggle===index? {background:"#34b0ca", borderRadius:"5px",color:"white"}:{background:"white"}}
            >
              <h4 className="h4Content">{item.serviceName}</h4>
            </div>
          ))}
        </div>
        

        <div className="serviceDescription">
          <div className="descriptionImage">
            <img src={popularservice.services[toggle].stackimg} alt="" />
          </div>
          <div className="stackContent">
            {popularservice.services[toggle].description}
          </div>
        </div>
      </div>
    </div>
  );
};
