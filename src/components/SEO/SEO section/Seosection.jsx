import React from "react";
import "./Seosection.css"

function Seosection(){

    return (
        <div className="_SeoMain1">
            <div className="gifDenote">
                <img src="Images/seopages/1.gif" alt="" />
            </div>
            <div className="_Seoupperdiv">
                <div className="_Seotext" >
                    <div className="_Seoheading">Professional SEO Services Company</div>
                    <div className="_Seoheading">Rank Better. Increase Traffic. Achieve Better ROIs</div>

                    <p className="_Seoparagraph">We are a leading SEO Company that believes in human-first SEO strategies. Our SEO experts are known for curating legit and professional SEO services aligned with your brand. Our innovation-led approach has helped hundreds
                        of our clients acquire a solid foothold and visibility of their business among Search Engines.
                        We help your business to be discovered by the people and not just spiders
                        From in-depth analysis of user and keyword trends to drafting killer strategies for your custom needs – we do it all. The only difference is – we as an affordable SEO Services company, do it in a much cooler way.
                    </p>
                    <button className="_Seochkpricing">Check the pricing</button>
                </div>
                <div className="_Seoform">
                    <div className="_Seoformcontent">
                        <div className="_Seoformheading">
                            Want to kickstart your first SEO Campaign? no contracts, no commitments
                        </div>
                        <div className="_Seoenterform">
                            <input type="text" placeholder="Name" className="_seoforminput" /><br />
                            <input type="text" placeholder="Work email" className="_seoforminput" /><br />
                            <input type="text" placeholder="Phone" className="_seoforminput" /><br />
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
                            <input placeholder="Share Your Requirement" className="_seoforminput" type="text" /><br />
                            <div className="_SeoSubmitbutton">Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Seosection