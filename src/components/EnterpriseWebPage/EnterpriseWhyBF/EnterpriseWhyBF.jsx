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
              Client satisfaction is the most vital element of our services, and
              so, we strictle adhere to agile principles to develop enterprise
              apps.
            </p>
          </div>
          <div>
            <h2>Cost-effective and Time Saving</h2>
            <p>
              With Matellio for enterprise app development, businesses can
              leverage services cost-effectively while saving time with expert
              resources.
            </p>
          </div>
          <div>
            <h2>Solutions that best fit your business</h2>
            <p>
              We brainstorm with you to understand the needs of your market and
              users to offer the most feasible solution that aligns with your
              market needs
            </p>
          </div>
          <div>
            <h2>Automate Processes</h2>
            <p>
              Cutting-edge enterprise apps to automate your business processes
              to enable rapidactions with minimal human intervention.
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
