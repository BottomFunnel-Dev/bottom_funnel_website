import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import "./SeoLocalSection.css";

export default function SeoLocalSection() {
  return (
    <div className="_SeoLocalMain1">
      <div className="localgifDenote">
        <img src="Images/seopages/Comp-5.gif" alt="" />
      </div>
      <div className="_SeoLocalupperdiv">
        <div className="_SeoLocaltext">
          <div className="_SeoLocalheading">Local SEO Services Company</div>

          <p className="_SeoLocalparagraph">
            Our local SEO services revolutionize your online presence so you can
            reach the right people with targeted traffic. We know how important
            it is to have a website that is search engine optimized and easy to
            navigate, so we work closely with our clients to ensure they're
            getting the results they want. Not only do our experts understand
            how search engines work, but they also know how to get your site on
            top of the rankings by implementing strategies that will help drive
            traffic and grow their business online.
          </p>
          <div className="_SeoLocalPricing">
            <button> Check Local SEO Pricing</button>
          </div>
        </div>
        {/* <div className="_SeoLocalform">
                    <div className="_SeoLocalformcontent">
                        <div className="_SeoLocalformheading">
                        Want to kickstart your first Local SEO Project?
                        </div>
                        <div className="_SeoLocalenterform">
                            <input type="text" placeholder="Name" className="_seoLocalforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoLocalforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoLocalforminput" /><br />
                            <label>How soon do you want to start the project ?*</label><br />
                            <select name="time">
                                <option value="Within 8 weeks">Within 8 weeks</option>
                                <option value="8 weeks">8 weeks</option>
                            </select><br />
                            <select name="time" label="budget">
                                <option>select your budget</option>
                                <option value="1000$ to 2000$">1000$ to 2000$</option>
                                <option value="2000$ to 3000$">2000$ to 3000$</option>
                            </select><br />
                            <input placeholder="Share Your Requirement" className="_seoLocalforminput" type="text" /><br />
                            <div className="_SeoLocalSubmitbutton"><button>Submit</button></div>
                        </div>
                    </div>
                </div> */}
        <SeoForm />
      </div>
    </div>
  );
}
