import React from "react";
import "./SeoPPCSection.css"

export default function SeoPPCSection(){

    return (
        <div className="_SeoPPCMain1">
            <div className="_SeoPPCupperdiv">
                <div className="_SeoPPCtext" >
                    <div className="_SeoPPCheading">PPC Management Services</div>
                  
                    <p className="_SeoPPCparagraph">
                    Our Search Engine Marketing Services start with in-depth keyword research along with PPC campaign setup and optimization to deliver ROI-driven PPC management services. Our Search Engine Marketing Company follows a brand-focused approach backed by seamless coordination and detailed reporting, thus helping your clients meet their paid search goals.
                    </p>
                    <div className="_SeoPPCPricing">
                        Check PPC SEO Pricing
                    </div>
                </div>
                <div className="_SeoPPCform">
                    <div className="_SeoPPCformcontent">
                        <div className="_SeoPPCformheading">
                        Want to kickstart your first PPC SEO Project?
                        </div>
                        <div className="_SeoPPCenterform">
                            <input type="text" placeholder="Name" className="_seoPPCforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoPPCforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoPPCforminput" /><br />
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
                            <input placeholder="Share Your Requirement" className="_seoPPCforminput" type="text" /><br />
                            <div className="_SeoPPCSubmitbutton">Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
