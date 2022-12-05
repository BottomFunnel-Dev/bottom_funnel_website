import React from "react";
import "./EnterpriseWhyBF.css";

export const EnterpriseWhyBF = () => {
  return (
    <div className="EnterpriseWhyBF-container">
      <h1>
        Why <span>Bottom Funnel</span> for Enterprise Web Solutions
      </h1>
      <div className="EnterpriseWebSolutions-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="EnterpriseWhyBF-main">
        <div className="EnterpriseWhyBF-content">
          <div>
            <h2>Agile Development Approach</h2>
            <p>
              Customer satisfaction is the most important factor of our service,
              which is why we adhere strictly to Agile principles to develop
              enterprise apps.
            </p>
          </div>
          <div>
            <h2>Cost-effective and Time Saving</h2>
            <p>
              With Bottom Funnel for enterprise application development allows
              companies to save time by leveraging expert resources while
              leveraging services in a cost-effective manner.
            </p>
          </div>
          <div>
            <h2>Solutions that best fit your business</h2>
            <p>
              Brainstorm to understand market and user needs in order to provide
              the most viable solutions that meet market needs.
            </p>
          </div>
          <div>
            <h2>Automate Processes</h2>
            <p>
              Leading enterprise apps that automate business processes and
              enable rapid action with minimal human intervention.
            </p>
          </div>
        </div>
        <div className="EnterpriseWhyBF-image">
          <img
            src="Images/enterpriseWebPhotos/whybottomfunnel.png"
            alt="Vector side logo"
          />
        </div>
      </div>
    </div>
  );
};
