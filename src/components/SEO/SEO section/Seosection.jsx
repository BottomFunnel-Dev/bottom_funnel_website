import React from "react";
import "./Seosection.css";

function Seosection() {
  return (
    <div className="_SeoMain1">
      <div className="contentSection">
        <div className="_Seotext">
          <h2>Professional SEO Services Company</h2>
          <h5>Rank Better. Increase Traffic. Achieve Better ROIs</h5>

          <p>
            We are a leading SEO Company that believes in human-first SEO
            strategies. Our SEO experts are known for curating legit and
            professional SEO services aligned with your brand. Our
            innovation-led approach has helped hundreds of our clients acquire a
            solid foothold and visibility of their business among Search
            Engines. We help your business to be discovered by the people and
            not just spiders From in-depth analysis of user and keyword trends
            to drafting killer strategies for your custom needs – we do it all.
            The only difference is – we as an affordable SEO Services company,
            do it in a much cooler way.
          </p>
          <button>Check the pricing</button>
        </div>

        <div className="_Seoform">
          <div className="_Seoformcontent">
            <h5>
              Want to kickstart your first SEO Campaign? no contracts, no
              commitments
            </h5>
            <div className="_Seoenterform">
              <label htmlFor="Name">Name</label>
              <input className="seoInput" type="text" placeholder="Name" />
              <label htmlFor="Email">Email</label>
              <input className="seoInput" type="text" placeholder="Email" />
              <label htmlFor="phone">Phone</label>
              <input className="seoInput" type="text" placeholder="Phone" />

              <label htmlFor="time">How soon do you want to start the project ?*</label>
              <select className="seoSelect" name="time">
                <option value="Within 8 weeks">Within 8 weeks</option>
                <option value="8 weeks">8 weeks</option>
              </select>
<label htmlFor="budget">Budget</label>
              <select className="seoSelect" name="time" label="budget">
                <option>select your budget</option>
                <option value="1000$ to 2000$">1000$ to 2000$</option>
                <option value="2000$ to 3000$">2000$ to 3000$</option>
              </select>
<label htmlFor="requirement">Requirement</label>
              <input
                className="seoInput"
                placeholder="Share Your Requirement"
                type="text"
              />

              <div className="_SeoSubmitbutton">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seosection;
