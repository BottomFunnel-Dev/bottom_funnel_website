import React from "react";
import "./SeoguestSection.css";

export default function SeoguestSection() {
  return (
    <div className="_SeoEmailMain1">
      <div className="emailgifDenote">
        <img src="Images/seopages/Comp-7.gif" alt="animated gif" />
      </div>
      <div className="_SeoEmailupperdiv">
        <div className="_SeoEmailtext">
          <div className="_SeoEmailheading">Guest Posting Services</div>

          <p className="_SeoEmailparagraph">
            We help brands to grow their business with guest blog posting
            services.We craft a well-researched and unique article that
            incorporates your website links and posts on targeted sites. Our
            guest blogging strategy can boost your brand visibility and traffic
            by quality content creation, outreach, and placement by our guest
            blogging experts.
          </p>
          <div className="_SeoEmailPricing">
            <button>Check Email SEO Pricing</button>
          </div>
        </div>
        <div className="_SeoEmailform">
          <div className="_SeoEmailformcontent">
            <div className="_SeoEmailformheading">
              Want to kickstart your first Email SEO Project?
            </div>
            <div className="_SeoEmailenterform">
              <input
                type="text"
                placeholder="Name"
                className="_seoEmailforminput"
              />
              <br />
              <input
                type="text"
                placeholder="Work email"
                className="_seoEmailforminput"
              />
              <br />
              <input
                type="text"
                placeholder="Phone"
                className="_seoEmailforminput"
              />
              <br />
              <label>How soon do you want to start the project ?*</label>
              <br />
              <select name="time">
                <option value="Within 8 weeks">Within 8 weeks</option>
                <option value="8 weeks">8 weeks</option>
              </select>
              <br />
              <select name="time" label="budget">
                <option>select your budget</option>
                <option value="1000$ to 2000$">1000$ to 2000$</option>
                <option value="2000$ to 3000$">2000$ to 3000$</option>
              </select>
              <br />
              <input
                placeholder="Share Your Requirement"
                className="_seoEmailforminput"
                type="text"
              />
              <br />
              <div className="_SeoEmailSubmitbutton">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
