import React from "react";
import "./SeoEmailSection.css"

export default function SeoEmailSection(){

    return (
        <div className="_SeoEmailMain1">
             <div className="emailgifDenote">
                <img src="Images/seopages/email.gif" alt="" />
            </div>
            <div className="_SeoEmailupperdiv">
                <div className="_SeoEmailtext" >
                    <div className="_SeoEmailheading">Email Management Services</div>
                  
                    <p className="_SeoEmailparagraph">
                    Our Search Engine Marketing Services start with in-depth keyword research along with Email campaign setup and optimization to deliver ROI-driven Email management services. Our Search Engine Marketing Company follows a brand-focused approach backed by seamless coordination and detailed reporting, thus helping your clients meet their paid search goals.
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
                            <input type="text" placeholder="Name" className="_seoEmailforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoEmailforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoEmailforminput" /><br />
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
                            <input placeholder="Share Your Requirement" className="_seoEmailforminput" type="text" /><br />
                            <div className="_SeoEmailSubmitbutton"><button>Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
