import React from "react";
import "./CustomisedWebServices.css";

export const CustomisedWebServices = () => {
  return (
    <div className="CustomisedWebServices-container">
      <div className="CustomisedWebServices-heading">
        <h1>
          Custom <span>web development</span> services
        </h1>
        <div className="CustomisedWebServices-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
      </div>
      <div className="CustomisedWebServices-main">
        <div className="CustomisedWebServices-frontend">
          <div className="CustomisedWebServices-frontend-content">
            <h2>Front End Development</h2>
            <p>
              Evolve Web Development is the go-to company for all things web. We
              have years of experience and expertise, and we're ready to help
              you turn your idea into a reality. From front-end designs to
              back-end technologies, our team has everything it takes to create
              a functional solution that will stand the test of time. We believe
              in working as a team, so we'll be there every step of the way from
              brainstorming ideas to creating a functional solution that will
              last.
            </p>
          </div>
          <div className="CustomisedWebServices-frontend-image">
            <img
              src="Images/customWebPhotos/desktop-man.png"
              alt="Frontend Development"
            />
          </div>
        </div>
        <div className="CustomisedWebServices-backend">
          <div className="CustomisedWebServices-backend-image">
            <img
              src="Images/customWebPhotos/laptop-man.png"
              alt="backend Development"
            />
          </div>
          <div className="CustomisedWebServices-backend-content">
            <h2>Front End Development</h2>
            <p>
              Bottom Funnel is the go-to company for web programming for small
              businesses and individuals. We understand that your website is
              your business's most important asset, so it's crucial that we
              provide a top-quality service that will help you achieve your
              goals. With our team of experienced developers, we can work
              quickly to bring your ideas to life, so you can get back to what
              really matters - running your business! This customization allows
              you to integrate your in-house data systems, keep your data in
              sync and add dynamic content and flexibility. They make sure that
              your data stays in sync, and makes your website easy to update.
              Why don't you upgrade your backend code with a bottom funnel?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
