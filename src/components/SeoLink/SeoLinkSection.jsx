import React from "react";
import "./SeoLinkSection.css"

export default function SeoLinkSection(){

    return (
        <div className="_SeoLinkMain1">
             <div className="gifDenote">
                <img src="Images/seopages/1.gif" alt="" />
            </div>
            <div className="_SeoLinkupperdiv">
                <div className="_SeoLinktext" >
                    <div className="_SeoLinkheading">Link Building Services Company</div>
                  
                    <p className="_SeoLinkparagraph">
                    As a link building services company, we help brands create growth-driven link building strategies. This enables brands to draw great backlinks from high DA websites and reach the right audience. Increase your search engine ranking with our white hat link building services via blogger outreach, resource link building, brand mentions and infographic submission. Our link building strategy can boost your website's overall SEO performance with our experts’ high-quality link building.
                    </p>
                    <div className="_SeoLinkPricing">
                        Check Link SEO Pricing
                    </div>
                </div>
                <div className="_SeoLinkform">
                    <div className="_SeoLinkformcontent">
                        <div className="_SeoLinkformheading">
                        Get in Touch
                        </div>
                        <div className="_SeoLinkenterform">
                            <input type="text" placeholder="Name" className="_seoLinkforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoLinkforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoLinkforminput" /><br />
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
                            <input placeholder="Share Your Requirement" className="_seoLinkforminput" type="text" /><br />
                            <div className="_SeoLinkSubmitbutton">Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
