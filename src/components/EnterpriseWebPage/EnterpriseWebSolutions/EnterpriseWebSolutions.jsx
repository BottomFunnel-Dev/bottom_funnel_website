import React from "react";
import "./EnterpriseWebSolutions.css";

export const EnterpriseWebSolutions = () => {
  return (
    <div className="EnterpriseWebSolutions-container">
      <h1>
        <span>Enterprise</span> Development Solutions
      </h1>
      <div className="EnterpriseWebSolutions-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className="EnterpriseWebSolutions-main">
        <div className="EnterpriseWebSolutions-card">
          <div>
            <img
              src="Images/enterpriseWebPhotos/ux-design.png"
              alt="UX Design Logo"
            />
          </div>
          <h2>
            Web <span>UI/UX</span> Development
          </h2>
          <p>
            Our Team of web designs' enhance, shape and improve customer
            experience by developing customer-centric, user-friendly and
            intuitive web interfaces aligned with your organizations' business
            strategies and enterprise architecture.
          </p>
        </div>
        <div className="EnterpriseWebSolutions-card">
          <div>
            <img
              src="Images/enterpriseWebPhotos/app-development.png"
              alt="Custom Web Development Logo"
            />
          </div>
          <h2>
            Custom <span>Web</span> Development
          </h2>
          <p>
            We empower our clients to deliver better customer emperiences by
            providing highly scalable, secured and high-performance websites
            added with avant-grade features and functionalities using the latest
            technologies and frameworks.
          </p>
        </div>
        <div className="EnterpriseWebSolutions-card">
          <div>
            <img
              src="Images/enterpriseWebPhotos/saas.png"
              alt="SaaS Product Development Logo"
            />
          </div>
          <h2>
            <span>SaaS</span> Product Development
          </h2>
          <p>
            Get developed quick processing, scalable and custom software as a
            service SaaS product deverlopment services. With a strong
            development portfolio, we provide custom SaaS development with a
            rangeof solutions like SaaS CMS development, SaaS-based eCommerce
            solution.
          </p>
        </div>
        <div className="EnterpriseWebSolutions-card">
          <div>
            <img
              src="Images/enterpriseWebPhotos/e-payment.png"
              alt="eCommerce Development Logo"
            />
          </div>
          <h2>
            <span>eCommerce</span> Development
          </h2>
          <p>
            Launch your scalable, secured high-performance eCommerce store with
            our forte in engaging, customer-centric eCommerce website
            development services. Our offerings include custom eCommerce website
            design.
          </p>
        </div>
        <div className="EnterpriseWebSolutions-card">
          <div>
            <img
              src="Images/enterpriseWebPhotos/maintenance.png"
              alt="Support & Maintenance Logo"
            />
          </div>
          <h2>
            Support & <span>Maintenance</span>
          </h2>
          <p>
            To ensure that your web solutions remain operational at all times,
            our system developers experts assist you round the clock to maintain
            your software's optimum performance. We identify and take quick
            action to resolve issues immediately after they are reported.
          </p>
        </div>
        <div className="EnterpriseWebSolutions-request-quote">
          <h1>Want the best solutions for your enterprise</h1>
          <button>Request A Quote</button>
        </div>
      </div>
    </div>
  );
};
