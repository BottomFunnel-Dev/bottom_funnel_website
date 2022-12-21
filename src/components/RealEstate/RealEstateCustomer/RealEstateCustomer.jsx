import React, { useState } from "react";
import './RealEstateCustomer.css';


  
export default function RealEstateCustomer({ consumerdata }) {
    const [active, setActive] = useState(0);
    return (
      <div className="plantBasedDeliver">
        <h1>{consumerdata.sectionTitle}</h1>
        <div className="plantBasedDeliversub">
          <div className="plantBasedDeliverright">
            {consumerdata.consumerdata.map(({ title, icon, para }, idx) => {
              return (
                <div
                  key={title}
                  onMouseOver={() => setActive(idx)}
                  className={`plantBasedDeliverApp-box-${idx}`}
                >
                  <div className="plantBasedDeliverApp-logo">
                    <img src={icon.src} alt={icon.alt} />
                  </div>
                  <h3>{title}</h3>
                  <p>{para}</p>
                </div>
              );
            })}
          </div>
  
          <div
            className="plantBasedDeliverleft"
            style={{
              background: `url(${consumerdata.background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="plantBasedDeliverApp-customer-image">
              <img
                src={consumerdata.consumerdata[active].img.src}
                alt={consumerdata.consumerdata[active].img.alt}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
