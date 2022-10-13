import React from "react";
import "./SeoLocalSection.css"

export default function SeoLocalSection(){

    return (
        <div className="_SeoLocalMain1">
            {/* <div className="localgifDenote">
                <img src="Images/seopages/3.gif" alt="" />
            </div> */}
            <div className="_SeoLocalupperdiv">
                <div className="_SeoLocaltext" >
                    <div className="_SeoLocalheading">Local SEO Services Company</div>
                  
                    <p className="_SeoLocalparagraph">
                        As a leading Local SEO Company, we bring together the innovation-led approach and Search Engine Friendly practices to help your local business reach and be found by your target users. Our team of Local SEO Experts ensure that your business gains visibility, drives more customers and ultimately revenue.
                    </p>
                    <div className="_SeoLocalPricing">
                        Check Local SEO Pricing
                    </div>
                </div>
                <div className="_SeoLocalform">
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
                            <div className="_SeoLocalSubmitbutton">Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
