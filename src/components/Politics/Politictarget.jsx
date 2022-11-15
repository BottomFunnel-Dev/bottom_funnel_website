import React from "react";
import "./Politictarget.css";
export default function Politictarget() {
  return (
    <div className="targetingdiv">
      <div className="targetingsub">
        <div className="sztargeting">
          <div className="sztargeting">
            <div className="sztargetingimage">
              <img src="Images/Politics/target.png" />
            </div>
            <div className="targetinghead">
              {" "}
              <h4>Our team of data scientists excels in targeting</h4>
            </div>
          </div>

          {/* /////paragraph////////// */}
        </div>
        <div className="targetpara">
          <p>
            Our team is made up of skilled experts who understand how digital
            marketing works, so we'll be able us quickly identify the best
            approach for reaching each group of voters. We'll also use tools
            like Looker and Google Analytics to track how your efforts are
            paying off, enabling us to make adjustments if necessary.
          </p>
        </div>

        <div className="sztargeting">
          <div className="sztargeting">
            <div className="sztargetingimage">
              <img src="Images/Politics/search.png" />
            </div>
            <div className="targetinghead">
              {" "}
              <h4>We are and so we understand constituents</h4>
            </div>
          </div>

          {/* /////paragraph////////// */}
        </div>
        <div className="targetpara">
          <p>
            With our comprehensive knowledge and expertise in politics, policy,
            and government contracting, we can partner with you to deliver a
            cutting-edge web application that will truly take your
            organization's voice worldwide. From legislative tracking and
            reporting, to social media presence and outreach efforts - we can
            help you elevate your organization's profile while building brand
            awareness at the same time.
          </p>
        </div>
      </div>
    </div>
  );
}
