import React from "react";
import "./SeoguestSection.css"
import guest from '../ImageSection/guest.jpg'
export default function SeoguestSection() {

    return (
        <div className="_SeoguestMain1">
            <div className="_Seoguestupperdiv1">

                <div className="_Seoguesttext" >
                    <img src={guest} />
                </div>

                <div className="_Seoguestform">

                    <div className="_Seoguestheading">
                        Guest Building
                    </div>

                    <p className="_Seoguestparagraph">
                        As a Guest building services company, we help brands create growth-driven guest building strategies. This enables brands to draw great backguests from high DA websites and reach the right audience. Increase your search engine ranking with our white hat guest building services via blogger outreach, resource guest building, brand mentions and infographic submission. Our guest building strategy can boost your website's overall SEO performance with our experts’ high-quality guest building.
                    </p>
                    <div className="_SeoguestPricing">
                        Check Guest SEO Pricing
                    </div>
                </div>
            </div>

        </div>

    )
}
