import React from "react";
import "./SeoSEMSection.css"

export default function SeoSEMSection(){

    return (
        <div className="_SeoSEMMain1">
             <div className="semgifDenote">
                <img src="Images/seopages/vec-2.gif" alt="" />
            </div>
            <div className="_SeoSEMupperdiv">
                <div className="_SeoSEMtext" >
                    <div className="_SeoSEMheading">Search Engine Marketing Agency</div>
                  
                    <p className="_SeoSEMparagraph">
                    Our Search Engine Marketing Services start with in-depth keyword research along with SEM campaign setup and optimization to deliver ROI-driven PPC management services. Our Search Engine Marketing Company follows a brand-focused approach backed by seamless coordination and detailed reporting, thus helping your clients meet their paid search goals.
                    </p>
                    <div className="_SeoSEMPricing">
                        Check SEM SEO Pricing
                    </div>
                </div>
                <div className="_SeoSEMform">
                    <div className="_SeoSEMformcontent">
                        <div className="_SeoSEMformheading">
                        Want to kickstart your first SEM SEO Project?
                        </div>
                        <div className="_SeoSEMenterform">
                            <input type="text" placeholder="Name" className="_seoSEMforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoSEMforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoSEMforminput" /><br />
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
                            <input placeholder="Share Your Requirement" className="_seoSEMforminput" type="text" /><br />
                            <div className="_SeoSEMSubmitbutton">Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
